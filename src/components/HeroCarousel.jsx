import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    title: "Find and book fields instantly",
    subtitle: "Football, futsal, badminton, tennis, and more — all in one place.",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Play with friends near you",
    subtitle: "Discover nearby arenas with realtime availability.",
    image:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Easy scheduling & payments",
    subtitle: "Reserve your slot in seconds with secure checkout.",
    image:
      "https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=2000&auto=format&fit=crop",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  return (
    <section className="relative">
      <div className="relative h-[380px] sm:h-[460px] w-full overflow-hidden rounded-2xl bg-slate-200">
        {slides.map((s, i) => (
          <img
            key={i}
            src={s.image}
            alt={s.title}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        <div className="absolute inset-x-6 sm:inset-x-10 bottom-10 text-white max-w-3xl">
          <h1 className="text-2xl sm:text-4xl font-semibold leading-tight">
            {slides[index].title}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-white/90">{slides[index].subtitle}</p>
        </div>

        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            aria-label="Previous slide"
            onClick={() => setIndex((index - 1 + slides.length) % slides.length)}
            className="m-3 rounded-full bg-black/40 p-2 text-white hover:bg-black/60"
          >
            <ChevronLeft />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            aria-label="Next slide"
            onClick={() => setIndex((index + 1) % slides.length)}
            className="m-3 rounded-full bg-black/40 p-2 text-white hover:bg-black/60"
          >
            <ChevronRight />
          </button>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-6 rounded-full ${i === index ? "bg-white" : "bg-white/50"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
