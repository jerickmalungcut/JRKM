"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "emailjs-com";
import Heading from "./Heading";
import { motion } from "framer-motion";
import { fadeIn } from "./Animation/variants";
import Cta from "./CTA/Cta";
import Link from "next/link";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import Spaceship from "@/public/images/spaceship.gif";
import Image from "next/image";
import Logo from "@/public/images/logo.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6b4epeh",
        "template_xhhxi0s",
        e.currentTarget,
        "ngsqBIy0_maLFMEum"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        }
      );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="container min-h-screen w-full">
      <div className="container relative z-40">
        <Heading mainHeading="Contact" subHeading="Information" />
        <div className="flex flex-col lg:flex-row gap-8 md:gap-0">
          <div className="flex flex-1 justify-start items-start">
            {/* Text */}
            <motion.div
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="text-white pr-12"
            >
              <h2 className="text-5xl w-full font-bold relative leading-normal">
                Ready to <span className="text-blue-400">Elevate </span> <br />
                Your <span className="text-blue-400">Digital Presence?</span>
                <Image
                  src={Spaceship}
                  width={100}
                  height={50}
                  alt="spaceship"
                  className="hidden xl:block h-28 w-36 -mt-4 absolute top-0 right-0 transform rotate-45"
                />
              </h2>
              <h4 className="tracking-wide text-base text-white mt-4">
                Reach out today and let&apos;s discuss how I can help you
                achieve your goals. Whether you need a stunning website,
                compelling graphic design, or any other digital solution,
                I&apos;m here to assist you.
              </h4>
              <ul className="flex flex-col gap-4 my-4 text-blue-400">
                <li className="flex gap-4 items-center">
                  <BsBoxArrowInUpRight />
                  Messenger : www.m.me/jerickmalungcutdev
                </li>
                <li className="flex gap-4 items-center">
                  <BsBoxArrowInUpRight />
                  Gmail : jerickmalungcutdev@gmail.com
                </li>
                <li className="flex gap-4 items-center">
                  <BsBoxArrowInUpRight />
                  Whatsapp : (+63)962 351 3976
                </li>
                <li className="flex gap-4 items-center">
                  <BsBoxArrowInUpRight />
                  Linkedin : www.linkedin.com/jerickrobertmalungcut
                </li>
              </ul>
              <p>
                Feel free to reach out through any of the channels above. I look
                forward to collaborating with you and turning your ideas into
                reality!
              </p>
            </motion.div>
          </div>
          {/* Contact Form */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="flex-1 lg:pl-8"
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-y-6 pb-12 p-6 items-start text-white"
            >
              <input
                value={formData.name}
                onChange={handleChange}
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="bg-transparent border-b py-3 w-full outline-none placeholder:text-white/40 focus:border-blue-400 transition-all"
                required
                autoComplete="off"
              />
              <input
                value={formData.email}
                onChange={handleChange}
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="bg-transparent border-b py-3 w-full outline-none placeholder:text-white/40 focus:border-blue-400 transition-all"
                required
                autoComplete="off"
              />

              <textarea
                value={formData.message}
                onChange={handleChange}
                name="message"
                id="message"
                placeholder="Message / Comments"
                className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white/40 focus:border-blue-400 transition-all duration-300 mb-12 resize-none"
                autoComplete="off"
              ></textarea>

              <Cta ctaText="Send Message" />
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center my-16 mt-36 text-white">
          <p className="text-sm font-light md:font-normal text-blue-400">
            Copyright &copy; 2024 Jerick Malungcut
          </p>
          <Link href="/" className="cursor-pointer">
            <Image src={Logo} height={50} width={80} alt="Logo" />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Contact;
