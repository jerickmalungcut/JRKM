"use client";

import { useState, useEffect } from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsBriefcase } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import Link from "next/link";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
          const id = section.getAttribute("id");
          if (id) {
            currentSection = id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-[99]">
      <div className="container mx-auto">
        <div className="w-full bg-blue-800/20 h-[96px] backdrop-blur-2xl rounded-lg max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
          <Link href="#home" passHref>
            <div
              className={`cursor-pointer w-[60px] h-[60px] flex justify-center items-center ${
                activeSection === "home"
                  ? "text-blue-400 border rounded-lg border-blue-400"
                  : "text-white/50"
              }`}
            >
              <BiHomeAlt />
            </div>
          </Link>
          <Link href="#about" passHref>
            <div
              className={`cursor-pointer w-[60px] h-[60px] flex justify-center items-center ${
                activeSection === "about"
                  ? "text-blue-400 border rounded-lg border-blue-400"
                  : "text-white/50"
              }`}
            >
              <BiUser />
            </div>
          </Link>

          <Link href="#projects" passHref>
            <div
              className={`cursor-pointer w-[60px] h-[60px] flex justify-center items-center ${
                activeSection === "projects"
                  ? "text-blue-400 border rounded-lg border-blue-400"
                  : "text-white/50"
              }`}
            >
              <GrProjects />
            </div>
          </Link>

          <Link href="#work" passHref>
            <div
              className={`cursor-pointer w-[60px] h-[60px] flex justify-center items-center ${
                activeSection === "work"
                  ? "text-blue-400 border rounded-lg border-blue-400"
                  : "text-white/50"
              }`}
            >
              <BsBriefcase />
            </div>
          </Link>
          <Link href="#contact" passHref>
            <div
              className={`cursor-pointer w-[60px] h-[60px] flex justify-center items-center ${
                activeSection === "contact"
                  ? "text-blue-400 border rounded-lg border-blue-400"
                  : "text-white/50"
              }`}
            >
              <IoChatboxEllipsesOutline />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
