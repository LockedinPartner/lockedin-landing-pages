"use client";
import { Header } from "../ui/header";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
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
      setDirection(1); // Auto-advance always goes forward
      setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDragEnd = (event: any, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      // Swiped right - go backward
      setDirection(-1);
      setCurrentStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
    } else if (info.offset.x < -swipeThreshold) {
      // Swiped left - go forward
      setDirection(1);
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

	const currentStepData = steps[currentStep];

	return (
    <div className="w-full mt-8 overflow-x-hidden" id="howitworks">
      <Header
        title=" Built for Ambitious People"
        description="Whether you're studying, working remotely, or pursuing creative projects, LockedIn connects you with like-minded individuals."
      />

      <div className="w-[93%] mx-auto max-lg:pb-6 py-12 max-lg:px-3">
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="space-y-2 md:space-y-4 relative max-lg:hidden">
            {/* Vertical line */}
            {/* <div className="absolute left-[11px] top-0 h-full w-px bg-[#FFC727]"></div> */}
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className="mt-6 md:mt-9 flex items-center gap-2 relative cursor-pointer"
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
            <div className="w-[93%] lg:w-[480px] h-[207px] lg:h-[320px] bg-[#72D560] p-1 lg:p-3 rounded-2xl max-lg:hidden">
              <motion.div
                key={currentStepData.id}
                initial={{ opacity: 0, y: -10 * direction }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 * direction }}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                }}
                className="relative max-lg:left-2 max-lg:top-1 w-full lg:w-[480px] h-[207px] lg:h-[320px] rounded-2xl"
              >
                <Image
                  width={480}
                  height={320}
                  src={currentStepData.image}
                  alt={currentStepData.title}
                  priority
                  className="w-full lg:w-[480px] h-[207px] lg:h-[320px] object-cover rounded-2xl"
                />
              </motion.div>
            </div>
          </AnimatePresence>

          <div className="max-w-[366px] max-lg:hidden">
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

          {/* Mobile Image Slider with Text Overlay */}
          <div className="relative w-full max-w-[580px] mx-auto h-[227px] md:h-[340px] lg:hidden">
            <div className="absolute  overflow-hidden z-0" />

            <AnimatePresence mode="sync" custom={direction}>
              <motion.div
                key={currentStep}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute inset-0 bg-[#72D560] rounded-2xl z-10"
              >
                {/* Image Container */}
                <div className="relative left-2.5 top-2.5 h-full w-full">
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/30 z-10 rounded-2xl" />

                  {/* Image */}
                  <Image
                    fill
                    src={currentStepData.image}
                    alt={currentStepData.title}
                    priority
                    className="relative z-[1] object-cover w-full h-[207px] md:h-[320px] rounded-2xl "
                  />
                </div>

                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.2,
                      duration: 0.6,
                      ease: "easeInOut",
                    }}
                  >
                    <h2 className="text-[#F5F5F5] text-base font-semibold mb-2">
                      {currentStepData.title}
                    </h2>
                    <p className="text-[#F3F2F2] text-sm font-thin">
                      {currentStepData.rightText}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bullet Indicators */}
          <div className="mt-3 lg:hidden flex items-center justify-center gap-2">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`rounded-full transition-colors ${
                  currentStepData.id === step.id
                    ? "bg-[#72D560] w-2.5 h-2.5"
                    : "bg-[#D9D9D9] w-2 h-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
