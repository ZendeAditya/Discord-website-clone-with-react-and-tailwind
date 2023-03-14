import React, { useState } from "react";
import { FaDiscord } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";

function Navbar() {
    const [open, setOpen] = useState(false);
    const handleMenu = () => {
      setOpen(!open);
    };
    const Links = [
        { name: "Home" },
        { name: "Download" },
        { name: "Nitro" },
        { name: "Discover" },
        { name: "Safety" },
        { name: "Mod Academy" },
        { name: "Support" },
        { name: "Blog" },
        { name: "Careers" },
      ];
  return (
    <>
      <section className="h-20 bg-[#404EED] py-4 ">
        <nav className="flex justify-around align-middle text-white   ">
          <div className="flex gap-x-2">
            <FaDiscord size={28} />
            <span>Discord</span>
          </div>
          <div>
            <ul
              className={`${
                !open ? "right-[100%] " : "right-0"
              } rounded-lg text-black flex align-middle gap-x-6 flex-col sm:absolute w-60 bg-white h-screen top-0 lg:flex-row  z-20 lg:static fixed px-3 justify-around ease-linear lg:bg-transparent lg:text-white `}
            >
              <li className="lg:hidden">
                <div className="flex gap-x-2">
                  <FaDiscord size={28} />
                  <span>Discord</span>
                  <br />
                </div>
              </li>
              {Links.map((link, index) => (
                <>
                  {link.name === "Home" || link.name === "Mod Academy" ? (
                    <></>
                  ) : (
                    <li
                      key={index}
                      className="cursor-pointer py-2 lg:inline-block "
                    >
                      <a href="#home">{link.name}</a>
                    </li>
                  )}
                </>
              ))}
              <li className="lg:hidden">
                <button className="bg-blue-600 py-2 px-2 rounded flex justify-between  items-center gap-2">
                  <FaDownload /> <span>Download for windows</span>
                </button>
              </li>
            </ul>
          </div>
          <div>
            <button>Login</button>
          </div>
          {!open ? (
            <AiOutlineMenu
              onClick={handleMenu}
              size={24}
              className="lg:hidden cursor-pointer z-20"
            />
          ) : (
            <BsArrowRight
              onClick={handleMenu}
              size={24}
              className="lg:hidden cursor-pointer text-black z-20"
            />
          )}
        </nav>
      </section>
    </>
  );
}

export default Navbar;
