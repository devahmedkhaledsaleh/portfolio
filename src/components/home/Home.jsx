import React from "react";
import { Link } from "react-router-dom";
import simple from "../../assets/simple.jpg";

const HomePage = () => {
  return (
    <div className="w-full p-5 h-[calc(100vh-80px)] md:w-[calc(100%-105px)]  md:h-screen  flex justify-center	items-center md:py-16">
      <div className="p-5 my-[150px] md:my-0 bg-[#212121] rounded-xl flex w-full h-full overflow-hidden overflow-y-auto md:p-2.5">
        <div className="container">
          <div className="columns-1 md:columns-2 md:flex md:justify-center	md:items-center">
            <div className="md:w-2/5">
              <img className="rounded-xl object-cover  " src={simple} alt="" />
            </div>
            <div className="py-2.5 md:p-2.5 md:w-3/5">
              <p className="text-[#888] text-center mb-2">Get To Know Me</p>
              <h1 className="text-center font-bold text-white  mb-2 text-xl md:text-4xl	">
                Ahmed Saleh
              </h1>
              <div className="bg-[#ff651c] h-1 w-28 rounded m-auto	relative">
                <span className="absolute bg-[#212121] h-full w-1 left-2 animate-[headingMove_10s_linear_infinite]"></span>
                <span className="absolute bg-[#212121] h-full w-1 left-0 animate-[headingMove_10s_linear_infinite]"></span>
              </div>
              <div className="text-center	my-7 relative h-14 overflow-hidden my-6">
                <h4 className="text-[#ff651c]  font-block	text-xl md:text-[30px] leading-[60px] animate-[textMove_5s_infinite]">
                  Web Developer
                </h4>
                <h4 className="text-[#ff651c] font-block	text-xl md:text-[30px] leading-[60px]">
                UI - UX Designer
                </h4>
                <h4 className="text-[#ff651c] font-block	text-xl md:text-[30px] leading-[60px]">
                Software Engineer
                </h4>
              </div>
              <div>
                <ul className="flex justify-center	items-center	">
                  <li className="group">
                    <a href="https://www.linkedin.com/in/ahmedsaleh96/">
                      <span className="text-[#888] mx-2.5 text-3xl transition ease-in-out duration-500 group-hover:text-[#ff651c]">
                        <i className="fab fa-linkedin"></i>
                      </span>
                    </a>
                  </li>
                  <li className="group">
                    <a href="https://github.com/devahmedkhaledsaleh">
                      <span className="text-[#888] mx-2.5 text-3xl transition ease-in-out duration-500 group-hover:text-[#ff651c]">
                        <i className="fab fa-github-square"></i>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <p className="text-center text-[#888] my-4 leading-relaxed">
                I am a freelancer based in the United Kingdom and i have been
                building noteworthy UX/UI designs and websites for years, which
                comply with the latest design trends. I help convert a vision
                and an idea into meaningful and useful products. Having a sharp
                eye for product evolution helps me prioritize tasks, iterate
                fast and deliver faster.
              </p>
              <div className="flex justify-center	items-center ">
                <Link
                  to="contact"
                  className="bg-[#ff651c] p-1.5	md:p-2.5 text-white rounded border-2 text-xs md:text-base		border-[#ff651c] border-solid	mr-2.5 transition ease-in-out duration-500 hover:bg-transparent"
                >
                  Hire Me
                </Link>
                <Link
                  to="about"
                  className="bg-[#ff651c] p-1.5	md:p-2.5 text-white rounded border-2 text-xs md:text-base		border-[#ff651c] border-solid	 transition ease-in-out duration-500 hover:bg-transparent"
                >
                  About Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
