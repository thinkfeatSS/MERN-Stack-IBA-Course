import React from "react";
// Import icons
import {
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa";

// Import images
import hero from "../assets/images/hero.png";
// let icons = [FaGithubSquare,FaInstagramSquare,FaLinkedin,FaFacebookSquare]
const Hero = () => {
  return (
    <section
      id="#home"
      className="min-h-screen flex flex-col md:flex-row py-10 justify-center items-center"
    >
      <div className="flex-1">
        {" "}
        <img
          src={hero}
          alt="Hero Pic"
          className="md:w-11/12 pr-12 md:pr-0 "
        />{" "}
      </div>
      <div className="flex-1">
        <div className="flex flex-col items-center md:items-start">
          <div className="text-center md:text-left">
            <h1 className="text-white font-bold text-2xl md:leading-normal leading-10">
              Hello! <br />
              <span>My Name is !!!Name!!!</span>
            </h1>
            <h1 className="text-lg md:text-2xl leading-5 md:leading-normal font-bold text-gray-600">
              MERN STACK DEVELOPER
            </h1>
          </div>
          <div className="flex justify-center items-center flex-col">

          <button className="btn-primary mt-8">Download Resume</button>
          <div className="flex gap-4 mt-4">
            <FaFacebookSquare></FaFacebookSquare>
            <FaLinkedin></FaLinkedin>
            <FaInstagramSquare></FaInstagramSquare>
            <FaGithubSquare></FaGithubSquare>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
