"use client";
import Image from "next/image";
import { useWaitlistModal } from "./waitlist-provider";

export function Hero() {
	const { openModal } = useWaitlistModal();
	return (
    <>
      <div className="mt-8 mb-14 md:mb-20 relative w-[93%] mx-auto max-lg:pb-8 py-16 bg-[#F0F0F0] flex flex-col items-center justify-center overflow-hidden">
        <div
          className="w-full absolute inset-0 bg-cover bg-center h-full rounded-4xl overflow-hidden"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />
        {/* title and description section */}
        <div className="z-[11] mt-7 md:mt-10">
          <div className="absolute inset-0">
            <Image
              src={`/trophy.svg`}
              alt="trophy"
              width={100}
              height={100}
              priority
              className={`w-[55px] lg:w-[88px] top-10 md:top-12 absolute left-[-1rem] md:left-[5vw]`}
            />

            <Image
              src={`/bulb.svg`}
              alt="buld"
              width={100}
              height={100}
              priority
              className={`w-[55px] lg:w-[88px] absolute top-10 md:top-12 right-[-1rem] md:right-[5vw]`}
            />
          </div>
          <h1 className="text-2xl md:text-4xl xl:text-5xl font-semibold text-center text-[#222221]">
            Like Minds. One Mission.{" "}
          </h1>
          <p className="mt-4 mx-auto max-md:w-[95%] text-sm md:text-lg text-center text-[#696363]">
            Transform solo productivity into shared accountability. Lock in with
            a partner, <br className="max-lg:hidden" /> crush your goals, and
            build unstoppable momentum together.{" "}
          </p>

          {/* button section */}
          <div className="z-[11] relative mt-7 flex flex-row items-stretch justify-center space-x-4 md:space-x-7">
            {/* <button
              type="button"
              className="z-[11] relative bg-white py-2 md:py-3 px-6 text-center font-medium flex items-center justify-center gap-1 text-xs md:text-sm border border-[#E0E0DE] lg:hover:bg-opacity-90 transition-all duration-300 rounded-xl lg:hover:bg-[#eee] cursor-pointer"
            >
              Watch Demo
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="max-md:w-6"
              >
                <title>Demo svg</title>
                <path
                  d="M16 28.5C22.6274 28.5 28 23.1274 28 16.5C28 9.87258 22.6274 4.5 16 4.5C9.37258 4.5 4 9.87258 4 16.5C4 23.1274 9.37258 28.5 16 28.5Z"
                  fill="#FFC727"
                />
                <path
                  d="M16 28.5C22.6274 28.5 28 23.1274 28 16.5C28 9.87258 22.6274 4.5 16 4.5C9.37258 4.5 4 9.87258 4 16.5C4 23.1274 9.37258 28.5 16 28.5Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.6665 16.5L14.6665 18.8093V14.1907L18.6665 16.5Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </button> */}
            {/* <Link
              target="_blank"
              href="https://lockedin-two.vercel.app/register"
              className="z-[11] relative bg-[#72D560] py-2 md:py-3 px-6 text-center font-medium flex items-center justify-center gap-1 text-xs md:text-sm lg:hover:opacity-80 transition-all duration-300 rounded-xl cursor-pointer"
            >
              Start now <ArrowRight className="max-md:w-5" />
            </Link> */}
            <button
              type="submit"
              onClick={() => openModal("waitlist")}
              className="bg-[#72D560] py-3 px-6 text-center font-medium flex items-center justify-center text-xs md:text-sm hover:opacity-90 transition-all duration-300 rounded-xl cursor-pointer"
            >
              Join Waitlist
            </button>
          </div>
        </div>

        {/* profile designs section */}
        <div className="mt-2 relative w-full max-lg:top-[-1rem] lg:px-16 z-10 flex items-center justify-between space-x-6">
          <div className="max-lg:hidden">
            <Image
              width={367}
              height={463}
              src="/hero-profile-one.png"
              alt="Profile One"
              className="relative object-contain svg-smooth"
              quality={100}
              priority
            />
          </div>
          <div className="w-fit lg:hidden">
            <Image
              width={94}
              height={94}
              src="/hero-profile-one-mobile.png"
              alt="Profile One"
              className="relative object-contain svg-smooth"
              quality={100}
              priority
            />
          </div>
          <div className="lg:hidden">
            <Image
              width={107}
              height={92}
              className="relative max-md:w-14 max-lg:w-16 top-12 lg:top-8 "
              src="/dart.svg"
              alt="Dart"
              priority
            />
          </div>
          <div className="flex items-center gap-4">
            <Image
              width={107}
              height={92}
              className="relative top-12 lg:top-8 left-[-2rem] max-lg:hidden"
              src="/dart.svg"
              alt="Dart"
              priority
            />
            <Image
              width={494}
              height={298}
              src="/hero-profile-two.png"
              alt="Profile Two"
              className="relative object-contain svg-smooth max-lg:hidden"
              quality={100}
              priority
            />
            <Image
              width={94}
              height={94}
              src="/hero-profile-two-mobile.png"
              alt="Profile Two"
              className="relative object-contain svg-smooth lg:hidden"
              quality={100}
              priority
            />
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-[#CECECE]" />
    </>
  );
}
