"use client"
import { useState, useEffect } from "react";
import { Header } from "../ui/header";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragStart, setDragStart] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

   const handleDragStart = (e:any) => {
     setDragStart(e.clientX || e.touches[0].clientX);
   };

   const handleDragEnd = (e:any) => {
     if (!dragStart) return;

     const dragEnd = e.clientX || e.changedTouches[0].clientX;
     const dragDistance = dragStart - dragEnd;
     const threshold = 50; // minimum swipe distance

     if (Math.abs(dragDistance) > threshold) {
       if (dragDistance > 0) {
         // Swiped left, go to next
         setCurrentIndex((prev) => (prev + 1) % data.length);
       } else {
         // Swiped right, go to previous
         setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
       }
     }

     setDragStart(null);
   };

  return (
    <div className="w-full" id="howitworks">
      <Header
        tag="How it works"
        title="From solo to paired productivity"
        description="From solo to paired productivity in four simple steps."
      />

      <div className="w-[93%] mx-auto py-12">
        <div className="w-full hidden md:flex flex-col md:flex-row justify-between items-start">
          {data.map((item) => (
            <div
              key={item.id}
              className="w-full h-full flex items-center gap-3"
            >
              <div
                key={item.id}
                className={`mb-8 ${
                  item.id < data.length ? "" : ""
                } flex items-center`}
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
                    <h3 className="mt-4 md:text-lg font-semibold text-[#353131]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-[#72716F]">{item.description}</p>
                  </div>
                </div>

                {item.id < data.length && (
                  <div className="flex items-center justify-center max-md:hidden">
                    <MoveRight size={35} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tab Slider View */}
        <div
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
          style={{ userSelect: "none" }}
          className="md:hidden w-full relative overflow-hidden h-[260px]"
        >
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="absolute w-full px-4"
            >
              <div className="flex flex-col items-center text-center">
                <Image
                  src={data[currentIndex].image}
                  alt={data[currentIndex].image}
                  width={84}
                  height={84}
                  className={`${
                    currentIndex === 0 ? "w-24" : "w-20"
                  } h-20 mx-auto`}
                />
                <h3 className="mt-4 text-lg font-semibold text-[#353131]">
                  {data[currentIndex].title}
                </h3>
                <p className="mt-4 text-[#72716F]">
                  {data[currentIndex].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bullet Indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
            {data.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`rounded-full transition-colors ${
                  currentIndex === index
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
