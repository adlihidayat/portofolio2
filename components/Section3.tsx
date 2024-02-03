"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const Section3 = () => {
  const box1 = useRef<HTMLDivElement>(null);
  const box2 = useRef<HTMLDivElement>(null);
  const box3 = useRef<HTMLDivElement>(null);
  const box4 = useRef<HTMLDivElement>(null);

  const box1Pos = useScroll({
    target: box1,
    offset: ["start end", "end start"],
  });
  const box2Pos = useScroll({
    target: box2,
    offset: ["start end", "end start"],
  });
  const box3Pos = useScroll({
    target: box3,
    offset: ["start end", "end start"],
  });
  const box4Pos = useScroll({
    target: box4,
    offset: ["start end", "end start"],
  });

  const width1 = useTransform(
    box1Pos.scrollYProgress,
    [0, 0.5, 1],
    [0.8, 1, 0.8]
  );
  const width2 = useTransform(
    box2Pos.scrollYProgress,
    [0, 0.5, 1],
    [0.8, 1, 0.8]
  );
  const width3 = useTransform(
    box3Pos.scrollYProgress,
    [0, 0.5, 1],
    [0.8, 1, 0.8]
  );
  const width4 = useTransform(
    box4Pos.scrollYProgress,
    [0, 0.5, 1],
    [0.8, 1, 0.8]
  );

  const opacity1 = useTransform(
    box1Pos.scrollYProgress,
    [0.3, 0.5, 0.7],
    [0, 1, 0]
  );
  const opacity2 = useTransform(
    box2Pos.scrollYProgress,
    [0.3, 0.5, 0.7],
    [0, 1, 0]
  );
  const opacity3 = useTransform(
    box3Pos.scrollYProgress,
    [0.3, 0.5, 0.7],
    [0, 1, 0]
  );
  const opacity4 = useTransform(
    box4Pos.scrollYProgress,
    [0.3, 0.5, 0.7],
    [0, 1, 0]
  );

  const bgOpacity1 = useTransform(
    box1Pos.scrollYProgress,
    [0.3, 0.5, 0.7],
    [1, 0.2, 1]
  );
  const bgOpacity2 = useTransform(
    box2Pos.scrollYProgress,
    [0.3, 0.5, 0.7],
    [1, 0.2, 1]
  );
  const bgOpacity3 = useTransform(
    box3Pos.scrollYProgress,
    [0.3, 0.5, 0.7],
    [1, 0.2, 1]
  );
  const bgOpacity4 = useTransform(
    box4Pos.scrollYProgress,
    [0.3, 0.5, 0.7],
    [1, 0.2, 1]
  );

  return (
    <section className=" w-full h-[350vh] flex justify-center text-white overflow-x-hidden">
      <div className="flex flex-col mt-80 space-y-5 md:space-y-20">
        <motion.div
          ref={box1}
          style={{ scaleX: width1 }}
          className="relative bg-black w-[300px] md:w-[600px] lg:w-[800px] h-[400px] md:h-[400px] lg:h-[500px] flex items-center justify-center"
        >
          <motion.div
            style={{ opacity: bgOpacity1 }}
            className=" absolute w-full h-full "
          >
            <Image
              src={"/projects/project1.webp"}
              alt=""
              width={1000}
              height={1000}
              className=" w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            style={{ opacity: opacity1 }}
            className="  duration-3000 ease-in-out p-5 flex flex-col space-y-4"
          >
            <h2 className={`${playfairDisplay.className} lg:text-2xl`}>
              SERENITY DINING
            </h2>
            <p className=" text-xs md:text-sm lg:w-[600px] text-justify">
              Serenity Dining, a sophisticated restaurant web app, seamlessly
              blends functionality and aesthetics, showcasing an intuitive
              interface that elegantly displays the comprehensive menu,
              facilitating effortless online ordering. Immerse yourself in the
              serene ambiance through a captivating gallery, offering a visual
              journey into the restaurant&apos;s inviting atmosphere, enticing
              users to explore, engage, and savor the unique dining experience
              it has to offer.
            </p>
            <div className=" flex space-x-2">
              <div className=" w-max text-[10px] md:text-xs py-1 px-4 rounded-full border border-white text-center">
                Next JS
              </div>
              <div className=" w-max text-[10px] md:text-xs py-1 px-4 rounded-full border border-white text-center">
                MongoDB
              </div>
              <div className=" w-max text-[10px] md:text-xs py-1 px-4 rounded-full border border-white text-center">
                Tailwind
              </div>
            </div>
            <a
              target="_blank"
              href="https://serenity-dining.vercel.app/"
              className="w-max text-[10px] md:text-xs py-1 px-4 rounded-full bg-white hover:bg-transparent border-white  text-black border hover:text-white duration-300 ease-in-out "
            >
              VISIT SITE
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          ref={box2}
          style={{ scaleX: width2 }}
          className="w-[300px] md:w-[600px] lg:w-[800px] h-[400px] md:h-[400px] lg:h-[500px] relative bg-black flex items-center justify-center"
        >
          <motion.div
            style={{ opacity: bgOpacity2 }}
            className=" absolute w-full h-full "
          >
            <Image
              src={"/projects/project2.webp"}
              alt=""
              width={1000}
              height={1000}
              className=" w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            style={{ opacity: opacity2 }}
            className="  duration-3000 ease-in-out p-5 flex flex-col space-y-4"
          >
            <h2 className={`${playfairDisplay.className} lg:text-2xl`}>
              HEALTHIEZZ
            </h2>
            <p className=" text-xs md:text-sm lg:w-[600px] text-justify">
              Healthiez, a comprehensive web app, delivering an array of
              nourishing delights. Unveil the secrets of wholesome recipes,
              accompanied by tantalizing images that showcase the vibrant and
              nutritious ingredients. Delve into the origins of each dish,
              discovering the source of freshness and sustainability. Elevate
              your culinary skills with instructional YouTube videos, providing
              step-by-step guidance on crafting these delectable and healthful
              creations. Healthiez curates a holistic experience and encouraging
              users to explore a balanced and vibrant lifestyle.
            </p>
            <div className=" flex space-x-2">
              <div className=" w-max text-[10px] md:text-xs py-1 px-4 rounded-full border border-white text-center">
                Next JS
              </div>
              <div className=" w-max text-[10px] md:text-xs py-1 px-4 rounded-full border border-white text-center">
                Tailwind
              </div>
            </div>
            <a
              target="_blank"
              href="https://healthiezz.vercel.app/"
              className="w-max text-[10px] md:text-xs py-1 px-4 rounded-full bg-white hover:bg-transparent border-white  text-black border hover:text-white duration-300 ease-in-out "
            >
              VISIT SITE
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          ref={box3}
          style={{ scaleX: width3 }}
          className="w-[300px] md:w-[600px] lg:w-[800px] h-[400px] md:h-[400px] lg:h-[500px] relative bg-black flex items-center justify-center"
        >
          <motion.div
            style={{ opacity: bgOpacity3 }}
            className=" absolute w-full h-full "
          >
            <Image
              src={"/projects/project3.webp"}
              alt=""
              width={1000}
              height={1000}
              className=" w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            style={{ opacity: opacity3 }}
            className="  duration-3000 ease-in-out p-5 flex flex-col space-y-4"
          >
            <h2 className={`${playfairDisplay.className} lg:text-2xl`}>
              IGA PANGGANG WAK BUDI
            </h2>
            <p className=" text-xs md:text-sm lg:w-[600px] text-justify">
              The Iga Panggang Wak Budi web app introduces an immersive culinary
              journey, presenting a user-friendly interface that seamlessly
              exhibits the tantalizing menu list, enticing users with a diverse
              array of grilled specialties. Navigate effortlessly through the
              app&apos;s integrated map feature, guiding diners to the heart of
              this culinary haven. Stay in the loop with the latest offerings
              using the &apos;Newest Promo&apos; section, ensuring patrons never
              miss out on exclusive deals and delightful surprises.
            </p>
            <div className=" flex space-x-2">
              <div className=" w-max text-[10px] md:text-xs py-1 px-4 rounded-full border border-white text-center">
                Next JS
              </div>
              <div className=" w-max text-[10px] md:text-xs py-1 px-4 rounded-full border border-white text-center">
                Tailwind
              </div>
            </div>
            <a
              target="_blank"
              href="https://iga-panggang.vercel.app/"
              className="w-max text-[10px] md:text-xs py-1 px-4 rounded-full bg-white hover:bg-transparent border-white border text-black hover:hover:text-white duration-300 ease-in-out "
            >
              VISIT SITE
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          ref={box4}
          style={{ scaleX: width4 }}
          className="w-[300px] md:w-[600px] lg:w-[800px] h-[400px] md:h-[400px] lg:h-[500px] relative bg-black flex items-center justify-center"
        >
          <motion.div
            style={{ opacity: bgOpacity4 }}
            className=" absolute w-full h-full "
          >
            <Image
              src={"/projects/project4.webp"}
              alt=""
              width={1000}
              height={1000}
              className=" w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            style={{ opacity: opacity4 }}
            className="  duration-3000 ease-in-out p-5 flex flex-col space-y-4"
          >
            <h2 className={`${playfairDisplay.className} lg:text-2xl`}>
              TWITTER CLONE
            </h2>
            <p className=" text-xs md:text-sm lg:w-[600px] text-justify">
              A Twitter clone web app meticulously replicates the familiar
              interface of the original platform, featuring identical design
              elements. However, it selectively incorporates key functionalities
              such as user authentication for login, enabling users to post
              tweets, and the option to delete their own posts. This streamlined
              version preserves the essence of the popular microblogging site
              while focusing on essential features, providing a user-friendly
              experience for sharing thoughts in a familiar environment.
            </p>
            <div className=" flex space-x-2">
              <div className=" w-max text-[10px] md:text-xs py-1 px-4 rounded-full border border-white text-center">
                Next JS
              </div>
              <div className=" w-max text-[10px] md:text-xs py-1 px-4 rounded-full border border-white text-center">
                Firebase
              </div>
              <div className=" w-max text-[10px] md:text-xs py-1 px-4 rounded-full border border-white text-center">
                Tailwind
              </div>
            </div>
            <a
              target="_blank"
              href="https://twitter-clone-adli.vercel.app/"
              className="w-max text-[10px] md:text-xs py-1 px-4 rounded-full bg-white hover:bg-transparent border-white border  text-black hover:hover:text-white duration-300 ease-in-out"
            >
              VISIT SITE
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section3;
