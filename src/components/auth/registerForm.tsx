"use client";
import { useState } from "react";
import Link from "next/link";
import FormInput from "@/components/auth/input";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen flex justify-end mt-5">
      <div className=" p-8 rounded-md dark:shadow-lg w-80">
        <form onSubmit={handleSubmit}>
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
            Register <span className="inline-block ml-2 transform">&rarr;</span>
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
