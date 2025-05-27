'use client'

import { supabase } from '@/lib/supabaseClient'
import { useEffect, useState } from 'react'


type Contact = {
  id: number
  name: string
  email: string
  created_at: string
}

export default function ContactsList() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadContacts() {
      const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching contacts:', error.message)
      } else {
        setContacts(data || [])
      }

      setLoading(false)
    }

    loadContacts()
  }, [])

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Contact List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <ul className="space-y-2">
          {contacts.map((contact) => (
            <li key={contact.id} className="border p-2 rounded shadow">
              <strong>{contact.name}</strong> – {contact.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
