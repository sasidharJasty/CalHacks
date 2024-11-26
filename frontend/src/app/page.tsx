"use client";
import Image from "next/image";

import Navbar from "@/components/navbar";

import { DotPattern } from "@/components/ui/dot-pattern";
import InterestingScroll from "@/components/interesting-scroll";
import { FaDiscord } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import HC from "../Files/HC.png";
import desmos from "../Files/desmos.webp";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="grid  items-start justify-items-start min-h-screen p-8 pb-20  sm:p-20 font-[family-name:var(--font-geist-sans)] ">
        <div className="flex flex-col  row-start-2 items-start sm:items-start">
          {/*<AnimatedBackground animationName="galaxySpiral"></AnimatedBackground>*/}
          <DotPattern
            width={20}
            height={20}
            cx={1}
            cy={1}
            cr={1}
            className={
              "[mask-image:linear-gradient(to_bottom_left,transparent,transparent,white,transparent,transparent)] z-0 "
            }
          />
          <h1 className="font-black text-[120px] z-40 mb-0 ">
            <span className="text-orange-500">Cal</span>{" "}
            <span className="text-yellow-400"> Hacks</span>
          </h1>
          <h1 className="font-black text-[30px] z-40 ">
            <span>March TBD, 2025 </span>
            <span className="text-orange-500">@ California High School</span>
          </h1>

          <div className="flex mt-[20px] ">
            <input
              type="text"
              className="w-[400px] rounded-l-lg rounded-r-none text-white  px-8 py-2 border border-orange-500"
              placeholder="Email Address"
            ></input>
            <button className="min-w-[150px] bg-orange-500 px-8 py-2 rounded-r-lg">
              Pre-Register
            </button>
            <div className="border-r h-fill w-[42px] mr-[20px] border-red-50"></div>
            <a className=" h-fill mx-2">
              <FaDiscord size={"40px"} />
            </a>
            <a className=" h-fill mx-2">
              <MdOutlineEmail size={"40px"} />
            </a>
            <a className=" h-fill mx-2">
              <FaInstagram size={"40px"} />
            </a>
            <a className=" h-fill mx-2">
              <SiDevpost size={"40px"} />
            </a>
          </div>
        </div>
        <div>{/*Sponsor Bar*/}</div>
      </section>
      <InterestingScroll />
      <section className="h-hift">
        <div className="w-fit mx-auto text-3xl text-neutral-400">
          Proudly Sponsored By:
        </div>
        <div className="grid grid-cols-5 w-fit mx-auto gap-8 px-20 mt-4">
          <Image alt="Hackclub" className="" src={HC}></Image>
          <Image alt="Desmos" className="" src={desmos}></Image>
         
        </div>
      </section>
      <section className="my-10 w-screen h-fit py-[50px]">
        <h1 className="text-5xl mx-auto w-fit mt-[80px] font-bold text-orange-500">
          About
        </h1>
        <div className="w-[80%] justify-evenly mx-auto flex mt-[40px]">
          <div className="w-[28%] border-orange-500 border rounded-xl p-4 ">
            <h2 className="text-3xl font-bold text-orange-500">
              What is CalHacks?
            </h2>
            <p className="text-lg text-neutral-500">
              CalHacks is a 24-hour hackathon hosted by California High School.
              It is a place where students can come together to learn, build,
              and share their creations with others. Whether you are a beginner
              or an experienced hacker, CalHacks is the perfect place to start
              your hacking journey.
            </p>
          </div>
          <div className="w-[28%] border-yellow-400 border rounded-xl p-4">
            <h2 className="text-3xl font-bold text-yellow-400">
              What is CalHacks?
            </h2>
            <p className="text-lg text-neutral-500">
              CalHacks is a 24-hour hackathon hosted by California High School.
              It is a place where students can come together to learn, build,
              and share their creations with others. Whether you are a beginner
              or an experienced hacker, CalHacks is the perfect place to start
              your hacking journey.
            </p>
          </div>
          <div className="w-[28%] border-orange-500 border rounded-xl p-4">
            <h2 className="text-3xl font-bold text-orange-500">
              What is CalHacks?
            </h2>
            <p className="text-lg text-neutral-500">
              CalHacks is a 24-hour hackathon hosted by California High School.
              It is a place where students can come together to learn, build,
              and share their creations with others. Whether you are a beginner
              or an experienced hacker, CalHacks is the perfect place to start
              your hacking journey.
            </p>
          </div>
        </div>
      </section>
      <section className="my-10 w-screen h-fit py-[50px]">
        <h1 className="text-5xl mx-auto w-fit mt-[80px] font-bold text-yellow-400 font-sans">
          Schedule
        </h1>
        <div className="w-[40%] mx-auto bg-orange-500 rounded-3xl mt-20 min-h-80 text-lg flex p-6 text-black font-sans font-semibold relative shadow-orange-500 shadow-lg">
          <div className="w-[20%] gap-4 flex flex-col">
            <h1>08:00 AM</h1>
            <h1>08:30 AM</h1>
            <h1>09:00 AM</h1>
            <h1>09:30 AM</h1>
            <h1>11:00 AM</h1>
            <h1>11:45 AM</h1>
            <h1>12:30 PM</h1>
            <h1>01:30 PM</h1>
            <h1>07:00 PM</h1>
            <h1>07:15 PM</h1>
            <h1>07:45 PM</h1>
            <h1>08:30 PM</h1>
          </div>
          <div className="absolute right-6 gap-4 flex flex-col text-end">
            <h1>Check-in Starts</h1>
            <h1>Opening Ceremony</h1>
            <h1>Keynote Speaker: TBD</h1>
            <h1>Hacking Begins</h1>
            <h1>Workshop (TBD)</h1>
            <h1>Workshop (TBD)</h1>
            <h1>Lunch</h1>
            <h1>Workshop (TBD)</h1>
            <h1>Hacking Ends</h1>
            <h1>Dinner</h1>
            <h1>Judging Begins</h1>
            <h1>Awards Ceremony</h1>
          </div>
        </div>
      </section>
    </div>
  );
}
