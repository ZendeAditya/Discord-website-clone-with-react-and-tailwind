import React from "react";
import img1 from "../assets/img/img_1.svg";
import img2 from "../assets/img/img_2.svg";

import { FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <>
      <section class="relative bg-[#404EED] pl-12 text-white bg bg-no-repeat bg-center">
        <img
          src={img2}
          alt=""
          class="absolute bottom-0 right-0 xl:-left-60 w-[65%] xl:w-[40%] block md:hidden xl:block"
        />
        <img
          src={img1}
          alt=""
          class="absolute bottom-0 md:right-0 xl:-right-56 overflow-x-hidden md:-[95%] w-[40%] hidden md:block"
        />

        <div class="flex flex-col gap-8 items-start xl:items-center xl:justify-center container h-[84vh] xl:h-[78vh] pt-16 md:pt-20 xl:pt-0">
          <h1 class="text-7xl font-bold lg:text-4xl xl:text-6xl tracking-widest">
            IMAGINE A PLACE...
          </h1>
          <p class="text-sm lg:text-lg xl:text-xl tracking-wider leading-normal text-justify pt-12">
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. <br class="hidden md:block" />
            Where just you and a handful of friends can spend time together. A
            place that makes it easy <br class="hidden md:block" />
            to talk every day and hang out more often.
          </p>

          <div class="flex flex-col xl:flex-row items-center justify-around gap-5">
            <button className="bg-white flex px-20  text-black py-3  rounded-full hover:text-blue-500 pl-8 items-center justify-between ">
              <FaDownload size={20} className="pt-2" />{" "}
              <span>Download for Windows</span>
            </button>
            <button className="bg-black px-12 text-white py-3  rounded-full">
              Open Discord in Your browser
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
