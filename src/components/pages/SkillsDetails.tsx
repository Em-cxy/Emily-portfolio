import React from "react";
import Image from "next/image";
import { FcAlarmClock } from "react-icons/fc";
import { IoDesktopOutline } from "react-icons/io5";
import { FaLightbulb, FaRocket } from "react-icons/fa";

const About = [
  {
    id: 1,
    icon: <FcAlarmClock className="text-4xl" size={45} />,
    title: "Fast",
    details: "Fast load times and lag-free interaction, my highest priority.",
  },
  {
    id: 2,
    icon: <IoDesktopOutline className="text-4xl" color="white" size={45} />,
    title: "Responsive",
    details: "My layouts will work on any device, big or small.",
  },
  {
    id: 3,
    icon: <FaLightbulb className="text-4xl" color="yellow" size={45} />,
    title: "Intuitive",
    details: "Strong preference for easy-to-use, intuitive UX/UI.",
  },
  {
    id: 4,
    icon: <FaRocket className="text-4xl" color="orange" size={45} />,
    title: "Dynamic",
    details:
      "Websites don't have to be static; I love making pages come to life.",
  },
];

// Programming Skills
const programmingSkills = [
  { id: 1, name: "CSS", level: 90 },
  { id: 2, name: "HTML", level: 90 },
  { id: 3, name: "React", level: 90 },
  { id: 4, name: "JavaScript", level: 90 },
  { id: 5, name: "NextJS", level: 90 },
  { id: 6, name: "Tailwind CSS", level: 90 },
  { id: 7, name: "Python", level: 70 },
  { id: 8, name: "PHP", level: 80 },
  { id: 9, name: "Java", level: 70 },
  { id: 10, name: "MySQL", level: 70 },
  { id: 11, name: "TypeScript", level: 75 },
  { id: 12, name: "Node.js", level: 70 },
  { id: 13, name: "Flutter", level: 70 },
  { id: 14, name: "R Language", level: 70 },
  { id: 15, name: "LabView", level: 70 },
  { id: 16, name: "C++", level: 70 },
  { id: 17, name: "App Script", level: 70 },
];

// Tools and Applications
const toolsSkills = [
  { id: 1, name: "Visual Studio Code", level: 70 },
  { id: 2, name: "GitHub", level: 80 },
  { id: 3, name: "Adobe Premiere Pro", level: 70 },
  { id: 4, name: "Canva", level: 80 },
  { id: 5, name: "RStudio", level: 70 },
  { id: 6, name: "Notion", level: 90 },
  { id: 7, name: "Netbeans", level: 70 },
  { id: 8, name: "Microsoft Word", level: 90 },
  { id: 9, name: "PowerPoint", level: 85 },
  { id: 10, name: "Excel", level: 80 },
];

const SkillsDetails = () => {
  return (
    <div
      className="text-white container mx-auto px-4 py-10 "
      style={{ backgroundColor: "#1a0b2e" }}
    >
      <div className="text-5xl text-center relative mb-8">
        <div>About</div>
        <div className="h-1 w-16 bg-white mx-auto text-center mt-4"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
        {About.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center text-center bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105"
          >
            <div className="relative mb-4">
              <Image
                src="/pentagon.png"
                alt="Pentagon"
                width={170}
                height={170}
                className="object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                {item.icon}
              </div>
            </div>
            <div className="text-xl font-bold ">{item.title}</div>
            <div className="text-gray-300">{item.details}</div>
          </div>
        ))}
      </div>

      {/* Skills with Progress Bars */}
      <div className="text-5xl text-center mb-4">
        <div>Skills</div>
        <div className="h-1 w-16 bg-white mx-auto text-center mt-4"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          {programmingSkills.map((skill) => (
            <div className="flex items-center w-full" key={skill.id}>
              <div className="w-48 text-left pl-3 bg-purple-700 h-6">
                {skill.name}
              </div>
              <div className="flex-1 bg-[#3a2e4b] h-6">
                <div
                  className="bg-[#b57ef1] h-full rounded-r-full"
                  style={{ width: skill.level > 100 ? 100 : `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          {toolsSkills.map((skill) => (
            <div className="flex items-center w-full" key={skill.id}>
              <div className="w-48 text-left pl-3 bg-purple-700 h-6">
                {skill.name}
              </div>
              <div className="flex-1 bg-[#3a2e4b] h-6">
                <div
                  className="bg-[#b57ef1] h-full rounded-r-full"
                  style={{ width: skill.level > 100 ? 100 : `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsDetails;
