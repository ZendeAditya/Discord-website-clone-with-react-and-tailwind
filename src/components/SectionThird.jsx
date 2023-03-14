import React from "react";
import visual_3 from "../assets/mainSection/visual_3.svg";

function SectionThird() {
  return (
    <>
      <div className="flex pt-24 items-center  gap-x-6 lg:container lg:mx-auto flex-col lg:flex-row justify-around pb-16 lg:px-24 px-4">
        <div className="container">
          <img src={visual_3} alt="DiscordImg" />
        </div>

        <div className="lg:container  lg:pl-20 ">
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

export default SectionThird;
