import React from "react";



const Portfolio = ({projectImg,projectTitle,projectLink}) => {
  return (
    <div className="group relative cursor-pointer my-4">
        <div className="bg-[#1d1d1d] h-0 opacity-50 absolute right-0 left-0 top-0 bottom-0  rounded-xl ease-in-out transition-[height]  duration-[2000ms]  group-hover:h-full   "></div>
      <img className="rounded-xl object-cover  " src={projectImg} alt="" />
      <div className="absolute w-full  top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] text-center opacity-0	transition ease-in-out duration-[2000ms] group-hover:opacity-100">
        <h3 className="text-white mb-5 text-xl">{projectTitle}</h3>
        <a
          href={projectLink}
          className="bg-[#ff651c] p-2	 text-white rounded border-1 border-[#ff651c] border-solid"
        >
          Project
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
