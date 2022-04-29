import React from "react";
import Portfolio from "../components/portfolio/Portfolio";
import simple from "../assets/simple.jpg";

const Portfolios = () => {
  return (
    <div className="w-full p-5 h-[calc(100vh-80px)] md:w-[calc(100%-105px)]  md:h-screen  flex justify-center	items-center md:py-16">
      <div className="p-2.5 bg-[#212121] rounded-xl flex w-full h-full overflow-hidden overflow-y-auto md:p-2.5">
        <div className="container">
          <div className="py-4">
            <p className="text-[#888] text-center mb-2">
              Showcasing Some Of My Best Work
            </p>
            <h1 className="text-center font-bold text-white  mb-2 text-3xl">
              My <span className="text-[#ff651c]">Portfolio</span>
            </h1>
            <div className="bg-[#ff651c] h-1 w-28 rounded m-auto	relative">
              <span className="absolute bg-[#212121] h-full w-1 left-2"></span>
              <span className="absolute bg-[#212121] h-full w-1 left-0"></span>
            </div>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-4 md:flex md:justify-between  md:flex-wrap">
            <div className="md:w-[calc(50%-20px)] lg:w-[calc(25%-10px)] ">
              <Portfolio
                projectImg={simple}
                projectTitle="Web Development"
                projectLink="Link"
              />
            </div>
            <div className="md:w-[calc(50%-20px)] lg:w-[calc(25%-10px)] ">
              <Portfolio
                projectImg={simple}
                projectTitle="Web Development"
                projectLink="Link"
              />
            </div>
            <div className="md:w-[calc(50%-20px)] lg:w-[calc(25%-10px)] ">
              <Portfolio
                projectImg={simple}
                projectTitle="Web Development"
                projectLink="Link"
              />
            </div>
            <div className="md:w-[calc(50%-20px)] lg:w-[calc(25%-10px)] ">
              <Portfolio
                projectImg={simple}
                projectTitle="Web Development"
                projectLink="Link"
              />
            </div>
            <div className="md:w-[calc(50%-20px)] lg:w-[calc(25%-10px)] ">
              <Portfolio
                projectImg={simple}
                projectTitle="Web Development"
                projectLink="Link"
              />
            </div>
            <div className="md:w-[calc(50%-20px)] lg:w-[calc(25%-10px)] ">
              <Portfolio
                projectImg={simple}
                projectTitle="Web Development"
                projectLink="Link"
              />
            </div>
            <div className="md:w-[calc(50%-20px)] lg:w-[calc(25%-10px)] ">
              <Portfolio
                projectImg={simple}
                projectTitle="Web Development"
                projectLink="Link"
              />
            </div>
            <div className="md:w-[calc(50%-20px)] lg:w-[calc(25%-10px)] ">
              <Portfolio
                projectImg={simple}
                projectTitle="Web Development"
                projectLink="Link"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolios;
