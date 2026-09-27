// -----------------------------------------------------------------------------
// Centralised realistic mock data for the Forge Fitness Club demo.
// Structured so it can later be swapped for real API calls with minimal changes.
// -----------------------------------------------------------------------------

export const gymInfo = {
  name: "Forge Fitness Club",
  shortName: "Forge",
  tagline: "Forge your strongest self.",
  address: "482 Union Avenue, Brooklyn, NY 11211",
  phone: "+1 (212) 555-0134",
  email: "hello@forgefitnessclub.com",
  hoursWeekday: "5:00 AM – 11:00 PM",
  hoursWeekend: "7:00 AM – 8:00 PM",
  rating: 4.9,
  reviews: 1287,
  founded: 2014,
  locations: 3,
};

// ---------------------------------------------------------------------------
// MEMBER-SIDE MOCK DATA
// ---------------------------------------------------------------------------

export const currentMember = {
  id: "MB-10234",
  name: "Jordan Reyes",
  initials: "JR",
  email: "jordan.reyes@email.com",
  plan: "Elite Performance",
  status: "active" as const,
  memberSince: "2022-03-14",
  startDate: "2024-10-01",
  renewalDate: "2025-04-18",
  daysRemaining: 21,
  totalPlanDays: 180,
  paymentStatus: "paid" as const,
  amountDue: 0,
  monthlyFee: 129,
  homeLocation: "Williamsburg — Union Ave",
  trainer: "Coach Maya Chen",
  goal: "Build lean muscle & improve conditioning",
  height: "5'10\"",
  weight: 178,
  bodyFat: 15.2,
};

export const membershipTimeline = [
  { label: "Joined", date: "Mar 14, 2022", detail: "Started with Basic plan" },
  { label: "Upgraded", date: "Jan 08, 2023", detail: "Moved to Performance plan" },
  { label: "Upgraded", date: "Oct 01, 2024", detail: "Moved to Elite Performance plan" },
  { label: "Renews", date: "Apr 18, 2025", detail: "Auto-renewal via Visa •••• 4471" },
];

export const workoutSchedule = [
  {
    day: "Monday",
    sessions: [
      { time: "6:00 AM", name: "Upper Body Strength", type: "Strength", trainer: "Coach Maya Chen", duration: 60, intensity: "High" },
    ],
  },
  {
    day: "Tuesday",
    sessions: [
      { time: "7:00 PM", name: "HIIT Conditioning", type: "Cardio", trainer: "Coach Diego Alvarez", duration: 45, intensity: "High" },
    ],
  },
  {
    day: "Wednesday",
    sessions: [
      { time: "6:00 AM", name: "Lower Body Power", type: "Strength", trainer: "Coach Maya Chen", duration: 60, intensity: "High" },
    ],
  },
  {
    day: "Thursday",
    sessions: [{ time: "6:30 PM", name: "Mobility & Recovery", type: "Recovery", trainer: "Coach Priya Nair", duration: 40, intensity: "Low" }],
  },
  {
    day: "Friday",
    sessions: [
      { time: "6:00 AM", name: "Full Body Circuit", type: "Strength", trainer: "Coach Maya Chen", duration: 55, intensity: "Medium" },
    ],
  },
  {
    day: "Saturday",
    sessions: [{ time: "9:00 AM", name: "Functional Athlete Class", type: "Group Class", trainer: "Coach Diego Alvarez", duration: 50, intensity: "Medium" }],
  },
  { day: "Sunday", sessions: [] },
];

export const dietPlan = {
  targetCalories: 2650,
  targetProtein: 190,
  targetCarbs: 260,
  targetFats: 80,
  waterTargetLiters: 3.2,
  meals: [
    {
      name: "Breakfast",
      time: "7:00 AM",
      calories: 620,
      protein: 42,
      carbs: 60,
      fats: 18,
      items: ["3 whole eggs + 2 egg whites", "Steel-cut oats (60g) with blueberries", "Black coffee"],
    },
    {
      name: "Lunch",
      time: "12:30 PM",
      calories: 780,
      protein: 55,
      carbs: 85,
      fats: 20,
      items: ["Grilled chicken breast (200g)", "Jasmine rice (150g)", "Steamed broccoli & peppers", "Olive oil drizzle"],
    },
    {
      name: "Pre-Workout Snack",
      time: "4:30 PM",
      calories: 260,
      protein: 24,
      carbs: 32,
      fats: 4,
      items: ["Whey protein shake", "1 banana"],
    },
    {
      name: "Dinner",
      time: "8:00 PM",
      calories: 720,
      protein: 50,
      carbs: 60,
      fats: 26,
      items: ["Baked salmon (180g)", "Sweet potato mash", "Mixed greens salad", "Avocado"],
    },
    {
      name: "Evening",
      time: "9:30 PM",
      calories: 270,
      protein: 19,
      carbs: 23,
      fats: 12,
      items: ["Greek yogurt (200g)", "Almonds (15g)", "Cinnamon"],
    },
  ],
};

// Weight & body-fat trend over the last 12 weeks
export const progressTrend = [
  { week: "Wk 1", weight: 184, bodyFat: 18.4, benchPress: 165 },
  { week: "Wk 2", weight: 183, bodyFat: 18.0, benchPress: 165 },
  { week: "Wk 3", weight: 182.5, bodyFat: 17.6, benchPress: 170 },
  { week: "Wk 4", weight: 181.8, bodyFat: 17.5, benchPress: 175 },
  { week: "Wk 5", weight: 181, bodyFat: 17.1, benchPress: 175 },
  { week: "Wk 6", weight: 180.4, bodyFat: 16.8, benchPress: 180 },
  { week: "Wk 7", weight: 180, bodyFat: 16.5, benchPress: 185 },
  { week: "Wk 8", weight: 179.5, bodyFat: 16.2, benchPress: 185 },
  { week: "Wk 9", weight: 179, bodyFat: 15.9, benchPress: 190 },
  { week: "Wk 10", weight: 178.6, bodyFat: 15.6, benchPress: 195 },
  { week: "Wk 11", weight: 178.2, bodyFat: 15.4, benchPress: 195 },
  { week: "Wk 12", weight: 178, bodyFat: 15.2, benchPress: 200 },
];

export const personalRecords = [
  { lift: "Bench Press", value: "200 lb", change: "+35 lb", period: "12 weeks" },
  { lift: "Back Squat", value: "285 lb", change: "+50 lb", period: "12 weeks" },
  { lift: "Deadlift", value: "335 lb", change: "+45 lb", period: "12 weeks" },
  { lift: "5k Run", value: "24:12", change: "-2:08", period: "12 weeks" },
];

export const memberStreak = {
  currentStreak: 14,
  longestStreak: 31,
  workoutsThisMonth: 18,
  workoutsGoal: 20,
  checkInsThisWeek: [true, true, false, true, true, false, true],
  totalCheckIns: 412,
};

export const weeklyActivityMinutes = [
  { day: "Mon", minutes: 62 },
  { day: "Tue", minutes: 48 },
  { day: "Wed", minutes: 65 },
  { day: "Thu", minutes: 0 },
  { day: "Fri", minutes: 55 },
  { day: "Sat", minutes: 70 },
  { day: "Sun", minutes: 0 },
];

// Attendance heat-map data for the last ~17 weeks (mon-sun grid)
export function generateAttendanceHeatmap(weeks = 18) {
  const data: number[][] = [];
  let seed = 42;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  for (let w = 0; w < weeks; w++) {
    const row: number[] = [];
    for (let d = 0; d < 7; d++) {
      const r = rand();
      row.push(r > 0.62 ? (r > 0.85 ? 3 : r > 0.74 ? 2 : 1) : 0);
    }
    data.push(row);
  }
  return data;
}

export const leaderboard = [
  { rank: 1, name: "Sasha Kim", initials: "SK", points: 3120, streak: 42, checkins: 27, trend: "up" },
  { rank: 2, name: "Marcus Webb", initials: "MW", points: 2985, streak: 21, checkins: 25, trend: "up" },
  { rank: 3, name: "Elena Petrova", initials: "EP", points: 2870, streak: 19, checkins: 24, trend: "down" },
  { rank: 4, name: "Jordan Reyes", initials: "JR", points: 2735, streak: 14, checkins: 23, trend: "up", isCurrentUser: true },
  { rank: 5, name: "Priya Sharma", initials: "PS", points: 2690, streak: 11, checkins: 22, trend: "same" },
  { rank: 6, name: "Liam O'Connor", initials: "LO", points: 2540, streak: 9, checkins: 21, trend: "down" },
  { rank: 7, name: "Nadia Hassan", initials: "NH", points: 2410, streak: 16, checkins: 20, trend: "up" },
  { rank: 8, name: "Tyler Brooks", initials: "TB", points: 2260, streak: 6, checkins: 18, trend: "down" },
];

export const badges = [
  { icon: "flame", label: "14-Day Streak", earned: true },
  { icon: "dumbbell", label: "100 Workouts", earned: true },
  { icon: "trophy", label: "Top 5 Ranked", earned: true },
  { icon: "sunrise", label: "Early Bird x20", earned: true },
  { icon: "target", label: "Goal Crusher", earned: false },
  { icon: "medal", label: "1-Year Member", earned: false },
];

export const memberNotifications = [
  { title: "Class reminder", detail: "HIIT Conditioning starts in 2 hours", time: "2h", unread: true },
  { title: "Renewal upcoming", detail: "Your Elite plan renews in 21 days", time: "1d", unread: true },
  { title: "New PR!", detail: "You hit a new Bench Press record: 200 lb", time: "3d", unread: false },
  { title: "Diet plan updated", detail: "Coach Maya adjusted your macros", time: "5d", unread: false },
];

// ---------------------------------------------------------------------------
// OWNER-SIDE MOCK DATA
// ---------------------------------------------------------------------------

export const currentOwner = {
  name: "Alex Morgan",
  initials: "AM",
  role: "Founder & General Manager",
  email: "alex.morgan@forgefitnessclub.com",
  location: "Williamsburg — Union Ave (HQ)",
};

export const ownerKpis = {
  totalMembers: 1842,
  activeMembers: 1698,
  newMembersThisMonth: 96,
  churnRate: 2.4,
  monthlyRevenue: 214650,
  revenueGrowthYoY: 18.6,
  checkInsToday: 341,
  avgVisitsPerWeek: 3.4,
  utilizationRate: 68,
  outstandingPayments: 4820,
};

export const revenueTrend = [
  { month: "Apr", revenue: 168400, expenses: 118200 },
  { month: "May", revenue: 172900, expenses: 121000 },
  { month: "Jun", revenue: 179500, expenses: 124800 },
  { month: "Jul", revenue: 183200, expenses: 126400 },
  { month: "Aug", revenue: 188700, expenses: 129900 },
  { month: "Sep", revenue: 195300, expenses: 132100 },
  { month: "Oct", revenue: 201800, expenses: 136700 },
  { month: "Nov", revenue: 197400, expenses: 134500 },
  { month: "Dec", revenue: 205900, expenses: 139200 },
  { month: "Jan", revenue: 209600, expenses: 141800 },
  { month: "Feb", revenue: 211200, expenses: 143400 },
  { month: "Mar", revenue: 214650, expenses: 145900 },
];

export const memberGrowth = [
  { month: "Apr", members: 1402 },
  { month: "May", members: 1445 },
  { month: "Jun", members: 1489 },
  { month: "Jul", members: 1523 },
  { month: "Aug", members: 1561 },
  { month: "Sep", members: 1598 },
  { month: "Oct", members: 1642 },
  { month: "Nov", members: 1671 },
  { month: "Dec", members: 1705 },
  { month: "Jan", members: 1756 },
  { month: "Feb", members: 1798 },
  { month: "Mar", members: 1842 },
];

export const membershipPlans = [
  { name: "Basic", members: 612, price: 59, color: "#38bdf8" },
  { name: "Performance", members: 748, price: 89, color: "#818cf8" },
  { name: "Elite Performance", members: 482, price: 129, color: "#f97316" },
];

export const expenseBreakdown = [
  { category: "Staff Salaries", amount: 78500, color: "#f97316" },
  { category: "Rent & Utilities", amount: 32800, color: "#38bdf8" },
  { category: "Equipment", amount: 14200, color: "#a78bfa" },
  { category: "Marketing", amount: 11900, color: "#34d399" },
  { category: "Maintenance", amount: 5300, color: "#f472b6" },
  { category: "Software & Ops", amount: 3200, color: "#fbbf24" },
];

export const checkInsByHour = [
  { hour: "5AM", count: 22 }, { hour: "6AM", count: 58 }, { hour: "7AM", count: 84 },
  { hour: "8AM", count: 61 }, { hour: "9AM", count: 38 }, { hour: "10AM", count: 29 },
  { hour: "11AM", count: 24 }, { hour: "12PM", count: 47 }, { hour: "1PM", count: 40 },
  { hour: "2PM", count: 26 }, { hour: "3PM", count: 31 }, { hour: "4PM", count: 52 },
  { hour: "5PM", count: 88 }, { hour: "6PM", count: 112 }, { hour: "7PM", count: 96 },
  { hour: "8PM", count: 63 }, { hour: "9PM", count: 34 }, { hour: "10PM", count: 15 },
];

export const upcomingRenewals = [
  { name: "Jordan Reyes", plan: "Elite Performance", renewalDate: "2025-04-18", amount: 129, status: "auto-renew" },
  { name: "Casey Nguyen", plan: "Performance", renewalDate: "2025-04-15", amount: 89, status: "auto-renew" },
  { name: "Robin Patel", plan: "Basic", renewalDate: "2025-04-14", amount: 59, status: "action-needed" },
  { name: "Morgan Lee", plan: "Elite Performance", renewalDate: "2025-04-13", amount: 129, status: "auto-renew" },
  { name: "Devon Clarke", plan: "Performance", renewalDate: "2025-04-12", amount: 89, status: "overdue" },
  { name: "Harper Singh", plan: "Basic", renewalDate: "2025-04-11", amount: 59, status: "auto-renew" },
];

export const staffList = [
  { name: "Maya Chen", role: "Head Strength Coach", salary: 6200, shift: "6AM – 2PM", rating: 4.9, classesPerWeek: 14, tenure: "3.5 yrs" },
  { name: "Diego Alvarez", role: "HIIT & Conditioning Coach", salary: 5400, shift: "2PM – 10PM", rating: 4.8, classesPerWeek: 12, tenure: "2.1 yrs" },
  { name: "Priya Nair", role: "Mobility & Recovery Coach", salary: 4800, shift: "10AM – 6PM", rating: 4.9, classesPerWeek: 9, tenure: "1.8 yrs" },
  { name: "Sam Whitfield", role: "Front Desk Manager", salary: 3900, shift: "7AM – 3PM", rating: 4.6, classesPerWeek: 0, tenure: "4 yrs" },
  { name: "Ines Torres", role: "Nutrition Coach", salary: 5100, shift: "11AM – 7PM", rating: 4.9, classesPerWeek: 6, tenure: "1.2 yrs" },
  { name: "Jamal Ricci", role: "Facility & Equipment Manager", salary: 4300, shift: "5AM – 1PM", rating: 4.7, classesPerWeek: 0, tenure: "2.6 yrs" },
];

export const recentTransactions = [
  { id: "TXN-88213", member: "Casey Nguyen", type: "Membership Renewal", amount: 89, date: "2025-03-28", method: "Visa •••• 2210" },
  { id: "TXN-88212", member: "New Signup — Elena Petrova", type: "New Membership", amount: 129, date: "2025-03-28", method: "Apple Pay" },
  { id: "TXN-88211", member: "Marcus Webb", type: "PT Session Pack", amount: 240, date: "2025-03-27", method: "Mastercard •••• 5521" },
  { id: "TXN-88210", member: "Nadia Hassan", type: "Membership Renewal", amount: 59, date: "2025-03-27", method: "Visa •••• 7734" },
  { id: "TXN-88209", member: "Tyler Brooks", type: "Merchandise", amount: 48, date: "2025-03-26", method: "Cash" },
  { id: "TXN-88208", member: "Liam O'Connor", type: "Membership Renewal", amount: 89, date: "2025-03-26", method: "Visa •••• 9081" },
];

export const memberDirectory = [
  { id: "MB-10234", name: "Jordan Reyes", plan: "Elite Performance", status: "active", joined: "2022-03-14", lastVisit: "Today", checkins: 23 },
  { id: "MB-10198", name: "Sasha Kim", plan: "Elite Performance", status: "active", joined: "2021-11-02", lastVisit: "Today", checkins: 27 },
  { id: "MB-10187", name: "Marcus Webb", plan: "Performance", status: "active", joined: "2022-06-18", lastVisit: "Yesterday", checkins: 25 },
  { id: "MB-10176", name: "Elena Petrova", plan: "Elite Performance", status: "active", joined: "2023-01-09", lastVisit: "Today", checkins: 24 },
  { id: "MB-10160", name: "Priya Sharma", plan: "Performance", status: "active", joined: "2022-09-30", lastVisit: "2 days ago", checkins: 22 },
  { id: "MB-10142", name: "Liam O'Connor", plan: "Basic", status: "at-risk", joined: "2021-05-21", lastVisit: "9 days ago", checkins: 9 },
  { id: "MB-10121", name: "Nadia Hassan", plan: "Performance", status: "active", joined: "2023-04-11", lastVisit: "Today", checkins: 20 },
  { id: "MB-10099", name: "Tyler Brooks", plan: "Basic", status: "paused", joined: "2022-02-27", lastVisit: "3 weeks ago", checkins: 4 },
];

export const classAttendanceStats = [
  { name: "Coach Maya Chen", classesTaught: 168, avgAttendance: 22, rating: 4.9 },
  { name: "Coach Diego Alvarez", classesTaught: 144, avgAttendance: 19, rating: 4.8 },
  { name: "Coach Priya Nair", classesTaught: 108, avgAttendance: 15, rating: 4.9 },
  { name: "Coach Ines Torres", classesTaught: 72, avgAttendance: 11, rating: 4.9 },
];

export const equipmentAlerts = [
  { equipment: "Treadmill #4", issue: "Belt calibration due", priority: "medium" },
  { equipment: "Squat Rack B", issue: "Safety pin replacement", priority: "high" },
  { equipment: "Rowing Machine #2", issue: "Routine maintenance", priority: "low" },
];
