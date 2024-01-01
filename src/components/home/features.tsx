import { Header } from "../ui/header";
import Image from "next/image";


export function Features() {
  return (
    <div className="w-full" id="features">
      <Header
        tag="Features"
        title="Everything You Need to Lock In"
        description="Powerful features designed to turn your solo grind into a shared journey of success."
      />

      <div className="w-[93%] mx-auto py-12 mt-8">

        <div className="w-full flex flex-col md:flex-row gap-6 justify-center md:items-stretch">
          <div className="w-full md:max-w-[480px] bg-[#F5F5F5] p-5 border border-[#E7E4E4] rounded-2xl">
            <div className="w-full h-[262px] rounded-2xl">
              <Image
                src="/lock-sessions.png"
                alt="Focus"
                width={480}
                height={254}
                className="w-full object-cover h-[262px] rounded-2xl mb-8"
              />
            </div>

            <div>
              <h3 className="mt-4 text-lg font-semibold text-[#353131]">
                Lock Sessions
              </h3>
              <p className="mt-4 text-[#72716F] lg:w-[80%]">
                Start focused work sessions with your partner. Real-time sync
                keeps you both accountable.
              </p>
            </div>
          </div>

          <div className="w-full md:max-w-[808px] bg-[#F5F5F5] p-5 border border-[#E7E4E4] rounded-2xl">
            <div className="w-full h-[254px] rounded-2xl">
              <Image
                src="/badges.png"
                alt="Focus"
                width={480}
                height={262}
                className="w-full object-cover h-[254px] rounded-2xl mb-8"
              />
            </div>

            <div>
              <h3 className="mt-4 text-lg font-semibold text-[#353131]">
                Badge, Rewards and Leaderboard
              </h3>
              <p className="mt-4 text-[#72716F] lg:w-[80%]">
                Earn badges for streaks, milestones, and helping others. .
                Compete with friends and the community. Daily, weekly, and
                all-time rankings keep you motivated.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 w-full flex flex-col md:flex-row gap-6 justify-center md:items-stretch">
          <div className="w-full md:max-w-[808px] bg-[#F5F5F5] p-5 border border-[#E7E4E4] rounded-2xl">
            <div className="w-full h-[254px] rounded-2xl">
              <Image
                src="/badges.png"
                alt="Focus"
                width={480}
                height={254}
                className="w-full object-cover h-[254px] rounded-2xl mb-8"
              />
            </div>

            <div>
              <h3 className="mt-4 text-lg font-semibold text-[#353131]">
                Partner Network
              </h3>
              <p className="mt-4 text-[#72716F] lg:w-[80%]">
                Connect with your lock partners, share progress, and build
                lasting accountability relationships.
              </p>
            </div>
          </div>

          <div className="w-full md:max-w-[480px] p-5 border border-[#008751] border-dashed border-spacing-3 rounded-2xl">
            <div className="w-full h-[262px] rounded-2xl">
              <Image
                src="/merch.png"
                alt="Focus"
                width={480}
                height={262}
                className="w-full object-cover h-[262px] rounded-2xl mb-8"
              />
            </div>

            <div>
              <h3 className="mt-4 text-lg font-semibold text-[#353131]">
                Exclusive Merch
              </h3>
              <p className="mt-4 text-[#72716F] lg:w-[80%]">
                Earn badges for streaks, milestones, and helping others. .
                Compete with friends and the community. Daily, weekly, and
                all-time rankings keep you motivated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}