"use client";
import Header from "@/components/Header";
import ShimmerButton from "@/components/magicui/Shimmer-button";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useState } from "react";

import Image from "next/image";
import {
  BoxReveal,
  IconCloud,
  MagicCard,
  Meteors,
} from "@/components/magicui/index";
import OrbitingCircles from "@/components/magicui/Orbiting-circles";
import {
  UserOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { Avatar, Space } from "antd";
import { SocialIcon } from "react-social-icons";
import { ConfettiButton } from "@/components/magicui/Confetti";
import HeroSection from "@/components/pages/HeroSection";
import GlobalSection from "@/components/pages/GlobalSection";

export default function Home() {
  const { scrollYProgress } = useScroll(); // Get scroll progress

  const [selectedImage, setSelectedImage] = useState<{
    id: string;
    src: string;
    alt: string;
  } | null>(null);

  // Handle image click, pass the id, src, and alt of the image
  const handleImageClick = (id: string, src: string, alt: string) => {
    setSelectedImage({ id, src, alt });
  };

  // Close modal when clicking outside the image or on the close button
  const handleCloseClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setSelectedImage(null);
  };

  return (
    <div>
      {/* <Header /> */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Meteors number={100} />
      </div>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <section className="min-h-screen flex flex-col items-center justify-center px-4">
        <HeroSection />
      </section>
      <section className="min-h-screen flex items-center justify-center">
        <GlobalSection />
      </section>
      {/* <section>
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl  font-semibold leading-none text-transparent dark:from-white dark:to-black">
            Circles
          </span>

          <OrbitingCircles
            className="size-[30px] border-none bg-transparent"
            duration={20}
            delay={20}
            radius={80}
            iconSlugs={slugs.filter((slug) => slug === "vercel")}
          />
          <OrbitingCircles
            className="size-[30px] border-none bg-transparent"
            duration={20}
            delay={10}
            radius={80}
            iconSlugs={slugs.filter((slug) => slug === "notion")}
          />

          <OrbitingCircles
            className="size-[50px] border-none bg-transparent"
            radius={190}
            duration={20}
            reverse
            iconSlugs={slugs.filter(
              (slug) => slug === "google-drive" || slug === "github"
            )}
          />
        </div>
      </section> */}
      <section className="min-h-screen flex flex-col items-center justify-center text-white container mx-auto space-y-8 select-none">
        {/* Row 1 */}
        <div className="w-full md:w-3/4 flex flex-col md:flex-row items-stretch space-y-6 md:space-y-0 ">
          <motion.div
            className="w-full md:w-1/2 flex flex-col space-y-3 px-4 md:px-8 flex-1"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="text-lg font-semibold text-tertiary">
              Featured project 1
            </div>
            <div className="text-2xl font-bold">
              Weather Forecast Application
            </div>
            <div className="bg-secondary opacity-80 p-4 rounded-xl flex-1">
              Our Weather Forecast Application provides users with comprehensive
              weather information, customizable appearance settings, and
              forecasts extending up to 3 days.
              <div className="flex md:flex-row justify-start space-x-0 md:space-x-5 space-y-2 md:space-y-0 my-3">
                <div className="cursor-pointer space-x-5">
                  <a
                    href="https://ian-weather-application.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline cursor-pointer"
                  >
                    <ConfettiButton className="hover:underline">
                      Live Preview
                    </ConfettiButton>
                  </a>
                  <a
                    href="https://github.com/Aiyern30/Weather-Application"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline cursor-pointer"
                  >
                    <ConfettiButton className="hover:underline">
                      View Code
                    </ConfettiButton>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 flex items-center justify-center flex-1"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              className="w-full h-full flex items-center justify-center bg-transparent border-0 cursor-pointer"
              onClick={() =>
                handleImageClick(
                  "image1",
                  "/Weather-Dashboard.png",
                  "Weather Dashboard"
                )
              }
              layoutId="image1"
            >
              <Image
                src="/Weather-Dashboard.png"
                alt="Weather Dashboard"
                width={400}
                height={300}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="w-full md:w-3/4 flex flex-col md:flex-row items-stretch space-y-6 md:space-y-0">
          <motion.div
            className="w-full md:w-1/2 flex flex-col space-y-3 px-4 md:px-8 flex-1"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="text-lg font-semibold text-tertiary">
              Featured project 2
            </div>
            <div className="text-2xl font-bold">
              Music Application with Spotify
            </div>
            <div className="bg-secondary opacity-80 p-4 rounded-xl flex-1">
              SpotWave allow you to search for and listen to Spotify songs with
              a preview and lyrics. You can also view the top tracks and artists
              in global rank and come with their all details such as bio, images
              and albums and tracks.
              <div className="flex md:flex-row justify-start space-x-0 md:space-x-5 space-y-2 md:space-y-0 my-3">
                <div className="cursor-pointer space-x-5">
                  <a
                    href="https://spot-wave.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" cursor-pointer"
                  >
                    <ConfettiButton className="hover:underline">
                      Live Preview
                    </ConfettiButton>{" "}
                  </a>
                  <a
                    href="https://github.com/Aiyern30/SpotWave"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline cursor-pointer"
                  >
                    <ConfettiButton className="hover:underline">
                      View Code
                    </ConfettiButton>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 flex items-center justify-center flex-1"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              className="w-full h-full flex items-center justify-center bg-transparent border-0 cursor-pointer"
              onClick={() =>
                handleImageClick(
                  "image2",
                  "/SpotWave.png",
                  "SpotWave Dashboard"
                )
              }
              layoutId="image2"
            >
              <Image
                src="/SpotWave.png"
                alt="SpotWave Dashboard"
                width={400}
                height={300}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Row 3 */}
        <div className="w-full md:w-3/4 flex flex-col md:flex-row items-stretch space-y-6 md:space-y-0">
          <motion.div
            className="w-full md:w-1/2 flex flex-col space-y-3 px-4 md:px-8 flex-1"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="text-lg font-semibold text-tertiary">
              Featured project 3
            </div>
            <div className="text-2xl font-bold">Yet Another Project</div>
            <div className="bg-secondary opacity-80 p-4 rounded-xl flex-1">
              Description of yet another project with its features and
              highlights.
              <div className="flex md:flex-row justify-start space-x-0 md:space-x-5 space-y-2 md:space-y-0 my-3">
                <div className="cursor-pointer space-x-5">
                  <ConfettiButton className="hover:underline">
                    Live Preview
                  </ConfettiButton>
                  <a
                    href="https://github.com/Aiyern30/Weather-Statistics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline cursor-pointer"
                  >
                    <ConfettiButton className="hover:underline">
                      View Code
                    </ConfettiButton>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 flex items-center justify-center flex-1"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              className="w-full h-full flex items-center justify-center bg-transparent border-0 cursor-pointer"
              onClick={() =>
                handleImageClick(
                  "image3",
                  "/Weather-Statistics.png",
                  "Yet Another Project Dashboard"
                )
              }
              layoutId="image3"
            >
              <Image
                src="/Weather-Statistics.png"
                alt="Yet Another Project Dashboard"
                width={400}
                height={300}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-4 shadow-lg relative"
              layoutId={selectedImage.id}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={800}
                height={600}
              />
              <button
                className="px-3 py-1  rounded-full bg-primary text-white absolute top-0 right-0"
                onClick={handleCloseClick}
              >
                X
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
