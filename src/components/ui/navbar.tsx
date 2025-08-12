import Link from "next/link";

export function Navbar() {
  return (
    <nav className="bg-[#F7F7F7] w-[85vw] mx-auto border border-[#ECECEC] p-4 rounded-2xl mt-5 md:mt-7">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-lg font-bold">LockedIn</div>

        <div className="flex space-x-8 max-lg:hidden">
          <Link href="/" className="text-[#222221] hover:text-black ">
            Features
          </Link>

          <Link href="/#solution" className="text-[#222221] hover:text-black ">
            Solution
          </Link>

          <Link
            href="/#howitworks"
            className="text-[#222221] hover:text-black "
          >
            How it works
          </Link>
        </div>

        <div className="flex space-x-4 max-lg:hidden">
          <Link
            href="/login"
            className="bg-white py-3 px-6 text-center flex items-center justify-center text-sm border border-[#F5F5F5] hover:bg-opacity-90 tranisition-all rounded-xl"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-[#72D560] py-3 px-6 text-center flex items-center justify-center text-sm hover:bg-opacity-90 tranisition-all rounded-xl"
          >
            Start now
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden bg-[#72D560] font-medium py-3 px-6 text-center flex items-center justify-center text-sm hover:bg-opacity-90 tranisition-all rounded-md cursor-pointer"
        >
          Menu 
        </button>
      </div>
    </nav>
  );
}