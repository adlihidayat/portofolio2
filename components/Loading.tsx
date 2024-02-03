"use client";
import React, { useState } from "react";
import { Playfair_Display, Poppins } from "next/font/google";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const Loading = ({ setIsLoading }: any) => {
  const [finish, setFinish] = useState(true);
  const [isText, setIsText] = useState(true);
  const [isText2, setIsText2] = useState(true);

  const finishLoad = () => {
    setFinish(false);
    setIsText2(false);
  };

  setTimeout(() => setIsLoading(false), 11000);

  return (
    <motion.div
      key={1}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 2, ease: easeInOut, delay: 9 }}
      className={`realtive text-center ${playfairDisplay.className} w-full h-screen bg-[#060100] text-[#E9E4E0] flex items-center justify-center`}
    >
      <AnimatePresence>
        {isText && (
          <motion.span
            key={1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3, ease: easeInOut }}
            onAnimationComplete={() => setIsText(false)}
            className="absolute"
          >
            DHIYA ADLI HIDAYAT
          </motion.span>
        )}
        {isText2 && (
          <motion.span
            key={2}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                ease: "easeInOut",
                duration: 1,
                delay: 6,
              },
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3, ease: easeInOut }}
            onAnimationComplete={finishLoad}
            className="absolute"
          >
            ULEASHING BOUNDLESS INNOVATION.
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Loading;
