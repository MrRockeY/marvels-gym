import { useState } from "react";
import { LayoutGrid, CalendarDays, Salad, LineChart as LineChartIcon, Trophy } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { DashboardShell, type NavItem } from "@/components/dashboard/DashboardShell";
import { MemberOverview } from "@/components/dashboard/member/MemberOverview";
import { MemberSchedule } from "@/components/dashboard/member/MemberSchedule";
import { MemberNutrition } from "@/components/dashboard/member/MemberNutrition";
import { MemberProgress } from "@/components/dashboard/member/MemberProgress";
import { MemberCommunity } from "@/components/dashboard/member/MemberCommunity";
import { currentMember, memberNotifications } from "@/lib/mockData";

const navItems: NavItem[] = [
  { key: "overview", label: "Overview", icon: LayoutGrid },
  { key: "schedule", label: "Workout Schedule", icon: CalendarDays },
  { key: "nutrition", label: "Diet Plan", icon: Salad },
  { key: "progress", label: "Progress", icon: LineChartIcon },
  { key: "community", label: "Rankings", icon: Trophy, badge: "#4" },
];

const titles: Record<string, { title: string; subtitle: string }> = {
  overview: { title: "Overview", subtitle: "Your fitness snapshot at a glance" },
  schedule: { title: "Workout Schedule", subtitle: "Your personalised weekly training plan" },
  nutrition: { title: "Diet Plan", subtitle: "Macro-based nutrition, tailored to your goal" },
  progress: { title: "Progress", subtitle: "Track your strength & body composition over time" },
  community: { title: "Rankings & Streaks", subtitle: "See how you stack up against the community" },
};

export function MemberDashboardPage() {
  const [tab, setTab] = useState("overview");

  return (
    <DashboardShell
      navItems={navItems}
      activeTab={tab}
      onTabChange={setTab}
      title={titles[tab].title}
      subtitle={titles[tab].subtitle}
      roleLabel="Member"
      userName={currentMember.name}
      userInitials={currentMember.initials}
      notifications={memberNotifications}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          {tab === "overview" && <MemberOverview onNavigate={setTab} />}
          {tab === "schedule" && <MemberSchedule />}
          {tab === "nutrition" && <MemberNutrition />}
          {tab === "progress" && <MemberProgress />}
          {tab === "community" && <MemberCommunity />}
        </motion.div>
      </AnimatePresence>
    </DashboardShell>
  );
}

export default MemberDashboardPage;
