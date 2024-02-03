"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const Section2 = () => {
  const container = useRef<HTMLElement>(null);
  const div = useRef<HTMLDivElement>(null);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const [hover5, setHover5] = useState(false);
  const [hover6, setHover6] = useState(false);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const scroll = useTransform(
    scrollYProgress,
    [0, 0.1, 1],
    [-3500, -3500, 1800]
  );

  const top = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, 60, 610, 1150, 1695, 2240]
  );

  const textShow = useTransform(
    scrollYProgress,
    [0, 0.3, 0.4, 0.8, 1],
    [0, 0, 1, 1, 0]
  );

  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePosition({
        x: e.layerX,
        y: e.layerY,
      });
    };

    div?.current?.addEventListener("mousemove", mouseMove);

    return () => {
      div?.current?.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const animation = {
    x: "100vw",
    duration: 2,
    ease: "easeOut",
  };

  return (
    <section
      ref={container}
      className={`${playfairDisplay.className} bg-slate-0 h-[300vh] w-full bg-slate-00 relative flex justify-center`}
    >
      <motion.h1
        style={{ opacity: textShow }}
        className="test opacity-0 fixed bottom-10 md:text-lg"
        transition={{ duration: 2 }}
      >
        TECH STACK
      </motion.h1>
      <motion.div
        ref={div}
        style={{ right: scroll, top: top }}
        className="flex items-center space-x-10 w-max absolute "
      >
        <div className=" ">
          <motion.div
            style={{ x: mousePosition.x + 30, y: mousePosition.y - 50 }}
            className={`h-40 w-52 bg-[#151515] absolute ${
              hover1 ? "md:flex" : "hidden"
            } top-4  justify-center items-center`}
          >
            <Image
              src={"/tech/nextJs.webp"}
              alt=""
              width={300}
              height={300}
              className="mix-blend-screen w-28"
            />
          </motion.div>
          <a
            target="_blank"
            href="https://nextjs.org/"
            onMouseEnter={() => setHover1(true)}
            onMouseLeave={() => setHover1(false)}
            className={`${playfairDisplay.className} text-5xl md:text-8xl w-[355px] hover:cursor-none`}
          >
            NEXT JS
          </a>
        </div>
        <div className=" w-5 h-5 rounded-full bg-[#060100]"></div>
        <div>
          <motion.div
            style={{ x: mousePosition.x - 420, y: mousePosition.y - 50 }}
            className={`h-40 w-52 bg-[#1647A6] absolute ${
              hover2 ? "md:flex" : "hidden"
            } top-4 justify-center items-center`}
          >
            <Image
              src={"/tech/reactJs.webp"}
              alt=""
              width={300}
              height={300}
              className="mix-blend-screen w-28"
            />
          </motion.div>
          <a
            href="https://react.dev/"
            target="_blank"
            className={`${playfairDisplay.className} text-5xl md:text-8xl w-[415px] hover:cursor-none`}
            onMouseEnter={() => setHover2(true)}
            onMouseLeave={() => setHover2(false)}
          >
            REACT JS
          </a>
        </div>
        <div className=" w-5 h-5 rounded-full bg-[#060100]"></div>
        <div>
          <motion.div
            style={{ x: mousePosition.x - 920, y: mousePosition.y - 60 }}
            className={`h-40 w-52 bg-[#076A75] absolute ${
              hover3 ? "md:flex" : "hidden"
            } top-4  justify-center items-center`}
          >
            <Image
              src={"/tech/tailwind.webp"}
              alt=""
              width={300}
              height={300}
              className=" mix-blend-screen w-28"
            />
          </motion.div>
          <a
            target="_blank"
            href="https://tailwindcss.com/"
            onMouseEnter={() => setHover3(true)}
            onMouseLeave={() => setHover3(false)}
            className={`${playfairDisplay.className} text-5xl md:text-8xl w-[455px] hover:cursor-none`}
          >
            TAILWIND
          </a>
        </div>
        <div className=" w-5 h-5 rounded-full bg-[#060100]"></div>
        <div>
          <motion.div
            style={{ x: mousePosition.x - 1470, y: mousePosition.y - 50 }}
            className={`h-40 w-52 bg-[#0E1633] absolute ${
              hover4 ? "md:flex" : "hidden"
            } top-4  justify-center items-center`}
          >
            <Image
              src={"/tech/prisma.webp"}
              alt=""
              width={300}
              height={300}
              className=" mix-blend-screen w-28"
            />
          </motion.div>
          <a
            target="_blank"
            href="https://www.prisma.io/"
            onMouseEnter={() => setHover4(true)}
            onMouseLeave={() => setHover4(false)}
            className={`${playfairDisplay.className} text-5xl md:text-8xl w-[355px] hover:cursor-none`}
          >
            PRISMA
          </a>
        </div>
        <div className=" w-5 h-5 rounded-full bg-[#060100]"></div>
        <div>
          <motion.div
            style={{ x: mousePosition.x - 1920, y: mousePosition.y - 50 }}
            className={`h-40 w-52 bg-[#DBE014] absolute ${
              hover5 ? "md:flex" : "hidden"
            } top-4  justify-center items-center`}
          >
            <Image
              src={"/tech/javascript.webp"}
              alt=""
              width={300}
              height={300}
              className=" mix-blend-screen w-28"
            />
          </motion.div>
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/javascript"
            onMouseEnter={() => setHover5(true)}
            onMouseLeave={() => setHover5(false)}
            className={`${playfairDisplay.className} text-5xl md:text-8xl w-[530px] hover:cursor-none`}
          >
            JAVASCRIPT
          </a>
        </div>
        <div className=" w-5 h-5 rounded-full bg-[#060100]"></div>
        <div>
          <motion.div
            style={{ x: mousePosition.x - 2530, y: mousePosition.y - 50 }}
            className={`h-40 w-52 bg-[#A94913] absolute ${
              hover6 ? "md:flex" : "hidden"
            } top-4  justify-center items-center`}
          >
            <Image
              src={"/tech/HTML.webp"}
              alt=""
              width={300}
              height={300}
              className=" mix-blend-screen w-28"
            />
          </motion.div>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            onMouseEnter={() => setHover6(true)}
            onMouseLeave={() => setHover6(false)}
            className={`${playfairDisplay.className} text-5xl md:text-8xl w-[275px] hover:cursor-none`}
          >
            HTML
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Section2;
