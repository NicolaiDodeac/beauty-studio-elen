"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Save, Trash2, Edit, UserPlus } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for users
const initialUsers = [
  {
    id: 1,
    name: "Elen",
    email: "elen@elenmakeup.com",
    role: "admin",
    lastLogin: "Today at 9:30 AM",
  },
  {
    id: 2,
    name: "Sarah",
    email: "sarah@elenmakeup.com",
    role: "staff",
    lastLogin: "Yesterday at 4:15 PM",
  },
]

export default function UserSettings() {
  const [users, setUsers] = useState(initialUsers)
  const [editingUser, setEditingUser] = useState<any>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleAddUser = () => {
    setEditingUser({
      id: Date.now(),
      name: "",
      email: "",
      role: "staff",
      lastLogin: "Never",
    })
  }

  const handleEditUser = (user: any) => {
    setEditingUser({ ...user })
  }

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  const handleSaveUser = () => {
    if (!editingUser) return

    const existingIndex = users.findIndex((u) => u.id === editingUser.id)
    if (existingIndex >= 0) {
      // Update existing user
      const updatedUsers = [...users]
      updatedUsers[existingIndex] = editingUser
      setUsers(updatedUsers)
    } else {
      // Add new user
      setUsers([...users, editingUser])
    }
    setEditingUser(null)
  }

  const handleCancelEdit = () => {
    setEditingUser(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In a real app, this would be an API call to save all users
      await new Promise((resolve) => setTimeout(resolve, 1500))
      // Show success message
    } catch (error) {
      console.error("Error saving users:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>User Management</CardTitle>
            <CardDescription>Manage user accounts and permissions</CardDescription>
          </div>
          <Button onClick={handleAddUser} className="bg-pink-600 hover:bg-pink-700">
            <UserPlus className="h-4 w-4 mr-2" />
            Add User
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {editingUser ? (
          <div className="border p-4 rounded-md mb-6">
            <h3 className="font-medium mb-4">{editingUser.id in users ? "Edit User" : "Add New User"}</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="user-name">Name</Label>
                  <Input
                    id="user-name"
                    value={editingUser.name}
                    onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="user-email">Email</Label>
                  <Input
                    id="user-email"
                    type="email"
                    value={editingUser.email}
                    onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="user-role">Role</Label>
                <Select
                  value={editingUser.role}
                  onValueChange={(value) => setEditingUser({ ...editingUser, role: value })}
                >
                  <SelectTrigger id="user-role">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="staff">Staff</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={handleCancelEdit}>
                  Cancel
                </Button>
                <Button onClick={handleSaveUser} className="bg-pink-600 hover:bg-pink-700">
                  Save User
                </Button>
              </div>
            </div>
          </div>
        ) : null}

        <div className="space-y-4">
          {users.length === 0 ? (
            <p className="text-center py-8 text-gray-500">No users added yet. Click "Add User" to get started.</p>
          ) : (
            users.map((user) => (
              <div key={user.id} className="flex justify-between items-center p-4 border rounded-md">
                <div>
                  <h3 className="font-medium">{user.name}</h3>
                  <p className="text-sm">{user.email}</p>
                  <p className="text-xs text-gray-500">Last login: {user.lastLogin}</p>
                </div>
                <div className="text-right">
                  <span
                    className={`inline-block px-2 py-1 text-xs rounded-full ${
                      user.role === "admin" ? "bg-purple-100 text-purple-800" : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {user.role}
                  </span>
                  <div className="flex space-x-2 mt-2">
                    <Button variant="outline" size="sm" onClick={() => handleEditUser(user)} className="h-8 w-8 p-0">
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    {user.id !== 1 && ( // Prevent deleting the main admin
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteUser(user.id)}
                        className="h-8 w-8 p-0 text-red-500 hover:text-red-600"
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    )}
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
          disabled={isSubmitting || editingUser !== null}
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
