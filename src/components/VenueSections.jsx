import { MapPin, Star } from "lucide-react";

const nearest = [
  {
    name: "Futsal Arena Cipete",
    image:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1400&auto=format&fit=crop",
    distance: "0.8 km",
    rating: 4.6,
    price: "IDR 180k / hour",
  },
  {
    name: "Badminton Hall Kemang",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1400&auto=format&fit=crop",
    distance: "1.2 km",
    rating: 4.7,
    price: "IDR 120k / hour",
  },
  {
    name: "ArenaKita Tennis Park",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1400&auto=format&fit=crop",
    distance: "1.9 km",
    rating: 4.8,
    price: "IDR 200k / hour",
  },
];

const recommendations = [
  {
    name: "Mega Sports Center",
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1400&auto=format&fit=crop",
    location: "South Jakarta",
    rating: 4.9,
    price: "From IDR 150k",
  },
  {
    name: "The Court Collective",
    image:
      "https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1400&auto=format&fit=crop",
    location: "BSD City",
    rating: 4.7,
    price: "From IDR 130k",
  },
  {
    name: "Stadium 21",
    image:
      "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?q=80&w=1400&auto=format&fit=crop",
    location: "Kuningan",
    rating: 4.8,
    price: "From IDR 160k",
  },
];

function VenueCard({ data }) {
  return (
    <div className="group rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-md transition">
      <div className="relative h-40 sm:h-48">
        <img src={data.image} alt={data.name} className="h-full w-full object-cover" />
        <div className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-black/70 text-white px-2 py-1 text-xs">
          <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
          <span>{data.rating}</span>
        </div>
      </div>
      <div className="p-3 sm:p-4">
        <div className="font-semibold line-clamp-1">{data.name}</div>
        {data.distance ? (
          <div className="mt-1 text-xs text-slate-500 flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" /> {data.distance} away
          </div>
        ) : (
          <div className="mt-1 text-xs text-slate-500">{data.location}</div>
        )}
        <div className="mt-2 text-sm font-medium text-emerald-700">{data.price}</div>
        <button className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium hover:bg-slate-50">
          View details
        </button>
      </div>
    </div>
  );
}

export default function VenueSections() {
  return (
    <section className="space-y-10 py-8">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg sm:text-xl font-semibold">Nearest to you</h2>
          <button className="text-sm text-emerald-700 hover:text-emerald-800 font-medium">Open map</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {nearest.map((v) => (
            <VenueCard key={v.name} data={v} />
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg sm:text-xl font-semibold">Recommended for you</h2>
          <button className="text-sm text-emerald-700 hover:text-emerald-800 font-medium">See more</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {recommendations.map((v) => (
            <VenueCard key={v.name} data={v} />
          ))}
        </div>
      </div>
    </section>
  );
}
