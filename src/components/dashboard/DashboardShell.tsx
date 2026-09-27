import { useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Dumbbell,
  Menu,
  Bell,
  Search,
  Sun,
  Moon,
  LogOut,
  ChevronDown,
  Settings,
  type LucideIcon,
} from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { useTheme } from "@/lib/theme-context";
import { cn } from "@/utils/cn";

export interface NavItem {
  key: string;
  label: string;
  icon: LucideIcon;
  badge?: string;
}

interface DashboardShellProps {
  navItems: NavItem[];
  activeTab: string;
  onTabChange: (key: string) => void;
  title: string;
  subtitle?: string;
  roleLabel: string;
  userName: string;
  userInitials: string;
  notifications?: { title: string; detail: string; time: string; unread: boolean }[];
  children: ReactNode;
}

export function DashboardShell({
  navItems,
  activeTab,
  onTabChange,
  title,
  subtitle,
  roleLabel,
  userName,
  userInitials,
  notifications = [],
  children,
}: DashboardShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const unreadCount = notifications.filter((n) => n.unread).length;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const Sidebar = (
    <div className="flex h-full flex-col bg-slate-950">
      <div className="flex items-center gap-2.5 px-6 py-6">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 shadow-lg shadow-orange-500/20">
          <Dumbbell className="h-5 w-5 text-white" />
        </span>
        <span className="font-display text-base font-bold tracking-tight text-white">
          FORGE <span className="text-amber-400">FITNESS</span>
        </span>
      </div>

      <div className="mx-4 mb-2 rounded-xl bg-white/5 px-3 py-2 text-center text-[11px] font-semibold uppercase tracking-wide text-amber-300/80">
        {roleLabel} Portal
      </div>

      <nav className="mt-4 flex-1 space-y-1 px-4">
        {navItems.map((item) => {
          const active = activeTab === item.key;
          return (
            <button
              key={item.key}
              onClick={() => {
                onTabChange(item.key);
                setSidebarOpen(false);
              }}
              className={cn(
                "group relative flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition",
                active ? "text-white" : "text-white/50 hover:bg-white/5 hover:text-white"
              )}
            >
              {active && (
                <motion.span
                  layoutId="dash-nav-active"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400/15 to-orange-500/10 ring-1 ring-inset ring-amber-400/30"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <item.icon className={cn("relative h-[18px] w-[18px]", active && "text-amber-400")} />
              <span className="relative">{item.label}</span>
              {item.badge && (
                <span className="relative ml-auto rounded-full bg-amber-400/20 px-2 py-0.5 text-[10px] font-bold text-amber-300">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      <div className="m-4 rounded-2xl border border-white/10 bg-gradient-to-br from-amber-400/10 to-orange-500/5 p-4">
        <p className="text-xs font-semibold text-white">Need help?</p>
        <p className="mt-1 text-[11px] leading-relaxed text-white/45">Visit the front desk or message your coach anytime.</p>
        <button className="mt-3 w-full rounded-lg bg-white/10 py-2 text-xs font-semibold text-white transition hover:bg-white/15">
          Contact support
        </button>
      </div>

      <button
        onClick={handleLogout}
        className="mx-4 mb-6 flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-white/50 transition hover:bg-white/5 hover:text-rose-300"
      >
        <LogOut className="h-[18px] w-[18px]" />
        Sign out
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 border-r border-white/10 lg:block">{Sidebar}</aside>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 lg:hidden"
            />
            <motion.aside
              initial={{ x: -288 }}
              animate={{ x: 0 }}
              exit={{ x: -288 }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed inset-y-0 left-0 z-50 w-72 lg:hidden"
            >
              {Sidebar}
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <div className="lg:pl-72">
        {/* Topbar */}
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70">
          <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-8">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 dark:text-white/60 dark:hover:bg-white/10 lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>
              <div>
                <h1 className="font-display text-lg font-bold text-slate-900 dark:text-white sm:text-xl">{title}</h1>
                {subtitle && <p className="text-xs text-slate-500 dark:text-white/40">{subtitle}</p>}
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative hidden md:block">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 dark:text-white/30" />
                <input
                  placeholder="Search..."
                  className="w-56 rounded-full border border-slate-200 bg-slate-50 py-2 pl-9 pr-4 text-sm text-slate-700 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/30"
                />
              </div>

              <button
                onClick={toggleTheme}
                className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 dark:text-white/60 dark:hover:bg-white/10"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
              </button>

              <div className="relative">
                <button
                  onClick={() => {
                    setNotifOpen((v) => !v);
                    setProfileOpen(false);
                  }}
                  className="relative flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 dark:text-white/60 dark:hover:bg-white/10"
                >
                  <Bell className="h-[18px] w-[18px]" />
                  {unreadCount > 0 && (
                    <span className="absolute right-1.5 top-1.5 flex h-2 w-2 rounded-full bg-amber-500">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                    </span>
                  )}
                </button>
                <AnimatePresence>
                  {notifOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 z-30 mt-2 w-80 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-white/10 dark:bg-slate-900"
                    >
                      <div className="border-b border-slate-100 px-4 py-3 dark:border-white/10">
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">Notifications</p>
                      </div>
                      <div className="max-h-80 overflow-y-auto">
                        {notifications.length === 0 ? (
                          <p className="px-4 py-8 text-center text-sm text-slate-400 dark:text-white/40">You're all caught up.</p>
                        ) : (
                          notifications.map((n, i) => (
                            <div key={i} className="flex gap-3 border-b border-slate-50 px-4 py-3 last:border-0 dark:border-white/5">
                              <span className={cn("mt-1.5 h-2 w-2 flex-shrink-0 rounded-full", n.unread ? "bg-amber-500" : "bg-transparent")} />
                              <div className="flex-1">
                                <p className="text-sm font-medium text-slate-800 dark:text-white/90">{n.title}</p>
                                <p className="text-xs text-slate-500 dark:text-white/40">{n.detail}</p>
                              </div>
                              <span className="text-[11px] text-slate-400 dark:text-white/30">{n.time}</span>
                            </div>
                          ))
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="relative">
                <button
                  onClick={() => {
                    setProfileOpen((v) => !v);
                    setNotifOpen(false);
                  }}
                  className="flex items-center gap-2 rounded-full py-1 pl-1 pr-2 transition hover:bg-slate-100 dark:hover:bg-white/10"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-600 text-xs font-bold text-white">
                    {userInitials}
                  </span>
                  <span className="hidden text-sm font-medium text-slate-700 dark:text-white/80 sm:block">{userName}</span>
                  <ChevronDown className="hidden h-3.5 w-3.5 text-slate-400 dark:text-white/40 sm:block" />
                </button>
                <AnimatePresence>
                  {profileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 z-30 mt-2 w-56 overflow-hidden rounded-2xl border border-slate-200 bg-white p-1.5 shadow-xl dark:border-white/10 dark:bg-slate-900"
                    >
                      <div className="px-3 py-2.5">
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">{userName}</p>
                        <p className="text-xs text-slate-500 dark:text-white/40">{roleLabel} account</p>
                      </div>
                      <div className="my-1 h-px bg-slate-100 dark:bg-white/10" />
                      <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 dark:text-white/70 dark:hover:bg-white/5">
                        <Settings className="h-4 w-4" /> Account settings
                      </button>
                      <button
                        onClick={handleLogout}
                        className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-rose-500 hover:bg-rose-50 dark:text-rose-300 dark:hover:bg-rose-500/10"
                      >
                        <LogOut className="h-4 w-4" /> Sign out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </header>

        <main className="px-5 py-7 sm:px-8">{children}</main>
      </div>
    </div>
  );
}
