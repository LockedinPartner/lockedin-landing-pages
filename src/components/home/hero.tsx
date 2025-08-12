import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <div className="mt-8 relative w-[93%] mx-auto py-16 bg-[#F0F0F0] flex flex-col items-center justify-center">
      <div
        className="w-full absolute inset-0 bg-cover bg-center h-full rounded-4xl overflow-hidden"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      />
      {/* title and description section */}
      <div className="relative z-10 mt-10">
        <div>
            
        </div>
        <h1 className="text-4xl xl:text-5xl font-semibold text-center text-[#222221]">
          Like Minds. One Mission.{" "}
        </h1>
        <p className="mt-4 mx-auto text-lg text-center text-[#696363]">
          Transform solo productivity into shared accountability. Lock in with a
          partner, <br className="max-lg:hidden" /> crush your goals, and build
          unstoppable momentum together.{" "}
        </p>

        {/* button section */}
        <div className="mt-7 flex items-center justify-center space-x-7 max-lg:hidden">
          <button
            type="button"
            className="bg-white py-3 px-6 text-center font-medium flex items-center justify-center gap-1 text-sm border border-[#F5F5F5] hover:bg-opacity-90 tranisition-all rounded-xl hover:bg-[#eee] cursor-pointer"
          >
            Watch Demo
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
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
          </button>
          <button
            type="button"
            className="bg-[#72D560] py-3 px-6 text-center font-medium flex items-center justify-center gap-1 text-sm hover:bg-opacity-90 tranisition-all rounded-xl cursor-pointer"
          >
            Start now <ArrowRight />
          </button>
        </div>
      </div>

      {/* profile designs section */}
      <div className="mt-2 w-full px-16 z-10 flex items-center justify-between space-x-6">
        <div>
          <Image
            width={367}
            height={463}
            src="/hero-profile-one.svg"
            alt="Profile One"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            width={107}
            height={92}
            className="relative lg:top-4 lg:left-[-2rem]"
            src="/dart.svg"
            alt="Dart"
          />
          <Image
            width={494}
            height={298}
            src="/hero-profile-two.svg"
            alt="Profile Two"
          />
        </div>
      </div>
    </div>
  );
}