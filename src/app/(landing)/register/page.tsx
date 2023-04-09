import AuthTitle from "@/components/auth/title";
import { RegisterProvider } from "../../../components/auth/store/providers";
import AuthProvider from "@/components/auth/provider";
import RegisterForm from "@/components/auth/registerForm";

export const metadata = {
  title: "Register | VyroAI",
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

export default function RegisterPage() {
  return (
    <div className={"relative"}>
      <div className={"mt-48"}>
        <AuthTitle
          text={"Register"}
          description={"Manage Your Personalized Chatbot Now"}
        ></AuthTitle>
      </div>
      <div className={"flex lg:flex-row flex-col gap-32"}>
        <div className="basis-1/2 ">
          <RegisterForm></RegisterForm>
        </div>
        <div className="basis-1/2">
          <AuthProvider providers={RegisterProvider}></AuthProvider>
        </div>
      </div>
      {/*<div className={""}>*/}
      {/*  <h1>Forgot Password?</h1>*/}
      {/*</div>*/}
    </div>
  );
}
