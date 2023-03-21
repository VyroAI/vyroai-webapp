import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
  weight: "300",
  style: ["normal"],
  preload: false,
});
const SecondHeroTitle = () => {
  return (
    <h1
      className={
        roboto.className +
        " dark:text-white text-black text-2xl text-center font-bold lg:mt-10"
      }
    >
      Unlock Your Academic Potential
    </h1>
  );
};

const SecondHeroImage = () => {
  return (
    <Image
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
        "flex lg:flex-row flex-col w-full lg:mt-30 mt-16 lg:pr-32 lg:pl-16"
      }
    >
      <div className={"flex-none my-auto lg:ml-10"}>
        <h1 className={"text-xl dark:text-white text-dark mb-4"}>
          Effortless Training
        </h1>
        <p>
          Say goodbye to the hassle of complicated training with our<br></br>
          effortless setup process. With our AI chatbot, all you have to do is
          <br></br>
          upload a document and voila!
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
    <div>
      <SecondHeroTitle></SecondHeroTitle>
      <SecondHeroSection></SecondHeroSection>
    </div>
  );
}
