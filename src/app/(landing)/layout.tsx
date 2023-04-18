import React from "react";

import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/navbar/nav";

import LightDarkModeButton from "@/components/darkLightMode/light-dark";

// @ts-ignore
export let metadata = {
  title: "VyroAI",
  description:
    "Enhance your customer support with VyroAI, the cutting-edge AI chatbot and virtual assistance service. Improve engagement and experience with our live chat solutions.",
  keywords:
    "AI chatbot, VyroAI, virtual assistance, live chat, customer support, customer engagement, chatbot services,customer service platform, live chat, chatbots, generate sales, increase sales, customer support, AI chatbot, trusted platform, business chat solutions",
  openGraph: {
    title: "VyroAI - AI Chatbot Support & Virtual Assistance",
    description:
      "Enhance your customer support with VyroAI, the cutting-edge AI chatbot and virtual assistance service. Improve engagement and experience with our live chat solutions.",
    url: "https://vyroai.com",
    images: [
      {
        url: "https://cdn.vyroai.com/static/logo.webp",
        width: 800,
        height: 600,
      },
    ],
  },
  // twitter: {
  // card: "summary_large_image",
  // description:
  //   "Enhance your customer support with VyroAI, the cutting-edge AI chatbot and virtual assistance service. Improve engagement and experience with our live chat solutions.",
  // image: "https://cdn.vyroai.com/static/logo.webp",
  // title: "VyroAI - AI Chatbot Support & Virtual Assistance",
  // },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={"bg-white dark:bg-landing-gradient lg:px-10"}>
      <Navbar></Navbar>
      <div className={"container mx-auto"}>{children}</div>
      <LightDarkModeButton></LightDarkModeButton>
    </section>
  );
}
