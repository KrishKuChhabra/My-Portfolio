import React from 'react';

import Image from 'next/image';

const Project = ({ title, cover, para }) => {
  return (
    <div className=" my-7 max-w-sm bg-[#bfdbfe] border-gray-200 rounded-lg shadow dark:bg- dark:border-gray-700">
      <a href="#">
        <div className=" rounded-t-lg">
          <Image className="rounded-t-lg" src={cover} alt="krish" layout="responsive" width={500} height={300} />
        </div>
      </a>
      <div className="p-5 md:p-9">
        <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-black">{para}</p>
      </div>
    </div>
  );
};

export default Project;
