"use client"

import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";

import html from "../../../public/skills/html.png";
import CSS from "../../../public/skills/css.png";
import react from "../../../public/skills/react.png";
import next from "../../../public/skills/nextjs.png";
import fire from "../../../public/skills/firebase.png";
import git from "../../../public/skills/github1.png";
import tail from "../../../public/skills/tailwind.png";
import javascript from "../../../public/skills/javascript.png";
const Skil = () => {
    const skillItems = [
        { title: "HTML", image: html },
        { title: "CSS", image: CSS },
        { title: "JavaScript", image: javascript },
        { title: "React.js", image: react },
        { title: "Next.js", image: next },
        { title: "Git & GitHub", image: git },
        { title: "Tailwind CSS", image: tail },
        { title: "Firebase", image: fire },
      ];
    
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {skillItems.map((item, index) => (
      <motion.div
        key={index}
        className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <div className="m-auto">
            <Image src={item.image} width={64} height={64} alt={item.title} />
          </div>
          <div>
            <div className="flex flex-col items-center justify-center">
              <h3>{item.title}</h3>
            </div>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
  )
}

export default Skil
