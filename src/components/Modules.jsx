import { CheckCircle2, MessageSquare, Image as ImageIcon, Clock, Users, Heart, Bell } from "lucide-react";

const items = [
  {
    title: "Authentication",
    icon: CheckCircle2,
    points: [
      "Splash, login/signup, OTP",
      "Profile setup & onboarding",
      "Users table (PostgreSQL) + Firebase Auth",
    ],
  },
  {
    title: "Realtime Chat",
    icon: MessageSquare,
    points: [
      "1:1 & group chats",
      "Text, media, read receipts",
      "Realtime updates via Firebase",
    ],
  },
  {
    title: "Feed & Posts",
    icon: ImageIcon,
    points: [
      "Instagram-style feed",
      "Likes & comments",
      "Media in Firebase Storage",
    ],
  },
  {
    title: "Stories",
    icon: Clock,
    points: [
      "24h expiring stories",
      "Photo/video support",
      "Auto-cleanup routine",
    ],
  },
  {
    title: "Profiles & Follows",
    icon: Users,
    points: [
      "View/edit profile",
      "Follower system",
      "Privacy controls",
    ],
  },
  {
    title: "Notifications",
    icon: Bell,
    points: [
      "Push for interactions",
      "In-app inbox",
      "Granular settings",
    ],
  },
];

export default function Modules() {
  return (
    <section id="modules" className="bg-slate-50 border-y border-slate-200 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-slate-900">Core Modules</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((card) => (
            <div key={card.title} className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
              <div className="flex items-center gap-2">
                <card.icon className="h-5 w-5 text-indigo-600" />
                <h3 className="font-semibold text-slate-900">{card.title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {card.points.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
