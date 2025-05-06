import Image from "next/image"
import { Mail, ChevronDown, Instagram, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/"
import { Card, CardContent } from "@/components/ui/"
import { Input } from "@/components/ui/"
import { Textarea } from "@/components/ui/"

// Mock data for all sections
const profileData = {
  name: "Emily Johnson",
  title: "Dance Instructor & Administrative Professional",
  description: "A showcase of my achievements, education, and professional experience!",
  image: "/placeholder.svg?height=320&width=320",
  social: {
    email: "emily.johnson@example.com",
    phone: "+1 (555) 123-4567",
    instagram: "@emily_dance",
    whatsapp: "+15551234567",
  },
}

const educationData = [
  {
    institution: "University of Arts London",
    degree: "Bachelor of Fine Arts in Dance",
    period: "2016-2020",
    gpa: "3.9/4.0",
    details: "Specialized in ballet and contemporary dance. Received Dean's List recognition for academic excellence.",
  },
  {
    institution: "Royal Academy of Dance",
    degree: "Professional Dance Teaching Certification",
    period: "2020-2021",
    gpa: "Distinction",
    details: "Completed advanced training in dance pedagogy and choreography techniques.",
  },
  {
    institution: "Westlake High School",
    degree: "High School Diploma",
    period: "2012-2016",
    gpa: "4.0/4.0",
    details: "Graduated as valedictorian with honors in performing arts.",
  },
]

const certificatesData = [
  {
    title: "Advanced Ballet Instructor Certification",
    organization: "Royal Academy of Dance",
    year: "2022",
    description: "Certification in advanced ballet teaching methodologies for all age groups and skill levels.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Business Administration Certificate",
    organization: "Harvard Business School Online",
    year: "2021",
    description: "Comprehensive training in business management, leadership, and administrative operations.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Contemporary Dance Choreography",
    organization: "National Dance Association",
    year: "2020",
    description: "Specialized certification in modern choreography techniques and performance direction.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "First Aid & CPR Certification",
    organization: "American Red Cross",
    year: "2023",
    description: "Professional certification in emergency response and safety procedures for dance studios.",
    image: "/placeholder.svg?height=300&width=500",
  },
]

const achievementsData = [
  {
    title: "National Ballet Competition Gold Medal",
    year: "2021",
    description: "Awarded first place in the professional category at the National Dance Championship.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Choreographer of the Year",
    year: "2020",
    description: "Recognized by the Regional Dance Association for outstanding choreography in 'Seasons of Change'.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Dance Studio Excellence Award",
    year: "2022",
    description: "Studio received top honors under my leadership for exceptional student development and performance.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Administrative Leadership Award",
    year: "2019",
    description: "Recognized for implementing innovative management systems that increased efficiency by 35%.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Community Arts Contribution Award",
    year: "2023",
    description: "Honored for organizing free dance workshops for underprivileged children in the community.",
    image: "/placeholder.svg?height=300&width=400",
  },
]

const extracurricularData = [
  {
    title: "Dance for Charity Annual Fundraiser",
    organization: "Community Arts Foundation",
    year: "2021-Present",
    description: "Organize and perform in annual charity events that have raised over $50,000 for arts education.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Youth Dance Mentor Program",
    organization: "City Youth Center",
    year: "2020-Present",
    description: "Volunteer weekly to mentor underprivileged youth in dance and performance skills.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Dance Therapy for Seniors",
    organization: "Golden Years Retirement Home",
    year: "2022-Present",
    description: "Lead weekly movement sessions designed to improve mobility and mental wellbeing for seniors.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Arts Administration Committee",
    organization: "Regional Arts Council",
    year: "2021-Present",
    description: "Serve as committee member to develop policies supporting local arts organizations.",
    image: "/placeholder.svg?height=200&width=300",
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
    title: "Dance Studio Director & Lead Instructor",
    company: "Harmony Dance Academy",
    period: "2021-Present",
    duties: [
      "Manage all aspects of studio operations including scheduling, staffing, and curriculum development",
      "Teach advanced ballet and contemporary dance classes to students of all ages",
      "Choreograph performances for seasonal recitals and competitive dance teams",
      "Implement business strategies that increased enrollment by 40% in two years",
      "Supervise a team of 8 dance instructors and 3 administrative staff",
    ],
  },
  {
    title: "Administrative & Management Executive",
    company: "ArtsWave Organization",
    period: "2018-2021",
    duties: [
      "Oversaw daily operations and team management for a non-profit arts organization",
      "Implemented new administrative processes that improved efficiency by 25%",
      "Managed budget planning and financial reporting for multiple departments",
      "Coordinated with community partners to develop outreach programs",
      "Led successful fundraising initiatives that increased annual donations by 30%",
      "Supervised office operations and administrative staff training",
    ],
  },
  {
    title: "Dance Instructor & Program Coordinator",
    company: "Elite Dance Center",
    period: "2016-2018",
    duties: [
      "Taught ballet, jazz, and contemporary dance classes to students ages 5-18",
      "Developed age-appropriate curriculum for different skill levels",
      "Coordinated performance schedules and competition participation",
      "Assisted with studio administration including registration and parent communications",
      "Choreographed award-winning routines for competitive dance teams",
    ],
  },
]

export default function Portfolio() {
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

      {/* Social Media Dock */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
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
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">{profileData.name}'s Portfolio</h1>
              <nav>
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
          </div>
        </header>

        {/* Combined Hero Section with Profile */}
        <section className="min-h-screen flex items-center justify-center pt-20">
          <div className="container mx-auto px-4 text-center">
            <div className="flex flex-col items-center justify-center">
              {/* Text below image */}
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  {profileData.name}'s here!
                </span>
              </h1>
              <div className="mb-8">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 animate-pulse-slow">
                  <Image
                    src={profileData.image || "/placeholder.svg"}
                    alt={`${profileData.name}'s Profile Picture`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
                </div>
              </div>

              <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-white/80 animate-fadeIn animation-delay-300">
                {profileData.description}
              </p>

              {/* Buttons below description */}
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="#education"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 border border-white/10"
                >
                  View My Education
                </a>
                <a
                  href="#experience"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                >
                  See My Experience
                </a>
              </div>
            </div>

            <a
              href="#education"
              className="flex items-center justify-center animate-bounce mt-12 text-white/70 hover:text-white transition-colors absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
              <span className="mr-2">Explore More</span>
              <ChevronDown />
            </a>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-24 min-h-screen flex items-center">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-slideUp opacity-0 md:opacity-100">
              <span className="border-b-4 border-purple-400 pb-2">Education</span>
            </h2>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm transform transition-all duration-500 hover:scale-[1.01] animate-fadeIn opacity-0 md:opacity-100">
              <CardContent className="p-6 md:p-8">
                <div className="space-y-12">
                  {educationData.map((education, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-purple-400 pl-6 py-4 transform transition-all duration-500 hover:pl-8 hover:border-purple-300"
                    >
                      <h3 className="text-2xl font-bold">{education.institution}</h3>
                      <p className="text-white/70">
                        {education.degree}, {education.period}
                      </p>
                      <p className="mt-2">GPA: {education.gpa}</p>
                      <p className="mt-1">{education.details}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="py-24 min-h-screen flex items-center">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-slideUp opacity-0 md:opacity-100">
              <span className="border-b-4 border-purple-400 pb-2">Certificates</span>
            </h2>
            <div className="relative">
              <div className="carousel-container overflow-hidden">
                <div className="carousel-track flex transition-transform duration-500" id="certificates-carousel">
                  {certificatesData.map((certificate, index) => (
                    <div
                      key={index}
                      className="carousel-item w-full md:w-1/2 lg:w-1/2 flex-shrink-0 px-4 animate-fadeIn opacity-0 md:opacity-100"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden transform transition-all duration-500 hover:scale-[1.03] h-full">
                        <div className="relative h-48 w-full overflow-hidden">
                          <Image
                            src={certificate.image || "/placeholder.svg"}
                            alt={certificate.title}
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-110"
                          />
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold">{certificate.title}</h3>
                          <p className="text-white/70 text-sm">
                            {certificate.organization} • {certificate.year}
                          </p>
                          <p className="mt-2 text-sm">{certificate.description}</p>
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
                    className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/70 transition-colors carousel-dot"
                    data-index={index}
                    data-carousel="certificates-carousel"
                    aria-label={`Go to slide ${index + 1}`}
                  ></button>
                ))}
              </div>

              <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 backdrop-blur-sm carousel-prev"
                data-carousel="certificates-carousel"
                aria-label="Previous slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 backdrop-blur-sm carousel-next"
                data-carousel="certificates-carousel"
                aria-label="Next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-24 min-h-screen flex items-center">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-slideUp opacity-0 md:opacity-100">
              <span className="border-b-4 border-purple-400 pb-2">Achievements</span>
            </h2>
            <div className="relative">
              <div className="carousel-container overflow-hidden">
                <div className="carousel-track flex transition-transform duration-500" id="achievements-carousel">
                  {achievementsData.map((achievement, index) => (
                    <div
                      key={index}
                      className="carousel-item w-full flex-shrink-0 px-4 animate-fadeIn opacity-0 md:opacity-100"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden transform transition-all duration-500 hover:scale-[1.01] h-full">
                        <CardContent className="p-6 md:p-8">
                          <div className="flex flex-col gap-6">
                            <div className="relative h-64 w-full rounded-lg overflow-hidden">
                              <Image
                                src={achievement.image || "/placeholder.svg"}
                                alt={achievement.title}
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-110"
                              />
                            </div>
                            <div className="w-full">
                              <h3 className="text-2xl font-bold">{achievement.title}</h3>
                              <p className="text-white/70">Year: {achievement.year}</p>
                              <p className="mt-2">{achievement.description}</p>
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
                    className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/70 transition-colors carousel-dot"
                    data-index={index}
                    data-carousel="achievements-carousel"
                    aria-label={`Go to slide ${index + 1}`}
                  ></button>
                ))}
              </div>

              <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 backdrop-blur-sm carousel-prev"
                data-carousel="achievements-carousel"
                aria-label="Previous slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 backdrop-blur-sm carousel-next"
                data-carousel="achievements-carousel"
                aria-label="Next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Extracurricular Section */}
        <section id="extracurricular" className="py-24 min-h-screen flex items-center">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-slideUp opacity-0 md:opacity-100">
              <span className="border-b-4 border-purple-400 pb-2">Extracurricular Activities</span>
            </h2>
            <div className="relative">
              <div className="carousel-container overflow-hidden">
                <div className="carousel-track flex transition-transform duration-500" id="extracurricular-carousel">
                  {extracurricularData.map((activity, index) => (
                    <div
                      key={index}
                      className="carousel-item w-full md:w-1/3 lg:w-1/3 flex-shrink-0 px-4 animate-fadeIn opacity-0 md:opacity-100"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden transform transition-all duration-500 hover:scale-[1.05] h-full">
                        <div className="relative h-60 w-full overflow-hidden group">
                          <Image
                            src={activity.image || "/placeholder.svg"}
                            alt={activity.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <p className="p-4 text-sm">Click to view details</p>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="text-lg font-bold">{activity.title}</h3>
                          <p className="text-white/70 text-sm">
                            {activity.organization} • {activity.year}
                          </p>
                          <p className="mt-2 text-sm">{activity.description}</p>
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
                    className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/70 transition-colors carousel-dot"
                    data-index={index}
                    data-carousel="extracurricular-carousel"
                    aria-label={`Go to slide ${index + 1}`}
                  ></button>
                ))}
              </div>

              <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 backdrop-blur-sm carousel-prev"
                data-carousel="extracurricular-carousel"
                aria-label="Previous slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 backdrop-blur-sm carousel-next"
                data-carousel="extracurricular-carousel"
                aria-label="Next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="experience" className="py-24 min-h-screen flex items-center">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-slideUp opacity-0 md:opacity-100">
              <span className="border-b-4 border-purple-400 pb-2">Work Experience</span>
            </h2>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm transform transition-all duration-500 hover:scale-[1.01] animate-fadeIn opacity-0 md:opacity-100">
              <CardContent className="p-6 md:p-8">
                <div className="space-y-12">
                  {experienceData.map((job, index, array) => (
                    <div
                      key={index}
                      className="relative border-l-4 border-purple-400 pl-6 pb-12 animate-fadeIn opacity-100"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      {/* Timeline circle that's properly connected to the line */}
                      <div className="absolute -left-[10px] top-0 h-6 w-6 rounded-full bg-purple-400 border-4 border-purple-900 z-10 animate-pulse"></div>

                      {/* For all but the last item, add a connecting line to the next circle */}
                      {index < array.length - 1 && (
                        <div className="absolute -left-[2px] top-6 bottom-0 w-1 bg-purple-400"></div>
                      )}

                      <h3 className="text-2xl font-bold">{job.title}</h3>
                      <p className="text-white/70">
                        {job.company} • {job.period}
                      </p>
                      <ul className="mt-4 list-disc list-inside space-y-2">
                        {job.duties.map((duty, i) => (
                          <li key={i} className="transform transition-all duration-300 hover:translate-x-2">
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
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-slideUp opacity-0 md:opacity-100">
              <span className="border-b-4 border-purple-400 pb-2">Feel Free to Contact Me :)</span>
            </h2>
            <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm transform transition-all duration-500 hover:scale-[1.01] animate-fadeIn opacity-0 animation-delay-300 md:opacity-100">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-4">Send Me a Message</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        className="bg-white/10 border-white/20 focus:border-purple-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="bg-white/10 border-white/20 focus:border-purple-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block mb-2 text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message here..."
                        className="bg-white/10 border-white/20 focus:border-purple-400"
                        rows={5}
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-white/60 border-t border-white/10 backdrop-blur-sm">
          <div className="container mx-auto">
            <p>
              © {new Date().getFullYear()} {profileData.name}'s Portfolio. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
