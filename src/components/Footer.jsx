import React from "react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

function Footer() {
  return (
    <>
      {/* <footer className="bg-[#23272A] text-white">
       <div className="px-24 py-12">
       <h1 className="text-3xl text-blue-700 font-bold">
        I MAGINE A <br  className="hidden lg:block"/> PLACE
        </h1>
        <div className="py-7">
          <select name="language" className="py-1 px-5 bg-transparent  ">
            <option value="Hindi" className="bg-black text-white">Hindi</option>
            <option value="English" className="bg-black text-white">English</option>
            <option value="Bulgaria" className="bg-black text-white">Bulgaria</option>
            <option value="Czech" className="bg-black text-white">Czech</option>
            <option value="Dansk" className="bg-black text-white">Dansk</option>
            <option value="Deusta" className="bg-black text-white">Deusta</option>
          </select>
          <div className="flex flex-1">
                <BsTwitter/>
                <BsInstagram/>
                <BsFacebook/>
                <BsYoutube/>
            </div>
        </div>
       </div>
      </footer> */}
      <footer className="bg-[#23272A]  text-white">
        <div className="px-32 py-16 flex items-center flex-wrap   lg:justify-around gap-x-10">
          <div className="w-auto">
            <h1 className="text-4xl font-bold text-blue-700">
              IMAGINE A <br />
              PLACE
            </h1>
            <div className="pt-7">
              <select name="languages" className="py-1 px-5 bg-transparent">
                <option value="Hindi" className="bg-black text-white">
                  Hindi
                </option>
                <option value="English" className="bg-black text-white">
                  English
                </option>
                <option value="Bulgaria" className="bg-black text-white">
                  Bulgaria
                </option>
                <option value="Czech" className="bg-black text-white">
                  Czech
                </option>
                <option value="Dansk" className="bg-black text-white">
                  Dansk
                </option>
                <option value="Deusta" className="bg-black text-white">
                  Deusta
                </option>
              </select>
            </div>
            <div className="flex gap-x-6 text-xl pt-5 text-white cursor-pointer">
              <BsTwitter />
              <BsInstagram />
              <BsFacebook />
              <BsYoutube />
              <a href="https://github.com/ZendeAditya/Discord-website-clone-with-react-and-tailwind">
              <BsGithub/>
              </a>
            </div>
          </div>
          <div className="">
            <ul>
              <li className="text-blue-800 py-3">Product</li>
              <li className="cursor-pointer hover:underline">Download</li>
              <li className="cursor-pointer hover:underline">Nitro</li>
              <li className="cursor-pointer hover:underline">Status</li>
            </ul>
          </div>
          <div className="cls">
            <ul>
              <li className="text-blue-800 py-3">Company</li>
              <li className="cursor-pointer hover:underline">About</li>
              <li className="cursor-pointer hover:underline">Jobs</li>
              <li className="cursor-pointer hover:underline">Branding</li>
              <li className="cursor-pointer hover:underline">Newsroom</li>
            </ul>
          </div>
          <div className="cls">
            <ul>
              <li className="text-blue-800 py-3">Resources</li>
              <li className="cursor-pointer hover:underline">College</li>
              <li className="cursor-pointer hover:underline">Support</li>
              <li className="cursor-pointer hover:underline">Saftey</li>
              <li className="cursor-pointer hover:underline">Blog</li>
              <li className="cursor-pointer hover:underline">Feedback</li>
              <li className="cursor-pointer hover:underline">Build</li>
              <li className="cursor-pointer hover:underline">StreamKit</li>
              <li className="cursor-pointer hover:underline">Creators</li>
              <li className="cursor-pointer hover:underline">Community</li>
            </ul>
          </div>
          <div className="cls">
            <ul>
              <li className="text-blue-800 py-3">Policies</li>
              <li className="cursor-pointer hover:underline">Terms</li>
              <li className="cursor-pointer hover:underline">Privacy</li>
              <li className="cursor-pointer hover:underline">Cookie Settings</li>
              <li className="cursor-pointer hover:underline">Guidlines</li>
              <li className="cursor-pointer hover:underline">Acknowledgment</li>
              <li className="cursor-pointer hover:underline">Licenses</li>
              <li className="cursor-pointer hover:underline">Moderation</li>
              <li className="cursor-pointer hover:underline">Moderation</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
