"use client";
import { useState } from "react";
import Image from "next/image";
import { ModeToggle } from "./theme-switch";
import { Button } from "@/components/ui/button";
import Logo from "../Files/CalHacks.png";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <nav className="bg-white border-gray-200 dark:bg-[#0a0a0a] dark:border-neutral-900 fixed top-0 z-50 w-screen border-b-[1px]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            className="invert dark:invert-0 mix-blend-difference"
            src={Logo}
            alt="Vercel logomark"
            width={150}
            height={50}
          />
        </a>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-[#0a0a0a] dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#0a0a0a] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-[#0a0a0a] md:dark:bg-[#0a0a0a] dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-red-700 rounded md:bg-transparent md:text-neutral-700 md:p-0 md:dark:text-orange-500 dark:bg-orange-500 md:dark:bg-transparent"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                onClick={() => {
                  setIsDropdownOpen(!isDropdownOpen);
                }}
                className="flex items-center justify-between w-full py-2 px-3  text-gray-900 rounded hover:bg-[#0a0a0a] md:hover:bg-transparent md:border-0 md:hover:text-neutral-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-neutral-400 dark:focus:text-white dark:border-gray-700 dark:hover:bg-[#0a0a0a] md:dark:hover:bg-transparent"
              >
                Features{" "}
                <svg
                  className={`w-2.5 h-2.5 ms-2.5 transition-all ${
                    isDropdownOpen ? `rotate-180` : null
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {isDropdownOpen ? (
                <div
                  id="dropdownNavbar"
                  className="z-10 absolute font-normal bg-white divide-y border-[0.5px] border-neutral-800 divide-gray-100 rounded-lg  w-44 dark:bg-black dark:divide-gray-600 shadow-md"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-[#0a0a0a] dark:hover:bg-[#0a0a0a] dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-[#0a0a0a] dark:hover:bg-[#0a0a0a] dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-[#0a0a0a] dark:hover:bg-[#0a0a0a] dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0a0a0a] dark:hover:bg-[#0a0a0a] dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              ) : null}
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-[#0a0a0a] md:hover:bg-transparent md:border-0 md:hover:text-neutral-700 md:p-0 dark:text-white md:dark:hover:text-neutral-400 dark:hover:bg-[#0a0a0a] dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-[#0a0a0a] md:hover:bg-transparent md:border-0 md:hover:text-neutral-700 md:p-0 dark:text-white md:dark:hover:text-neutral-400 dark:hover:bg-[#0a0a0a] dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-[#0a0a0a] md:hover:bg-transparent md:border-0 md:hover:text-neutral-700 md:p-0 dark:text-white md:dark:hover:text-neutral-400 dark:hover:bg-[#0a0a0a] dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-4">
          {/*<Button variant={"ghost"}>Login</Button>*/}
          <Button className="hover:!bg-orange-400" variant={"secondary"}>
            Pre-register
          </Button>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
