import React from "react";
import Image from "next/image";
import Link from "next/link";
import contactImage from "../../../public/asset/contact.png";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import {GrInstagram} from "react-icons/gr"
import { BsFillPersonLinesFill } from "react-icons/bs";
import {HiOutlineChevronDoubleUp} from "react-icons/hi"
import Rightcontact from "./Rightcontact";
const Contact = () => {
  return (
    <div className="  w-full lg:screen">
      <div className="max-w-[1240px] m-auto px-2 py-16  w-full">
        <p className=" my-5 uppercase text-xl tracking-widest text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/*left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-6">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  src={contactImage}
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  alt=""
                />
              </div>
              <div>
                <h2 className="py-2">Krish Chhabra</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. contact
                  me and lets talk
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                <a href="https://www.linkedin.com/in/krishchhabra25/">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer bg-blue-400  hover:scale-110 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a href="https://github.com/KrishKuChhabra">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer bg-blue-400  hover:scale-110 ease-in duration-300">
                    <FaGithub />
                  </div>
                 </a>
                  
                 <a href="https://www.instagram.com/krishkumarchhabra_/">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer bg-blue-400  hover:scale-110 ease-in duration-300">
                  <GrInstagram/>
                  </div>
                  </a>

                  <a href="https://discord.com/channels/@me">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer bg-blue-400  hover:scale-110 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/*right */}
          <Rightcontact />
        
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
          <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
          <HiOutlineChevronDoubleUp className="text-[#5651e5] " size={30} />
             </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
