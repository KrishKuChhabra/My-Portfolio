import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { BsFillPersonLinesFill } from 'react-icons/bs';



const Herosection = () => {
  return (
    <div className='mx-0 w-full h-screen text-left'>
      <div className='max-w-[1240px] w-full h-full p-6 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-wide text-gray-600'>Lets Build Something Together</p>
          <h1 className='py-4 text-gay-700'>
            Hi, I&apos;m <span className='dark:text-blue-500'>Krish</span>
          </h1>
          <h1 className='py-2 text-gay-700'>
            A Front-End Web Developer
          </h1>
          <p className='py-2 text-gray-600 mx-w-[70%] m-auto'>
            I&apos;m a front-end web developer specializing in building
            (and occasionally designing) <br />
            exceptional digital experience. <br /> Currently,
            I&apos;m focused on building responsive front-end web applications <br /> while
            learning back-end technologies
          </p>

          <div className='flex flex-wrap items-center justify-between max-w-[390px] mx-2 px-2 py-2'>
            <a href="https://www.linkedin.com/in/krishchhabra25/">
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:bg-blue-400 scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>

            <a href="https://github.com/KrishKuChhabra">
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:bg-blue-400 scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>

            <a href="https://www.instagram.com/krishkumarchhabra_/">
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:bg-blue-400 scale-110 ease-in duration-300'>
                <GrInstagram />
              </div>
            </a>

            <a href="https://discord.com/channels/@me">
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:bg-blue-400 scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
