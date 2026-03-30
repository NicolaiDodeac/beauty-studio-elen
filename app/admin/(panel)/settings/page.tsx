import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GeneralSettings from "@/components/admin/settings/general-settings"
import BusinessHoursSettings from "@/components/admin/settings/business-hours-settings"
import ServicesSettings from "@/components/admin/settings/services-settings"
import UserSettings from "@/components/admin/settings/user-settings"

export const metadata = {
  title: "Settings | Admin Dashboard",
  description: "Manage settings for Elen.MakeUp.Telford",
}

export default function AdminSettingsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="business-hours">Business Hours</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <GeneralSettings />
        </TabsContent>

        <TabsContent value="business-hours" className="space-y-4">
          <BusinessHoursSettings />
        </TabsContent>

        <TabsContent value="services" className="space-y-4">
          <ServicesSettings />
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <UserSettings />
        </TabsContent>
      </Tabs>
    </div>
  )
}
