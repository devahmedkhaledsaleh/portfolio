import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavbarPage = () => {
  const location = useLocation();

  const getNavLinkClass = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <div className="h-16 p-0 fixed rounded-t-xl right-0 bottom-0 flex justify-center flex-col bg-[#212121] w-full md:py-16 md:h-full md:w-auto bg-[#111] md:rounded-none	">
      <div className="w-full h-full rounded-t-xl flex justify-center items-center bg-[#212121] relative md:w-20 md:rounded-r-lg">
        <ul className="flex flex-row w-4/5 flex-nowrap justify-center items-center md:flex-col md:flex-wrap md:w-auto">
          <li
            className={`w-14 h-14 md:w-20 md:h-20 flex justify-center items-center relative group left-0 bottom-0 border-8 border-[#ffffff00]     transition-all  ease-in-out duration-[1000ms]  ${
              getNavLinkClass("/")
                ? "left-0 md:left-[-50%] bg-[#212121] bottom-9 md:bottom-0 rounded-full   border-[#111111] md:border-[#111] bg-[#212121]"
                : ""
            }`}
          >
            <NavLink
              to=""
              className={`h-12 w-20 md:h-20 flex justify-center items-center`}
            >
              <span
                className={`transition-all  ease-in-out duration-[1000ms] ${
                  getNavLinkClass("/") ? "text-[#ff651c]" : "text-[#555555] "
                } `}
              >
                <i className="fa fa-home md:text-2xl"></i>
              </span>
              <div className="hidden md:block bg-[#ff651c] absolute left-0 py-2 px-4 text-white rounded-lg pointer-events-none translate-x-[-100%] opacity-0 transition ease-in-out duration-1000 group-hover:opacity-100 ">
                <span className="bg-[#ff651c] absolute w-3 h-3 rounded top-2/4 right-px rotate-45 translate-y-[-50%] translate-x-1/2"></span>
                Home
              </div>
            </NavLink>
          </li>

          <li
            className={`w-14 h-14 md:w-20 md:h-20 flex justify-center items-center relative group left-0 bottom-0 border-8 border-[#ffffff00]     transition-all  ease-in-out duration-[1000ms]  ${
              getNavLinkClass("/about")
                ? "left-0 md:left-[-50%] bg-[#212121] bottom-9 md:bottom-0 rounded-full   border-[#111111] md:border-[#111] bg-[#212121]"
                : ""
            }`}
          >
            <NavLink
              to="about"
              className={`h-12 w-20 md:h-20 flex justify-center items-center`}
            >
              <span
                className={`transition-all  ease-in-out duration-[1000ms] ${
                  getNavLinkClass("/about")
                    ? "text-[#ff651c]"
                    : "text-[#555555] "
                } `}
              >
                <i className="fas fa-user-alt md:text-2xl"></i>
              </span>
              <div className="hidden md:block bg-[#ff651c] absolute left-0 py-2 px-4 text-white rounded-lg pointer-events-none translate-x-[-100%] opacity-0 transition ease-in-out duration-1000 group-hover:opacity-100 ">
                <span className="bg-[#ff651c] absolute w-3 h-3 rounded top-2/4 right-px rotate-45 translate-y-[-50%] translate-x-1/2"></span>
                About
              </div>
            </NavLink>
          </li>

          <li
            className={`w-14 h-14 md:w-20 md:h-20 flex justify-center items-center relative group left-0 bottom-0 border-8 border-[#ffffff00]     transition-all  ease-in-out duration-[1000ms]  ${
              getNavLinkClass("/portfolios")
                ? "left-0 md:left-[-50%] bg-[#212121] bottom-9 md:bottom-0 rounded-full   border-[#111111] md:border-[#111] bg-[#212121]"
                : ""
            }`}
          >
            <NavLink
              to="portfolios"
              className={`h-12 w-20 md:h-20 flex justify-center items-center`}
            >
              <span
                className={`transition-all  ease-in-out duration-[1000ms] ${
                  getNavLinkClass("/portfolios")
                    ? "text-[#ff651c]"
                    : "text-[#555555] "
                } `}
              >
                <i className="fas fa-briefcase md:text-2xl"></i>
              </span>
              <div className="hidden md:block bg-[#ff651c] absolute left-0 py-2 px-4 text-white rounded-lg pointer-events-none translate-x-[-100%] opacity-0 transition ease-in-out duration-1000 group-hover:opacity-100 ">
                <span className="bg-[#ff651c] absolute w-3 h-3 rounded top-2/4 right-px rotate-45 translate-y-[-50%] translate-x-1/2"></span>
                Portfolios
              </div>
            </NavLink>
          </li>

          <li
            className={`w-14 h-14 md:w-20 md:h-20 flex justify-center items-center relative group left-0 bottom-0 border-8 border-[#ffffff00]     transition-all  ease-in-out duration-[1000ms]  ${
              getNavLinkClass("/contact")
                ? "left-0 md:left-[-50%] bg-[#212121] bottom-9 md:bottom-0 rounded-full   border-[#111111] md:border-[#111] bg-[#212121]"
                : ""
            }`}
          >
            <NavLink
              to="contact"
              className={`h-12 w-20 md:h-20 flex justify-center items-center`}
            >
              <span
                className={`transition-all  ease-in-out duration-[1000ms] ${
                  getNavLinkClass("/contact")
                    ? "text-[#ff651c]"
                    : "text-[#555555] "
                } `}
              >
                <i className="fas fa-phone-alt md:text-2xl"></i>
              </span>
              <div className="hidden md:block bg-[#ff651c] absolute left-0 py-2 px-4 text-white rounded-lg pointer-events-none translate-x-[-100%] opacity-0 transition ease-in-out duration-1000 group-hover:opacity-100 ">
                <span className="bg-[#ff651c] absolute w-3 h-3 rounded top-2/4 right-px rotate-45 translate-y-[-50%] translate-x-1/2"></span>
                Contact
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarPage;
