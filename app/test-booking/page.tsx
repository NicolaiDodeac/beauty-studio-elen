'use client';

import { useState } from 'react';

export default function TestBookingPage() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      clientName: formData.get('clientName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      date: formData.get('date'),
    };

    try {
      const response = await fetch('/api/test-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setResult(result);
    } catch (error) {
      setResult({ success: false, message: 'Error submitting form' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Test Booking Form</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            name="clientName"
            type="text"
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            name="email"
            type="email"
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input
            name="phone"
            type="tel"
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Service</label>
          <select
            name="service"
            required
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
            name="date"
            type="datetime-local"
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Submitting...' : 'Create Test Booking'}
        </button>
      </form>

      {result && (
        <div className="mt-6 p-4 border rounded">
          <h2 className="font-bold mb-2">Result:</h2>
          <pre className="whitespace-pre-wrap">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
} 