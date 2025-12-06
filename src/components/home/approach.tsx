"use client";
import { RiP2pLine } from "../icons/p2p";
import { Goals } from "../icons/goals";
import { GameHandle } from "../icons/gameHandle";
import { Header } from "../ui/header";
import { motion } from "framer-motion";

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

      <div className="w-[93%] mx-auto py-8 flex flex-col lg:flex-row-reverse lg:items-end">
        {/* <div className="w-full flex flex-col md:flex-row lg:grid lg:grid-cols-2 justify-between items-start">
          {data.map((item) => (
            <div
              key={item.id}
              className={`mb-8 ${item.id < data.length ? "lg:border-0" : ""}
			     ${item.id === 3 ? "lg:col-span-2" : "lg:col-span-1"}
			  max-lg:border-l-2 border-[#E1E0E2] flex items-start`}
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
                  <p className="mt-2 lg:mt-4 text-[#72716F] lg:w-[90%]">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        <div className="w-full flex flex-col md:flex-row lg:grid lg:grid-cols-2 justify-between items-start">
          {data.map((item, index) => (
            <motion.div
              key={item.id}
              className={`mb-8 ${item.id < data.length ? "lg:border-0" : ""}
                ${item.id === 3 ? "lg:col-span-2" : "lg:col-span-1"} 
                max-lg:border-l-2 border-[#E1E0E2] flex items-start`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <div className="px-5 md:px-8 lg:px-10">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1 + 0.2,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <item.icon
                    color="#72D560"
                    className="w-8 h-8 text-primary mr-4"
                  />
                </motion.div>
                <div>
                  <motion.h3
                    className="mt-2 lg:mt-4 md:text-lg font-semibold text-[#353131]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1 + 0.3,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    className="mt-2 lg:mt-4 text-[#72716F] lg:w-[90%]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1 + 0.4,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    {item.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <div className="w-full bg-transparent h-auto rounded-md md:rounded-lg lg:rounded-3xl px-3 pt-3 md:px-8 md:pt-8 pb-0 overflow-hidden">
          <div className="w-full relative top-2 lg:top-4">
            <Image
              src="/phone.png"
              alt="Focus"
              width={610}
              height={596}
              className="w-[250px] lg:w-[500px] object-contain max-lg:mx-auto h-auto rounded-md md:rounded-lg lg:rounded-3xl border"
            />
          </div>
        </div> */}

        <motion.div
          className="w-full bg-transparent h-auto rounded-md md:rounded-lg lg:rounded-3xl px-3 pt-3 md:px-8 md:pt-8 pb-0 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <motion.div
            className="w-full relative top-2 lg:top-4"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <img
              src="/phone.png"
              alt="Focus"
              className="w-[250px] lg:w-[500px] object-contain max-lg:mx-auto h-auto rounded-md md:rounded-lg lg:rounded-3xl"
            />
          </motion.div>
        </motion.div>
      </div>
      <div className="mt-6 w-full h-px bg-[#CECECE]" />
    </div>
  );
}
