"use client";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useState } from "react";

import Image from "next/image";
import { Meteors } from "@/components/magicui/index";

import { ConfettiButton } from "@/components/magicui/Confetti";
import HeroSection from "@/components/pages/HeroSection";
import GlobalSection from "@/components/pages/GlobalSection";
import Certificate from "@/components/pages/Certificate";
import ProjectsSection from "@/components/pages/ProjectsDetails";
import ContactForm from "@/components/pages/ContactForm";
import SkillsDetails from "@/components/pages/SkillsDetails";

export default function Home() {
  const { scrollYProgress } = useScroll();

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
      <section className="min-h-screen px-4 ">
        <SkillsDetails />
      </section>
      <section className="min-h-screen flex items-center justify-center">
        <GlobalSection />
      </section>

      <ProjectsSection />
      {/* <section className="min-h-screen flex flex-col items-center justify-center px-4">
        <Certificate />
      </section> */}

      <section className="min-h-screen flex items-center justify-center">
        <ContactForm />{" "}
      </section>
    </div>
  );
}
