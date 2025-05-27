'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        reset();
        alert('Booking submitted successfully!');
      } else {
        throw new Error('Failed to submit booking');
      }
    } catch (error) {
      alert('Error submitting booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto p-6">
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          {...register('clientName', { required: true })}
          className="w-full p-2 border rounded"
          type="text"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          {...register('email', { required: true })}
          className="w-full p-2 border rounded"
          type="email"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Phone</label>
        <input
          {...register('phone')}
          className="w-full p-2 border rounded"
          type="tel"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Service</label>
        <select
          {...register('service', { required: true })}
          className="w-full p-2 border rounded"
        >
          <option value="">Select a service</option>
          <option value="eyelash-extensions">Eyelash Extensions</option>
          <option value="semi-permanent-makeup">Semi-Permanent Makeup</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Date</label>
        <input
          {...register('date', { required: true })}
          className="w-full p-2 border rounded"
          type="datetime-local"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {isSubmitting ? 'Submitting...' : 'Book Appointment'}
      </button>
    </form>
  );
} 