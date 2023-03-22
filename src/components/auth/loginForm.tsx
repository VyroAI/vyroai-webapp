"use client";
import { useState } from "react";
import Link from "next/link";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen flex justify-end mt-10">
      <div className=" p-8 rounded-md dark:shadow-lg w-80">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="Email" className="sr-only">
              Username
            </label>
            <input
              id="Email"
              type="text"
              className="w-full px-3 py-2 dark:bg-[#1C1D1C] dark:text-white bg-[#F1ECEC] rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              placeholder="Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-3 dark:bg-[#1C1D1C] py-2 dark:text-white bg-[#F1ECEC]  rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none"
          >
            Login To Your Account{" "}
            <span className="inline-block ml-2 transform">&rarr;</span>
          </button>
          <div className={"mt-2"}>
            <Link
              className={"text-[#000000] dark:text-[#FFFFFF] underline "}
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
