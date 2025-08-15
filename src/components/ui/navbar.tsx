import Link from "next/link";

export function Navbar() {
  return (
    <nav className="bg-[#F7F7F7] w-[93%] lg:w-[85vw] mx-auto border border-[#ECECEC] py-3 px-6 md:p-4 rounded-2xl mt-5 md:mt-7">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-base md:text-xl font-semibold">LockedIn</div>

        <div className="relative left-10 flex space-x-10 max-lg:hidden">
          <Link
            href="/"
            className="text-[#222221] hover:text-[#72D560] squiggly-underline "
          >
            Features
          </Link>

          <Link
            href="/#solution"
            className="text-[#222221] hover:text-[#72D560] "
          >
            Solution
          </Link>

          <Link
            href="/#howitworks"
            className="text-[#222221] hover:text-[#72D560] "
          >
            How it works
          </Link>
        </div>

        <div className="flex space-x-4 max-lg:hidden">
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
            className="bg-[#72D560] py-3 px-6 text-center flex items-center justify-center text-sm hover:opacity-90 transition-all duration-300 rounded-xl"
          >
            Start now
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden bg-[#72D560] font-medium py-2 px-4 md:py-3 md:px-6 text-center flex items-center justify-center text-sm hover:opacity-90 transition-all duration-300 rounded-md cursor-pointer"
        >
          Menu
        </button>
      </div>
    </nav>
  );
}