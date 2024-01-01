import { RiP2pLine } from "../icons/p2p";
import { Goals } from "../icons/goals";
import { GameHandle } from "../icons/gameHandle";
import { Header } from "../ui/header";
import Image from "next/image";

const data = [
  {
    id: 1,
    image: "/goals.svg",
    title: "Sign Up & Set Goals",
    description:
      "Tell us about your goals, schedule, and work style. Our algorithm finds your perfect match.",
  },
  {
    id: 2,
    image: "/create-session.svg",
    title: "Create or Join Session",
    description:
      "Begin focused sessions together. Set intentions, track time, and stay accountable.",
  },
  {
    id: 3,
    image: "/track-celebrate.svg",
    title: "Track & Celebrate",
    description:
      "Monitor progress, earn badges, climb leaderboards, and unlock exclusive rewards.",
  },
];

export function HowItWorks() {
  return (
    <div className="w-full">
      <Header
        tag="How it works"
        title="From solo to paired productivity"
        description="From solo to paired productivity in four simple steps."
      />

      <div className="w-[93%] mx-auto py-12">
        <div className="w-full flex flex-col md:flex-row justify-between items-start">
          <div>
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
                  <Image
                    src={item.image}
                    alt={item.image}
                    width={84}
                    height={84}
                    className={`${
                      item.id === 1 ? "w-24" : "w-20"
                    } h-20 mx-auto`}
                  />
                  <div className="text-center">
                    <h3 className="mt-4 text-lg font-semibold text-[#353131]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-[#72716F]">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
}