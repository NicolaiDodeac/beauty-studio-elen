"use client"

import { supabase } from "@/lib/supabaseClient"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { format, addDays, isBefore, isSameDay, startOfWeek } from "date-fns"
import { ChevronLeft, ChevronRight, CalendarIcon, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ServiceSelection from "./service-selection"
import ClientInfoForm from "./client-info-form"
import PaymentOptions from "./payment-options"

// Define available time slots
const MORNING_SLOTS = ["9:00", "10:00", "11:00"]
const AFTERNOON_SLOTS = ["13:00", "14:00", "15:00", "16:00", "17:00"]

// Mock data for unavailable slots (in a real app, this would come from a database)
const UNAVAILABLE_SLOTS = [
  { date: new Date(2025, 4, 15), time: "10:00" },
  { date: new Date(2025, 4, 15), time: "14:00" },
  { date: new Date(2025, 4, 16), time: "9:00" },
  { date: new Date(2025, 4, 17), time: "15:00" },
]

export default function BookingCalendar() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedService, setSelectedService] = useState<string>("")
  const [selectedServiceName, setSelectedServiceName] = useState<string>("")
  const [selectedServicePrice, setSelectedServicePrice] = useState<number>(0)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [currentWeekStart, setCurrentWeekStart] = useState<Date>(startOfWeek(new Date(), { weekStartsOn: 1 }))
  const [clientInfo, setClientInfo] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  })
  const [paymentMethod, setPaymentMethod] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Generate dates for the current week view
  const weekDates = Array.from({ length: 7 }, (_, i) => addDays(currentWeekStart, i))

  // Check if a date is in the past
  const isPastDate = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return isBefore(date, today)
  }

  // Check if a time slot is available
  const isTimeSlotAvailable = (date: Date, time: string) => {
    return !UNAVAILABLE_SLOTS.some((slot) => isSameDay(slot.date, date) && slot.time === time)
  }

  // Handle date selection
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
    setSelectedTime(null)
  }

  // Handle time selection
  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
  }

  // Navigate to previous week
  const goToPreviousWeek = () => {
    const prevWeek = addDays(currentWeekStart, -7)
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    // Don't allow navigating to past weeks
    if (!isBefore(prevWeek, today)) {
      setCurrentWeekStart(prevWeek)
    }
  }

  // Navigate to next week
  const goToNextWeek = () => {
    setCurrentWeekStart(addDays(currentWeekStart, 7))
  }

  // Handle service selection
  const handleServiceSelect = (serviceId: string, serviceName: string, servicePrice: number) => {
    setSelectedService(serviceId)
    setSelectedServiceName(serviceName)
    setSelectedServicePrice(servicePrice)
  }

  // Handle client info update
  const handleClientInfoChange = (field: string, value: string) => {
    setClientInfo((prev) => ({ ...prev, [field]: value }))
  }

  // Handle payment method selection
  const handlePaymentMethodSelect = (method: string) => {
    setPaymentMethod(method)
  }

  // Handle form submission
  const handleSubmit = async () => {
    setIsSubmitting(true)

    try {
      // 1. First create the booking in Supabase
      const bookingData = {
        name: clientInfo.name,
        email: clientInfo.email,
        phone: clientInfo.phone,
        notes: clientInfo.notes,
        service: selectedServiceName,
        price: selectedServicePrice,
        date: selectedDate?.toISOString().split("T")[0],
        time: selectedTime,
        payment: paymentMethod,
        payment_status: "pending",
      };

      console.log("📦 Sending booking to Supabase:", bookingData);

      const { data, error } = await supabase
        .from("bookings")
        .insert(bookingData)
        .select("id")
        .single();
      
      if (error) {
        console.error("❌ Supabase insert error:", error);
        throw new Error(error.message || "Failed to create booking");
      }

      if (!data || !data.id) {
        throw new Error("No booking ID returned");
      }

      // 2. Create Stripe checkout session
      const res = await fetch("/api/checkout/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ booking_id: data.id }),
      });

      if (!res.ok) {
        throw new Error("Failed to create Stripe session");
      }

      const result = await res.json();
      
      if (!result.url) {
        throw new Error("No Stripe checkout URL returned");
      }

      // 3. Redirect to Stripe Checkout
      window.location.href = result.url;
    } catch (error) {
      console.error("Booking error:", error);
      alert("Booking failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  // Go to next step
  const nextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  // Go to previous step
  const prevStep = () => {
    setCurrentStep(currentStep - 1)
  }

  // Check if current step is complete
  const isStepComplete = () => {
    switch (currentStep) {
      case 1:
        return !!selectedService
      case 2:
        return !!selectedDate && !!selectedTime
      case 3:
        return !!clientInfo.name && !!clientInfo.email && !!clientInfo.phone
      case 4:
        return !!paymentMethod
      default:
        return false
    }
  }

  return (
    <Card className="border-0 shadow-md">
      <CardHeader className="bg-[#F8F5F2] border-b">
        <CardTitle className="text-xl font-heading">Book Your Appointment</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <Tabs defaultValue="1" value={currentStep.toString()} className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger
              value="1"
              className={`data-[state=active]:bg-[#E0D4C8] data-[state=active]:text-gray-800`}
              onClick={() => currentStep > 1 && setCurrentStep(1)}
            >
              1. Service
            </TabsTrigger>
            <TabsTrigger
              value="2"
              className={`data-[state=active]:bg-[#E0D4C8] data-[state=active]:text-gray-800`}
              disabled={currentStep < 2}
              onClick={() => currentStep > 2 && setCurrentStep(2)}
            >
              2. Date & Time
            </TabsTrigger>
            <TabsTrigger
              value="3"
              className={`data-[state=active]:bg-[#E0D4C8] data-[state=active]:text-gray-800`}
              disabled={currentStep < 3}
              onClick={() => currentStep > 3 && setCurrentStep(3)}
            >
              3. Your Details
            </TabsTrigger>
            <TabsTrigger
              value="4"
              className={`data-[state=active]:bg-[#E0D4C8] data-[state=active]:text-gray-800`}
              disabled={currentStep < 4}
            >
              4. Payment
            </TabsTrigger>
          </TabsList>

          <TabsContent value="1" className="mt-0">
            <ServiceSelection selectedService={selectedService} onSelectService={handleServiceSelect} />
          </TabsContent>

          <TabsContent value="2" className="mt-0">
            <div className="space-y-6">
              {/* Calendar Navigation */}
              <div className="flex items-center justify-between mb-4">
                <Button variant="outline" size="sm" onClick={goToPreviousWeek} className="flex items-center gap-1">
                  <ChevronLeft className="h-4 w-4" />
                  Previous Week
                </Button>
                <div className="text-sm font-medium">
                  {format(currentWeekStart, "MMMM d")} - {format(addDays(currentWeekStart, 6), "MMMM d, yyyy")}
                </div>
                <Button variant="outline" size="sm" onClick={goToNextWeek} className="flex items-center gap-1">
                  Next Week
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7 gap-1">
                {weekDates.map((date) => {
                  const isDisabled = isPastDate(date)
                  const isSelected = selectedDate && isSameDay(date, selectedDate)

                  return (
                    <div key={date.toString()} className="text-center">
                      <div className="text-xs font-medium mb-1">{format(date, "EEE")}</div>
                      <button
                        className={`w-full aspect-square rounded-full flex items-center justify-center text-sm
                          ${
                            isDisabled
                              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                              : isSelected
                                ? "bg-[#E0D4C8] text-gray-800"
                                : "hover:bg-[#F8F5F2]"
                          }`}
                        disabled={isDisabled}
                        onClick={() => handleDateSelect(date)}
                      >
                        {format(date, "d")}
                      </button>
                    </div>
                  )
                })}
              </div>

              {/* Time Slots */}
              {selectedDate && (
                <div className="mt-6">
                  <div className="flex items-center gap-2 mb-3">
                    <CalendarIcon className="h-4 w-4 text-amber-600" />
                    <h3 className="font-medium">{format(selectedDate, "EEEE, MMMM d, yyyy")}</h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-2 flex items-center">
                        <Clock className="h-3 w-3 mr-1" /> Morning
                      </h4>
                      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                        {MORNING_SLOTS.map((time) => {
                          const isAvailable = isTimeSlotAvailable(selectedDate, time)
                          const isSelected = selectedTime === time

                          return (
                            <button
                              key={time}
                              className={`py-2 px-3 text-sm rounded-md
                                ${
                                  !isAvailable
                                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                    : isSelected
                                      ? "bg-[#E0D4C8] text-gray-800"
                                      : "bg-white border hover:bg-[#F8F5F2]"
                                }`}
                              disabled={!isAvailable}
                              onClick={() => handleTimeSelect(time)}
                            >
                              {time}
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-2 flex items-center">
                        <Clock className="h-3 w-3 mr-1" /> Afternoon
                      </h4>
                      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                        {AFTERNOON_SLOTS.map((time) => {
                          const isAvailable = isTimeSlotAvailable(selectedDate, time)
                          const isSelected = selectedTime === time

                          return (
                            <button
                              key={time}
                              className={`py-2 px-3 text-sm rounded-md
                                ${
                                  !isAvailable
                                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                    : isSelected
                                      ? "bg-[#E0D4C8] text-gray-800"
                                      : "bg-white border hover:bg-[#F8F5F2]"
                                }`}
                              disabled={!isAvailable}
                              onClick={() => handleTimeSelect(time)}
                            >
                              {time}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="3" className="mt-0">
            <ClientInfoForm
              clientInfo={clientInfo}
              onChange={handleClientInfoChange}
              selectedService={selectedServiceName}
              selectedDate={selectedDate ? format(selectedDate, "EEEE, MMMM d, yyyy") : ""}
              selectedTime={selectedTime || ""}
            />
          </TabsContent>

          <TabsContent value="4" className="mt-0">
            <PaymentOptions
              selectedPaymentMethod={paymentMethod}
              onSelectPaymentMethod={handlePaymentMethodSelect}
              depositAmount={50}
              servicePrice={selectedServicePrice}
              serviceName={selectedServiceName}
              selectedDate={selectedDate ? format(selectedDate, "EEEE, MMMM d, yyyy") : ""}
              selectedTime={selectedTime || ""}
            />
          </TabsContent>
        </Tabs>
      </CardContent>

      <CardFooter className="flex justify-between border-t p-6 bg-[#F8F5F2]">
        {currentStep > 1 ? (
          <Button variant="outline" onClick={prevStep} disabled={isSubmitting}>
            Back
          </Button>
        ) : (
          <div></div>
        )}

        {currentStep < 4 ? (
          <Button
            onClick={nextStep}
            disabled={!isStepComplete()}
            className="bg-[#E0D4C8] hover:bg-[#D0C4B8] text-gray-800"
          >
            Continue
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            disabled={!isStepComplete() || isSubmitting}
            className="bg-[#E0D4C8] hover:bg-[#D0C4B8] text-gray-800"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing Payment...
              </>
            ) : (
              "Complete Booking"
            )}
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
