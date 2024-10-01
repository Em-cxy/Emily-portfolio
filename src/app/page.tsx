"use client";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { ScrollTop } from "primereact/scrolltop";

import { Meteors } from "@/components/magicui/index";

import HeroSection from "@/components/pages/HeroSection";
import GlobalSection from "@/components/pages/GlobalSection";
import Certificate from "@/components/pages/Certificate";
import ProjectsSection from "@/components/pages/ProjectsDetails";
import ContactForm from "@/components/pages/ContactForm";
import SkillsDetails from "@/components/pages/SkillsDetails";
import Header from "@/components/Header";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the section is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id.toLowerCase());
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div>
      <Header activeSection={activeSection} />
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Meteors number={100} />
      </div>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <section
        className="min-h-screen flex flex-col items-center justify-center px-4 mt-36 sm:mt-24"
        id="home"
      >
        <HeroSection />
      </section>

      <section
        className="min-h-screen flex items-center justify-center"
        id="tools"
      >
        <GlobalSection />
      </section>

      <ProjectsSection />
      <section
        className="min-h-screen flex flex-col items-center justify-center px-4"
        id="certs"
      >
        <Certificate />
      </section>
      <section className="min-h-screen px-4 " id="about">
        <SkillsDetails />
      </section>
      <section
        className="min-h-screen flex items-center justify-center"
        id="contact-us"
      >
        <ContactForm />
      </section>
      <ScrollTop
        threshold={100}
        className="w-2rem h-2rem border-round bg-tertiary"
        icon="pi pi-arrow-up text-base"
      />
    </div>
  );
}
