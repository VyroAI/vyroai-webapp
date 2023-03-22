import Image from "next/image";
import { providers } from "@/components/auth/store/providers";
import Link from "next/link";
export default function AuthProvider() {
  return (
    <div>
      {providers.map((provider) => (
        <Link
          href={provider.url}
          className={
            "py-3 rounded-sm outline outline-1 outline-green-500 mt-6 w-80 flex pl-5 dark:bg-transparent dark:text-white text-black"
          }
        >
          <Image
            className={"mt-1 hidden dark:block "}
            src={"https://cdn.vyroai.com/static/" + provider.icon}
            height={20}
            width={20}
          ></Image>
          <Image
            className={"mt-1 dark:hidden"}
            src={"https://cdn.vyroai.com/static/" + provider.darkIcon}
            height={20}
            width={20}
          ></Image>
          <h1 className={"ml-4 dark:text-white"}>
            Sign in with {provider.name}
          </h1>
        </Link>
      ))}
    </div>
  );
}
