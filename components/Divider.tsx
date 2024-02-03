"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const Divider = ({ src }: any) => {
  const container = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const top = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.6, 0.9],
    [0, 480, 1000, 1100]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0.15, 0.3, 0.5, 0.7],
    [0, 1, 1, 0]
  );

  return (
    <section
      ref={container}
      className=" h-[200vh] w-full relative flex justify-center"
    >
      <motion.div
        style={{ top: top, opacity: opacity }}
        className=" text-center absolute z-50 h-80 flex items-center justify-center"
      >
        <Image
          src={src}
          alt=""
          width={1000}
          height={1000}
          className="w-40 mb-20 md:mb-0 md:w-60"
        />
      </motion.div>
    </section>
  );
};

export default Divider;
