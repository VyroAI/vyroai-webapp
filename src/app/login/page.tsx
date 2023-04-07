import AuthTitle from "@/components/auth/title";
import LoginForm from "@/components/auth/loginForm";
import AuthProvider from "@/components/auth/provider";

import { LoginProvider } from "@/components/auth/store/providers";

export const metadata = {
  title: "Login | VyroAI",
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

export default function LoginPage() {
  return (
    <div className={"relative"}>
      <div className={"mt-48"}>
        <AuthTitle
          text={"Login To Your Account"}
          description={"Manage Your Personalized Chatbot Now"}
        ></AuthTitle>
      </div>

      <div className={"flex lg:flex-row flex-col gap-32"}>
        <div className="basis-1/2 ">
          <LoginForm></LoginForm>
        </div>
        <div className="basis-1/2">
          <AuthProvider providers={LoginProvider}></AuthProvider>
        </div>
      </div>
      {/*<div className={""}>*/}
      {/*  <h1>Forgot Password?</h1>*/}
      {/*</div>*/}
    </div>
  );
}
