"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { PlusCircle, Save, Trash2, Edit } from "lucide-react"

// Mock data for services
const initialServices = [
  {
    id: 1,
    name: "Eyebrows",
    category: "Permanent Makeup",
    price: 350,
    duration: 120,
    description: "Microblading or powder brows",
  },
  {
    id: 2,
    name: "Ombre Brows",
    category: "Permanent Makeup",
    price: 380,
    duration: 120,
    description: "Soft, powdered effect",
  },
  {
    id: 3,
    name: "Eyeliner",
    category: "Permanent Makeup",
    price: 250,
    duration: 90,
    description: "Upper or lower lash line enhancement",
  },
  {
    id: 4,
    name: "Classic Set",
    category: "Eyelash Extensions",
    price: 120,
    duration: 90,
    description: "1:1 lash application for a natural look",
  },
  {
    id: 5,
    name: "Volume Set",
    category: "Eyelash Extensions",
    price: 180,
    duration: 120,
    description: "Multiple extensions per natural lash for fullness",
  },
]

export default function ServicesSettings() {
  const [services, setServices] = useState(initialServices)
  const [editingService, setEditingService] = useState<any>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleAddService = () => {
    setEditingService({
      id: Date.now(),
      name: "",
      category: "",
      price: 0,
      duration: 60,
      description: "",
    })
  }

  const handleEditService = (service: any) => {
    setEditingService({ ...service })
  }

  const handleDeleteService = (id: number) => {
    setServices(services.filter((service) => service.id !== id))
  }

  const handleSaveService = () => {
    if (!editingService) return

    const existingIndex = services.findIndex((s) => s.id === editingService.id)
    if (existingIndex >= 0) {
      // Update existing service
      const updatedServices = [...services]
      updatedServices[existingIndex] = editingService
      setServices(updatedServices)
    } else {
      // Add new service
      setServices([...services, editingService])
    }
    setEditingService(null)
  }

  const handleCancelEdit = () => {
    setEditingService(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In a real app, this would be an API call to save all services
      await new Promise((resolve) => setTimeout(resolve, 1500))
      // Show success message
    } catch (error) {
      console.error("Error saving services:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Services</CardTitle>
            <CardDescription>Manage your service offerings and pricing</CardDescription>
          </div>
          <Button onClick={handleAddService} className="bg-pink-600 hover:bg-pink-700">
            <PlusCircle className="h-4 w-4 mr-2" />
            Add Service
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {editingService ? (
          <div className="border p-4 rounded-md mb-6">
            <h3 className="font-medium mb-4">{editingService.id in services ? "Edit Service" : "Add New Service"}</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="service-name">Service Name</Label>
                  <Input
                    id="service-name"
                    value={editingService.name}
                    onChange={(e) => setEditingService({ ...editingService, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service-category">Category</Label>
                  <Input
                    id="service-category"
                    value={editingService.category}
                    onChange={(e) => setEditingService({ ...editingService, category: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="service-price">Price (£)</Label>
                  <Input
                    id="service-price"
                    type="number"
                    min="0"
                    value={editingService.price}
                    onChange={(e) =>
                      setEditingService({ ...editingService, price: Number.parseInt(e.target.value) || 0 })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service-duration">Duration (minutes)</Label>
                  <Input
                    id="service-duration"
                    type="number"
                    min="15"
                    step="15"
                    value={editingService.duration}
                    onChange={(e) =>
                      setEditingService({ ...editingService, duration: Number.parseInt(e.target.value) || 60 })
                    }
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="service-description">Description</Label>
                <Textarea
                  id="service-description"
                  value={editingService.description}
                  onChange={(e) => setEditingService({ ...editingService, description: e.target.value })}
                  rows={2}
                />
              </div>

              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={handleCancelEdit}>
                  Cancel
                </Button>
                <Button onClick={handleSaveService} className="bg-pink-600 hover:bg-pink-700">
                  Save Service
                </Button>
              </div>
            </div>
          </div>
        ) : null}

        <div className="space-y-4">
          {services.length === 0 ? (
            <p className="text-center py-8 text-gray-500">No services added yet. Click "Add Service" to get started.</p>
          ) : (
            services.map((service) => (
              <div key={service.id} className="flex justify-between items-center p-4 border rounded-md">
                <div>
                  <h3 className="font-medium">{service.name}</h3>
                  <p className="text-sm text-gray-500">{service.category}</p>
                  <p className="text-sm">{service.description}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">£{service.price}</p>
                  <p className="text-sm text-gray-500">{service.duration} min</p>
                  <div className="flex space-x-2 mt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEditService(service)}
                      className="h-8 w-8 p-0"
                    >
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeleteService(service.id)}
                      className="h-8 w-8 p-0 text-red-500 hover:text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          type="submit"
          onClick={handleSubmit}
          disabled={isSubmitting || editingService !== null}
          className="bg-pink-600 hover:bg-pink-700"
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
              Saving...
            </>
          ) : (
            <>
              <Save className="h-4 w-4 mr-2" />
              Save All Changes
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
