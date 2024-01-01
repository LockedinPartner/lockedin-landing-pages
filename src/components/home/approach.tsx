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

      <div className="w-[93%] mx-auto py-12">
        <div className="w-full flex flex-col md:flex-row justify-between items-start">
          {data.map((item) => (
            <div
              key={item.id}
              className={`mb-8 ${
                item.id < data.length
                  ? "max-lg:border-l-2 md:border-r-2 border-[#E1E0E2]"
                  : ""
              } flex items-start`}
            >
              <div className="px-5 md:px-8 lg:px-10">
                <item.icon
                  color="#72D560"
                  className="w-8 h-8 text-primary mr-4"
                />
                <div>
                  <h3 className="mt-4 text-lg font-semibold text-[#353131]">{item.title}</h3>
                  <p className="mt-4 text-[#72716F] lg:w-[80%]">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full bg-[#72D560] h-[691px] rounded-3xl p-5 md:p-12 overflow-hidden">
          <Image
            src="/focus.png"
            alt="Focus"
            width={500}
            height={864}
            className="relative top-7 w-full object-cover h-auto rounded-3xl mb-8"
          />
        </div>
      </div>
    </div>
  );
}