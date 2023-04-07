"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import FormInput from "@/components/auth/input";
import Script from "next/script";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import { ToastContainer, toast } from "react-toastify";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");

  useEffect(() => {
    if (captcha != "") {
      const payload = {
        email: email,
        password: password,
        reCaptcha: captcha,
      };

      fetch(`${process.env.NEXT_PUBLIC_API_URL}v1/auth/login`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then(async (response) => {
          const responseFromServer = await response.json();

          if (response.status == 201) {
            toast.success(responseFromServer.message);
            setCookie("authorization", "bearer " + responseFromServer.data);
            await router.push("/dashboard");
          } else {
            toast.error(responseFromServer.error);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    // setLoading(() => false);
  }, [captcha]);

  const login = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    grecaptcha.enterprise.ready(async () => {
      const token = await grecaptcha.enterprise.execute(
        "6LcjNR0jAAAAAE14isjbo9OjTiikFFgr52y5hqCU",
        {
          action: "Register",
        }
      );
      setCaptcha(() => token);
    });
  };

  return (
    <div className="min-h-screen flex justify-end mt-10">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className=" p-8 rounded-md dark:shadow-lg w-80">
        <Script src="https://www.google.com/recaptcha/enterprise.js?render=6LcjNR0jAAAAAE14isjbo9OjTiikFFgr52y5hqCU"></Script>
        <form onSubmit={login}>
          <FormInput
            name={"Email"}
            placeholder={"Email"}
            type={"text"}
            value={email}
            onChange={setEmail}
          ></FormInput>
          <FormInput
            name={"Password"}
            placeholder={"Password"}
            type={"password"}
            value={password}
            onChange={setPassword}
          ></FormInput>
          <button
            type="submit"
            className="w-full py-2 px-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none"
          >
            Login To Your Account{" "}
            <span className="inline-block ml-2 transform">&rarr;</span>
          </button>
          <div className={"mt-2"}>
            <Link
              className={"text-black dark:text-white underline "}
              href={"/register"}
            >
              Create An Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
