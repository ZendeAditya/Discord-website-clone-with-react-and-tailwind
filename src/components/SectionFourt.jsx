import React from "react";
import { FaDownload } from "react-icons/fa";
import visual_4 from "../assets/mainSection/visual_4.svg";
function SectionFourt() {
  return (
    <>
      <div className="bg-[#F6F6F6] py-24 lg:px-24 px-4 text-center container">
        <h1 className="lg:text-4xl text-lg font-bold pb-7">
          RELIABLE TECH FOR STAYING CLOSE
        </h1>
        <p className="text-lg">
          Low-latency voice and video feels like you’re in the same room. Wave
          hello over video, watch friends stream their{" "}
          <br className="hidden lg:block" />
          games, or gather up and have a drawing session with screen share.
        </p>
        <img src={visual_4} className="mx-auto" alt="Img"  />
        <div className="text-center py-5">
          <h1 className="text-4xl ">Ready to start your journey?</h1>
          <div className="pt-5 flex flex-col items-center justify-center">
            <button className="py-4 flex items-center  rounded-full px-7 text-lg bg-blue-700 text-white  gap-x-3 ">
              <FaDownload /> <span>Download for windows</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionFourt;
