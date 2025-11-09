import { Football, Dumbbell, Volleyball, Sun, Bike, Accessibility } from "lucide-react";

const categories = [
  { name: "Football", icon: Football, color: "bg-emerald-100 text-emerald-700" },
  { name: "Futsal", icon: Volleyball, color: "bg-blue-100 text-blue-700" },
  { name: "Badminton", icon: Dumbbell, color: "bg-amber-100 text-amber-700" },
  { name: "Tennis", icon: Sun, color: "bg-purple-100 text-purple-700" },
  { name: "Cycling", icon: Bike, color: "bg-rose-100 text-rose-700" },
  { name: "More", icon: Accessibility, color: "bg-slate-100 text-slate-700" },
];

export default function SportsCategories() {
  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg sm:text-xl font-semibold">Find by sport</h2>
        <button className="text-sm text-emerald-700 hover:text-emerald-800 font-medium">See all</button>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
        {categories.map(({ name, icon: Icon, color }) => (
          <button
            key={name}
            className={`group rounded-2xl p-3 sm:p-4 ${color} transition hover:brightness-95 text-left`}
          >
            <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
            <div className="mt-2 text-xs sm:text-sm font-medium">{name}</div>
          </button>
        ))}
      </div>
    </section>
  );
}
