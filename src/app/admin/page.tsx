"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  Newspaper,
  LogOut,
  Shield,
  Mail,
  Phone,
  MapPin,
  TrendingUp,
  Building2,
  MessageSquare,
  Bell,
  Settings,
  ChevronRight,
} from "lucide-react";

interface UserData {
  name: string;
  email: string;
  role: string;
  loggedInAt: string;
}

export default function AdminPage() {
  const router = useRouter();
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = sessionStorage.getItem("faiita_user");
    if (!stored) {
      router.push("/login");
      return;
    }
    try {
      setUser(JSON.parse(stored));
    } catch {
      router.push("/login");
    }
    setLoading(false);
  }, [router]);

  const handleLogout = () => {
    sessionStorage.removeItem("faiita_user");
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex items-center gap-3 text-gray-500">
          <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Loading dashboard...
        </div>
      </div>
    );
  }

  if (!user) return null;

  const stats = [
    { label: "State Associations", value: "25", icon: Building2, color: "bg-blue-500" },
    { label: "Total Members", value: "50,000+", icon: Users, color: "bg-[#FF9933]" },
    { label: "Upcoming Events", value: "5", icon: CalendarDays, color: "bg-emerald-500" },
    { label: "News Articles", value: "6", icon: Newspaper, color: "bg-purple-500" },
  ];

  const quickActions = [
    { label: "Manage Office Bearers", icon: Shield, href: "#", color: "text-blue-600 bg-blue-50" },
    { label: "State Associations", icon: MapPin, href: "/state-associations", color: "text-emerald-600 bg-emerald-50" },
    { label: "Events Calendar", icon: CalendarDays, href: "/events", color: "text-[#FF9933] bg-orange-50" },
    { label: "News & Updates", icon: Newspaper, href: "/news", color: "text-purple-600 bg-purple-50" },
    { label: "Contact Leads", icon: MessageSquare, href: "#", color: "text-pink-600 bg-pink-50" },
    { label: "Settings", icon: Settings, href: "#", color: "text-gray-600 bg-gray-50" },
  ];

  const recentActivity = [
    { action: "New contact form submitted", time: "2 hours ago", type: "contact" },
    { action: "Event "FAIITA Summit 2026" updated", time: "5 hours ago", type: "event" },
    { action: "News article published", time: "1 day ago", type: "news" },
    { action: "State association data updated", time: "2 days ago", type: "state" },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0A2540] flex items-center justify-center">
                <LayoutDashboard className="w-5 h-5 text-[#FF9933]" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-[#0A2540]">Admin Dashboard</h1>
                <p className="text-xs text-gray-500">FAIITA Management Portal</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full">
                <Shield className="w-4 h-4 text-[#FF9933]" />
                <span className="text-sm font-medium text-[#0A2540]">{user.name}</span>
                <Badge variant="secondary" className="text-xs bg-[#FF9933]/10 text-[#FF9933] border-0">
                  {user.role}
                </Badge>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="text-gray-500 hover:text-red-600 hover:bg-red-50"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-[#0A2540] to-[#1a3a5f] rounded-2xl p-6 mb-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF9933]/10 rounded-full blur-[64px]" />
          <div className="relative">
            <h2 className="text-2xl font-bold mb-1">Welcome back, {user.name}!</h2>
            <p className="text-white/70">
              Here is what is happening across FAIITA today.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-[#0A2540]">{stat.value}</p>
                  </div>
                  <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-[#0A2540]">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {quickActions.map((action) => (
                    <a
                      key={action.label}
                      href={action.href}
                      className="flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                    >
                      <div className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center shrink-0`}>
                        <action.icon className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-medium text-[#0A2540] group-hover:text-[#FF9933] transition-colors">
                        {action.label}
                      </span>
                      <ChevronRight className="w-4 h-4 text-gray-300 ml-auto group-hover:text-[#FF9933] group-hover:translate-x-1 transition-all" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div>
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-[#0A2540]">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${
                        item.type === "contact" ? "bg-blue-500" :
                        item.type === "event" ? "bg-[#FF9933]" :
                        item.type === "news" ? "bg-purple-500" :
                        "bg-emerald-500"
                      }`} />
                      <div>
                        <p className="text-sm text-[#0A2540]">{item.action}</p>
                        <p className="text-xs text-gray-400">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Info Card */}
            <Card className="border-0 shadow-sm mt-4 bg-[#0A2540]">
              <CardContent className="p-5">
                <h3 className="text-sm font-semibold text-white mb-3">Support</h3>
                <div className="space-y-2 text-sm">
                  <a href="mailto:info@faiita.co.in" className="flex items-center gap-2 text-white/70 hover:text-[#FF9933] transition-colors">
                    <Mail className="w-4 h-4" />
                    info@faiita.co.in
                  </a>
                  <a href="tel:+911141620000" className="flex items-center gap-2 text-white/70 hover:text-[#FF9933] transition-colors">
                    <Phone className="w-4 h-4" />
                    +91 11 4162 0000
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
