"use client"

import Image from "next/image"
import { ChevronDown, Menu, X, Mail, Phone, Instagram, PhoneIcon as WhatsApp, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/"
import { Card, CardContent } from "@/components/ui/"
import { Input } from "@/components/ui/"
import { Textarea } from "@/components/ui/"
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/"
import { useEffect, useState, useRef } from "react"
import { PiWhatsappLogo } from "react-icons/pi"
import ContactForm from "@/components/contactform";

// Mock data for all sections
const profileData = {
  name: "Emily",
  title: "Dance Instructor & Administrative Professional",
  description: "Hey, this is Chu Xin Yi. A showcase of my achievements, education, and professional experience!",
  image: "/Profile.jpg",
  social: {
    email: "emilychuxinyi88@gmail.com",
    phone: "+60 16-364 3228",
    instagram: "@heyiamemilyyy_",
    whatsapp: "+60 16-364 3228",
  },
}

const educationData = [
  {
    institution: "SMK SERI SENTOSA",
    degree: "Sijil Pelajaran Malaysia (SPM)",
    period: "2022",
    Result: "4A,2B+,4B",
    details:
      "Subjects: Bahasa Melayu, Bahasa English, Pendidikan Moral, Sejarah, Matematik, Sains, Matematik Tambahan, Prinsip Perakaunan, Ekonomi, Bahasa Cina.",
  },
  {
    institution: "SMK SERI SENTOSA",
    degree: "Sijil Tinggi Persekolahan Malaysia (STPM)",
    period: "2023-2025",
    Result: "",
    details: "Subjects: Pengajian Am, Ekonomi, Perakaunan, Mathematics (Management). ",
  },
  {
    institution: "Royal Academy of Dance (RAD)",
    degree: "",
    period: "2011-2025",
    Result: "Merit",
    details: "RAD Advanced 2 Ballet Certificate - Graduted.",
  },
]

const certificatesData = [
  {
    title: "Webinar Rendah Karbon IMELC 2023",
    organization: "Jabatan Pendidikan Negeri Johor",
    year: "2023",
    description: "Iskandar Malaysia Ecolife Challenge",
    image: "/CARBON SP'23.png",
  },
  {
    title: "Karnival Senotsa Sihat & Selamat Vol.2",
    organization: "PTE SMK SERI SENOTSA",
    year: "2023",
    description: "Peringkat Negeri Wilayah Persekutuan Kuala Lumpur",
    image: "/Karnival'23.png",
  },
  {
    title: "Victoria Instituition Pre-University Games 2023 (Bola Tampar)",
    organization: "Victoria Institution Kuala Lumpur",
    year: "2023",
    description: "Peringkat Kebangsaan",
    image: "/VI SP '23.png",
  },
  {
    title: "ADVA/JA Dengue Slayers Workshop Year 2024",
    organization: "ADVA|JA Malaysia",
    year: "2024",
    description: "Dengue Slayers Challenge",
    image: "/DENGUE SP may'24.png",
  },
  {
    title: "Pertandingan Fotografi Bertemakan Warisan",
    organization: "KTE Tuanku Muhriz, Seremban",
    year: "2024",
    description: "Peringkat Kebangsaan",
    image: "/PHOTOGRAPHY SP ogos'24.jpg",
  },
  {
    title: "Jelajah Seminar Kenegaraan MADANI Siri 6/2024",
    organization:
      "YAYASAN DAKWAH ISLAMIAH MALAYSIA NEGERI SELANGOR DAN JABATAN PENDIDIKAN WILAYAH PERSEKUTUAN KUALA LUMPUR",
    year: "2024",
    description: "Malaysia MADANI",
    image: "/YADIM SP ogos'24.jpg",
  },
  {
    title: "The Queen's Commonwealth Essay Competition 2024",
    organization: "Royal Commonwealth Society",
    year: "2024",
    description: "International",
    image: "/commonwealth sp sep'24.jpg",
  },
  {
    title: "Aktiviti Game Station",
    organization: "SMK SERI SENOTSA Badan Beruniform",
    year: "2024",
    description: "Kokurikulum",
    image: "/GAME SP sep'24.png",
  },
]

const achievementsData = [
  {
    title: "Penolong Tingkatan 6B1",
    year: "2023",
    description: "SMK SERI SENTOSA Lower 6",
    image: "/PENOLONG ACHIEVEMENT'23.png",
  },
  {
    title: "Karnival Sukan Dan Kejohanan Olahraga Tingkatan Enam",
    year: "2024",
    description: "Peringkat Kebangsaan (Bola Tampar Tempat Kedua)",
    image: "/DESA MAHKOTA ACHIEVEMENT'24.png",
  },
  {
    title: "Certificate of Outstanding Achievement in SPM",
    year: "2024",
    description:
      "Awarded by The Selangor & Wilayah Persekutuan (Kuala Lumpur) Electrical Home Appliances Dealers' Assosication (SWEDA)",
    image: "/SWEDA may'24.png",
  },
  {
    title: "Penolong Ketua Tingkatan 6A1",
    year: "2014",
    description: "SMK SERI SENTOSA Upper 6",
    image: "/PENOLONG ACHIEVEMENT'24.png",
  },
  {
    title: "Penolong Ketua Tingkatan 6A SAS 1",
    year: "2024/2025",
    description: "SMK SERI SENTOSA",
    image: "/PENOLONG RESULT ACHIEVEMENT.png",
  },
  {
    title: "Pengerusi Sukan Permainan Bola Keranjang Tingkatan 6",
    year: "2024",
    description: "SMK SERI SENTOSA",
    image: "/BB ACHIEVEMENT'24.png",
  },
  {
    title: "Anugerah Emas",
    year: "2024",
    description: "Pencapaian Cemerlang Peringkat Kebangsaan",
    image: "/ACHIEVMENT :24.png",
  },
  {
    title: "Bendahari Jawatankuasa Persatuan Tingkatan 6",
    year: "2024",
    description: "SMK SERI SENTOSA",
    image: "/BENDAHARI ACHIEVEMNT'24.png",
  },
]

const extracurricularData = [
  {
    title: "Merdeka sixty6 Run",
    organization: "JomRun",
    year: "2023",
    description: "5km Fun Run",
    image: "/Merdeka Run'23.jpg",
  },
  {
    title: "Asian Elite Dance Competition",
    organization: "Hong Kong Youth Dance Association",
    year: "2024",
    description: "Awarded Gold in Senior Contempory Dance Ensemble",
    image: "/AEDC MAC'24.png",
  },
  {
    title: "Malaysia Challenge Cup Dance Competition 2024",
    organization: "MCCDC",
    year: "2024",
    description: "Awarded Silver in Contemporary Ensemble",
    image: "/MCCDC may'24.png",
  },
  {
    title: "5th Asia Open Dance Championship 2024",
    organization: "AODC",
    year: "2024",
    description: "Awareded Gold in Senior B Modern Contemporary",
    image: "/AODC sep'24.png",
  },
  {
    title: "KL City Day Half Marathon 2025",
    organization: "Tan Boon Ming Sdn Bhd (TBM)",
    year: "2025",
    description: "Persatuan Olahraga WP Kuala Lumpur",
    image: "/TBM.JPG",
  },
]
const performingartsData = [
  {
    title: "Frozen & Friends",
    organization: "City Ballet Academy",
    year: "2019",
    description: "Roles: Corps De Ballet",
    image: "/Frozen'19.jpeg",
  },
  {
    title: "Christmas Mask-Querade",
    organization: "City Ballet Academy",
    year: "2021",
    description: "Perfomanced Ballet Dance and Contemporary Dance",
    image: "/Cristmas Mask-Querade'21.jpg",
  },
  {
    title: "Black And White",
    organization: "City Ballet Academy",
    year: "2022",
    description: "Performed Contempaorary Dance",
    image: "/B&W '22.jpeg",
  },
  {
    title: "Nutcracker And Clara's Dream",
    organization: "City Ballet Academy | Pointe & Music Dance Academy",
    year: "2022",
    description: "Roles: Parents, Corp De Ballet (Waltz Of Flowers and Land of Snow)",
    image: "/Nutcracker'22.jpeg",
  },
  {
    title: "Zootopia",
    organization: "City Ballet Academy",
    year: "2023",
    description: "Roles: Corp De Ballet",
    image: "/Zootopia'23.jpeg",
  },
]

const experienceData = [
  {
    title: "Ballet Teacher",
    company: "City Ballet Academy",
    period: "February 2024 - Present",
    duties: [
      "Taught ballet techniques to students of various ages and skill levels",
      "Planned and conducted structured lessons focusing on posture and flexibility",
      "Provided individual guidance to help students improve their performance and confidence",
      "Prepared students for examinations and performances",
    ],
  },
  {
    title: "Administrative & Management Executive",
    company: "City Ballet Academy",
    period: ["March 2021 - May 2022", ", April 2025 - present"],
    duties: [
      "Produces an informative brochure for new parents to introduce programs and support enrollment",
      "Implemented new administrative processes that improved efficiency by 25%",
      "Processing fees and issued receipts",
      "Tracked students' attendance and supported daily admin tasks",
      "Assisted with fitting student attire",
      "Managed and recorded stock distribution and inventory",
    ],
  },
  {
    title: "Sales Representative",
    company: "UNIIQ KOMBUCHA",
    period: "April 2023 - May 2023",
    duties: [
      "Promoted products through direct customer engagement and sampling",
      "Successfully encouraged product trials and increased sales through persuasive communication",
      "Consistently hit daily sales targets through strong customer interaction and product knowledge",
      "Operated and managed the booth independently, including setup, sampling, and stock handling",
    ],
  },
]

// Generate star data
const generateStars = () => {
  // Giant stars (new)
  const giantStars = Array.from({ length: 5 }).map(() => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 15 + 25, // 25-40px
    color: Math.random() > 0.5 ? "#7a9bff" : "#d4a7ff",
    opacity: Math.random() * 0.3 + 0.7, // 0.7-1.0
    animationDuration: Math.random() * 40 + 40, // 70-110s (even faster)
    type: "star",
  }))

  // Extra large stars (new)
  const extraLargeStars = Array.from({ length: 10 }).map(() => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 10 + 15, // 15-25px
    color: Math.random() > 0.5 ? "#7a9bff" : "#d4a7ff",
    opacity: Math.random() * 0.3 + 0.7, // 0.7-1.0
    animationDuration: Math.random() * 35 + 35, // 35-70s (even faster)
    type: "star",
  }))

  // Large stars
  const largeStars = Array.from({ length: 20 }).map(() => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 8 + 7, // 7-15px
    color: Math.random() > 0.5 ? "#7a9bff" : "#d4a7ff",
    opacity: Math.random() * 0.3 + 0.7,
    animationDuration: Math.random() * 30 + 30, // 30-60s (even faster)
    type: "star",
  }))

  // Medium stars
  const mediumStars = Array.from({ length: 30 }).map(() => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 5 + 3, // 3-8px
    color: Math.random() > 0.5 ? "#7a9bff" : "#d4a7ff",
    opacity: Math.random() * 0.3 + 0.6,
    animationDuration: Math.random() * 25 + 25, // 25-50s (even faster)
    type: "smallStar",
  }))

  // Small sparkles
  const smallSparkles = Array.from({ length: 60 }).map(() => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 3 + 1, // 1-4px
    color: Math.random() > 0.5 ? "#7a9bff" : "#d4a7ff",
    opacity: Math.random() * 0.4 + 0.5,
    animationDuration: Math.random() * 20 + 20, // 20-40s (even faster)
    type: "smallStar",
  }))

  // Tiny dots
  const tinyDots = Array.from({ length: 100 }).map(() => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 1.5 + 0.5, // 0.5-2px
    color: Math.random() > 0.5 ? "#7a9bff" : "#d4a7ff",
    opacity: Math.random() * 0.3 + 0.4,
    animationDuration: Math.random() * 15 + 15, // 15-30s (even faster)
    type: "dot",
  }))

  return [...giantStars, ...extraLargeStars, ...largeStars, ...mediumStars, ...smallSparkles, ...tinyDots]
}

export default function Portfolio() {
  // Add CSS keyframes for the floating animation
  useEffect(() => {
    const style = document.createElement("style")
    style.textContent = `
      @keyframes float {
        0% {
          transform: translateY(0);
        }
        100% {
          transform: translateY(-100vh);
        }
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; description?: string } | null>(null)
  const [stars] = useState(generateStars())
  const starsContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleLinkClick = (e: any) => {
      const href = e.currentTarget.getAttribute("href")
      if (href && href.startsWith("#")) {
        e.preventDefault()
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for the fixed header
            behavior: "smooth",
          })

          // Close mobile menu if open
          setMobileMenuOpen(false)
        }
      }
    }

    // Add event listeners to all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]')
    navLinks.forEach((link) => {
      link.addEventListener("click", handleLinkClick)
    })

    // Cleanup
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleLinkClick)
      })
    }
  }, [])

  useEffect(() => {
    // Make all elements with opacity-0 visible
    const makeVisible = () => {
      document.querySelectorAll(".opacity-0").forEach((el) => {
        el.classList.add("opacity-100")
        el.classList.remove("opacity-0")
      })

      // Make all carousel items visible
      document.querySelectorAll(".carousel-item").forEach((el) => {
        el.classList.add("opacity-100")
      })
    }

    // Run on mount and after a short delay
    makeVisible()
    setTimeout(makeVisible, 500)
  }, [])

  // This is now handled in the useEffect for smooth scrolling
  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-[#1e2130] text-[#f5f0e0] relative overflow-hidden">
      {/* Stars background with continuous animation */}
      <div ref={starsContainerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star, i) => {
          if (star.type === "star") {
            return (
              <div
                key={`star-${i}`}
                className="absolute animate-float"
                style={{
                  top: `${star.top}%`,
                  left: `${star.left}%`,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  color: star.color,
                  opacity: star.opacity,
                  animation: `float ${star.animationDuration}s linear infinite`,
                }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
                </svg>
              </div>
            )
          } else if (star.type === "smallStar") {
            return (
              <div
                key={`small-star-${i}`}
                className="absolute animate-float"
                style={{
                  top: `${star.top}%`,
                  left: `${star.left}%`,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  color: star.color,
                  opacity: star.opacity,
                  animation: `float ${star.animationDuration}s linear infinite`,
                }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0L14 5L19 7L14 9L12 14L10 9L5 7L10 5L12 0Z" />
                </svg>
              </div>
            )
          } else {
            return (
              <div
                key={`dot-${i}`}
                className="absolute rounded-full animate-float"
                style={{
                  top: `${star.top}%`,
                  left: `${star.left}%`,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  backgroundColor: star.color,
                  opacity: star.opacity,
                  animation: `float ${star.animationDuration}s linear infinite`,
                }}
              />
            )
          }
        })}
      </div>

      {/* Social Media Contact Icons */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
        <a
          href={`mailto:${profileData.social.email}`}
          className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7a9bff] to-[#a0c4ff] flex items-center justify-center text-[#1e2130] transition-transform hover:scale-110 shadow-lg"
          aria-label="Email me"
          title={profileData.social.email}
        >
          <Mail size={20} />
        </a>
        <a
          href={`https://wa.me/${profileData.social.whatsapp.replace(/\+|\s/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center text-[#1e2130] transition-transform hover:scale-110 shadow-lg"
          aria-label="Message me on WhatsApp"
          title={`WhatsApp: ${profileData.social.whatsapp}`}
        >
          <PiWhatsappLogo size={24} />
        </a>
         <a
          href={`https://instagram.com/${profileData.social.instagram.replace("@", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C98E94] to-[#E1306C] flex items-center justify-center text-[#1e2130] transition-transform hover:scale-110 shadow-lg"
          aria-label="Follow me on Instagram"
          title={profileData.social.instagram}
        >
          <Instagram size={20} />
        </a>
        <a
          href="#contact"
          className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4a7ff] to-[#f5a9ff] flex items-center justify-center text-[#1e2130] transition-transform hover:scale-110 shadow-lg"
          aria-label="Contact section"
          title="Go to contact section"
        >
          <MessageSquare size={20} />
        </a>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header with Mobile Menu */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#1e2130]/80 backdrop-blur-md border-b border-[#f5f0e0]/10">
          <div className="container mx-auto py-4 px-4">
            <div className="flex justify-between items-center">
              <h1 className="text-xl md:text-2xl font-bold font-serif">{profileData.name}'s Portfolio</h1>

              {/* Mobile menu button */}
              <button
                className="md:hidden text-[#f5f0e0] focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* Desktop Navigation */}
              <nav className="hidden md:block">
                <ul className="flex space-x-6">
                  <li>
                    <a href="#education" className="hover:text-[#f5a9ff] transition-colors">
                      Education
                    </a>
                  </li>
                  <li>
                    <a href="#certificates" className="hover:text-[#f5a9ff] transition-colors">
                      Certificates
                    </a>
                  </li>
                  <li>
                    <a href="#achievements" className="hover:text-[#f5a9ff] transition-colors">
                      Achievements
                    </a>
                  </li>
                  <li>
                    <a href="#extracurricular" className="hover:text-[#f5a9ff] transition-colors">
                      Extracurricular
                    </a>
                  </li>
                  <li>
                    <a href="#performingarts" className="hover:text-[#f5a9ff] transition-colors">
                      Performing Arts
                    </a>
                  </li>
                  <li>
                    <a href="#experience" className="hover:text-[#f5a9ff] transition-colors">
                      Experience
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-[#f5a9ff] transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Mobile Navigation Dropdown */}
            {mobileMenuOpen && (
              <nav className="md:hidden mt-4 pb-2">
                <ul className="flex flex-col space-y-3 text-sm">
                  <li>
                    <a
                      href="#education"
                      className="block hover:text-[#f5a9ff] transition-colors"
                      onClick={handleNavClick}
                    >
                      Education
                    </a>
                  </li>
                  <li>
                    <a
                      href="#certificates"
                      className="block hover:text-[#f5a9ff] transition-colors"
                      onClick={handleNavClick}
                    >
                      Certificates
                    </a>
                  </li>
                  <li>
                    <a
                      href="#achievements"
                      className="block hover:text-[#f5a9ff] transition-colors"
                      onClick={handleNavClick}
                    >
                      Achievements
                    </a>
                  </li>
                  <li>
                    <a
                      href="#extracurricular"
                      className="block hover:text-[#f5a9ff] transition-colors"
                      onClick={handleNavClick}
                    >
                      Extracurricular
                    </a>
                  </li>
                  <li>
                    <a
                      href="#performingarts"
                      className="block hover:text-[#f5a9ff] transition-colors"
                      onClick={handleNavClick}
                    >
                      Performing Arts
                    </a>
                  </li>
                  <li>
                    <a
                      href="#experience"
                      className="block hover:text-[#f5a9ff] transition-colors"
                      onClick={handleNavClick}
                    >
                      Experience
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="block hover:text-[#f5a9ff] transition-colors"
                      onClick={handleNavClick}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </header>

        {/* Combined Hero Section with Profile - Adjusted for mobile */}
        <section className="min-h-screen flex items-center justify-center pt-20 md:pt-24">
          <div className="container mx-auto px-4 text-center">
            <div className="flex flex-col items-center justify-center mt-10 md:mt-0">
              {/* Text below image */}
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 font-serif">
                <span className="text-[#f5f0e0]">{profileData.name}'s Here</span>
              </h1>
              <div className="mb-8">
                <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-[#f5f0e0]/20">
                  <Image
                    src={profileData.image || "/placeholder.svg"}
                    alt={`${profileData.name}'s Profile Picture`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e2130]/50 to-transparent"></div>
                </div>
              </div>

              <p className="text-base md:text-xl lg:text-2xl max-w-2xl mx-auto mb-8 text-[#f5f0e0]/80">
                {profileData.description}
              </p>

              {/* Buttons below description */}
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="#education"
                  className="text-sm md:text-base bg-[#f5f0e0]/10 hover:bg-[#f5f0e0]/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full transition-all duration-300 hover:scale-105 border border-[#f5f0e0]/10"
                >
                  View My Education
                </a>
                <a
                  href="#experience"
                  className="text-sm md:text-base bg-gradient-to-r from-[#7a9bff] to-[#d4a7ff] hover:from-[#7a9bff]/90 hover:to-[#d4a7ff]/90 text-[#1e2130] font-medium px-4 md:px-6 py-2 md:py-3 rounded-full transition-all duration-300 hover:scale-105"
                >
                  See My Experience
                </a>
              </div>
            </div>

            <a
              href="#education"
              className="flex items-center justify-center animate-bounce mt-12 text-[#f5f0e0]/70 hover:text-[#f5f0e0] transition-colors absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
              <span className="mr-2 text-sm md:text-base">Explore More</span>
              <ChevronDown size={16} className="md:w-6 md:h-6" />
            </a>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-24 min-h-screen flex items-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-center font-serif">
              <span className="border-b-4 border-[#d4a7ff] pb-2">Education</span>
            </h2>
            <Card className="bg-[#1e2130]/60 border-[#f5f0e0]/10 backdrop-blur-sm transform transition-all duration-500 hover:scale-[1.01]">
              <CardContent className="p-4 md:p-6 lg:p-8">
                <div className="space-y-12">
                  {educationData.map((education, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-[#7a9bff] pl-4 md:pl-6 py-4 transform transition-all duration-500 hover:pl-6 md:hover:pl-8 hover:border-[#d4a7ff]"
                    >
                      <h3 className="text-xl md:text-2xl font-bold font-serif">{education.institution}</h3>
                      <p className="text-sm md:text-base text-[#f5f0e0]/70">
                        {education.degree} • {education.period}
                      </p>
                      <p className="mt-2 text-sm md:text-base">Result: {education.Result}</p>
                      <p className="mt-1 text-sm md:text-base">{education.details}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="py-24 min-h-screen flex items-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-center font-serif">
              <span className="border-b-4 border-[#d4a7ff] pb-2">Certificates</span>
            </h2>
            <div className="relative">
              <div className="carousel-container overflow-hidden">
                <div className="carousel-track flex transition-transform duration-500" id="certificates-carousel">
                  {certificatesData.map((certificate, index) => (
                    <div
                      key={index}
                      className="carousel-item w-full md:w-1/3 lg:w-1/3 flex-shrink-0 px-4"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <Card className="bg-[#1e2130]/60 border-[#f5f0e0]/10 backdrop-blur-sm overflow-hidden transform transition-all duration-500 hover:scale-[1.03] h-full">
                        <Dialog>
                          <DialogTrigger asChild>
                            <div
                              className="relative h-52 md:h-64 w-full overflow-hidden cursor-pointer bg-[#2a2d3d]"
                              onClick={() =>
                                setSelectedImage({
                                  src: certificate.image || "/placeholder.svg",
                                  title: certificate.title,
                                  description: `${certificate.organization} • ${certificate.year} • ${certificate.description}`,
                                })
                              }
                            >
                              <Image
                                src={certificate.image || "/placeholder.svg"}
                                alt={certificate.title}
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-110 p-2"
                              />
                            </div>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] bg-[#1e2130]/95 border-[#f5f0e0]/10 backdrop-blur-md">
                            <div className="flex flex-col items-center">
                              <div className="relative w-full h-[50vh] md:h-[70vh] bg-[#2a2d3d]">
                                <Image
                                  src={selectedImage?.src || "/placeholder.svg"}
                                  alt={selectedImage?.title || "Image"}
                                  fill
                                  className="object-contain p-4"
                                />
                              </div>
                              <div className="mt-4 text-center">
                                <h3 className="text-xl md:text-2xl font-bold font-serif">{selectedImage?.title}</h3>
                                <p className="text-sm md:text-base text-[#f5f0e0]/70 mt-2">
                                  {selectedImage?.description}
                                </p>
                              </div>
                              <DialogClose asChild>
                                <Button
                                  variant="outline"
                                  className="mt-4 border-[#d4a7ff] text-[#d4a7ff] hover:bg-[#d4a7ff]/10"
                                >
                                  Close
                                </Button>
                              </DialogClose>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <CardContent className="p-4 md:p-6">
                          <h3 className="text-xl md:text-2xl font-bold font-serif">{certificate.title}</h3>
                          <p className="text-sm md:text-base text-[#f5f0e0]/70">
                            {certificate.organization} • {certificate.year}
                          </p>
                          <p className="mt-2 text-sm md:text-base">{certificate.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="flex justify-center mt-6 space-x-2">
                {certificatesData.map((_, index) => (
                  <button
                    key={index}
                    className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#f5f0e0]/30 hover:bg-[#f5f0e0]/70 transition-colors carousel-dot"
                    data-index={index}
                    data-carousel="certificates-carousel"
                    aria-label={`Go to slide ${index + 1}`}
                  ></button>
                ))}
              </div>

              <button
                className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-[#1e2130]/50 hover:bg-[#1e2130]/70 text-[#f5f0e0] rounded-full p-1 md:p-2 backdrop-blur-sm carousel-prev"
                data-carousel="certificates-carousel"
                aria-label="Previous slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="md:w-6 md:h-6"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              <button
                className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-[#1e2130]/50 hover:bg-[#1e2130]/70 text-[#f5f0e0] rounded-full p-1 md:p-2 backdrop-blur-sm carousel-next"
                data-carousel="certificates-carousel"
                aria-label="Next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="md:w-6 md:h-6"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-24 min-h-screen flex items-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-center font-serif">
              <span className="border-b-4 border-[#d4a7ff] pb-2">Achievements</span>
            </h2>
            <div className="relative">
              <div className="carousel-container overflow-hidden">
                <div className="carousel-track flex transition-transform duration-500" id="achievements-carousel">
                  {achievementsData.map((achievement, index) => (
                    <div
                      key={index}
                      className="carousel-item w-full md:w-1/3 lg:w-1/3 flex-shrink-0 px-4"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <Card className="bg-[#1e2130]/60 border-[#f5f0e0]/10 backdrop-blur-sm overflow-hidden transform transition-all duration-500 hover:scale-[1.03] h-full">
                        <Dialog>
                          <DialogTrigger asChild>
                            <div
                              className="relative h-52 md:h-64 w-full overflow-hidden cursor-pointer bg-[#2a2d3d]"
                              onClick={() =>
                                setSelectedImage({
                                  src: achievement.image || "/placeholder.svg",
                                  title: achievement.title,
                                  description: `${achievement.year} • ${achievement.description}`,
                                })
                              }
                            >
                              <Image
                                src={achievement.image || "/placeholder.svg"}
                                alt={achievement.title}
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-110 p-2"
                              />
                            </div>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] bg-[#1e2130]/95 border-[#f5f0e0]/10 backdrop-blur-md">
                            <div className="flex flex-col items-center">
                              <div className="relative w-full h-[50vh] md:h-[70vh] bg-[#2a2d3d]">
                                <Image
                                  src={selectedImage?.src || "/placeholder.svg"}
                                  alt={selectedImage?.title || "Image"}
                                  fill
                                  className="object-contain p-4"
                                />
                              </div>
                              <div className="mt-4 text-center">
                                <h3 className="text-xl md:text-2xl font-bold font-serif">{selectedImage?.title}</h3>
                                <p className="text-sm md:text-base text-[#f5f0e0]/70 mt-2">
                                  {selectedImage?.description}
                                </p>
                              </div>
                              <DialogClose asChild>
                                <Button
                                  variant="outline"
                                  className="mt-4 border-[#d4a7ff] text-[#d4a7ff] hover:bg-[#d4a7ff]/10"
                                >
                                  Close
                                </Button>
                              </DialogClose>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <CardContent className="p-4 md:p-6">
                          <h3 className="text-xl md:text-2xl font-bold font-serif">{achievement.title}</h3>
                          <p className="text-sm md:text-base text-[#f5f0e0]/70">{achievement.year}</p>
                          <p className="mt-2 text-sm md:text-base">{achievement.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="flex justify-center mt-6 space-x-2">
                {achievementsData.map((_, index) => (
                  <button
                    key={index}
                    className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#f5f0e0]/30 hover:bg-[#f5f0e0]/70 transition-colors carousel-dot"
                    data-index={index}
                    data-carousel="achievements-carousel"
                    aria-label={`Go to slide ${index + 1}`}
                  ></button>
                ))}
              </div>

              <button
                className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-[#1e2130]/50 hover:bg-[#1e2130]/70 text-[#f5f0e0] rounded-full p-1 md:p-2 backdrop-blur-sm carousel-prev"
                data-carousel="achievements-carousel"
                aria-label="Previous slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="md:w-6 md:h-6"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              <button
                className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-[#1e2130]/50 hover:bg-[#1e2130]/70 text-[#f5f0e0] rounded-full p-1 md:p-2 backdrop-blur-sm carousel-next"
                data-carousel="achievements-carousel"
                aria-label="Next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="md:w-6 md:h-6"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Extracurricular Section */}
        <section id="extracurricular" className="py-24 min-h-screen flex items-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-center font-serif">
              <span className="border-b-4 border-[#d4a7ff] pb-2">Extracurricular Activities</span>
            </h2>
            <div className="relative">
              <div className="carousel-container overflow-hidden">
                <div className="carousel-track flex transition-transform duration-500" id="extracurricular-carousel">
                  {extracurricularData.map((activity, index) => (
                    <div
                      key={index}
                      className="carousel-item w-full md:w-1/3 lg:w-1/3 flex-shrink-0 px-4"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <Card className="bg-[#1e2130]/60 border-[#f5f0e0]/10 backdrop-blur-sm overflow-hidden transform transition-all duration-500 hover:scale-[1.05] h-full">
                        <Dialog>
                          <DialogTrigger asChild>
                            <div
                              className="relative h-52 md:h-72 w-full overflow-hidden group cursor-pointer bg-[#2a2d3d]"
                              onClick={() =>
                                setSelectedImage({
                                  src: activity.image || "/placeholder.svg",
                                  title: activity.title,
                                  description: `${activity.organization} • ${activity.year} • ${activity.description}`,
                                })
                              }
                            >
                              <Image
                                src={activity.image || "/placeholder.svg"}
                                alt={activity.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 p-2"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#1e2130]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                <p className="p-4 text-xs md:text-sm">Click to view details</p>
                              </div>
                            </div>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] bg-[#1e2130]/95 border-[#f5f0e0]/10 backdrop-blur-md">
                            <div className="flex flex-col items-center">
                              <div className="relative w-full h-[50vh] md:h-[70vh] bg-[#2a2d3d]">
                                <Image
                                  src={selectedImage?.src || "/placeholder.svg"}
                                  alt={selectedImage?.title || "Image"}
                                  fill
                                  className="object-contain p-4"
                                />
                              </div>
                              <div className="mt-4 text-center">
                                <h3 className="text-xl md:text-2xl font-bold font-serif">{selectedImage?.title}</h3>
                                <p className="text-sm md:text-base text-[#f5f0e0]/70 mt-2">
                                  {selectedImage?.description}
                                </p>
                              </div>
                              <DialogClose asChild>
                                <Button
                                  variant="outline"
                                  className="mt-4 border-[#d4a7ff] text-[#d4a7ff] hover:bg-[#d4a7ff]/10"
                                >
                                  Close
                                </Button>
                              </DialogClose>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <CardContent className="p-3 md:p-4">
                          <h3 className="text-base md:text-lg font-bold font-serif">{activity.title}</h3>
                          <p className="text-xs md:text-sm text-[#f5f0e0]/70">
                            {activity.organization} • {activity.year}
                          </p>
                          <p className="mt-2 text-xs md:text-sm">{activity.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="flex justify-center mt-6 space-x-2">
                {extracurricularData.map((_, index) => (
                  <button
                    key={index}
                    className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#f5f0e0]/30 hover:bg-[#f5f0e0]/70 transition-colors carousel-dot"
                    data-index={index}
                    data-carousel="extracurricular-carousel"
                    aria-label={`Go to slide ${index + 1}`}
                  ></button>
                ))}
              </div>

              <button
                className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-[#1e2130]/50 hover:bg-[#1e2130]/70 text-[#f5f0e0] rounded-full p-1 md:p-2 backdrop-blur-sm carousel-prev"
                data-carousel="extracurricular-carousel"
                aria-label="Previous slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="md:w-6 md:h-6"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              <button
                className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-[#1e2130]/50 hover:bg-[#1e2130]/70 text-[#f5f0e0] rounded-full p-1 md:p-2 backdrop-blur-sm carousel-next"
                data-carousel="extracurricular-carousel"
                aria-label="Next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="md:w-6 md:h-6"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Performing Arts Section */}
        <section id="performingarts" className="py-24 min-h-screen flex items-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-center font-serif">
              <span className="border-b-4 border-[#d4a7ff] pb-2">Performing Arts</span>
            </h2>
            <div className="relative">
              <div className="carousel-container overflow-hidden">
                <div className="carousel-track flex transition-transform duration-500" id="performingarts-carousel">
                  {performingartsData.map((activity, index) => (
                    <div
                      key={index}
                      className="carousel-item w-full md:w-1/3 lg:w-1/3 flex-shrink-0 px-4"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <Card className="bg-[#1e2130]/60 border-[#f5f0e0]/10 backdrop-blur-sm overflow-hidden transform transition-all duration-500 hover:scale-[1.05] h-full">
                        <Dialog>
                          <DialogTrigger asChild>
                            <div
                              className="relative h-52 md:h-72 w-full overflow-hidden group cursor-pointer bg-[#2a2d3d]"
                              onClick={() =>
                                setSelectedImage({
                                  src: activity.image || "/placeholder.svg",
                                  title: activity.title,
                                  description: `${activity.organization} • ${activity.year} • ${activity.description}`,
                                })
                              }
                            >
                              <Image
                                src={activity.image || "/placeholder.svg"}
                                alt={activity.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 p-2"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#1e2130]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                <p className="p-4 text-xs md:text-sm">Click to view details</p>
                              </div>
                            </div>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] bg-[#1e2130]/95 border-[#f5f0e0]/10 backdrop-blur-md">
                            <div className="flex flex-col items-center">
                              <div className="relative w-full h-[50vh] md:h-[70vh] bg-[#2a2d3d]">
                                <Image
                                  src={selectedImage?.src || "/placeholder.svg"}
                                  alt={selectedImage?.title || "Image"}
                                  fill
                                  className="object-contain p-4"
                                />
                              </div>
                              <div className="mt-4 text-center">
                                <h3 className="text-xl md:text-2xl font-bold font-serif">{selectedImage?.title}</h3>
                                <p className="text-sm md:text-base text-[#f5f0e0]/70 mt-2">
                                  {selectedImage?.description}
                                </p>
                              </div>
                              <DialogClose asChild>
                                <Button
                                  variant="outline"
                                  className="mt-4 border-[#d4a7ff] text-[#d4a7ff] hover:bg-[#d4a7ff]/10"
                                >
                                  Close
                                </Button>
                              </DialogClose>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <CardContent className="p-3 md:p-4">
                          <h3 className="text-base md:text-lg font-bold font-serif">{activity.title}</h3>
                          <p className="text-xs md:text-sm text-[#f5f0e0]/70">
                            {activity.organization} • {activity.year}
                          </p>
                          <p className="mt-2 text-xs md:text-sm">{activity.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="flex justify-center mt-6 space-x-2">
                {performingartsData.map((_, index) => (
                  <button
                    key={index}
                    className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#f5f0e0]/30 hover:bg-[#f5f0e0]/70 transition-colors carousel-dot"
                    data-index={index}
                    data-carousel="performingarts-carousel"
                    aria-label={`Go to slide ${index + 1}`}
                  ></button>
                ))}
              </div>

              <button
                className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-[#1e2130]/50 hover:bg-[#1e2130]/70 text-[#f5f0e0] rounded-full p-1 md:p-2 backdrop-blur-sm carousel-prev"
                data-carousel="performingarts-carousel"
                aria-label="Previous slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="md:w-6 md:h-6"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              <button
                className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-[#1e2130]/50 hover:bg-[#1e2130]/70 text-[#f5f0e0] rounded-full p-1 md:p-2 backdrop-blur-sm carousel-next"
                data-carousel="performingarts-carousel"
                aria-label="Next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="md:w-6 md:h-6"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="experience" className="py-24 min-h-screen flex items-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-center font-serif">
              <span className="border-b-4 border-[#d4a7ff] pb-2">Work Experience</span>
            </h2>
            <Card className="bg-[#1e2130]/60 border-[#f5f0e0]/10 backdrop-blur-sm transform transition-all duration-500 hover:scale-[1.01]">
              <CardContent className="p-4 md:p-6 lg:p-8">
                <div className="space-y-12">
                  {experienceData.map((job, index) => (
                    <div
                      key={index}
                      className="relative border-l-4 border-[#7a9bff] pl-4 md:pl-6 pb-12"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold font-serif">{job.title}</h3>
                      <p className="text-sm md:text-base text-[#f5f0e0]/70">
                        {job.company} • {job.period}
                      </p>
                      <ul className="mt-4 list-disc list-inside space-y-2">
                        {job.duties.map((duty, i) => (
                          <li
                            key={i}
                            className="transform transition-all duration-300 hover:translate-x-2 text-sm md:text-base"
                          >
                            {duty}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <ContactForm />

        {/* Footer */}
        <footer className="py-6 md:py-8 text-center text-[#f5f0e0]/60 border-t border-[#f5f0e0]/10 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <p className="text-xs md:text-sm">
              © {new Date().getFullYear()} {profileData.name}'s Portfolio. All rights reserved.
            </p>
            <div className="mt-2 text-xs transform -rotate-2 font-serif">Created with ♥ by {profileData.name}</div>
          </div>
        </footer>
      </div>
    </div>
  )
}
