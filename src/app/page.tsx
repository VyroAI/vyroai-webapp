import Hero from "@/components/landing/hero";
import SecondHero from "@/components/landing/secondHero";
import ThirdHero from "@/components/landing/thirdHero";
import FaqAccordance from "@/components/landing/faq";
import Accordion from "@/components/landing/faq";

export default function Home() {
  return (
    <main className="relative top-16">
      <Hero></Hero>
      <SecondHero></SecondHero>
      <ThirdHero></ThirdHero>
      <Accordion></Accordion>
    </main>
  );
}
