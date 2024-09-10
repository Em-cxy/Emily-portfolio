import { IconCloud } from "../magicui";
const slugs = [
  "devpost",
  "sublimetext",
  "apachenetbeanside",
  "rstudioide",
  "ethers",
  "json",
  "laravel",
  "obsidian",
  "googleauthenticator",
  "googlecloud",
  "opencv",
  "solana",
  "google",
  "googledrive",
  "googlecalendar",
  "googleappsscript",
  "mongodb",
  "amazonaws",
  "ethereum",
  "npm",
  "cplusplus",
  "apache",
  "phpmyadmin",
  "typescript",
  "javascript",
  "java",
  "react",
  "flutter",
  "html5",
  "css3",
  "nodedotjs",
  "postgresql",
  "firebase",
  "vercel",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "figma",
  "nextdotjs",
  "php",
  "python",
  "mysql",
  "tailwindcss",
  "r",
  "labview",
  "adobepremierepro",
  "rstudio",
  "canva",
  "notion",
];
export default function GlobalSection() {
  return (
    <div className="container flex flex-col items-center text-center text-white">
      <div className="max-w-xl mx-auto mb-5 md:text-xl">
        I'm currently looking to join a{" "}
        <span className="text-tertiary">cross-functional</span> team that values
        improving people's lives through accessible design
      </div>
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
