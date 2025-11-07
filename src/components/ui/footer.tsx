import Link from "next/link";
import { ContactForm } from "./contact-form";
import { Twitter } from "../icons/twitter";
import { Youtube } from "../icons/youtube";
import { Instagram } from "../icons/instagram";
import { Facebook } from "../icons/facebook";

const socialLinks = [
  { name: "Facebook", url: "#", icon: Facebook },
  { name: "Instagram", url: "#", icon: Instagram },
  { name: "Youtube", url: "#", icon: Youtube },
  { name: "Twitter", url: "https://x.com/LockedInPartner", icon: Twitter },
];

export function Footer() {
  return (
    <footer className="mt-16 bg-[#72D560] py-8 md:py-12 lg:py-16 px-5 md:px-16 lg:px-24">
      <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-28">
        <ContactForm />

        <div className="w-full flex flex-col items-start justify-between gap-10">
          <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-16 max-lg:text-sm">
            <div>
              <h3 className="text-[#FFC727] font-semibold mb-3 text-xs">
                INFO
              </h3>
              <div className="flex flex-col space-y-2">
                <Link
                  href="#"
                  className="transition-colors lg:hover:text-primaryPurple lg:hover:underline"
                >
                  Company
                </Link>
                <Link
                  href="#"
                  className="transition-colors lg:hover:text-primaryPurple lg:hover:underline"
                >
                  Products
                </Link>
                <Link
                  href="#"
                  className="transition-colors lg:hover:text-primaryPurple lg:hover:underline"
                >
                  Engineering
                </Link>
                <Link
                  href="/privacy"
                  className="transition-colors lg:hover:text-primaryPurple lg:hover:underline"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/data-deletion"
                  className="transition-colors lg:hover:text-primaryPurple lg:hover:underline"
                >
                  Data Deletion
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-[#FFC727] font-semibold mb-3 text-xs uppercase">
                Contact us
              </h3>
              <div className="flex flex-col space-y-2">
                <Link
                  href="tel:+2347066247724"
                  className="transition-colors lg:hover:text-primaryPurple lg:hover:underline"
                >
                  +2347066247724
                </Link>
                <Link
                  href="tel:+2347063634353"
                  className="transition-colors lg:hover:text-primaryPurple lg:hover:underline"
                >
                  +2347063634353
                </Link>
                <Link
                  href="mailto:yourlockedinpartner@gmail.com"
                  className="transition-colors lg:hover:text-primaryPurple lg:hover:underline break-words"
                >
                  yourlockedinpartner@gmail.com
                </Link>
                <Link
                  href="#"
                  className="transition-colors lg:hover:text-primaryPurple lg:hover:underline"
                >
                  Nigeria
                </Link>
              </div>
            </div>

            <div className="text-black text-lg lg:text-2xl font-semibold lg:ml-auto">
              LockedIn
            </div>
          </div>

          {/* SOCIALS */}
          <div className="w-full flex flex-col lg:flex-row lg:items-center gap-5 justify-between">
            <div>
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  className="inline-flex items-center p-2 md:p-3 mr-5 gap-2 text-xs border border-[#222221]/10 hover:bg-[#222221]/10 transition-all duration-300 rounded-full cursor-pointer"
                >
                  <link.icon
                    color="#222221"
                    fontSize={20}
                    className="max-md:w-4"
                  />
                </Link>
              ))}
            </div>

            <div>
              <p className="text-[10px] md:text-xs text-[#151514] opacity-40">
                LockedIN © 2025 — Copyright
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
