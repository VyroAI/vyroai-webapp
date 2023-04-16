"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import FormInput from "@/components/auth/input";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import { setCookie } from "cookies-next";
import Script from "next/script";
import { validateEmail, validateUsername } from "@/helper/satanized";

export default function RegisterForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (captcha != "") {
      const payload = {
        email: email,
        username: username,
        password: password,
        reCaptcha: captcha,
      };

      fetch(`${process.env.NEXT_PUBLIC_API_URL}v1/auth/register`, {
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
          setLoading(() => false);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [captcha]);

  const register = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(() => true);

    if (!validateEmail(email)) {
      toast.error("Please use a valid email");
      setLoading(() => false);
      return;
    }
    if (username.length < 6 || username.length > 25) {
      toast.error("Username length must be bigger then 6");
      setLoading(() => false);
      return false;
    }
    if (password.length < 6) {
      toast.error("Password length must be bigger then 6");
      setLoading(() => false);
      return false;
    }

    if (!validateUsername(username)) {
      toast.error("Symbols are not allowed in username");
      setLoading(() => false);
      return;
    }

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
    <div className="min-h-screen flex justify-end mt-5">
      <Script src="https://www.google.com/recaptcha/enterprise.js?render=6LcjNR0jAAAAAE14isjbo9OjTiikFFgr52y5hqCU"></Script>
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
        <form onSubmit={register}>
          <FormInput
            name={"Username"}
            placeholder={"Username"}
            type={"text"}
            value={username}
            onChange={setUsername}
          ></FormInput>
          <FormInput
            name={"Email"}
            placeholder={"Email"}
            type={"email"}
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
            disabled={loading}
            type="submit"
            className="w-full py-2 px-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none"
          >
            {loading ? (
              <svg
                className="inline mr-2 w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            ) : (
              "Register"
            )}
          </button>
          <div className={"mt-2"}>
            <Link
              className={"dark:text-white text-black underline"}
              href={"/login"}
            >
              Login in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
