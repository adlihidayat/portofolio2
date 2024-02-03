"use client";
import React, { useEffect, useRef } from "react";
import { Playfair_Display, Poppins } from "next/font/google";
import Image from "next/image";
import {
  animate,
  inView,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

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

const Section1 = () => {
  const container = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const yt = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const yb = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const xl = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const xr = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const r1 = useTransform(scrollYProgress, [0, 1], [40, 1000]);
  const r2 = useTransform(scrollYProgress, [0, 1], [90, 1000]);
  const r3 = useTransform(scrollYProgress, [0, 1], [180, 400]);
  const r4 = useTransform(scrollYProgress, [0, 1], [60, 400]);

  return (
    <section
      ref={container}
      className={`section1 h-screen w-full bg-slate-0 mb-80 ${playfairDisplay.className} flex items-center justify-center relative`}
    >
      <div className=" absolute bottom-10 lg:left-10 flex flex-col items-center animate-bounce lg:animate-scroll">
        <span
          className={` rotate-90 ${poppins.className} hidden lg:block w-32`}
        >
          SCROLL DOWN
        </span>
        <div className="flex flex-col items-center relative w-6 mt-16">
          <div className=" w-[1px] h-10 lg:h-80 bg-[#060100] mb-2"></div>
          <Image
            src={"/home/downArrow.svg"}
            alt=""
            width={200}
            height={200}
            className=" w-6 absolute bottom-0"
          />
        </div>
      </div>
      <motion.a
        target="_blank"
        href="https://www.instagram.com/adlihdyt"
        style={{ y: yt, x: xl, rotate: r1 }}
        whileHover={{ rotate: 0, opacity: 0.5 }}
        className="absolute top-1/3 sm:top-[20%] md:top-[20%] lg:top-[17%] xl:top-[12%] left-[20%] rotate-180"
      >
        <Image
          src={"/home/instagram.png"}
          alt=""
          width={200}
          height={200}
          className=" w-14 sm:w-[70px] md:w-20 lg:w-24 xl:w-28 ml-5 "
        />
      </motion.a>
      <motion.a
        style={{ y: yt, x: xr, rotate: r2 }}
        whileHover={{ rotate: 0, opacity: 0.5 }}
        target="_blank"
        href="https://www.linkedin.com/in/dhiya-adli-hidayat/"
        className="absolute top-1/4 sm:top-[27%] md:top-[25%] xl:top-[25%] left-[60%] sm:left-[70%] lg:left-[80%] rotate-90"
      >
        <Image
          src={"/home/linkedin.png"}
          alt=""
          width={200}
          height={200}
          className=" w-14 sm:w-[70px] md:w-20 lg:w-24 xl:w-28 ml-5"
        />
      </motion.a>
      <motion.a
        style={{ y: yb, x: xl, rotate: r3 }}
        whileHover={{ rotate: 0, opacity: 0.5 }}
        target="_blank"
        href="https://www.tiktok.com/@dhiyaadlihidayat"
        className="absolute top-[70%] left-[25%] sm:top-[80%] lg:top-[82%]  -rotate-12"
      >
        <Image
          src={"/home/tiktok.png"}
          alt=""
          width={200}
          height={200}
          className=" w-14 sm:w-[70px] md:w-20 lg:w-24 xl:w-28 ml-5"
        />
      </motion.a>
      <motion.a
        style={{ y: yb, x: xr, rotate: r4 }}
        whileHover={{ rotate: 0, opacity: 0.5 }}
        target="_blank"
        href="mailto:adlihidayat30@gmail.com"
        className="absolute top-[60%] left-[60%] sm:top-[68%] lg:top-[73%] sm:left-[70%] rotate-45"
      >
        <Image
          src={"/home/email.png"}
          alt=""
          width={200}
          height={200}
          className=" w-14 sm:w-[70px] md:w-20 lg:w-24 xl:w-28 ml-5"
        />
      </motion.a>
      <h1 className=" text-[45px] sm:text-[80px] md:text-[90px] lg:text-[110px] xl:text-[130px] leading-none flex flex-col items-center w-80 sm:w-[400px] md:w-[700px] lg:w-[800px] xl:w-[900px] bg-slate-00 ">
        <span className="flex items-center  font-medium">
          PINNACLE
          <Image
            src={"/home/of.png"}
            alt=""
            width={200}
            height={200}
            className=" w-14 sm:w-20 md:w-28 lg:w-32 xl:w-36 ml-5"
          />
        </span>
        <span className={`flex items-center ${poppins.className} mt-[1%]`}>
          <motion.div whileHover={{ rotate: 360 }}>
            <Image
              src={"/home/star.png"}
              alt=""
              width={200}
              height={200}
              className=" w-8 sm:w-14 md:w-12 lg:w-16 xl:w-20 mr-2"
            />
          </motion.div>
          INNOVATIVE
        </span>
        <span className="font-medium">BRILLIANCE</span>
      </h1>
    </section>
  );
};

export default Section1;
