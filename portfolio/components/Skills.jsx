"use client";
import React, { useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaPython,
  FaGithub,
} from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const skills = [
    { icon: FaHtml5, name: "HTML", color: "#E34F26" },
    { icon: FaCss3Alt, name: "CSS", color: "#1572B6" },
    { icon: FaJsSquare, name: "JavaScript", color: "#F7DF1E" },
    { icon: FaReact, name: "ReactJS", color: "#61DAFB" },
    { icon: FaNodeJs, name: "NodeJS", color: "#68A063" },
    { icon: SiExpress, name: "Express", color: "#444" },
    { icon: BiLogoMongodb, name: "MongoDB", color: "#47A248" },
    { icon: FaBootstrap, name: "Bootstrap", color: "#7952B3" },
    { icon: RiTailwindCssFill, name: "Tailwind CSS", color: "#38BDF8" },
    { icon: FaPython, name: "Python", color: "#3776AB" },
    { icon: FaGithub, name: "Git / GitHub", color: "#181717" },
  ];

  return (
    <section className="bg-gradient-to-b from-orange-100 to-gray-50 py-12 px-6 md:px-12">
      <h1
        className="text-center font-extrabold text-3xl sm:text-4xl text-gray-800 mb-10"
        data-aos="fade-up"
      >
        Skills
      </h1>
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center"
        data-aos="fade-up"
      >
        {skills.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <div
              key={i}
              data-aos="zoom-in"
              className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-xl shadow-md p-6 w-36 sm:w-40 md:w-44 hover:shadow-xl hover:-translate-y-1 transition-transform duration-300"
            >
              <Icon
                size={60}
                style={{ color: skill.color }}
                className="mb-3 transition-transform duration-300 hover:scale-110"
              />
              <p className="text-lg font-medium text-gray-800">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
