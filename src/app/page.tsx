"use client"

import Image from "next/image"
import { Mail, ChevronDown, Instagram, MessageCircle, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/"
import { Card, CardContent } from "@/components/ui/"
import { Input } from "@/components/ui/"
import { Textarea } from "@/components/ui/"
import { useEffect, useState } from "react"

// Mock data for all sections
const profileData = {
  name: "Emily",
  title: "Dance Instructor & Administrative Professional",
  description: "A showcase of my achievements, education, and professional experience!",
  image: "/Canva.jpg",
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
    details: "Subjects: Bahasa Melayu, Bahasa English, Pendidikan Moral, Sejarah, Matematik, Sains, Matematik Tambahan, Prinsip Perakaunan, Ekonomi, Bahasa Cina.",
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
  },{
    title: "Jelajah Seminar Kenegaraan MADANI Siri 6/2024",
    organization: "YAYASAN DAKWAH ISLAMIAH MALAYSIA NEGERI SELANGOR DAN JABATAN PENDIDIKAN WILAYAH PERSEKUTUAN KUALA LUMPUR",
    year: "2024",
    description: "Malaysia MADANI",
    image: "/YADIM SP ogos'24.jpg",
  },{
    title: "The Queen's Commonwealth Essay Competition 2024",
    organization: "Royal Commonwealth Society",
    year: "2024",
    description: "International",
    image: "/commonwealth sp sep'24.jpg",
  },{
    title: "Aktiviti Game Station",
    organization: "SMK SERI SENOTSA Badan Beruniform",
    year: "2024",
    description: "Kokurikulum",
    image: "/GAME SP sep'24.png",
  },
]

const achievementsData = [
  {
    title: "National Ballet Competition Gold Medal",
    year: "2021",
    description: "Awarded first place in the professional category at the National Dance Championship.",
    image: "/PENOLONG ACHIEVEMENT'23.png",
  },
  {
    title: "Choreographer of the Year",
    year: "2020",
    description: "Recognized by the Regional Dance Association for outstanding choreography in 'Seasons of Change'.",
    image: "/DESA MAHKOTA ACHIEVEMENT'24.png",
  },
  {
    title: "Dance Studio Excellence Award",
    year: "2022",
    description: "Studio received top honors under my leadership for exceptional student development and performance.",
    image: "/SWEDA may'24.png",
  },
  {
    title: "Administrative Leadership Award",
    year: "2019",
    description: "Recognized for implementing innovative management systems that increased efficiency by 35%.",
    image: "/PENOLONG ACHIEVEMENT'24.png",
  },
  {
    title: "Administrative Leadership Award",
    year: "2019",
    description: "Recognized for implementing innovative management systems that increased efficiency by 35%.",
    image: "/PENOLONG RESULT ACHIEVEMENT.png",
  },{
    title: "Administrative Leadership Award",
    year: "2019",
    description: "Recognized for implementing innovative management systems that increased efficiency by 35%.",
    image: "/BB ACHIEVEMENT'24.png",
  },{
    title: "Administrative Leadership Award",
    year: "2019",
    description: "Recognized for implementing innovative management systems that increased efficiency by 35%.",
    image: "/ACHIEVMENT :24.png",
  },{
    title: "Administrative Leadership Award",
    year: "2019",
    description: "Recognized for implementing innovative management systems that increased efficiency by 35%.",
    image: "/BENDAHARI ACHIEVEMNT'24.png",
  }


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
    title: "Professional Dance Association",
    organization: "National Dance Guild",
    year: "2019-Present",
    description: "Active member participating in professional development and industry advancement initiatives.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Dance Education Conference Speaker",
    organization: "International Dance Education Summit",
    year: "2022",
    description: "Presented workshop on integrating business management with creative arts education.",
    image: "/placeholder.svg?height=200&width=300",
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
    period: ["March 2021 - May 2022",
      ", April 2025 - present"
    ],
    duties: [
      "Produces an informative brochure for new parents to introduce programs and support enrollment",
      "Implemented new administrative processes that improved efficiency by 25%",
      "Processing fees and issued receipts",
      "Tracked students’ attendance and supported daily admin tasks",
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
      "Operated and managed the booth independently, including setup, sampling, and stock handling"
    ],
  },
]

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

  // Close mobile menu when clicking on a navigation link
  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-3/4 left-1/3 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/10 rounded-full"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Social Media Dock - Hide on small screens */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden md:flex flex-col gap-4">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
          aria-label="Instagram"
        >
          <Instagram className="w-6 h-6 text-white" />
        </a>
        <a
          href={`https://wa.me/${profileData.social.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
          aria-label="WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="text-white"
          >
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>
        </a>
        <a
          href={`mailto:${profileData.social.email}`}
          className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
          aria-label="Email"
        >
          <Mail className="w-6 h-6 text-white" />
        </a>
        <a
          href="#contact"
          className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
          aria-label="Contact Me"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </a>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header with Mobile Menu */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto py-4 px-4">
            <div className="flex justify-between items-center">
              <h1 className="text-xl md:text-2xl font-bold">{profileData.name}'s Portfolio</h1>

              {/* Mobile menu button */}
              <button
                className="md:hidden text-white focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* Desktop Navigation */}
              <nav className="hidden md:block">
                <ul className="flex space-x-6">
                  <li>
                    <a href="#education" className="hover:text-purple-300 transition-colors">
                      Education
                    </a>
                  </li>
                  <li>
                    <a href="#certificates" className="hover:text-purple-300 transition-colors">
                      Certificates
                    </a>
                  </li>
                  <li>
                    <a href="#achievements" className="hover:text-purple-300 transition-colors">
                      Achievements
                    </a>
                  </li>
                  <li>
                    <a href="#extracurricular" className="hover:text-purple-300 transition-colors">
                      Extracurricular
                    </a>
                  </li>
                  <li>
                    <a href="#experience" className="hover:text-purple-300 transition-colors">
                      Experience
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-purple-300 transition-colors">
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
                      className="block hover:text-purple-300 transition-colors"
                      onClick={handleNavClick}
                    >
                      Education
                    </a>
                  </li>
                  <li>
                    <a
                      href="#certificates"
                      className="block hover:text-purple-300 transition-colors"
                      onClick={handleNavClick}
                    >
                      Certificates
                    </a>
                  </li>
                  <li>
                    <a
                      href="#achievements"
                      className="block hover:text-purple-300 transition-colors"
                      onClick={handleNavClick}
                    >
                      Achievements
                    </a>
                  </li>
                  <li>
                    <a
                      href="#extracurricular"
                      className="block hover:text-purple-300 transition-colors"
                      onClick={handleNavClick}
                    >
                      Extracurricular
                    </a>
                  </li>
                  <li>
                    <a
                      href="#experience"
                      className="block hover:text-purple-300 transition-colors"
                      onClick={handleNavClick}
                    >
                      Experience
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="block hover:text-purple-300 transition-colors"
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
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 animate-fadeIn">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  {profileData.name}'s here!
                </span>
              </h1>
              <div className="mb-8">
                <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20 animate-pulse-slow">
                  <Image
                    src={profileData.image || "/placeholder.svg"}
                    alt={`${profileData.name}'s Profile Picture`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
                </div>
              </div>

              <p className="text-base md:text-xl lg:text-2xl max-w-2xl mx-auto mb-8 text-white/80 animate-fadeIn animation-delay-300">
                {profileData.description}
              </p>

              {/* Buttons below description */}
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="#education"
                  className="text-sm md:text-base bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full transition-all duration-300 hover:scale-105 border border-white/10"
                >
                  View My Education
                </a>
                <a
                  href="#experience"
                  className="text-sm md:text-base bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 px-4 md:px-6 py-2 md:py-3 rounded-full transition-all duration-300 hover:scale-105"
                >
                  See My Experience
                </a>
              </div>
            </div>

            <a
              href="#education"
              className="flex items-center justify-center animate-bounce mt-12 text-white/70 hover:text-white transition-colors absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
              <span className="mr-2 text-sm md:text-base">Explore More</span>
              <ChevronDown size={16} className="md:w-6 md:h-6" />
            </a>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-24 min-h-screen flex items-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-center animate-slideUp opacity-100">
              <span className="border-b-4 border-purple-400 pb-2">Education</span>
            </h2>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm transform transition-all duration-500 hover:scale-[1.01] animate-fadeIn opacity-100">
              <CardContent className="p-4 md:p-6 lg:p-8">
                <div className="space-y-12">
                  {educationData.map((education, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-purple-400 pl-4 md:pl-6 py-4 transform transition-all duration-500 hover:pl-6 md:hover:pl-8 hover:border-purple-300"
                    >
                      <h3 className="text-xl md:text-2xl font-bold">{education.institution}</h3>
                      <p className="text-sm md:text-base text-white/70">
                        {education.degree}, {education.period}
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-center animate-slideUp opacity-100">
              <span className="border-b-4 border-purple-400 pb-2">Certificates</span>
            </h2>
            <div className="relative">
              <div className="carousel-container overflow-hidden">
                <div className="carousel-track flex transition-transform duration-500" id="certificates-carousel">
                  {certificatesData.map((certificate, index) => (
                    <div
                      key={index}
                      className="carousel-item w-full md:w-1/2 lg:w-1/2 flex-shrink-0 px-4 animate-fadeIn opacity-100"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden transform transition-all duration-500 hover:scale-[1.03] h-full">
                        <div className="relative h-40 md:h-48 w-full overflow-hidden">
                          <Image
                            src={certificate.image || "/placeholder.svg"}
                            alt={certificate.title}
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-110"
                          />
                        </div>
                        <CardContent className="p-4 md:p-6">
                          <h3 className="text-lg md:text-xl font-bold">{certificate.title}</h3>
                          <p className="text-xs md:text-sm text-white/70">
                            {certificate.organization} • {certificate.year}
                          </p>
                          <p className="mt-2 text-xs md:text-sm">{certificate.description}</p>
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
                    className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white/30 hover:bg-white/70 transition-colors carousel-dot"
                    data-index={index}
                    data-carousel="certificates-carousel"
                    aria-label={`Go to slide ${index + 1}`}
                  ></button>
                ))}
              </div>

              <button
                className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-1 md:p-2 backdrop-blur-sm carousel-prev"
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
                className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-1 md:p-2 backdrop-blur-sm carousel-next"
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-center animate-slideUp opacity-100">
              <span className="border-b-4 border-purple-400 pb-2">Achievements</span>
            </h2>
            <div className="relative">
              <div className="carousel-container overflow-hidden">
                <div className="carousel-track flex transition-transform duration-500" id="achievements-carousel">
                  {achievementsData.map((achievement, index) => (
                    <div
                      key={index}
                      className="carousel-item w-full flex-shrink-0 px-4 animate-fadeIn opacity-100"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden transform transition-all duration-500 hover:scale-[1.01] h-full">
                        <CardContent className="p-4 md:p-6 lg:p-8">
                          <div className="flex flex-col gap-4 md:gap-6">
                            <div className="relative h-48 md:h-64 w-full rounded-lg overflow-hidden">
                              <Image
                                src={achievement.image || "/placeholder.svg"}
                                alt={achievement.title}
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-110"
                              />
                            </div>
                            <div className="w-full">
                              <h3 className="text-xl md:text-2xl font-bold">{achievement.title}</h3>
                              <p className="text-sm md:text-base text-white/70">Year: {achievement.year}</p>
                              <p className="mt-2 text-sm md:text-base">{achievement.description}</p>
                            </div>
                          </div>
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
                    className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white/30 hover:bg-white/70 transition-colors carousel-dot"
                    data-index={index}
                    data-carousel="achievements-carousel"
                    aria-label={`Go to slide ${index + 1}`}
                  ></button>
                ))}
              </div>

              <button
                className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-1 md:p-2 backdrop-blur-sm carousel-prev"
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
                className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-1 md:p-2 backdrop-blur-sm carousel-next"
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-center animate-slideUp opacity-100">
              <span className="border-b-4 border-purple-400 pb-2">Extracurricular Activities</span>
            </h2>
            <div className="relative">
              <div className="carousel-container overflow-hidden">
                <div className="carousel-track flex transition-transform duration-500" id="extracurricular-carousel">
                  {extracurricularData.map((activity, index) => (
                    <div
                      key={index}
                      className="carousel-item w-full md:w-1/3 lg:w-1/3 flex-shrink-0 px-4 animate-fadeIn opacity-100"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden transform transition-all duration-500 hover:scale-[1.05] h-full">
                        <div className="relative h-40 md:h-60 w-full overflow-hidden group">
                          <Image
                            src={activity.image || "/placeholder.svg"}
                            alt={activity.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <p className="p-4 text-xs md:text-sm">Click to view details</p>
                          </div>
                        </div>
                        <CardContent className="p-3 md:p-4">
                          <h3 className="text-base md:text-lg font-bold">{activity.title}</h3>
                          <p className="text-xs md:text-sm text-white/70">
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
                    className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white/30 hover:bg-white/70 transition-colors carousel-dot"
                    data-index={index}
                    data-carousel="extracurricular-carousel"
                    aria-label={`Go to slide ${index + 1}`}
                  ></button>
                ))}
              </div>

              <button
                className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-1 md:p-2 backdrop-blur-sm carousel-prev"
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
                className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-1 md:p-2 backdrop-blur-sm carousel-next"
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

        {/* Work Experience Section */}
        <section id="experience" className="py-24 min-h-screen flex items-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-center animate-slideUp opacity-100">
              <span className="border-b-4 border-purple-400 pb-2">Work Experience</span>
            </h2>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm transform transition-all duration-500 hover:scale-[1.01] animate-fadeIn opacity-100">
              <CardContent className="p-4 md:p-6 lg:p-8">
                <div className="space-y-12">
                  {experienceData.map((job, index) => (
                    <div
                      key={index}
                      className="relative border-l-4 border-purple-400 pl-4 md:pl-6 pb-12 animate-fadeIn opacity-100"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold">{job.title}</h3>
                      <p className="text-sm md:text-base text-white/70">
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

        {/* Contact Section */}
        <section id="contact" className="py-24 min-h-screen flex items-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-center animate-slideUp opacity-100">
              <span className="border-b-4 border-purple-400 pb-2">Feel Free to Contact Me :)</span>
            </h2>
            <div className="Grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 Grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3-cols-1 md:grid-cols-2 lg:grid-cols-3 Grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3-cols-1 gap-8 max-w-3xl mx-auto">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm transform transition-all duration-500 hover:scale-[1.01] animate-fadeIn opacity-100">
                <CardContent className="p-4 md:p-6 lg:p-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-4">Send Me a Message</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-xs md:text-sm font-medium">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        className="bg-white/10 border-white/20 focus:border-purple-400 text-sm md:text-base"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-xs md:text-sm font-medium">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="bg-white/10 border-white/20 focus:border-purple-400 text-sm md:text-base"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block mb-2 text-xs md:text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message here..."
                        className="bg-white/10 border-white/20 focus:border-purple-400 text-sm md:text-base"
                        rows={5}
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 text-sm md:text-base">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 md:py-8 text-center text-white/60 border-t border-white/10 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <p className="text-xs md:text-sm">
              © {new Date().getFullYear()} {profileData.name}'s Portfolio. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
