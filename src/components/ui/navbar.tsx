"use client";
import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useWaitlistModal } from "../home/waitlist-provider";
import { Apple } from "../icons/apple";
import { Playstore } from "../icons/playstore";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { openModal } = useWaitlistModal();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-[#F7F7F7] w-[93%] lg:w-[85vw] mx-auto border border-[#ECECEC] py-3 px-6 md:p-4 rounded-2xl mt-5 md:mt-7">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-black text-base md:text-xl font-semibold">
            LockedIN
          </div>

          <div className="relative left-10 flex space-x-10 max-lg:hidden">
            <Link
              href="/#features"
              className="text-[#222221] hover:text-[#3BA229] squiggly-underline "
            >
              Features
            </Link>

            <Link
              href="/#solution"
              className="text-[#222221] hover:text-[#3BA229] "
            >
              Solution
            </Link>

            <Link
              href="/#howitworks"
              className="text-[#222221] hover:text-[#3BA229] "
            >
              How it works
            </Link>

            <Link
              href="https://lockedinpartner.substack.com/"
              target="_blank"
              className="text-[#222221] hover:text-[#3BA229] "
            >
              Blog
            </Link>
          </div>

          {/* <div className="flex space-x-4 max-lg:hidden">
            <Link
              target="_blank"
              href="https://lockedin-two.vercel.app/login"
              className="bg-white py-3 px-6 text-center flex items-center justify-center text-sm border border-[#F5F5F5] hover:[#fafafa] transition-all duration-300 rounded-xl"
            >
              Login
            </Link>
            <Link
              target="_blank"
              href="https://lockedin-two.vercel.app/register"
              className="bg-[#D7EAD7] py-3 px-6 text-center flex items-center justify-center text-sm hover:opacity-90 transition-all duration-300 rounded-xl"
            >
              Start now
            </Link>
          </div> */}

          <Link
            href="https://play.google.com/store/apps/details?id=com.lockedinpartner.lockedin&hl=en"
            target="_blank"
            className="max-lg:hidden bg-[#D7EAD7] border border-[#CDE5CD] py-3 px-3 text-center flex items-center justify-center gap-2 text-sm text-[#037D03] font-semibold hover:opacity-90 transition-all duration-300 rounded-xl cursor-pointer"
            style={{
              boxShadow: "0px 2px 4px 0px #2EC66B0A",
            }}
          >
            <div className="flex items-center justify-center gap-3">
              <Apple /> <div className="w-px h-6 bg-[#81BE81]" /> <Playstore />
            </div>
            Get App
          </Link>

          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="lg:hidden bg-[#5CBE4A] font-medium py-2 px-4 md:py-3 md:px-6 text-center flex items-center justify-center text-xs md:text-sm hover:opacity-90 transition-all duration-300 rounded-md cursor-pointer"
          >
            Menu
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
      >
        <div
          className={`fixed top-0 right-0 h-full w-full max-w-sm bg-[#D7EAD7] z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex flex-col h-full">
            {/* Close Button */}
            <div className="flex justify-end p-6">
              <button
                onClick={toggleMenu}
                className="text-black text-xl font-light w-8 h-8 border border-[#3BA229] flex items-center justify-center hover:opacity-70 transition-opacity rounded-full"
              >
                <X strokeWidth={1.5} size={18} />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col text-center space-y-8 px-8 mt-16">
              <Link
                href="/#features"
                onClick={toggleMenu}
                className="text-black text-2xl font-medium hover:opacity-80 transition-opacity transform hover:translate-x-1 duration-200"
              >
                Features
              </Link>
              <Link
                href="/#solution"
                onClick={toggleMenu}
                className="text-black text-2xl font-medium hover:opacity-80 transition-opacity transform hover:translate-x-1 duration-200"
              >
                Solution
              </Link>
              <Link
                href="/#howitworks"
                onClick={toggleMenu}
                className="text-black text-2xl font-medium hover:opacity-80 transition-opacity transform hover:translate-x-1 duration-200"
              >
                How it works
              </Link>
              <Link
                href="https://lockedinpartner.substack.com/"
                target="_blank"
                onClick={toggleMenu}
                className="text-black text-2xl font-medium hover:opacity-80 transition-opacity transform hover:translate-x-1 duration-200"
              >
                Blog
              </Link>
            </div>

            {/* Action Buttons */}
            {/* <div className="flex flex-col space-y-4 px-8 mt-16">
							<Link
								target="_blank"
								href="https://lockedin-two.vercel.app/login"
								onClick={toggleMenu}
								className="bg-white text-black py-4 px-6 text-center text-lg font-medium rounded-xl hover:opacity-90 transition-all duration-200 hover:scale-105"
							>
								Login
							</Link>
							<Link
								target="_blank"
								href="https://lockedin-two.vercel.app/register"
								onClick={toggleMenu}
								className="bg-[#5CBE4A] text-black py-4 px-6 text-center text-lg font-medium rounded-xl hover:opacity-90 transition-all duration-200 hover:scale-105"
							>
								Start now
							</Link>
						</div> */}
            <Link
              href="https://play.google.com/store/apps/details?id=com.lockedinpartner.lockedin&hl=en"
              target="_blank"
              onClick={() => {
                toggleMenu();
              }}
              className="bg-[#5CBE4A] mx-8 mt-16 text-black py-4 px-6 text-center text-lg font-medium rounded-xl hover:opacity-90 transition-all duration-200 hover:scale-105"
            >
              Get App
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
