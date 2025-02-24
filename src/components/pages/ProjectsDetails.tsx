"use client";
import { Github, ExternalLink } from "lucide-react";

import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ConfettiButton } from "../magicui/Confetti";
const projects = [
  {
    title: "Music Application with Spotify (SpotWave)",
    label: [
      "Spotify",
      "NextJS",
      "Tailwind CSS",
      "Framer Motion",
      "React",
      "Vercel",
      "TypeScript",
      "Shadcn UI",
      "Lottie React",
      "Axios",
      "Google Maps API",
      "Ticketmaster API",
      "PredictHQ API",
    ],
    description:
      "SpotWave allows you to search for and listen to Spotify songs with a preview and lyrics. You can also view the top tracks and artists in global rank and come with their all details such as bio, images, albums, and tracks.",
    imageUrl: "/SpotWave.png",
    livePreviewUrl: "https://spot-wave.vercel.app/",
    githubRepo: "https://github.com/Aiyern30/SpotWave",
  },
  {
    title: "YTL Cement IT Department",
    label: [
      "Power BI",
      "Microsoft Report Builder",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "NextJS",
      "PrimeReact",
      "SCSS",
      "apollo client",
      "graphql",
      "pino",
      "pupeeter",
    ],
    description:
      "Recently, I joined the YTL Cement IT department, focusing on developing an e-invoice system. The system manages driver e-invoices and supports role-based access for submitting documents to LHDN. I worked on key features such as income and expenses tracking, statement of accounts, and invoice reporting using Microsoft Power BI and Report Builder.",
    imageUrl: "/Dos-portal.png",
    livePreviewUrl: "https://dos.uat4ytlcement.com/",
    githubRepo: null,
  },

  {
    title: "Sino Mobile and Heavy Equipment (SMHE)",
    label: [
      "NextJS",
      "Tailwind CSS",
      "React",
      "TypeScript",
      "Google Maps API",
      "Framer Motion",
      "Strapi",
      "Google Maps API",
    ],
    description:
      "Developed the landing page for the Sino Mobile and Heavy Equipment (SMHE) website, focusing on showcasing trucks for sale. Key features include a Media Center, About Us section, detailed truck pages with overview and specifications, and options for users to contact sales or download brochures. Integrated Google Maps to display workshop and factory locations for easy navigation.",
    imageUrl: "/SMHE.png",
    livePreviewUrl: "https://smhe.my",
    githubRepo: null,
  },

  // {
  //   title: "Pet Care",
  //   label: [
  //     "HTML",
  //     "CSS",
  //     "JavaScripts",
  //     "PHP",
  //     "MySQL",
  //     "MyPhpAdmin",
  //     "ChartJS",
  //   ],
  //   description:
  //     "This website provides a comprehensive platform for pet care services. Customers can easily book appointments for their pets, including surgeries and other medical needs. The platform also features a community blog where users can chat, share posts, and read knowledge articles about pet care. For business owners and staff, the website offers robust tools to manage operations effectively, including full CRUD functionality for managing appointments, customer data, and services. Additionally, it includes features to view receipts and generate detailed payment reports with visually appealing charts, streamlining administrative tasks.",
  //   // imageUrl: "/Split-Track.png",
  //   githubRepo: "https://github.com/Aiyern30/Pet-Care",
  // },
  {
    title: "Reka Konsult Company Profile",
    label: [
      "NextJS",
      "Tailwind CSS",
      "React",
      "Vercel",
      "TypeScript",
      "Shadcn UI",
      "Heroicons",
      "EmailJS",
      "Leaflet",
      "Lucide react",
      "Google Maps API",
    ],
    description:
      "The Reka Konsult Company Profile is a comprehensive showcase of our company's vision, values, and services. This web application serves as an engaging platform to inform potential clients and partners about Reka Konsult's capabilities, including company background, services offered, and easy contact information.",
    imageUrl: "/Reka-Konsult.png",
    livePreviewUrl: "https://reka-konsult.vercel.app/",
    githubRepo: "https://github.com/Aiyern30/reka-konsult",
  },
  {
    title: "LiveSportsNow",
    label: [
      "NextAuth",
      "NextJS",
      "Tailwind CSS",
      "React",
      "Vercel",
      "TypeScript",
      "Shadcn UI",
      "Lucide react",
      "Football API",
    ],
    description:
      "LiveSportsNow is a comprehensive sports platform that allows users to view real-time scores, standings, team details, and stats across multiple sports, including NBA, NFL, Soccer, and more. Designed to offer an experience similar to ESPN, the app provides up-to-date sports coverage, helping fans stay informed with the latest game results, league rankings, and team performances.",
    imageUrl: "/LiveSportsNow.png",
    livePreviewUrl: "https://livesportsnow.vercel.app/NBA",
    githubRepo: "https://github.com/Aiyern30/LiveSportsNow.git",
  },
  {
    title: "Expenses Tracker (SplitTrack)",
    label: [
      "Firebase",
      "NextAuth",
      "NextJS",
      "Tailwind CSS",
      "React",
      "Vercel",
      "TypeScript",
      "Shadcn UI",
      "Lucide react",
    ],
    description:
      "The Expenses Tracker is a robust application designed to help users efficiently manage their finances. Track your expenses daily, monthly, and yearly, and gain detailed insights into your spending habits. Key features include expense tracking, managing friend expenses, and effective group expense management during trips.",
    imageUrl: "/Split-Track.png",
    livePreviewUrl: "https://split-track.vercel.app/",
    githubRepo: "https://github.com/Aiyern30/SplitTrack",
  },
  {
    title: "Ethereum KL 2024 Hackathon (SassyDispute)",
    label: [
      "Solidity",
      "Hardhat",
      "OpenZeppelin",
      "ERC 20",
      "NextJS",
      "React",
      "Framer motion",
      "Tailwind CSS",
      "TypeScript",
      "Shadcn UI",
      "emailjs",
      "Lucide-react",
      "react-cofetti",
      "Pinata API",
      "Alchemy Node API",
    ],
    description:
      "SassyDispute is a platform that allows Web2/Web3 e-commerce websites to share and bridge their dispute cases via IPFS, facilitating decentralized conversations and resolutions. User can comment on dispute cases, search and filter dispute cases and dispute providers can use our ready-bridge smart contract to bridge their Web3 E-commerce platform into SassyDispute",
    imageUrl: "/ETHKL.png",
    livePreviewUrl: "https://sassy-dispute.vercel.app/",
    githubRepo: "https://github.com/FramedStone/SassyDispute",
  },
  {
    title: "Canva Hackathon (Poll Generator)",
    label: [
      "React, NextJS",
      "Canva App SDK",
      "quickChart API",
      "qrcode API",
      "Poll API",
      "Amazon AWS",
      "Vercel",
      "Tailwind Css",
      "TypeScript",
      "Magic UI",
      "Shadcn UI",
      "Material UI",
    ],
    description:
      "Poll Generator is a Canva-integrated platform that simplifies poll and survey creation while providing real-time data visualization. Users can design visually appealing surveys, distribute them via QR codes or a dedicated website, and instantly see response trends. Multiple polls can be included in a single survey for comprehensive data collection.",
    imageUrl: "/Canva.jpg",
    livePreviewUrl: "https://devpost.com/software/canva-dx620n",

    githubRepo: "https://github.com/Aiyern30/Canva-Hackathon",
  },
  {
    title: "Google Cloud Vertex AI Agent Builder Hackathon (PythonGPT)",
    label: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "Flask",
      "EC2",
      "Google Cloud SDK",
      "Google Cloud IAM Service Account",
      "Vertex AI API",
      "Gemini-1.0-Pro-Version-001 Model",
      "bootstrap",
      "Tailwind CSS",
    ],
    description:
      "PythonGPT is a dynamic website designed to teach beginners how to code in Python. It offers Python documentation, Python code implementation examples, Python exercises, AI Chatbot Assistance",
    imageUrl: "/PythonAI.jpg",
    livePreviewUrl: "https://devpost.com/software/pythongpt",
    githubRepo: "https://github.com/AcruxN/vertex_PythonGPT/",
  },
  {
    title: "Devmatch Hackathon (VoteChain)",
    label: [
      "Solidity",
      "React",
      "Metamask",
      "NextJS",
      "Hardhat",
      "EmailJS",
      "Tailwind Css",
      "TypeScript",
      "Shadcn UI",
    ],
    description:
      "Decentralized voting technology reduces costs by eliminating the need for physical polling places and allows remote voting, boosting democratic participation. It can also be used in organizations, enabling employees to vote on decisions and generate reputation reports based on accuracy and activity. These reports can inform hiring decisions for roles requiring strong decision-making skills, such as HR and recruiting audits.",
    imageUrl: "/Devmatch.png",
    livePreviewUrl:
      "https://devfolio.co/projects/decentralized-voting-system-peyouth-aa44",
    githubRepo: "https://github.com/Aiyern30/Voting-System-DevMatch-Hackathon-",
  },
];
import { Badge, Button, Skeleton } from "@/components/ui";
import { MarqueCard } from "./MarqueCard";
import { useDeviceType } from "@/lib/useDeviceTypes";

export default function ProjectsSection() {
  const { isMobile } = useDeviceType();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 4);
  return (
    <>
      <section className="py-24 px-4 md:px-6 text-white" id="projects">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">My Recent Work</h2>
            <p className="text-muted-foreground">
              Here are a few past design projects I&apos;ve worked on. Want to
              see more?{" "}
              <a
                href="mailto:ianbian2@gmail.com"
                className="text-primary hover:underline"
              >
                Email me
              </a>
              .
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayedProjects.map((project, index) => {
              const isActive = selectedProject === index;

              return (
                <motion.div
                  key={index}
                  className="group relative rounded-lg bg-card shadow-lg overflow-hidden"
                  whileHover={!isMobile ? { y: -5 } : undefined}
                  transition={{ duration: 0.2 }}
                  onClick={() =>
                    isMobile && setSelectedProject(isActive ? null : index)
                  }
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src={project.imageUrl || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="rounded-lg object-cover w-full h-full"
                      priority={index < 4}
                    />
                  </div>

                  {/* Hover Overlay (For Desktop) | Click to Expand (For Mobile) */}
                  <div
                    className={`absolute inset-0 bg-black/80 transition-all duration-300 flex flex-col justify-between p-6 text-white 
                  ${
                    isMobile
                      ? isActive
                        ? "opacity-100"
                        : "opacity-0 h-0"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                  >
                    {isActive || !isMobile ? (
                      <>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">
                            {project.title}
                          </h3>
                          <p className="text-sm text-gray-200 mb-4 line-clamp-3">
                            {project.description}
                          </p>

                          {/* Tech Labels */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.label
                              .slice(0, isMobile ? 5 : project.label.length) // Show only 5 if isMobile is true
                              .map((tech, i) => (
                                <Badge
                                  key={i}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {tech}
                                </Badge>
                              ))}
                          </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-3">
                          {project.githubRepo && (
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(project.githubRepo, "_blank");
                              }}
                            >
                              <Github className="w-4 h-4 mr-2" />
                              GitHub
                            </Button>
                          )}
                          {project.livePreviewUrl && (
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(project.livePreviewUrl, "_blank");
                              }}
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Preview
                            </Button>
                          )}
                        </div>
                      </>
                    ) : null}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Show More / Show Less Button */}
          {projects.length > 4 && (
            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Show Less" : "Show More"}
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
