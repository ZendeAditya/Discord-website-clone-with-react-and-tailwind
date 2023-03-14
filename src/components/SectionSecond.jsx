import React from "react";
import visual_2 from "../assets/mainSection/visual_2.svg";
function SectionSecond() {
  return (
    <>
      <div className="bg-[#F6F6F6] py-24 lg:px-24 px-4 ">
        <div className="flex items-center pt-6 gap-x-6 lg:container lg:mx-auto flex-col lg:flex-row justify-around lg:order-first order-last">
          <div className="lg:container flex-auto sm:flex-col lg:pl-20 pl-4">
            <h1 className="text-3xl lg:text-5xl font-bold">
              Where hanging
              <br className="hidden lg:block" /> out is easy
            </h1>
            <p className="lg:container  py-7 text-lg text-justify  ">
              Grab a seat in a voice channel when you’re{" "}
              <br className="hidden lg:block" /> free. Friends in your server
              can see you’re <br className="hidden lg:block" />
              around and instantly pop in to talk without
              <br className="hidden lg:block" />
              having to call.
            </p>
          </div>
          <div className="container lg:order-last order-first">
            <img src={visual_2} alt="DiscordImg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionSecond;
