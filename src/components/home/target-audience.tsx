"use client"
import { Header } from "../ui/header";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from 'next/image';
import { FlowbiteArrowRight } from "../icons/flowbiteArrowRight";

const steps = [
  {
    id: 1,
    image: "/target-1.png",
    title: "University Students",
    description:
      "Tell us about your goals, schedule, and work style. Our algorithm finds your perfect match.",
    rightText:
      "Study sessions, project work, exam prep - stay focused with fellow students who understand the grind.",
  },
  {
    id: 2,
    image: "/target-2.png",
    title: "Remote Workers",
    description:
      "Begin focused sessions together. Set intentions, track time, and stay accountable.",
    rightText:
      "Remote work, freelancing, or side hustles - collaborate with peers who share your ambitions.",
  },
  {
    id: 3,
    image: "/target-1.png",
    title: "Creative Professionals",
    description:
      "Monitor progress, earn badges, climb leaderboards, and unlock exclusive rewards.",
    rightText:
      "Creative projects, writing, or personal goals - find inspiration and accountability in a supportive community",
  },
  {
    id: 4,
    image: "/target-3.png",
    title: "Goal-Oriented Acheivers",
    description:
      "Track your progress, celebrate achievements, and stay motivated with like-minded partners.",
    rightText:
      "Whether you're pursuing fitness, learning, or personal growth, LockedIn helps you stay on track.",
  },
];

export function TargetAudience() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentStepData = steps[currentStep];

  return (
    <div className="w-full mt-8" id="howitworks">
      <Header
        title=" Built for Ambitious People"
        description="Whether you're studying, working remotely, or pursuing creative projects, LockedIn connects you with like-minded individuals."
      />

      <div className="w-[93%] mx-auto py-12">
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 md:space-y-4 relative">
            {/* Vertical line */}
            {/* <div className="absolute left-[11px] top-0 h-full w-px bg-[#FFC727]"></div> */}
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className="mt-6 md:mt-9 flex items-center gap-2 relative"
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: currentStep === index ? 1 : 0.5,
                  x: 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                onClick={() => {
                  setDirection(currentStep > index ? -1 : 1);
                  setCurrentStep(index);
                }}
              >
                {/* Arrow indicator */}
                {currentStep === index && (
                  <motion.div
                    className="absolute -left-[1px]"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 15,
                    }}
                  >
                    <FlowbiteArrowRight color="#FFC727" fontSize={20} />
                  </motion.div>
                )}
                <motion.p
                  whileHover={{ scale: currentStep === index ? 1 : 1.05 }}
                  className={`font-semibold text-2xl ml-6 ${
                    currentStep === index ? "text-[#222221]" : "text-[#B1AEB7]"
                  }`}
                >
                  {step.title}
                </motion.p>
              </motion.div>
            ))}
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            <div className="w-[480px] h-[320px] bg-[#72D560] p-3 rounded-2xl">
              <motion.div
                key={currentStepData.id}
                initial={{ opacity: 0, y: -10 * direction }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 * direction }}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                }}
                className="relative w-[480px] h-[320px] rounded-2xl"
              >
                <Image
                  width={480}
                  height={320}
                  src={currentStepData.image}
                  alt={currentStepData.title}
                  priority
                  className="w-[480px] h-[320px] object-cover rounded-2xl"
                />
              </motion.div>
            </div>
          </AnimatePresence>

          <div className="max-w-[366px]">
            <div className="h-12">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentStepData.id}
                  className="step-bottom-text text-[#222221] text-2xl font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                >
                  {currentStepData.rightText}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}