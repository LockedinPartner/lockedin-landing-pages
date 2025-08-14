import { Approach } from "@/components/home/approach";
import { Features } from "@/components/home/features";
import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/howitworks";
import { TargetAudience } from "@/components/home/target-audience";
import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";

export default function Home() {
  return (
    <div className="w-full h-screen bg-[#F0F0F0] overflow-y-auto scroll-smooth">
      <Navbar/>
      <Hero/>
      <Approach/>
      <Features/>
      <HowItWorks/>
      <TargetAudience/>
      <Footer/>
    </div>
  );
}
