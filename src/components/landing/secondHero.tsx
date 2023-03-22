import { Roboto } from "next/font/google";
import Image from "next/image";
import BreakLine from "../../helper/breakLine";

const roboto = Roboto({
  weight: "300",
  style: ["normal"],
  preload: false,
});
const SecondHeroTitle = () => {
  return (
    <h1
      className={
        " dark:text-white text-black text-4xl text-center font-semibold lg:mt-4"
      }
    >
      Unlock Your Academic Potential
    </h1>
  );
};

const SecondHeroImage = () => {
  return (
    <Image
      className={"pt-[2rem] lg:pt-[4rem] lg:pb-[6rem] lg:pt-1 lg:pb-20 pl-2"}
      src={"https://cdn.vyroai.com/static/upload-file.webp"}
      width={500}
      height={500}
      alt={"VyroAI"}
    ></Image>
  );
};

const SecondHeroSection = () => {
  return (
    <div
      className={
        "flex lg:flex-row flex-col w-full lg:mt-16 mt-8 lg:pr-32 lg:pl-16"
      }
    >
      <div
        className={
          roboto.className + " flex-none my-auto lg:ml-16 relative pl-3"
        }
      >
        <h1 className={"text-2xl font-bold dark:text-white lg:mb-2"}>
          Effortless Training
        </h1>
        <p className={"dark:text-white font-semibold"}>
          <q>
            Say goodbye to the hassle of complicated training with our{""}
            {BreakLine()}
            effortless setup process. With our AI chatbot, all you have to do is
            {""}
            {BreakLine()}
            upload a document and voila!
          </q>
        </p>
      </div>
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
