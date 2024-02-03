import React from "react";
import { Playfair_Display, Poppins } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";

const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});
const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const textVariants = {
  view: {
    transition: { staggerChildren: 0.3 },
  },
  initial: {
    transition: { staggerChildren: 0.5 },
  },
};

const spanVariants = {
  view: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
  initial: {
    y: 500,
    opacity: 0,
  },
};

const Stagger = () => {
  const text = ["READY ", "TO ", "WORK ", "WITH ", "ME?"];
  text.map((e: string) => console.log(e));
  return (
    <>
      {text?.map((word: String) => (
        <motion.span variants={spanVariants}>{word}</motion.span>
      ))}
    </>
  );
};

const Section4 = () => {
  return (
    <section
      className={` w-full h-screen ${poppins.className} relative flex flex-col items-center justify-center px-16 md:px-40`}
    >
      <motion.h1
        variants={textVariants}
        initial="initial"
        whileInView="view"
        className={` text-4xl md:text-6xl lg:text-8xl 2xl:text-[135px] leading-none ${playfairDisplay.className} mb-14`}
      >
        <Stagger />
      </motion.h1>
      <div className=" w-full  flex flex-col lg:flex-row justify-between  max-w-md lg:max-w-full lg:px-5">
        <div className=" mb-14 lg:grid grid-cols-2 gap-10">
          <div className=" flex lg:flex-col justify-between">
            <h2 className=" font-semibold">Instagram</h2>
            <a
              target="_blank"
              href="https://www.instagram.com/adlihdyt"
              className="hover:opacity-30 duration-300 text-sm"
            >
              adlihdyt
            </a>
          </div>
          <div className=" flex lg:flex-col justify-between">
            <h2 className=" font-semibold">Tiktok</h2>
            <a
              target="_blank"
              href="https://www.tiktok.com/@dhiyaadlihidayat"
              className="hover:opacity-30 duration-300 text-sm"
            >
              dhiyaadlihidayat
            </a>
          </div>
          <div className=" flex lg:flex-col justify-between">
            <h2 className=" font-semibold">Email</h2>
            <a
              target="_blank"
              href="mailto:adlihidayat30@gmail.com"
              className="hover:opacity-30 duration-300 text-sm"
            >
              adlihidayat30@gmail.com
            </a>
          </div>
          <div className=" flex lg:flex-col justify-between">
            <h2 className=" font-semibold">LinkedIn</h2>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/dhiya-adli-hidayat/"
              className="hover:opacity-30 duration-300 text-sm"
            >
              Dhiya Adli Hidayat
            </a>
          </div>
        </div>
        <div className=" flex flex-col font-semibold lg:w-60 text-sm lg:text-base">
          <a
            target="_blank"
            href=""
            className="flex justify-between hover:opacity-25 duration-300 ease-in-out w-full border-b-2 border-black py-1"
          >
            <span className="hover:underline">Back to Top</span>
            <Image
              src={"/contact/arrow.svg"}
              alt=""
              width={100}
              height={100}
              className="w-4 lg:w-5 rotate-45"
            />
          </a>
          <a
            target="_blank"
            href=""
            className="flex justify-between hover:opacity-25 duration-300 ease-in-out w-full border-b-2 border-black py-1"
          >
            <span className="hover:underline">Terms & Agreement</span>
            <Image
              src={"/contact/arrow.svg"}
              alt=""
              width={100}
              height={100}
              className="w-4 lg:w-5 rotate-45"
            />
          </a>
          <a
            target="_blank"
            href=""
            className="flex justify-between hover:opacity-25 duration-300 ease-in-out w-full border-b-2 border-black py-1"
          >
            <span className="hover:underline">Cookies</span>
            <Image
              src={"/contact/arrow.svg"}
              alt=""
              width={100}
              height={100}
              className="w-4 lg:w-5 rotate-45"
            />
          </a>
          <a
            target="_blank"
            href=""
            className="flex justify-between hover:opacity-25 duration-300 ease-in-out w-full border-b-2 border-black py-1"
          >
            <span className="hover:underline">Privacy policy</span>
            <Image
              src={"/contact/arrow.svg"}
              alt=""
              width={100}
              height={100}
              className="w-4 lg:w-5 rotate-45"
            />
          </a>
        </div>
      </div>
      <span className=" absolute bottom-10 md:bottom-14 text-xs">
        © 2024 adlihidayat - All rights reserved
      </span>
    </section>
  );
};

export default Section4;
