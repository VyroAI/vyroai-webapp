import FormBox from "@/components/contact/formBox";
import BreakLine from "@/helper/breakLine";

export const metadata = {
  title: "Contact | VyroAI",
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
};

export default function ContactPage() {
  return (
    <div className={"relative"}>
      <div className={"flex lg:flex-row flex-col"}>
        <div className="basis-1/2 h-screen">
          <div className={"flex items-center justify-center min-h-screen"}>
            <h1
              className={
                "text-4xl font-extrabold dark:text-white lg:mt-[-200px]"
              }
            >
              Lets Chat {BreakLine()} Tell me about your project{" "}
            </h1>
          </div>
        </div>
        <FormBox></FormBox>
      </div>
    </div>
  );
}
