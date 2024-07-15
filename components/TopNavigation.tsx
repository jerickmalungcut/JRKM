import Image from "next/image";
import Link from "next/link";
import Logo from "../public/images/logo.svg";
import Cta from "./CTA/Cta";

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

      <Cta ctaText="Download Resume" />
    </div>
  );
};
export default TopNavigation;
