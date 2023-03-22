import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
  weight: "300",
  style: ["normal"],
  preload: false,
});

const SecondHeroImage = () => {
  return (
    <Image
      className={"pt-[4rem] pb-[6rem] lg:pt-1 lg:pb-20 pl-2"}
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
      <SecondHeroImage></SecondHeroImage>

      <div className={"grow"}></div>
      <div className={"flex-none"}>
        <div
          className={
            roboto.className + " flex-none my-auto lg:ml-16 relative pl-3"
          }
        >
          <h1 className={"text-2xl font-bold dark:text-white lg:mb-2"}>
            Achieve new heights
          </h1>
          <p className={"dark:text-white font-semibold"}>
            Our product is designed to revolutionize the way you study and
            <br></br>
            research. With our AI-powered technology, you can effortlessly{" "}
            <br></br>
            process large volumes of text, allowing you to quickly and easily{" "}
            <br></br>
            extract the key information you need. Gone are the days of spending{" "}
            <br></br>
            hours poring over dense books and struggling to find the answers you{" "}
            <br></br>
            need. Our AI chatbot can answer any question on the text in seconds,{" "}
            <br></br>
            helping you to boost your productivity, improve your grades, and{" "}
            <br></br>
            achieve your academic goals with ease.
          </p>
        </div>
      </div>
    </div>
  );
}
