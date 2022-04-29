import React from "react";

import simple from "../../assets/simple.jpg";

const Home = () => {
  return (
    <div className="w-[calc(100%-64px)] md:w-[calc(100%-70px)] h-screen flex justify-center	items-center p-[70px]">
      <div className="bg-[#212121] rounded-xl flex w-full h-full overflow-hidden overflow-y-auto p-1 md:p-8">
        <div className="container">
          <div className="md:flex md:justify-center	md:items-center md:gap-12">
            <div className="md:w-1/3">
              <img className="rounded-xl" src={simple} alt="" />
            </div>
            <div className="md:w-2/3 pt-2.5 md:pt-0">
              <p className="text-[#888] text-center mb-2">Get To Know Me</p>
              <h1 className="text-center font-bold text-white">Ahmed Saleh</h1>
              <div className="bg-[#ff651c] h-1 w-28 rounded m-auto	relative">
                <span className="absolute bg-[#212121] h-full w-1 left-2"></span>
                <span className="absolute bg-[#212121] h-full w-1 left-0"></span>
              </div>
              <div className="text-center	my-7">
                <h4 className="text-[#ff651c] font-black	">Web Developer</h4>
              </div>
              <div>
                <ul className="flex justify-center	items-center	">
                  <li className="group">
                    <a href="#">
                      <span className="text-[#888] mx-2.5 text-3xl transition ease-in-out duration-500 group-hover:text-[#ff651c]">
                        <i className="fab fa-linkedin"></i>
                      </span>
                    </a>
                  </li>
                  <li className="group">
                    <a href="#">
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
                <a
                  href="#"
                  className="bg-[#ff651c] p-2.5	 text-white rounded border-2	border-[#ff651c] border-solid	mr-2.5 transition ease-in-out duration-500 hover:bg-transparent"
                >
                  Hire Me
                </a>
                <a
                  href="#"
                  className="bg-[#ff651c] p-2.5	 text-white rounded border-2	border-[#ff651c] border-solid	 transition ease-in-out duration-500 hover:bg-transparent"
                >
                  About Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
