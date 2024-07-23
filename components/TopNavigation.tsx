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

      <Link
        href="https://drive.google.com/file/d/1bEGQFgWrbnNJ1i7qpEF9sG8cED0oizBR/view?usp=sharing"
        target="_blank"
      >
        <Cta ctaText="Download Resume" />
      </Link>
    </div>
  );
};
export default TopNavigation;
