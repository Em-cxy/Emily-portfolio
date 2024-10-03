// import React, { useState, useEffect } from "react";
// import { Button } from "primereact/button";
// import { Carousel } from "primereact/carousel";

// // Define the Project interface
// interface Project {
//   id: number;
//   title: string;
//   label: string[];
//   description: string;
//   imageUrl: string;
//   livePreviewUrl: string;
//   githubRepo: string;
// }

// const projects = [
//   // {
//   //   id: 1,
//   //   title: "Weather Forecast Application",
//   //   description:
//   //     "Our Weather Forecast Application provides users with comprehensive weather information, customizable appearance settings, and forecasts extending up to 3 days.",
//   //   imageUrl: "/Weather-Dashboard.png",
//   //   livePreviewUrl: "https://ian-weather-application.vercel.app",
//   //   githubRepo: "https://github.com/Aiyern30/Weather-Application",
//   // },
//   {
//     id: 1,
//     title: "Music Application with Spotify (SpotWave)",
//     label: [
//       "Spotify",
//       "Next.js",
//       "Tailwind CSS",
//       "Framer Motion",
//       "React.js",
//       "Vercel",
//       "TypeScript",
//       "Shadcn UI",
//       "Lottie React",
//       "Axios",
//     ],
//     description:
//       "SpotWave allows you to search for and listen to Spotify songs with a preview and lyrics. You can also view the top tracks and artists in global rank and come with their all details such as bio, images, albums, and tracks.",
//     imageUrl: "/SpotWave.png",
//     livePreviewUrl: "https://spot-wave.vercel.app/",
//     githubRepo: "https://github.com/Aiyern30/SpotWave",
//   },
//   {
//     id: 2,
//     title: "Expenses Tracker (SplitTrack)",
//     label: [
//       "Firebase",
//       "NextAuth",
//       "Next.js",
//       "Tailwind CSS",
//       "React.js",
//       "Vercel",
//       "TypeScript",
//       "Shadcn UI",
//       "Lucide react",
//     ],
//     description:
//       "The Expenses Tracker is a robust application designed to help users efficiently manage their finances. Track your expenses daily, monthly, and yearly, and gain detailed insights into your spending habits. Key features include expense tracking, managing friend expenses, and effective group expense management during trips.",
//     imageUrl: "/Split-Track.png",
//     livePreviewUrl: "https://split-track.vercel.app/",
//     githubRepo: "https://github.com/Aiyern30/SplitTrack",
//   },
//   {
//     id: 3,
//     title: "Reka Konsult Company Profile",
//     label: [
//       "Next.js",
//       "Tailwind CSS",
//       "React.js",
//       "Vercel",
//       "TypeScript",
//       "Shadcn UI",
//       "Heroicons",
//       "EmailJS",
//       "Leaflet",
//       "Lucide react",
//     ],
//     description:
//       "The Reka Konsult Company Profile is a comprehensive showcase of our company's vision, values, and services. This web application serves as an engaging platform to inform potential clients and partners about Reka Konsult's capabilities, including company background, services offered, and easy contact information.",
//     imageUrl: "/Reka-Konsult.png",
//     livePreviewUrl: "https://reka-konsult.vercel.app/",
//     githubRepo: "https://github.com/Aiyern30/reka-konsult",
//   },
//   {
//     id: 4,
//     title: "Ethereum KL hackathon projects",
//     label: [],
//     description:
//       "Description of yet another project with its features and highlights.",
//     imageUrl: "/Weather-Statistics.png",
//     livePreviewUrl: "https://ethkl.vercel.app/",
//     githubRepo: "https://github.com/Aiyern30/ETHKL",
//   },
//   {
//     id: 5,
//     title: "Canva Hackathon (Poll Generator)",
//     label: [
//       "React.js, Next.js",
//       "Canva App SDK",
//       "quickChart API",
//       "qrcode API",
//       "Poll API",
//       "Amazon AWS",
//       "Vercel",
//       "Tailwind Css",
//       "TypeScript",
//       "Magic UI",
//       "Shadcn UI",
//       "Material UI",
//     ],
//     description:
//       "Poll Generator is a Canva-integrated platform that simplifies poll and survey creation while providing real-time data visualization. Users can design visually appealing surveys, distribute them via QR codes or a dedicated website, and instantly see response trends. Multiple polls can be included in a single survey for comprehensive data collection.",
//     imageUrl: "/Canva.jpg",
//     livePreviewUrl: "https://devpost.com/software/canva-dx620n",

//     githubRepo: "https://github.com/Aiyern30/Canva-Hackathon",
//     // https://github.com/EeJunKhang/Poll-Generator-Canva
//   },
//   {
//     id: 6,
//     title: "Google Cloud Vertex AI Agent Builder Hackathon (PythonGPT)",
//     label: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "Python",
//       "Flask",
//       "EC2",
//       "Google Cloud SDK",
//       "Google Cloud IAM Service Account",
//       "Vertex AI API",
//       "Gemini-1.0-Pro-Version-001 Model",
//       "bootstrap",
//       "Tailwind CSS",
//     ],
//     description:
//       "PythonGPT is a dynamic website designed to teach beginners how to code in Python. It offers Python documentation, Python code implementation examples, Python exercises, AI Chatbot Assistance",
//     imageUrl: "/PythonAI.jpg",
//     livePreviewUrl: "https://devpost.com/software/pythongpt",
//     githubRepo: "https://github.com/AcruxN/vertex_PythonGPT/",
//   },
// ];
// export default function ResponsiveDemo() {
//   const [displayedProjects, setDisplayedProjects] = useState<Project[]>([]); // Specify the type here

//   const responsiveOptions = [
//     {
//       breakpoint: "1400px",
//       numVisible: 2,
//       numScroll: 1,
//     },
//     {
//       breakpoint: "1199px",
//       numVisible: 3,
//       numScroll: 1,
//     },
//     {
//       breakpoint: "767px",
//       numVisible: 2,
//       numScroll: 1,
//     },
//     {
//       breakpoint: "575px",
//       numVisible: 1,
//       numScroll: 1,
//     },
//   ];

//   useEffect(() => {
//     setDisplayedProjects(projects.slice(0, 6));
//   }, []);

//   const projectTemplate = (project: Project) => {
//     // Specify the type here
//     return (
//       <div className="border-1 surface-border border-round m-2 text-center py-5 px-3 text-white">
//         <div className="mb-3">
//           <img
//             src={project.imageUrl}
//             alt={project.title}
//             className="w-80 shadow-2"
//           />
//         </div>
//         <div>
//           <h4 className="mb-1">{project.title}</h4>
//           <p className="mt-0 mb-3">{project.description}</p>
//           <div className="flex flex-wrap justify-content-center mb-2">
//             {project.label.map(
//               (
//                 label: string,
//                 index: number // Specify the type here
//               ) => (
//                 <span key={index} className="p-tag p-tag-info m-1">
//                   {label}
//                 </span>
//               )
//             )}
//           </div>
//           <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
//             <Button
//               label="Live Preview"
//               icon="pi pi-eye"
//               className="p-button p-button-rounded"
//               onClick={() => window.open(project.livePreviewUrl, "_blank")}
//             />
//             <Button
//               label="GitHub Repo"
//               icon="pi pi-github"
//               className="p-button p-button-success p-button-rounded"
//               onClick={() => window.open(project.githubRepo, "_blank")}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="card">
//       <Carousel
//         value={displayedProjects}
//         numScroll={1}
//         numVisible={3}
//         responsiveOptions={responsiveOptions}
//         itemTemplate={projectTemplate}
//       />
//     </div>
//   );
// }
