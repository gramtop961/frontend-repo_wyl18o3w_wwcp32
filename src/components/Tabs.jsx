import { Home, PlusSquare, User } from "lucide-react";

export default function Tabs({ current, onChange, labels }) {
  const items = [
    { key: "feed", label: labels.feed, icon: Home },
    { key: "compose", label: labels.compose, icon: PlusSquare },
    { key: "profile", label: labels.profile, icon: User },
  ];

  return (
    <nav className="fixed bottom-4 left-0 right-0">
      <div className="max-w-md mx-auto bg-white/90 backdrop-blur border border-gray-200 rounded-2xl shadow-lg px-2 py-2 flex justify-around">
        {items.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={`flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-medium transition-colors ${
              current === key ? "text-emerald-700" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <Icon className="w-5 h-5" />
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}
