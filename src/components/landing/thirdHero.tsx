import { Roboto } from "next/font/google";
import Image from "next/image";
import BreakLine from "@/helper/breakLine";
import AchieveNewHeight from "@/components/landing/store/text";

const roboto = Roboto({
  weight: "300",
  style: ["normal"],
  preload: false,
});
type SecondHeroImageProps = {
  show: boolean;
};

const SecondHeroImage = ({ show }: SecondHeroImageProps) => {
  return (
    <Image
      className={`${
        show ? "lg:hidden" : "hidden lg:block"
      } mt-[2rem] lg:pt-[4rem] lg:pb-[6rem] lg:pt-1 lg:pb-20 px-8`}
      src={"https://cdn.vyroai.com/static/broswer.webp"}
      width={500}
      height={500}
      alt={"VyroAI"}
    ></Image>
  );
};

export default function ThirdHero() {
  return (
    <div className={"flex lg:flex-row flex-col w-full lg:pr-16 lg:pl-32"}>
      <SecondHeroImage show={false}></SecondHeroImage>
      <div className={"grow"}></div>
      <div className={"flex-none my-auto"}>
        <div
          className={
            roboto.className + " flex-none my-auto lg:ml-16 relative pl-3"
          }
        >
          <h1
            className={
              "text-2xl mt-8 lg:mt-0 font-bold dark:text-white lg:mb-2"
            }
          >
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
        </div>
      </div>
      <SecondHeroImage show={true}></SecondHeroImage>
    </div>
  );
}
