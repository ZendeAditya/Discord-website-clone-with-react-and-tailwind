import React from "react";
import visual_1 from "../assets/mainSection/visual_1.svg";

function SectionFirst() {
  return (
    <>
      <div className="flex items-center pt-6 gap-x-6 lg:container  lg:mx-auto flex-col lg:flex-row justify-around pb-16 lg:px-24 px-4">
        <div className="container lg:order-first order-first">
          <img src={visual_1} alt="DiscordImg" />
        </div>
        <div className="lg:container    lg:pl-20  lg:order-last order-first">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Create an invite
            <br className="hidden lg:block" />
            -only place where <br className="hidden lg:block" /> you belong
          </h1>
          <p className="lg:container  py-7 text-lg text-justify">
            Discord servers are organized into topic-
            <br className="hidden lg:block" />
            based channels where you can collaborate,
            <br className="hidden lg:block" /> share, and just talk about your
            day without
            <br className="hidden lg:block" />
            clogging up a group chat.
          </p>
        </div>
      </div>
    </>
  );
}

export default SectionFirst;
