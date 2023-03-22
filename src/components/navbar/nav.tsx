"use client";
import Link from "next/link";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import joinClassName from "../../helper/joinClassName";
import navigationList from "./store/navigation";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 64) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div
            className={joinClassName(
              navbar || open ? "dark:bg-black bg-white" : "bg-transparent",
              " fixed top-0 left-0 right-0 z-50 "
            )}
          >
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex-shrink-0">
                  <Link href={"/"} className={"flex"}>
                    <Image
                      className={"h-14 w-auto mt-2 block lg:hidden px-2"}
                      width={55}
                      height={55}
                      src="https://cdn.vyroai.com/static/logo.webp"
                      alt="vyroai logo"
                      priority={true}
                    />
                    <Image
                      className={joinClassName(
                        navbar ? "h-14 w-auto mt-2" : "h-20 w-auto mt-12",
                        "hidden lg:block"
                      )}
                      width={55}
                      height={55}
                      src="https://cdn.vyroai.com/static/logo.webp"
                      alt="vyroai logo"
                      priority={true}
                    />
                  </Link>
                </div>
                <div className="hidden md:block sm:ml-6 mt-2">
                  <div className="flex space-x-4">
                    {navigationList.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="dark:text-white text-black hover:text-slate-600 px-3 py-2 rounded-md text-xl hover:scale-105 transition duration-300 ease-in-out font-Exo"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="hidden md:ml-6 md:block mt-1">
                  <div className="flex items-center">
                    <Link
                      href={"/dashboard"}
                      className="inline-flex items-center px-10 py-2 border border-transparent font-semibold rounded-full shadow-md text-white bg-gradient-to-r from-[#2a73ed] to-[#2194f7] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:scale-105 transition duration-300 ease-in-out"
                    >
                      Members Area
                    </Link>
                  </div>
                </div>

                <div className="flex md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md dark:text-white text-black font-Exo">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="block h-6 w-6"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faBars}
                        className="block h-6 w-6"
                      />
                    )}
                  </Disclosure.Button>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden absolute dark:bg-black bg-white w-full h-screen">
                <div className="w-full block lg:hidden">
                  {navigationList.map((item) => (
                    <Link
                      href={item.href}
                      key={item.title}
                      className="block py-2 rounded-md hover:bg-gray-700 dark:text-white text-black block px-3 pb-4 rounded-md font-medium text-base font-Lato"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                <div className="mx-auto w-80 pt-6">
                  <Link
                    href={"/dashboard"}
                    className="block w-full text-center px-4 py-3 border border-transparent text-base font-semibold rounded-md shadow-sm text-white bg-gradient-to-r from-[#2a73ed] to-[#2194f7] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:scale-105 transition duration-300 ease-in-out font-Exo"
                  >
                    Members Area
                  </Link>
                </div>
              </Disclosure.Panel>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
