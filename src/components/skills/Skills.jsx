import React from "react";
import Skill from "../skill/Skill";

const Skills = (props) => {
  return (
    <div className="bg-[#232323] rounded-xl mb-8 p-2.5">
      {props.type === "design" ? (
        <>
          <Skill title="Photoshop" progress="80%" width="w-[80%]" />
          <Skill  title="Illustrator" progress="90%" width="w-[90%]" />
          <Skill title="Figma" progress="75%" width="w-[75%]" />
          <Skill title="Indesign" progress="80%" width="w-[80%]" />
          <Skill title="Sketch" progress="70%" width="w-[70%]" />
        </>
      ) : (
        ""
      )}
      {props.type === "coding" ? (
        <>
          <Skill title="HTML" progress="80%" width="w-[80%]" />
          <Skill title="CSS" progress="60%" width="w-[60%]" />
          <Skill title="jQuery" progress="85%" width="w-[85%]" />
          <Skill title="Python" progress="50%" width="w-[50%]" />
          <Skill title="MySQL" progress="70%" width="w-[70%]" />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Skills;
