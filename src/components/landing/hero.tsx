import Image from "next/image";
import Link from "next/link";
import styles from "../../app/page.module.css";

import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: "300",
  style: ["normal"],
  preload: false,
});

const HeroText = () => {
  return (
    <div className={roboto.className + "  text-center"}>
      <h1 className="text-3xl font-extrabold dark:text-white text-black">
        Streamline Your Research <br></br> Process With VyroAI
      </h1>
      <h2 className={"text-[#C3C3C3] text-xl mt-5 mb-3 "}>
        Your Ultimate Research Assistant.
      </h2>
      <Link
        className={
          "dark:bg-[#3A57E8] bg-black px-4 py-2 rounded-2xl text-white"
        }
        href={"/register"}
      >
        Try Free Now
      </Link>
    </div>
  );
};
const HeroImage = () => {
  return (
    <Image
      className={styles.center}
      src={
        "https://cdn.discordapp.com/attachments/993485056301600818/1087257805339246612/a.webp"
      }
      width={700}
      height={700}
      alt={"VyroAI"}
    ></Image>
  );
};
export default function Hero() {
  return (
    <div className="flex lg:flex-row flex-col lg:mt-30 mt-16">
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
