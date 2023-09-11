
import React from "react";
import pfp from '../assets/img/pfp.png';
import { SocialIcon } from 'react-social-icons'
export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full"
            alt="Jessica and her noise cancelling head phones"
            src={pfp}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Jessica :) 
            <br className="hidden lg:inline-block" /> I love to build useful and fun apps!
          </h1>
          <p className="mb-8 leading-relaxed">
            I spend most of my time working on different projects that focus on strengthening my skills in Java development. 
            Currently, I have been more curious about cloud computing and services that automate workflows. Through my 
            current findings, it has helped me understand different use cases for enterprise-level workflow integration of 
            CI/CD. When I am not programming, you can find me at The Oak House making killer latte art as a barista. 
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Connect with me!
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Projects
            </a>
          </div>
            <div className=" m-3 p-3 rounded-sm shadow-sm grid grid-cols-2 gap-10">
              <SocialIcon network="linkedin" url="https://www.linkedin.com/in/jessica-flores-olguin/" target="_blank" rel="noreferrer"/>
              <SocialIcon network="github" url="https://github.com/jessicafloreso" target="_blank" rel="noreferrer" />
            </div>
          </div>
        
      </div>
    </section>
  );
}