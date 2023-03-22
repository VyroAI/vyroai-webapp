import AuthTitle from "@/components/auth/title";
import LoginForm from "@/components/auth/loginForm";

export default function LoginPage() {
  return (
    <div className={"relative h-screen"}>
      <div className={"mt-48"}>
        <AuthTitle text={"Login To Your Account"}></AuthTitle>
      </div>
      <div className={"flex lg:flex-row flex-col"}>
        <div className="basis-1/2 h-screen">
          <LoginForm></LoginForm>
        </div>
      </div>
    </div>
  );
}
