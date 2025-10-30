"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const Intro = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-linear-to-r from-orange-100 to-gray-50 py-20 px-6 flex flex-col items-center justify-center text-center"
    id="intro">
      <h1
        data-aos="fade-up"
        className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-gray-800 mb-3"
      >
        I Am <span className="text-orange-500">M Sherril James Kumar</span>
      </h1>

      <h2
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-2xl sm:text-3xl md:text-4xl text-gray-700 font-semibold mb-6">MERN Stack Developer</h2>

      <p
        data-aos="fade-up"
        data-aos-delay="400"
        className="text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed mb-8">
        Passionate about building dynamic and user-focused web applications using
        modern technologies like React, Node.js, Express, and MongoDB.
      </p>

      <div data-aos="zoom-in" data-aos-delay="600" className="flex flex-wrap gap-4 justify-center">
        <Link
          href="#contact"
          className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-medium px-6 py-3 rounded-lg shadow-md transition-all"
        >Contact Me</Link>
        <Link
          href="#resume"
          className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white text-lg font-medium px-6 py-3 rounded-lg shadow-md transition-all"
        >View Resume</Link>
      </div>
    </div>
  );
};

export default Intro;
