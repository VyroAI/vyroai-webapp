"use client";
import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { motion } from "framer-motion";

const roboto = Roboto({
  weight: "300",
  style: ["normal"],
  preload: false,
});

const HeroText = () => {
  return (
    <motion.div
      className={roboto.className + " text-center"}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-extrabold dark:text-white text-black">
        Streamline Your Research <br></br> Process With VyroAI
      </h1>
      <h2 className={"text-[#C3C3C3] text-xl mt-5 mb-3 "}>
        Your Ultimate Research Assistant.
      </h2>
      <Link
        href={"/register"}
        className={
          "bg-heroButtonBlue px-4 py-2 rounded-2xl inline-flex text-white hover:scale-105 transition duration-300 ease-in-out"
        }
      >
        Subscribe For Updates
      </Link>
    </motion.div>
  );
};

const HeroImage = () => {
  return (
    <motion.div
      className={"pt-[8rem] pb-[6rem] lg:py-16 px-10"}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <Image
        className={"border-[3px] dark:border-[#3A57E8] border-[#FFD2C4]"}
        style={{ boxShadow: "#3A57E8 0 1px 110px" }}
        src={"https://cdn.vyroai.com/static/vyro_dashboard.webp"}
        width={700}
        height={700}
        alt={"VyroAI"}
      ></Image>
    </motion.div>
  );
};

export default function Hero() {
  return (
    <div className="flex lg:flex-row flex-col lg:mt-32 mt-36">
      <div className={"flex-none my-auto lg:ml-10"}>
        <HeroText></HeroText>
      </div>
      <div className={"grow"}></div>
      <div className={"flex-none"}>
        <HeroImage></HeroImage>
      </div>
    </div>
  );
}
