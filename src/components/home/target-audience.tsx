"use client";
import { Header } from "../ui/header";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Chinedu Okafor",
    country: "Nigeria",
    testimonial: "LockedIn helped me stay consistent with my writing goals. The accountability alone changed everything for me.",
    initials: "CO",
  },
  {
    id: 2,
    name: "Ama Serwaa",
    country: "Ghana",
    testimonial: "The community keeps me focused. I get things done faster and with more energy.",
    initials: "AS",
  },
  {
    id: 3,
    name: "Thabo Mokoena",
    country: "South Africa",
    testimonial: "I finally finished my design portfolio because I wasn't working alone. The support here is unmatched.",
    initials: "TM",
  },
  {
    id: 4,
    name: "Aisha Suleiman",
    country: "Kenya",
    testimonial: "The work sessions keep me disciplined. I love how easy it is to track my progress.",
    initials: "AS",
  },
  {
    id: 5,
    name: "Blessing Ncube",
    country: "Zimbabwe",
    testimonial: "LockedIn gave me structure at a time I really needed it. Now my personal projects are moving again.",
    initials: "BN",
  },
];

export function TargetAudience() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentStep((prevStep) => (prevStep + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDragEnd = (event: any, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      setDirection(-1);
      setCurrentStep((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    } else if (info.offset.x < -swipeThreshold) {
      setDirection(1);
      setCurrentStep((prev) => (prev + 1) % testimonials.length);
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

  const currentTestimonial = testimonials[currentStep];

  return (
    <div className="w-full mt-8 overflow-x-hidden" id="testimonials">
      <Header
        title=" Built for Ambitious People"
        description="Here's what our beta testers are saying…"
      />

      <div className="w-[93%] mx-auto max-lg:pb-6 py-12 max-lg:px-3">
        <div className="w-full flex justify-center">
          {/* Testimonial Carousel */}
          <div className="relative w-full max-w-[580px] lg:max-w-[680px] h-auto">
            <AnimatePresence mode="wait" custom={direction}>
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
                className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-b-4 border-[#3ED06E]"
              >
                {/* Avatar and Info */}
                <div className="flex items-center gap-4 mb-6">
                  {/* Circular Avatar */}
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#3ED06E] to-[#2AB857] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg md:text-xl">
                      {currentTestimonial.initials}
                    </span>
                  </div>

                  {/* Name and Country */}
                  <div>
                    <h3 className="text-[#222221] font-semibold text-lg md:text-xl">
                      {currentTestimonial.name}
                    </h3>
                    <p className="text-[#6B7280] text-sm md:text-base">
                      {currentTestimonial.country}
                    </p>
                  </div>
                </div>

                {/* Testimonial Text */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-[#374151] text-base md:text-lg leading-relaxed"
                >
                  "{currentTestimonial.testimonial}"
                </motion.p>

                {/* Green accent underline */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "60px" }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="h-1 bg-[#3ED06E] rounded-full mt-6"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bullet Indicators */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(currentStep > index ? -1 : 1);
                setCurrentStep(index);
              }}
              className={`rounded-full transition-all duration-300 ${currentTestimonial.id === testimonial.id
                ? "bg-[#3ED06E] w-8 h-2.5"
                : "bg-[#D9D9D9] w-2.5 h-2.5 hover:bg-[#B1AEB7]"
                }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
