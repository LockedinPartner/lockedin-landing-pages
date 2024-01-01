import { Approach } from "@/components/home/approach";
import { Features } from "@/components/home/features";
import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/howitworks";
import { Navbar } from "@/components/ui/navbar";

export default function Home() {
  return (
    <div className="w-full h-screen bg-[#F0F0F0] overflow-y-auto">
      <Navbar/>
      <Hero/>
      <Approach/>
      <Features/>
      <HowItWorks/>
    </div>
  );
}
