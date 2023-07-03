import React from "react";
import Project from "./projects";

import weather from "../../../public/asset/images.jpeg"
import todo from "../../../public/asset/todogif.gif"
import twitter from "../../../public/asset/twiiter.jpeg"
import Gym from "../../../public/asset/gym.jpg"

const Portfolio = () => {
  return (
    <div  className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className=" my-12 b-2 uppercase text-xl tracking-widest text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-4  gap-4 justify-center">
         
        
        <Project  title="Todo App" cover={todo}  para="With this todo app, you can easily create tasks and add important details such as a title, description, and due date. Whether it's a work assignment, a personal goal, or a reminder, " />
        <Project title="Weather App" cover={weather} para="With this weather app, you can easily check the weather for your current location or any other location of your choice. The app utilizes real-time data from reputable weather sources, ensuring the accuracy and reliability of the information provided" />
        <Project title="Gym web Application" cover={Gym} para="With this gym web app, you can easily create personalized workout routines tailored to your specific goals and preferences. Whether you're looking to build strength, improve cardiovascular fitness, or enhance flexibility, the app allows you to design workouts that suit your needs." />
        <Project title="Twiiter" cover={twitter} para="With this Twitter clone web app, you can create an account and personalize your profile with a profile picture, bio, and other relevant information. Once you're registered, you can start following other users and building your own network of connections." />


        </div>
      </div>
    </div>
  );
};

export default Portfolio;
