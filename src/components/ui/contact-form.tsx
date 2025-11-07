import Link from "next/link";
import { Mail } from "../icons/mail";
import { Comments } from "../icons/comments";

export function ContactForm() {
  return (
    <form className="w-full lg:max-w-[392px] mx-auto p-6 bg-[#FCFCFC] rounded-2xl md:rounded-lg">
      <h2 className="text-xs mb-4 text-[#72D560]">CONTACT</h2>

      <div className="max-lg:font-medium text-lg lg:text-xl lg:tracking-tighter">
        <p className="text-[#222221] lg:w-[80%] mb-2">
          We're open to partnership, sponsorship and cracked talents to join our
          team.
          <span className="text-[#A9A5B1]">
            &nbsp;Leave a message for us.
          </span>{" "}
        </p>
      </div>
      <div className="relative mt-4 mb-4 space-y-3">
        {/* <label
          className="block text-sm font-medium text-gray-700 mb-2"
          htmlFor="email"
        >
          Email
        </label> */}
        <input
          type="email"
          id="email"
          placeholder="Email"
          className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#72D560] text-sm placeholder:text-sm "
          required
        />
        <div className="absolute top-[25%] right-3">
          <Mail color="black" />
        </div>
      </div>
      <div className="mb-4 relative ">
        {/* <label
          className="block text-sm font-medium text-gray-700 mb-2"
          htmlFor="message"
        >
          Message
        </label> */}
        <textarea
          id="message"
          rows={3}
          placeholder="Comments, Feedback, Suggestions..."
          className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#72D560] text-sm placeholder:text-sm resize-none"
          required
        ></textarea>

        <div className="absolute top-[15%] right-3">
          <Comments color="black" />
        </div>
      </div>
      <button
        type="submit"
        disabled
        className="w-full mt-1 md:mt-3 bg-[#222221] disabled:opacity-70 disabled:cursor-not-allowed text-white text-sm font-semibold py-3 hover:opacity-90 transition-all duration-200 cursor-pointer rounded-xl"
      >
        Send a request
      </button>

      <p className="mt-3 md:mt-8">
        <Link
          target="_blank"
          href="/privacy"
          className="mt-8 text-[#222221]/40 text-xs md:text-sm hover:underline"
        >
          Privacy
        </Link>
      </p>
    </form>
  );
}
