import { useState } from "react";
import { LayoutGrid, Users, Footprints, Wallet, BadgeDollarSign, LineChart as LineChartIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { DashboardShell, type NavItem } from "@/components/dashboard/DashboardShell";
import { OwnerOverview } from "@/components/dashboard/owner/OwnerOverview";
import { OwnerMembers } from "@/components/dashboard/owner/OwnerMembers";
import { OwnerAttendance } from "@/components/dashboard/owner/OwnerAttendance";
import { OwnerFinance } from "@/components/dashboard/owner/OwnerFinance";
import { OwnerStaff } from "@/components/dashboard/owner/OwnerStaff";
import { OwnerAnalytics } from "@/components/dashboard/owner/OwnerAnalytics";
import { currentOwner } from "@/lib/mockData";

const navItems: NavItem[] = [
  { key: "overview", label: "Overview", icon: LayoutGrid },
  { key: "members", label: "Members", icon: Users },
  { key: "attendance", label: "Attendance", icon: Footprints },
  { key: "finance", label: "Finance", icon: Wallet },
  { key: "staff", label: "Staff & Costs", icon: BadgeDollarSign },
  { key: "analytics", label: "Analytics", icon: LineChartIcon },
];

const titles: Record<string, { title: string; subtitle: string }> = {
  overview: { title: "Business Overview", subtitle: "Everything happening at Forge Fitness, today" },
  members: { title: "Members", subtitle: "Manage your member base and retention" },
  attendance: { title: "Attendance & Check-ins", subtitle: "Traffic patterns and facility usage" },
  finance: { title: "Finance", subtitle: "Revenue, expenses and transactions" },
  staff: { title: "Staff & Costs", subtitle: "Team performance and payroll overview" },
  analytics: { title: "Analytics", subtitle: "Deeper insights into growth and retention" },
};

const ownerNotifications = [
  { title: "Overdue payment", detail: "Devon Clarke's renewal is 2 days overdue", time: "1h", unread: true },
  { title: "New signup", detail: "Elena Petrova joined the Elite Performance plan", time: "3h", unread: true },
  { title: "Equipment alert", detail: "Squat Rack B needs a safety pin replacement", time: "6h", unread: false },
  { title: "Monthly report ready", detail: "March performance report is ready to view", time: "1d", unread: false },
];

export function OwnerDashboardPage() {
  const [tab, setTab] = useState("overview");

  return (
    <DashboardShell
      navItems={navItems}
      activeTab={tab}
      onTabChange={setTab}
      title={titles[tab].title}
      subtitle={titles[tab].subtitle}
      roleLabel="Owner"
      userName={currentOwner.name}
      userInitials={currentOwner.initials}
      notifications={ownerNotifications}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          {tab === "overview" && <OwnerOverview onNavigate={setTab} />}
          {tab === "members" && <OwnerMembers />}
          {tab === "attendance" && <OwnerAttendance />}
          {tab === "finance" && <OwnerFinance />}
          {tab === "staff" && <OwnerStaff />}
          {tab === "analytics" && <OwnerAnalytics />}
        </motion.div>
      </AnimatePresence>
    </DashboardShell>
  );
}

export default OwnerDashboardPage;
