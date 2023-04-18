"use client";
import { Roboto } from "next/font/google";
import Image from "next/image";
import BreakLine from "../../helper/breakLine";
import { motion } from "framer-motion";

const roboto = Roboto({
  weight: "300",
  style: ["normal"],
  preload: false,
});

const SecondHeroTitle = () => {
  return (
    <motion.h1
      className={
        " dark:text-white text-black text-4xl text-center font-semibold lg:mt-4"
      }
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Unlock Your Academic Potential
    </motion.h1>
  );
};

const SecondHeroImage = () => {
  return (
    <motion.div
      className={"pt-[2rem] lg:pt-[4rem] lg:pb-[6rem] lg:pt-1 lg:pb-20 px-8"}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <Image
        className={"border-[5px] dark:border-[#b3afff] border-[#b3afff]"}
        src={"https://cdn.vyroai.com/static/upload.webp"}
        width={500}
        height={500}
        alt={"VyroAI"}
        priority={true}
      ></Image>
    </motion.div>
  );
};

const SecondHeroSection = () => {
  return (
    <div
      className={
        "flex lg:flex-row flex-col w-full lg:mt-16 mt-8 lg:pr-32 lg:pl-16"
      }
    >
      <motion.div
        className={
          roboto.className + " flex-none my-auto lg:ml-16 relative pl-3"
        }
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h1 className={"text-2xl font-bold dark:text-white lg:mb-2"}>
        Achieve new heights
        </h1>
        <p className={"dark:text-white font-semibold"}>
          
          Our product is designed to revolutionize the way you study and{" "}
            {BreakLine()}
            research. With our AI-powered technology, you can effortlessly{" "}
            {BreakLine()}
            process large volumes of text, allowing you to quickly and easily{" "}
            {BreakLine()}
            extract the key information you need. Gone are the days of spending{" "}
            {BreakLine()}
            hours poring over dense books and struggling to find the answers you{" "}
            {BreakLine()}
            need. Our AI chatbot can answer any question on the text in seconds,{" "}
            {BreakLine()}
            helping you to boost your productivity, improve your grades, and{" "}
            {BreakLine()}
            achieve your academic goals with ease.{" "}  
        </p>
      </motion.div>
      <div className={"grow"}></div>
      <div className={"flex-none"}>
        <SecondHeroImage></SecondHeroImage>
      </div>
    </div>
  );
};

export default function SecondHero() {
  return (
    <div className={""}>
      <SecondHeroTitle></SecondHeroTitle>
      <SecondHeroSection></SecondHeroSection>
    </div>
  );
}
