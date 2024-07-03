import Image from "next/image";
import Link from "next/link";
import Logo from "../public/images/logo.svg";

const TopNavigation = () => {
  return (
    <div className="container py-8 flex items-center justify-between relative top-0 z-[99]">
      <Link href="/">
        <Image
          src={Logo}
          alt="Logo"
          className="h-[50px] cursor-pointer w-[100px]"
        />
      </Link>

      <button className="relative  inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-500 transition-all duration-200 px-4 py-2 text-sm font-medium text-white backdrop-blur-3xl uppercase cursor-pointer">
          Download Resume
        </span>
      </button>
    </div>
  );
};
export default TopNavigation;
