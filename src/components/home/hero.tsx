"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  // Smooth spring physics for scroll animations
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Parallax effects
  const phoneY = useTransform(smoothScrollY, [0, 500], [0, -150]);
  const sideImagesY = useTransform(smoothScrollY, [0, 500], [0, -80]);
  const backgroundY = useTransform(smoothScrollY, [0, 500], [0, 50]);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: any) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Floating animation for images
  const floatingVariants = {
    animate: (i: any) => ({
      y: [0, -20, 0],
      rotate: [-2, 2, -2],
      transition: {
        duration: 3 + i * 0.5,
        repeat: Infinity,
        // ease: "easeInOut",
      },
    }),
  };

  // Magnetic effect for buttons
  const magneticEffect = {
    x: mousePosition.x * 0.1,
    y: mousePosition.y * 0.1,
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="mt-8 mb-14 md:mb-20 relative w-[93%] mx-auto max-lg:pb-8 py-16 lg:pb-0 rounded-xl lg:rounded-[2.5rem] flex flex-col items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#D7EFD7" }}
      >
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 rounded-[2.5rem] overflow-hidden"
          style={{ y: backgroundY }}
        >
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(114, 213, 96, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(114, 213, 96, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(114, 213, 96, 0.3) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-400 rounded-full opacity-20"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{
              y: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
              ],
              x: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
              ],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.2,
            }}
          />
        ))}

        {/* Title and description section */}
        <div className="z-[11] mt-7 md:mt-10 relative">
          {/* Animated title */}
          <motion.h1
            className="text-2xl md:text-4xl xl:text-5xl font-semibold text-center text-[#222221]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
          >
            {["Like", "Minds.", "One", "Mission."].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + i * 0.1,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Animated description */}
          <motion.p
            className="mt-4 mx-auto max-md:w-[95%] text-sm md:text-lg text-center font-light text-[#696363]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Transform solo productivity into shared accountability. Lock in
              with a partner,{" "}
            </motion.span>
            <br className="max-lg:hidden" />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              crush your goals, and build unstoppable momentum together.
            </motion.span>
          </motion.p>

          {/* Animated button */}
          <motion.div
            className="z-[11] relative mt-7 flex flex-row items-stretch justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 1.4,
              ease: [0.34, 1.56, 0.64, 1],
            }}
          >
            <motion.a
              href="https://play.google.com/store/apps/details?id=com.lockedinpartner.lockedin&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-white border border-[#CECFCF] py-3.5 px-6 text-center font-medium flex items-center justify-center text-xs md:text-sm rounded-xl cursor-pointer overflow-hidden"
              whileHover={{
                scale: 1.05,
                // boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              style={magneticEffect}
            >
              <motion.div
                className="absolute inset-0 bg-white opacity-0"
                whileHover={{ opacity: 0.1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: -5 }}
                transition={{ duration: 0.3 }}
              >
                Download App
              </motion.span>
            </motion.a>
          </motion.div>
        </div>

        {/* Profile designs section with advanced animations */}
        <motion.div
          className="mt-2 top-[-3.5rem] relative w-full max-lg:top-[-1rem] px-5 lg:px-16 z-10"
          style={{ y: phoneY }}
        >
          <div className="w-full">
            {/* Top row images */}
            <motion.div
              className="w-full flex justify-between mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.div
                custom={0}
                variants={floatingVariants}
                animate="animate"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3 },
                }}
                style={{
                  x: useTransform(smoothScrollY, [0, 500], [0, -30]),
                  rotateZ: mousePosition.x * 0.5,
                }}
              >
                <motion.img
                  src="/hero-1.png"
                  alt="Hero 1"
                  className="w-[80px] lg:w-[173px] object-contain drop-shadow-2xl"
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                />
              </motion.div>

              <motion.div
                custom={1}
                variants={floatingVariants}
                animate="animate"
                whileHover={{
                  scale: 1.1,
                  rotate: -5,
                  transition: { duration: 0.3 },
                }}
                style={{
                  x: useTransform(smoothScrollY, [0, 500], [0, 30]),
                  rotateZ: mousePosition.x * -0.5,
                }}
              >
                <motion.img
                  src="/hero-2.png"
                  alt="Hero 2"
                  className="w-[80px] lg:w-[173px] object-contain drop-shadow-2xl"
                  initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 1.7 }}
                />
              </motion.div>
            </motion.div>

            {/* Center row with phone */}
            <motion.div
              className="lg:-mt-20 w-full flex justify-center gap-2 lg:gap-16 xl:gap-20 items-end"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <motion.div
                custom={2}
                variants={floatingVariants}
                animate="animate"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3 },
                }}
                style={{
                  y: useTransform(smoothScrollY, [0, 500], [0, -50]),
                  rotateZ: mousePosition.x * 0.3,
                }}
              >
                <motion.img
                  src="/hero-3.png"
                  alt="Hero 3"
                  className="w-[80px] lg:w-[173px] object-contain drop-shadow-2xl mb-6"
                  initial={{ opacity: 0, scale: 0.5, x: -50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.8 }}
                />
              </motion.div>

              {/* Main phone image with spotlight effect */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-green-50 to-transparent opacity-20 blur-3xl"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.img
                  src="/hero-phone.png"
                  alt="Hero Phone"
                  className="w-[200px] lg:w-[414px] object-contain drop-shadow-2xl relative z-10"
                  initial={{ opacity: 0, y: 100, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 1.2,
                    delay: 1.5,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  style={{
                    rotateY: mousePosition.x * 0.5,
                    rotateX: mousePosition.y * -0.5,
                  }}
                />
                {/* Glowing ring effect */}
                <motion.div
                  className="hidden absolute inset-0 !border-[1px] border-green-50 opacity-0 rounded-full"
                  animate={{
                    opacity: [0, 0.5, 0],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              <motion.div
                custom={3}
                variants={floatingVariants}
                animate="animate"
                whileHover={{
                  scale: 1.1,
                  rotate: -5,
                  transition: { duration: 0.3 },
                }}
                style={{
                  y: useTransform(smoothScrollY, [0, 500], [0, -50]),
                  rotateZ: mousePosition.x * -0.3,
                }}
              >
                <motion.img
                  src="/hero-4.png"
                  alt="Hero 4"
                  className="w-[80px] lg:w-[173px] object-contain drop-shadow-2xl mb-6"
                  initial={{ opacity: 0, scale: 0.5, x: 50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.9 }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Shine effect overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${50 + mousePosition.x}% ${
              50 + mousePosition.y
            }%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          }}
        />
      </motion.div>

      <motion.div
        className="w-full h-px bg-[#CECECE]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 2 }}
      />
    </>
  );
}
