"use client";
import React, { useState } from "react";
import Section1 from "@/components/Section1";
import Section3 from "@/components/Section3";
import Divider from "@/components/Divider";
import Section4 from "@/components/Section4";
import Loading from "@/components/Loading";
import Section2 from "@/components/Section2";
import { easeInOut, motion } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      {isLoading ? (
        <Loading setIsLoading={setIsLoading} />
      ) : (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: easeInOut }}
          className=" w-screen min-h-screen bg-[#E9E4E0] text-[#060100] overflow-x-hidden"
        >
          <Section1 />
          <Divider src={"/1.svg"} />
          <Section2 />
          <Divider src={"/2.svg"} />
          <Section3 />
          <Divider src={"/3.svg"} />
          <Section4 />
        </motion.main>
      )}
    </>
  );
}
