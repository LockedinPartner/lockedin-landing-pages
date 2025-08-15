import { RiP2pLine } from "../icons/p2p";
import { Goals } from "../icons/goals";
import { GameHandle } from "../icons/gameHandle";
import { Header } from "../ui/header";
import Image from "next/image";

const data = [
  {
    id: 1,
    icon: RiP2pLine,
    title: "Smart Matching",
    description:
      "Get paired with the perfect accountability partner based on your goals and schedule.",
  },
  {
    id: 2,
    icon: Goals,
    title: "Goal Tracking",
    description:
      "Break down big goals into manageable sessions with visual progress tracking.",
  },
  {
    id: 3,
    icon: GameHandle,
    title: "Gamified Progress",
    description:
      "Earn badges, climb leaderboards, and unlock exclusive rewards as you level up.",
  },
];

export function Approach() {
  return (
    <div className="w-full">
      <Header
        tag="Approach"
        title="Solve your focus challenge using LockedIN"
      />

      <div className="w-[93%] mx-auto py-8 lg:py-12">
        <div className="w-full flex flex-col md:flex-row justify-between items-start">
          {data.map((item) => (
            <div
              key={item.id}
              className={`mb-8 ${
                item.id < data.length ? "lg:border-r-2" : ""
              } max-lg:border-l-2 border-[#E1E0E2] flex items-start`}
            >
              <div className="px-5 md:px-8 lg:px-10">
                <item.icon
                  color="#72D560"
                  className="w-8 h-8 text-primary mr-4"
                />
                <div>
                  <h3 className="mt-2 lg:mt-4 md:text-lg font-semibold text-[#353131]">
                    {item.title}
                  </h3>
                  <p className="mt-2 lg:mt-4 text-[#72716F] lg:w-[80%]">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full bg-[#72D560] h-auto rounded-md md:rounded-lg lg:rounded-3xl px-3 pt-3 md:px-8 md:pt-8 pb-0 overflow-hidden">
          <div className="w-full relative top-2 lg:top-4">
            <Image
              src="/focus.png"
              alt="Focus"
              width={1200}
              height={864}
              className="w-full object-contain h-auto rounded-md md:rounded-lg lg:rounded-3xl border"
            />
          </div>
        </div>
      </div>
      <div className="mt-6 w-full h-px bg-[#CECECE]" />
    </div>
  );
}