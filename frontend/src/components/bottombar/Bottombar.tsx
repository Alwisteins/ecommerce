import Navbar from "../navbar/Navbar";

export default function Bottombar() {
  return (
    <div className="fixed sm:hidden h-16 w-full bottom-0 bg-white/70 backdrop-blur-md border-t border-slate-300">
      <Navbar />
    </div>
  );
}
