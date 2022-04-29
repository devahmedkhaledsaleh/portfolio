import React, { useState } from "react";

const Navbar = () => {
  const [active, setActice] = useState(true);

  return (
    <div className="fixed h-full right-0 z-50 bg-[#111] sm:p-0 md:py-20 ">
      <div className="h-full w-20 bg-[#212121] rounded-l-xl flex justify-center items-center">
        <ul className="flex flex-col">
          <li
            className={`relative flex justify-center items-center group  ${
              active
                ? "w-20 h-20 left-[-50%] rounded-full border-8 border-[#111] bg-[#212121] "
                : ""
            }    `}
          >
            <a href="#" className="w-20 h-20 flex justify-center items-center">
              <span
                className={`text-[#555] ${active ? "text-[#ff651c]" : ""} `}
              >
                <i className="fa fa-home fa-xl"></i>
              </span>
              <div className="bg-[#ff651c] absolute left-0 py-2 px-4 text-white rounded-lg pointer-events-none translate-x-[-100%] opacity-0 transition ease-in-out duration-1000 group-hover:opacity-100 ">
                <span className="bg-[#ff651c] absolute w-3 h-3 rounded top-2/4 right-px rotate-45 translate-y-[-50%] translate-x-1/2"></span>
                Home
              </div>
            </a>
          </li>
          <li className="relative group">
            <a href="#" className="w-20 h-20 flex justify-center items-center">
              <span className="text-[#555]">
                <i className="fas fa-user fa-xl"></i>
              </span>
              <div className="bg-[#ff651c] absolute left-0 py-2 px-4 text-white rounded-lg pointer-events-none translate-x-[-100%] opacity-0 transition ease-in-out duration-1000 group-hover:opacity-100 ">
                <span className="bg-[#ff651c] absolute w-3 h-3 rounded top-2/4 right-px rotate-45 translate-y-[-50%] translate-x-1/2"></span>
                About
              </div>
            </a>
          </li>
          <li className="relative group">
            <a href="#" className="w-20 h-20 flex justify-center items-center">
              <span className="text-[#555]">
                <i className="fas fa-briefcase fa-xl"></i>
              </span>
              <div className="bg-[#ff651c] absolute left-0 py-2 px-4 text-white rounded-lg pointer-events-none translate-x-[-100%] opacity-0 transition ease-in-out duration-1000 group-hover:opacity-100 ">
                <span className="bg-[#ff651c] absolute w-3 h-3 rounded top-2/4 right-px rotate-45 translate-y-[-50%] translate-x-1/2"></span>
                Portfolio
              </div>
            </a>
          </li>
          <li className="relative group">
            <a href="#" className="w-20 h-20 flex justify-center items-center">
              <span className="text-[#555]">
                <i className="fa fa-phone fa-xl"></i>
              </span>

              <div className="bg-[#ff651c] absolute left-0 py-2 px-4 text-white rounded-lg pointer-events-none translate-x-[-100%] opacity-0 transition ease-in-out duration-1000 group-hover:opacity-100 ">
                <span className="bg-[#ff651c] absolute w-3 h-3 rounded top-2/4 right-px rotate-45 translate-y-[-50%] translate-x-1/2"></span>
                Contact
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
