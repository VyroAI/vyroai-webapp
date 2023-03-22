import AuthTitle from "@/components/auth/title";
import LoginForm from "@/components/auth/loginForm";
import AuthProvider from "@/components/auth/provider";

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
          <AuthProvider></AuthProvider>
        </div>
      </div>
      {/*<div className={""}>*/}
      {/*  <h1>Forgot Password?</h1>*/}
      {/*</div>*/}
    </div>
  );
}
