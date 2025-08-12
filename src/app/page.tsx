import { Hero } from "@/components/home/hero";
import { Navbar } from "@/components/ui/navbar";

export default function Home() {
  return (
    <div className="w-full h-screen bg-[#F0F0F0] overflow-y-auto">
      <Navbar/>
      <Hero/>
    </div>
  );
}
