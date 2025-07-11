"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion"
import {
  ChevronDown,
  Download,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  X,
  Rocket,
  Code,
  Brain,
  Menu,
  Home,
  User,
  GraduationCap,
  Briefcase,
  FolderOpen,
  Trophy,
  BadgeIcon as Certificate,
  MessageCircle,
  Star,
  Zap,
  Database,
  Globe,
  Cpu,
  Shield,
  Users,
  Target,
  Clock,
  Lightbulb,
  Coffee,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"

// Updated personal data from CV
const personalData = {
  name: "Yash Waghmare",
  image: "/yash-profile.jpeg",
  roles: [
    "B.Tech CSE Student",
    "Python Developer",
    "AI Enthusiast",
    "Full Stack Developer",
    "Research Scholar",
    "CORE Committee President",
  ],
  about:
    "Third-year B.Tech CSE student with leadership experience as CORE Committee President and UG research in network security. Completed AI and data science internships, developing Python-based solutions with pandas and scikit-learn. Seeking an MNC opportunity to apply strong algorithms background, vulnerability assessment skills, and collaborative problem-solving to drive innovation.",

  education: [
    {
      degree: "B.Tech in Computer Science",
      institution: "N B Navale Sinhgad College of Engineering",
      grade: "GPA: 8.10",
      year: "Present",
      location: "Solapur",
      description:
        "Currently pursuing Bachelor's in Computer Science with focus on AI, Machine Learning, and Network Security.",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "S.E.S Junior College of Science",
      grade: "54%",
      year: "2022",
      location: "Solapur",
      description: "Completed higher secondary education with science stream.",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Padmashree Sumatibai English Medium Technical School",
      grade: "75.40%",
      year: "2020",
      location: "Solapur",
      description: "Completed secondary education with strong academic foundation.",
    },
  ],

  projects: [
    {
      name: "Agrocraft - Ecommerce Website for Farmers",
      description:
        "Developed a full-stack web application that allows farmers to register, list agricultural products, and sell directly to buyers. Implemented secure user authentication, product management, and order tracking modules to streamline the supply chain between farmers and consumers.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Authentication", "Payment Gateway"],
      github: "https://github.com/Yash-1407/agrocraft",
      live: "https://agrocraft-demo.vercel.app",
    },
    {
      name: "Athena - AI ChatBot",
      description:
        "Developed an NLP based Chatbot using python and API token of ChatGPT. Enables experimentation with cutting-edge technologies and provides intelligent conversational AI capabilities.",
      technologies: ["Python", "OpenAI API", "NLP", "Flask", "Machine Learning"],
      github: "https://github.com/Yash-1407/athena-ai",
      live: "https://athena-ai-demo.vercel.app",
    },
    {
      name: "Quickbites - QR-based Restaurant",
      description:
        "Developed a digital restaurant solution using QR codes that allows customers to view the menu, place orders, and make payments through their smartphones. Minimizes wait times and human errors in order-taking by automating the ordering process.",
      technologies: ["React.js", "QR Code API", "Firebase", "Payment Integration", "PWA"],
      github: "https://github.com/Yash-1407/quickbites",
      live: "https://quickbites-demo.vercel.app",
    },
  ],

  experience: [
    {
      position: "HR Intern",
      company: "Helium Tech",
      duration: "Feb 2025 - March 2025",
      location: "Solapur",
      description:
        "Gained hands-on experience in social media marketing and content creation. Received mentorship and feedback from marketing professionals.",
    },
    {
      position: "AI Intern",
      company: "Edunet Foundation",
      duration: "Dec 2024 – Jan 2025",
      location: "Solapur",
      description:
        "4-week virtual internship focused on integrating AI with modern analytics. Collaborated with Microsoft in this internship which offers training in AI and Azure cloud services.",
    },
    {
      position: "UG Scholar",
      company: "CRTD (Center for Research and Technology Development)",
      duration: "June 2023 – June 2024",
      location: "Solapur",
      description:
        "Participated in ongoing research initiatives, providing hands-on experience and exposure to advanced technologies. Accessed educational events that enhance knowledge and skills in various engineering domains.",
    },
  ],

  skills: {
    technical: [
      { name: "Python", icon: Code, level: 90 },
      { name: "C Programming", icon: Cpu, level: 85 },
      { name: "MySQL", icon: Database, level: 80 },
      { name: "Java", icon: Coffee, level: 75 },
      { name: "AWS Cloud", icon: Globe, level: 70 },
      { name: "Firebase", icon: Zap, level: 85 },
      { name: "React.js", icon: Code, level: 80 },
      { name: "Node.js", icon: Globe, level: 75 },
      { name: "Machine Learning", icon: Brain, level: 85 },
      { name: "Network Security", icon: Shield, level: 80 },
    ],
    soft: [
      { name: "Leadership", icon: Users, level: 95 },
      { name: "Problem Solving", icon: Lightbulb, level: 90 },
      { name: "Team Collaboration", icon: Users, level: 90 },
      { name: "Time Management", icon: Clock, level: 85 },
      { name: "Agile Methodologies", icon: Target, level: 80 },
      { name: "Communication", icon: MessageCircle, level: 85 },
    ],
  },

  achievements: [
    "🏆 Winner of Umang 2K23",
    "🧠 Winner of Quiz 2023",
    "🎯 Coordinated the 1st International Conference on Silk Fibroin",
    "⚽ Runner Up of Football in Umang 2k23",
    "👨‍💼 Served as Vice-Captain of the department football team",
    "💻 Participated in various Hackathons",
    "🏅 Project of Honor in MIT Hackathon",
    "📅 Coordinated 10+ successful events",
    "🥇 1st Prize in the quiz contest at the STP workshop (2 times)",
    "💼 Worked in various internship programs",
    "🌐 Developed various sites and applications through versatile languages",
    "🚀 Developed real time working and required 10+ Projects",
  ],

  certifications: [
    {
      name: "AI & Machine Learning Internship",
      issuer: "IBM & Edunet Foundation",
      description:
        "4-week virtual internship focused on integrating AI with modern analytics. Collaborated with Microsoft offering training in AI and Azure cloud services.",
      duration: "4 weeks",
      year: "2024",
    },
    {
      name: "Full Stack Development Internship",
      issuer: "Devtown",
      description:
        "Intensive training in React.js, full-stack development, and app cloning projects with hands-on experience.",
      duration: "2 months",
      year: "2024",
    },
    {
      name: "Cybersecurity Internship",
      issuer: "IBM",
      description: "Security fundamentals, threat analysis, and cybersecurity best practices for modern applications.",
      duration: "6 weeks",
      year: "2024",
    },
    {
      name: "Google IT Support Certification",
      issuer: "Google",
      description:
        "Comprehensive IT support skills including troubleshooting, customer service, and technical problem-solving.",
      duration: "6 months",
      year: "2023",
    },
  ],

  publications: [
    {
      title: "Modern Ethical Considerations in AI",
      authors: "Yash Waghmare, Vaishnavi Patil, Pooja Rathod",
      status: "Present",
      description:
        "Research paper focusing on ethical implications and considerations in modern AI development and deployment.",
    },
  ],

  contact: {
    email: "yashuwaghmare19@gmail.com",
    phone: "+91 9623033519",
    location: "+41/140 New Budhwar Peth, Solapur",
    github: "https://github.com/Yash-1407",
    linkedin: "https://www.linkedin.com/in/yash-waghmare-826357270/",
  },
}

// Navigation items
const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Education", href: "#education", icon: GraduationCap },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Projects", href: "#projects", icon: FolderOpen },
  { name: "Skills", href: "#skills", icon: Zap },
  { name: "Achievements", href: "#achievements", icon: Trophy },
  { name: "Certifications", href: "#certifications", icon: Certificate },
  { name: "Contact", href: "#contact", icon: MessageCircle },
]

// Falling stars component
const FallingStars = () => {
  const [stars, setStars] = useState<
    Array<{
      id: number
      x: number
      delay: number
      duration: number
      size: number
    }>
  >([])

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2,
        size: Math.random() * 2 + 1,
      }))
      setStars(newStars)
    }

    generateStars()
    const interval = setInterval(generateStars, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full opacity-80"
          style={{
            left: `${star.x}%`,
            width: star.size,
            height: star.size,
            top: -10,
          }}
          initial={{ y: -10, opacity: 0 }}
          animate={{
            y: window.innerHeight + 10,
            opacity: [0, 1, 1, 0],
            x: [0, -50, -100],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 8,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

// Space background with twinkling stars
const SpaceBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const stars: Array<{
      x: number
      y: number
      size: number
      opacity: number
      twinkleSpeed: number
    }> = []

    // Create stars
    for (let i = 0; i < 300; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.02 + 0.01,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      stars.forEach((star) => {
        star.opacity += star.twinkleSpeed
        if (star.opacity > 1 || star.opacity < 0.1) {
          star.twinkleSpeed *= -1
        }

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()

        // Add glow for larger stars
        if (star.size > 1.5) {
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(135, 206, 250, ${star.opacity * 0.3})`
          ctx.fill()
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
}

// Navigation Header
const NavigationHeader = ({ activeSection }: { activeSection: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            YW
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === item.href.slice(1)
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </motion.button>
              )
            })}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <Menu className="h-6 w-6" />
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="md:hidden py-4 border-t border-white/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        activeSection === item.href.slice(1)
                          ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                          : "text-gray-300 hover:text-white hover:bg-white/10"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </motion.button>
                  )
                })}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default function Portfolio() {
  const [currentRole, setCurrentRole] = useState(0)
  const [showResume, setShowResume] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { toast } = useToast()
  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  // Section refs for intersection observer
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    education: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    achievements: useRef(null),
    certifications: useRef(null),
    contact: useRef(null),
  }

  // Intersection observer for active section
  useEffect(() => {
    const observers = Object.entries(sectionRefs).map(([key, ref]) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(key)
          }
        },
        { threshold: 0.3 },
      )
      if (ref.current) observer.observe(ref.current)
      return observer
    })

    return () => observers.forEach((observer) => observer.disconnect())
  }, [])

  // Role rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % personalData.roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const to = "yashuwaghmare19@gmail.com"; // your email
    const subject = encodeURIComponent("Contact Form Submission from " + name);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");
  };

  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "/Yash%20Waghmare%20Resume.pdf"
    link.download = "Yash Waghmare Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-x-hidden">
      {/* Space Background Effects */}
      <SpaceBackground />
      <FallingStars />

      {/* Navigation Header */}
      <NavigationHeader activeSection={activeSection} />

      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 z-50 origin-left"
        style={{ scaleX: smoothProgress }}
      />

      {/* Hero Section */}
      <section
        id="home"
        ref={sectionRefs.home}
        className="min-h-screen flex items-center justify-center relative pt-16"
      >
        <div className="container mx-auto px-4 z-20 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Profile Image */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-purple-600 shadow-2xl relative">
                  <Image
                    src={personalData.image || "/placeholder.svg"}
                    alt={personalData.name}
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Name with enhanced animations */}
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent relative"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              {personalData.name}
              {/* Glowing effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl -z-10"
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
            </motion.h1>

            {/* Animated Role */}
            <motion.div className="text-xl md:text-3xl mb-12 h-16 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRole}
                  className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-medium"
                  initial={{ opacity: 0, y: 20, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -20, rotateX: 90 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {personalData.roles[currentRole]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  onClick={downloadResume}
                  className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-medium shadow-2xl border-0 relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  <Download className="mr-3 h-5 w-5" />
                  Download Resume
                  <motion.div
                    className="absolute -top-1 -right-1"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Star className="h-4 w-4 text-yellow-300" />
                  </motion.div>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  variant="outline"
                  className="border-2 border-white/30 bg-transparent text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  <Mail className="mr-3 h-5 w-5" />
                  Contact Me
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <motion.div
            className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-2xl"
            whileHover={{ scale: 1.2 }}
          >
            <ChevronDown className="h-6 w-6 text-white" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        ref={sectionRefs.about}
        className="py-20 bg-gradient-to-br from-slate-800/50 via-purple-800/30 to-indigo-800/50 backdrop-blur-sm relative"
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              whileInView={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
              style={{ backgroundSize: "200% 200%" }}
            >
              About Me
            </motion.h2>
            <motion.p
              className="text-lg max-w-4xl mx-auto leading-relaxed text-slate-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {personalData.about}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Education Timeline Section */}
      <section id="education" ref={sectionRefs.education} className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Education Timeline
          </motion.h2>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 rounded-full"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
            />

            {personalData.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -100 : 100,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.3,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className={`relative mb-16 last:mb-0 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}
              >
                <div className={`flex items-center ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}>
                  <div className="flex-1">
                    <motion.div whileHover={{ scale: 1.02, y: -5 }} className="group">
                      <Card className="bg-gradient-to-br from-slate-800/50 via-purple-800/30 to-indigo-800/50 backdrop-blur-sm border border-white/10 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300">
                        <CardHeader>
                          <CardTitle className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-xl font-semibold">
                            {edu.degree}
                          </CardTitle>
                          <CardDescription className="bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 bg-clip-text text-transparent font-medium">
                            {edu.institution}
                          </CardDescription>
                          <CardDescription className="text-slate-400 text-sm">{edu.location}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-slate-300 mb-3 leading-relaxed">{edu.description}</p>
                          <div className="flex justify-between items-center">
                            <motion.p
                              className="text-lg bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-bold"
                              whileHover={{ scale: 1.05 }}
                            >
                              {edu.grade}
                            </motion.p>
                            <motion.p
                              className="text-sm bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-medium"
                              whileHover={{ scale: 1.05 }}
                            >
                              {edu.year}
                            </motion.p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>

                  {/* Timeline node */}
                  <motion.div
                    className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full relative z-10 shadow-lg"
                    whileHover={{ scale: 1.5 }}
                    animate={{
                      boxShadow: ["0 0 0 0 rgba(59, 130, 246, 0.4)", "0 0 0 15px rgba(59, 130, 246, 0)"],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full bg-white opacity-30"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                  </motion.div>

                  <div className="flex-1"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        ref={sectionRefs.experience}
        className="py-20 bg-gradient-to-br from-slate-800/50 via-purple-800/30 to-indigo-800/50 backdrop-blur-sm relative"
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card className="bg-gradient-to-br from-slate-800/50 via-purple-800/30 to-indigo-800/50 backdrop-blur-sm border border-white/10 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 h-full">
                  <CardHeader>
                    <CardTitle className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-xl font-semibold group-hover:scale-105 transition-transform duration-300">
                      {exp.position}
                    </CardTitle>
                    <CardDescription className="bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 bg-clip-text text-transparent font-medium">
                      {exp.company}
                    </CardDescription>
                    <CardDescription className="text-slate-400 text-sm">{exp.location}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4 leading-relaxed">{exp.description}</p>
                    <motion.p
                      className="text-sm bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-medium"
                      whileHover={{ scale: 1.02 }}
                    >
                      {exp.duration}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={sectionRefs.projects} className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalData.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group"
              >
                <Card className="bg-gradient-to-br from-slate-800/50 via-purple-800/30 to-indigo-800/50 backdrop-blur-sm border border-white/10 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 h-full">
                  <CardHeader>
                    <CardTitle className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-xl font-semibold group-hover:scale-105 transition-transform duration-300">
                      {project.name}
                    </CardTitle>
                    <CardDescription className="text-slate-300 leading-relaxed">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.1 }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Badge className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white px-3 py-1 text-xs font-medium shadow-lg">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          onClick={() => window.open(project.github, "_blank")}
                          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 flex-1"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          onClick={() => window.open(project.live, "_blank")}
                          variant="outline"
                          className="border-white/30 text-white hover:bg-white/10 flex-1"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        ref={sectionRefs.skills}
        className="py-20 bg-gradient-to-br from-slate-800/50 via-purple-800/30 to-indigo-800/50 backdrop-blur-sm relative"
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Skills
          </motion.h2>

          <div className="space-y-16">
            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <Code className="mr-3 h-8 w-8 text-blue-400" />
                Technical Skills
              </motion.h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {personalData.skills.technical.map((skill, index) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.1,
                        y: -10,
                        rotateY: 15,
                      }}
                      className="group"
                    >
                      <Card className="bg-gradient-to-br from-slate-800/50 via-purple-800/30 to-indigo-800/50 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-blue-500/25 transition-all duration-300 p-6 text-center">
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <Icon className="h-12 w-12 mx-auto mb-4 text-blue-400 group-hover:text-purple-400 transition-colors duration-300" />
                        </motion.div>
                        <h4 className="font-semibold text-white mb-2">{skill.name}</h4>
                        <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                          <motion.div
                            className="bg-gradient-to-r from-blue-400 to-purple-600 h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                        <span className="text-sm text-slate-400">{skill.level}%</span>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 bg-clip-text text-transparent flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <Brain className="mr-3 h-8 w-8 text-purple-400" />
                Soft Skills
              </motion.h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {personalData.skills.soft.map((skill, index) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.5, rotate: 180 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.1,
                        y: -10,
                        rotateY: -15,
                      }}
                      className="group"
                    >
                      <Card className="bg-gradient-to-br from-slate-800/50 via-purple-800/30 to-indigo-800/50 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-purple-500/25 transition-all duration-300 p-6 text-center">
                        <motion.div
                          animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0],
                          }}
                          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <Icon className="h-12 w-12 mx-auto mb-4 text-purple-400 group-hover:text-pink-400 transition-colors duration-300" />
                        </motion.div>
                        <h4 className="font-semibold text-white mb-2">{skill.name}</h4>
                        <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                          <motion.div
                            className="bg-gradient-to-r from-purple-400 to-pink-600 h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                        <span className="text-sm text-slate-400">{skill.level}%</span>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" ref={sectionRefs.achievements} className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Achievements
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalData.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.03, rotateY: 5 }}
                className="group"
              >
                <Card className="bg-gradient-to-br from-slate-800/50 via-purple-800/30 to-indigo-800/50 backdrop-blur-sm border border-white/10 shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className="mb-4"
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    >
                      <Trophy className="h-12 w-12 mx-auto text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" />
                    </motion.div>
                    <h3 className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-semibold leading-relaxed">
                      {achievement}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section
        id="certifications"
        ref={sectionRefs.certifications}
        className="py-20 bg-gradient-to-br from-slate-800/50 via-purple-800/30 to-indigo-800/50 backdrop-blur-sm relative"
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Certifications
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {personalData.certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, rotateY: 45, scale: 0.8 }}
                whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                whileHover={{
                  rotateY: 10,
                  rotateX: 10,
                  scale: 1.02,
                  y: -5,
                }}
                className="group"
              >
                <Card className="bg-gradient-to-br from-slate-800/50 via-purple-800/30 to-indigo-800/50 backdrop-blur-sm border border-white/10 shadow-2xl hover:shadow-green-500/25 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <Certificate className="h-8 w-8 text-green-400" />
                      </motion.div>
                      <div>
                        <CardTitle className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-xl font-semibold">
                          {cert.name}
                        </CardTitle>
                        <CardDescription className="bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 bg-clip-text text-transparent font-medium">
                          {cert.issuer}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4 leading-relaxed">{cert.description}</p>
                    <div className="flex justify-between items-center">
                      <motion.p
                        className="text-sm bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-medium"
                        whileHover={{ scale: 1.05 }}
                      >
                        Duration: {cert.duration}
                      </motion.p>
                      <motion.p
                        className="text-sm bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent font-medium"
                        whileHover={{ scale: 1.05 }}
                      >
                        {cert.year}
                      </motion.p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={sectionRefs.contact} className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-2xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                Contact Information
              </motion.h3>

              <div className="space-y-6">
                <motion.div
                  className="flex items-center group"
                  whileHover={{ x: 10, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mr-4 shadow-lg"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <Mail className="h-5 w-5 text-white" />
                  </motion.div>
                  <a
                    href={`mailto:${personalData.contact.email}`}
                    className="text-lg text-white group-hover:text-slate-300 transition-colors hover:underline"
                  >
                    {personalData.contact.email}
                  </a>
                </motion.div>

                <motion.div
                  className="flex items-center group"
                  whileHover={{ x: 10, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 mr-4 shadow-lg"
                    whileHover={{ rotate: -10, scale: 1.1 }}
                  >
                    <Phone className="h-5 w-5 text-white" />
                  </motion.div>
                  <a
                    href={`tel:${personalData.contact.phone}`}
                    className="text-lg text-white group-hover:text-slate-300 transition-colors hover:underline"
                  >
                    {personalData.contact.phone}
                  </a>
                </motion.div>

                <motion.div
                  className="flex items-center group"
                  whileHover={{ x: 10, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="p-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 mr-4 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    <MapPin className="h-5 w-5 text-white" />
                  </motion.div>
                  <span className="text-lg text-white group-hover:text-slate-300 transition-colors">
                    {personalData.contact.location}
                  </span>
                </motion.div>
              </div>

              {/* Social Media Links */}
              <div className="flex space-x-4 mt-12">
                <motion.div whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    onClick={() => window.open(personalData.contact.github, "_blank")}
                    className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 border-0 shadow-2xl"
                  >
                    <Github className="h-6 w-6 text-white" />
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    onClick={() => window.open(personalData.contact.linkedin, "_blank")}
                    className="p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 border-0 shadow-2xl"
                  >
                    <Linkedin className="h-6 w-6 text-white" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Input
                    name="name"
                    placeholder="Your Name"
                    required
                    className="bg-gradient-to-r from-slate-800/50 via-purple-800/30 to-indigo-800/50 backdrop-blur-sm border border-white/20 text-white placeholder:text-slate-400 text-lg p-4 rounded-xl shadow-lg focus:border-blue-400 transition-all duration-300"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    className="bg-gradient-to-r from-slate-800/50 via-purple-800/30 to-indigo-800/50 backdrop-blur-sm border border-white/20 text-white placeholder:text-slate-400 text-lg p-4 rounded-xl shadow-lg focus:border-blue-400 transition-all duration-300"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    rows={5}
                    className="bg-gradient-to-r from-slate-800/50 via-purple-800/30 to-indigo-800/50 backdrop-blur-sm border border-white/20 text-white placeholder:text-slate-400 text-lg p-4 rounded-xl shadow-lg focus:border-blue-400 transition-all duration-300 resize-none"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white text-lg font-medium py-4 rounded-xl shadow-2xl border-0 transition-all duration-300 relative overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                    <AnimatePresence mode="wait">
                      {isSubmitting ? (
                        <motion.span
                          key="submitting"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center justify-center relative z-10"
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="mr-2"
                          >
                            <Rocket className="h-5 w-5" />
                          </motion.div>
                          Sending Message...
                        </motion.span>
                      ) : (
                        <motion.span
                          key="send"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="relative z-10"
                        >
                          Send Message 🚀
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resume Modal */}
      <AnimatePresence>
        {showResume && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
            onClick={() => setShowResume(false)}
          >
            <motion.div
              initial={{ scale: 0.5, rotateY: -90 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.5, rotateY: 90 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white rounded-2xl max-w-5xl w-full h-[85vh] relative shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div className="absolute top-4 right-4 z-20" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  onClick={() => setShowResume(false)}
                  className="bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow-lg"
                >
                  <X className="h-5 w-5" />
                </Button>
              </motion.div>
              <iframe src="/api/resume" className="w-full h-full rounded-2xl" title="Resume Preview" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Resume Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-40"
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          y: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          rotate: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
      >
        <Button
          onClick={() => setShowResume(true)}
          className="rounded-full p-4 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 border-0 shadow-2xl relative overflow-hidden group"
        >
          <motion.div
            className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="relative z-10"
          >
            <Download className="h-6 w-6 text-white" />
          </motion.div>
        </Button>
      </motion.div>
    </div>
  )
}
