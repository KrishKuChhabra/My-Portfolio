import React from "react";
import Skil from "./skil";


const Skills = () => {
 
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1248px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <Skil />
      </div>
    </div>
  );
};

export default Skills;
