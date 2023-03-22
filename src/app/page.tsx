import Hero from "@/components/landing/hero";
import SecondHero from "@/components/landing/secondHero";
import ThirdHero from "@/components/landing/thirdHero";
import Accordion from "@/components/landing/faq";

export default function Home() {
  return (
    <main className="relative">
      <Hero></Hero>
      <SecondHero></SecondHero>
      <ThirdHero></ThirdHero>
      <Accordion></Accordion>
    </main>
  );
}
