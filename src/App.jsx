import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import SportsCategories from "./components/SportsCategories";
import VenueSections from "./components/VenueSections";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <HeroCarousel />

        <div className="mt-8">
          <SportsCategories />
        </div>

        <VenueSections />
      </main>

      <footer className="border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} ArenaKita. Play more, worry less.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Terms</a>
            <a href="#" className="hover:text-slate-700">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
