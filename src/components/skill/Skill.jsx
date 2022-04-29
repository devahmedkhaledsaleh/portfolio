import React from "react";

const Skill = ({title,progress,width}) => {
  return (
    <div>
      <div className="my-5">
        <span className="text-white">{title} </span>
      </div>
      <div className="h-1	w-full bg-[#f0f0f0] relative rounded">
        <div className={`bg-[#ff651c]  ${width} rounded-xl h-full relative`}>
            <span className="absolute top-[-10px] right-0 border-8 border-transparent border-t-white border-r-0	"></span>
            <span className="absolute top-[-30px] px-1 text-[#ff651c] right-0 bg-white rounded">{progress}</span>
        </div>
      </div>
    </div>
  );
};

export default Skill;
