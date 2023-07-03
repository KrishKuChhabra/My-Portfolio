import React from 'react';
import Image from 'next/image';
import AbouImage from "../../../public/asset/righthero.jpg";
import Link from 'next/link';
const About = () => {
  return (
    <div className='w-full md:h-screen mx-5 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='md:col-span-2'>
          <p className='sm:top-4 my-7 uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>I am Krish Kumar Chhabra (Developer)</p>
          <p className='py-2 text-gray-600'>
            As a frontend web developer, I specialize in creating responsive and visually appealing user interfaces using a variety of technologies. My skillset includes proficiency in Next.js, React.js, HTML, CSS, JavaScript, Tailwind CSS, and Java. With Next.js, I am able to build performant and scalable web applications that utilize server-side rendering, static site generation, and other advanced features. I also have extensive experience with React.js, using it to create reusable components and build complex user interfaces.
          </p>

          <p className='py-2 text-gray-600'>
            When it comes to styling, I am well-versed in HTML and CSS and have a keen eye for design. I am also familiar with the latest CSS frameworks such as Tailwind CSS, which allows me to create responsive and mobile-first layouts quickly and efficiently. Additionally, my knowledge of Java enables me to build backend systems and work on full-stack projects.
          </p>

          <p className='py-2 text-gray-600'>
            In my work, I prioritize clean code, maintainability, and scalability. I am passionate about creating high-quality user experiences and staying up-to-date with the latest web development trends and technologies. Overall, as a frontend web developer with expertise in Next.js, React.js, HTML, CSS, JavaScript, Tailwind CSS, and Java, I am dedicated to creating outstanding web applications that meet the needs of my clients and users.
          </p>

        <Link href="/Portfolio">  <p className='py-2 text-blue  underline cursor-pointer'>Check Out Some Of My Latest Projects</p></Link>
        </div>
        <div className='w-full md:w-auto h-50 m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-5 hover:scale-105 ease-in duration-300'>
          <Image className='rounded-xl' src={AbouImage} alt='About Image' />
        </div>
      </div>
    </div>
  );
};

export default About;
