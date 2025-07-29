"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  MapPin,
  Phone,
  Mail,
  Calendar,
  Award,
  Code,
  Database,
  Globe,
  Server,
  Smartphone,
  Download,
  Github,
  Linkedin,
  Twitter,
  ChevronRight,
  Star,
  Instagram,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function BugingoPortfolio() {
  const [activeSection, setActiveSection] = useState("about")
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    setIsVisible(true)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  const projects = [
    {
      title: "Digital Tools to Manage Education in Rwanda",
      description:
        "Comprehensive educational management platform designed to streamline academic processes across Rwanda's educational institutions. Features student enrollment, grade management, and administrative tools.",
      technologies: ["React", "Node.js", "PostgreSQL", "Express", "JWT"],
      features: ["Student Management", "Grade Tracking", "Administrative Tools", "Reporting System"],
      status: "Production",
      impact: "Supporting education management nationwide",
    },
    {
      title: "Discoveries - Genocide History Preservation",
      description:
        "Digital preservation platform documenting the 1994 Genocide against the Tutsi in Rwanda. An interactive tool to keep the history journey alive through multimedia archives and educational resources.",
      technologies: ["Next.js", "MongoDB", "AWS S3", "TypeScript", "Tailwind"],
      features: ["Digital Archives", "Multimedia Content", "Educational Resources", "Interactive Timeline"],
      status: "Live",
      impact: "Preserving history for future generations",
    },
    {
      title: "Grab and Go - French Press Ordering App",
      description:
        "Currently working on the backend for a French press ordering app based in Kigali. Responsible for designing and managing server-side components to ensure smooth and scalable performance.",
      technologies: ["NestJS", "PostgreSQL", "Socket.io", "Stripe", "JWT"],
      features: ["Order Management", "Real-time Tracking", "Payment Integration", "User Authentication"],
      status: "In Development",
      impact: "Serving coffee enthusiasts in Kigali",
    },
    {
      title: "Genzura - Government Systems",
      description:
        "Worked with Genzura, a governmental company based in Kigali. Developed and maintained backend systems for various internal applications to streamline government operations.",
      technologies: ["Spring Boot", "MySQL", "Docker", "Jenkins", "REST APIs"],
      features: ["Internal Applications", "Data Management", "Process Automation", "System Integration"],
      status: "Production",
      impact: "Streamlining government operations",
    },
    {
      title: "A-ment - School Management System",
      description:
        "Contributed to a school group project in Nyabihu as the backend developer. Focused on building a solid backend architecture for seamless integration with frontend and mobile interfaces.",
      technologies: ["Node.js", "MongoDB", "Express", "JWT", "Socket.io"],
      features: ["Student Management", "Grade Tracking", "Communication System", "Mobile Integration"],
      status: "Completed",
      impact: "Supporting educational management in Nyabihu",
    },
  ]

  const experiences = [
    {
      title: "Software Engineer",
      company: "Development Bank of Rwanda (BRD)",
      location: "Kigali",
      period: "Jul 2024 – Present",
      description:
        "Leading digital transformation initiatives for Rwanda's premier development bank. Architected scalable financial platforms and collaborated with cross-functional teams to streamline operations.",
      technologies: ["Angular", "Spring Boot", "PostgreSQL", "Docker", "AWS"],
      achievements: ["Improved system efficiency by 40%", "Led team of 4 developers", "Reduced processing time by 60%"],
    },
    {
      title: "Backend Developer",
      company: "Global Kwik Koders",
      location: "Remote",
      period: "Jan 2024 – Jun 2024",
      description:
        "Engineered robust backend solutions for international startups. Implemented CI/CD pipelines and maintained 99.9% uptime across multiple production environments.",
      technologies: ["Node.js", "MongoDB", "Redis", "Kubernetes", "GCP"],
      achievements: ["Deployed 15+ microservices", "Achieved 99.9% uptime", "Reduced API response time by 50%"],
    },
    {
      title: "Backend Developer",
      company: "Grab and Go (French Press Ordering App)",
      location: "Kigali",
      period: "Aug 2023 – Dec 2023",
      description:
        "Designed and developed a complete ordering system for coffee enthusiasts. Built real-time order tracking and integrated multiple payment gateways.",
      technologies: ["NestJS", "PostgreSQL", "Socket.io", "Stripe", "JWT"],
      achievements: ["Processed 1000+ orders", "Integrated 3 payment methods", "Built real-time notifications"],
    },
  ]

  const skillCategories = [
    {
      category: "Frontend Development",
      icon: Globe,
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "Angular", level: 90 },
        { name: "TypeScript", level: 92 },
        { name: "Tailwind CSS", level: 88 },
      ],
    },
    {
      category: "Backend Development",
      icon: Server,
      skills: [
        { name: "Node.js/NestJS", level: 95 },
        { name: "Spring Boot", level: 85 },
        { name: "Laravel/PHP", level: 80 },
        { name: "Python/Django", level: 75 },
      ],
    },
    {
      category: "Database & Cloud",
      icon: Database,
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 88 },
        { name: "AWS/GCP", level: 82 },
        { name: "Docker/K8s", level: 78 },
      ],
    },
    {
      category: "Mobile Development",
      icon: Smartphone,
      skills: [
        { name: "React Native", level: 85 },
        { name: "Flutter", level: 70 },
        { name: "PWA", level: 88 },
        { name: "Mobile UI/UX", level: 80 },
      ],
    },
  ]

  const education = [
    {
      institution: "Rwanda Coding Academy (RCA)",
      degree: "A'Level - Software Programming & Embedded Systems",
      location: "Nyabihu",
      period: "2021 - 2024",
      description:
        "Intensive program that transformed my passion for technology into professional expertise. Graduated with honors and recognition as Best Frontend and Backend Developer.",
      achievements: ["Best Frontend Developer Award", "Best Backend Developer Award", "Dean's List - 2 semesters"],
   
    },
    {
      institution: "GSSB-Save",
      degree: "O'Level Certificate",
      location: "Save",
      period: "2018 - 2020",
      description:
        "Strong foundation in sciences and mathematics, developing analytical thinking and problem-solving skills essential for software engineering.",
      achievements: ["Mathematics Excellence Award", "Science Club President", "Top 5% of graduating class"],
     
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-800">BUGINGO Elua</div>
            <div className="hidden md:flex space-x-8">
              {["about", "experience", "projects", "skills", "education", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-medium transition-all duration-300 hover:scale-105 ${
                    activeSection === section ? "text-blue-600 font-semibold" : "text-slate-600 hover:text-blue-600"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => {
                // Create a downloadable resume
                const resumeContent = `
BUGINGO Elua - Full-Stack Software Engineer
Email: bugingoeloi@gmail.com | Phone: +250 791810242 | Location: Kigali, Rwanda

PROFESSIONAL EXPERIENCE:
• Software Engineer - Development Bank of Rwanda (BRD) | Jul 2024 – Present
• Backend Developer - Global Kwik Koders | Jan 2024 – Jun 2024  
• Backend Developer - Grab and Go | Aug 2023 – Dec 2023

EDUCATION:
• Rwanda Coding Academy (RCA) - A'Level Software Programming & Embedded Systems | 2018-2020
• GSSB-Save - O'Level Certificate | 2015-2017

TECHNICAL SKILLS:
• Frontend: React/Next.js, Angular, TypeScript, Tailwind CSS
• Backend: Node.js/NestJS, Spring Boot, Laravel/PHP, Python/Django
• Database: PostgreSQL, MongoDB, MySQL
• Cloud & DevOps: AWS, GCP, Docker, Kubernetes

CERTIFICATIONS:
• JavaScript Algorithms & Data Structures — FreeCodeCamp
• Backend APIs Certification — FreeCodeCamp
• RCA Honors: Best Frontend & Backend Developer
    `.trim()

                const blob = new Blob([resumeContent], { type: "text/plain" })
                const url = window.URL.createObjectURL(blob)
                const a = document.createElement("a")
                a.href = url
                a.download = "BUGINGO_Elua_Resume.txt"
                document.body.appendChild(a)
                a.click()
                document.body.removeChild(a)
                window.URL.revokeObjectURL(url)
              }}
            >
              <Download className="h-4 w-4 mr-2" />
              Resume
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="about"
        className="pt-24 pb-20 relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <Star className="h-4 w-4 mr-2" />
                Available for new opportunities
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                BUGINGO
                <br />
                <span className="text-blue-400">Elua</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-slate-300 mb-6 font-light">Full-Stack Software Engineer</h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">
                Crafting digital experiences that matter. With 5+ years of expertise in building scalable applications
                and leading development teams, I transform complex problems into elegant solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  Let's Work Together
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    // Same download functionality as above
                    const resumeContent = `
BUGINGO Elua - Full-Stack Software Engineer
Email: bugingoeloi@gmail.com | Phone: +250 791810242 | Location: Kigali, Rwanda

PROFESSIONAL EXPERIENCE:
• Software Engineer - Development Bank of Rwanda (BRD) | Jul 2024 – Present
• Backend Developer - Global Kwik Koders | Jan 2024 – Jun 2024  
• Backend Developer - Grab and Go | Aug 2023 – Dec 2023

EDUCATION:
• Rwanda Coding Academy (RCA) - A'Level Software Programming & Embedded Systems | 2018-2020
• GSSB-Save - O'Level Certificate | 2015-2017

TECHNICAL SKILLS:
• Frontend: React/Next.js, Angular, TypeScript, Tailwind CSS
• Backend: Node.js/NestJS, Spring Boot, Laravel/PHP, Python/Django
• Database: PostgreSQL, MongoDB, MySQL
• Cloud & DevOps: AWS, GCP, Docker, Kubernetes

CERTIFICATIONS:
• JavaScript Algorithms & Data Structures — FreeCodeCamp
• Backend APIs Certification — FreeCodeCamp
• RCA Honors: Best Frontend & Backend Developer
    `.trim()

                    const blob = new Blob([resumeContent], { type: "text/plain" })
                    const url = window.URL.createObjectURL(blob)
                    const a = document.createElement("a")
                    a.href = url
                    a.download = "BUGINGO_Elua_Resume.txt"
                    document.body.appendChild(a)
                    a.click()
                    document.body.removeChild(a)
                    window.URL.revokeObjectURL(url)
                  }}
                  className="border-white text-white hover:bg-white hover:text-slate-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-6 text-slate-300">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-blue-400" />
                  Kigali, Rwanda
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-blue-400" />
                  +250 791810242
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-blue-400" />
                  bugingoeloi@gmail.com
                </div>
              </div>
            </div>

            <div
              className={`flex justify-center lg:justify-end transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <div className="relative">
                {/* Floating elements around photo */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-600 rounded-2xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-slate-600 rounded-xl opacity-20 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 -right-8 w-12 h-12 bg-blue-500 rounded-full opacity-20 animate-pulse delay-2000"></div>

                {/* Main photo container */}
                <div className="relative bg-blue-600 p-1 rounded-3xl shadow-2xl">
                  <div className="bg-white p-2 rounded-3xl">
                    <Image
                      src="/images/bugingo-profile.jpg"
                      alt="BUGINGO Elua"
                      width={450}
                      height={550}
                      className="rounded-2xl object-cover shadow-xl"
                    />
                  </div>
                </div>

                {/* Social links floating card */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4">
                  <div className="flex space-x-4">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="hover:bg-blue-100 hover:text-blue-600"
                      onClick={() => window.open("https://github.com/Elua-b/", "_blank")}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="hover:bg-blue-100 hover:text-blue-600"
                      onClick={() => window.open("https://www.linkedin.com/in/bugingo-elua-b42402231/", "_blank")}
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="hover:bg-blue-100 hover:text-blue-600"
                      onClick={() => window.open("https://www.instagram.com/eloit_ech/", "_blank")}
                    >
                      <Instagram className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="hover:bg-blue-100 hover:text-blue-600"
                      onClick={() => window.open("https://x.com/eloi_bugingo", "_blank")}
                    >
                      <Twitter className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Professional Journey</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Building impactful solutions across fintech, healthcare, and digital preservation
            </p>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-8 top-24 w-0.5 h-32 bg-blue-600 opacity-30"></div>
                )}

                <Card className="ml-16 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-0 bg-white">
                  {/* Timeline dot */}
                  <div className="absolute -left-12 top-8 w-6 h-6 bg-blue-600 rounded-full shadow-lg"></div>

                  <CardHeader className="pb-4">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div>
                        <CardTitle className="text-2xl text-slate-900 mb-2">{exp.title}</CardTitle>
                        <CardDescription className="text-lg font-semibold text-blue-600">
                          {exp.company} • {exp.location}
                        </CardDescription>
                      </div>
                      <div className="flex items-center text-slate-600 mt-2 lg:mt-0 bg-slate-100 px-4 py-2 rounded-full">
                        <Calendar className="h-4 w-4 mr-2" />
                        {exp.period}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p className="text-slate-700 leading-relaxed text-lg">{exp.description}</p>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            className="bg-blue-100 text-blue-800 border-0 hover:bg-blue-200 transition-all duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-slate-700">
                            <ChevronRight className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Innovative solutions that make a real-world impact
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-white overflow-hidden"
              >
                <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardHeader className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <Badge
                      className={`${
                        project.status === "Production"
                          ? "bg-green-100 text-green-800"
                          : project.status === "In Development"
                            ? "bg-blue-100 text-blue-800"
                            : project.status === "Live"
                              ? "bg-green-100 text-green-800"
                              : "bg-slate-100 text-slate-800"
                      } border-0`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="relative space-y-6">
                  {/* Impact */}
                  <div className="bg-slate-50 p-4 rounded-xl">
                    <div className="text-sm font-semibold text-slate-900 mb-1">Impact</div>
                    <div className="text-blue-700">{project.impact}</div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-slate-700">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Built With</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Technical Expertise</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Mastering the tools and technologies that power modern applications
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="shadow-xl border-0 bg-white hover:shadow-2xl transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900 flex items-center">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <category.icon className="h-5 w-5 text-white" />
                    </div>
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-slate-900">{skill.name}</span>
                        <span className="text-sm text-slate-600">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2 bg-slate-200" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <Card className="shadow-xl border-0 bg-slate-50">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900 flex items-center justify-center">
                  <Award className="h-6 w-6 mr-3 text-blue-600" />
                  Certifications & Recognition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "JavaScript Algorithms & Data Structures — FreeCodeCamp",
                    "Backend APIs Certification — FreeCodeCamp",
                    "RCA Honors: Best Frontend Developer",
                    "RCA Honors: Best Backend Developer",
                  ].map((cert, index) => (
                    <div key={index} className="flex items-start bg-white p-4 rounded-xl shadow-sm">
                      <Star className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Educational Foundation</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Building expertise through continuous learning and academic excellence
            </p>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="shadow-xl border-0 bg-white hover:shadow-2xl transition-all duration-500">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-slate-900 mb-2">{edu.degree}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-blue-600 mb-4">
                        {edu.institution} {edu.location && `• ${edu.location}`}
                      </CardDescription>
                      <p className="text-slate-700 leading-relaxed">{edu.description}</p>
                    </div>
                    <div className="lg:ml-8 mt-4 lg:mt-0">
                      <div className="bg-slate-50 p-4 rounded-xl text-center">
                        <div className="text-sm text-slate-600 mb-1">Period</div>
                        <div className="font-semibold text-slate-900">{edu.period}</div>
                        {edu.gpa && (
                          <>
                            <div className="text-sm text-slate-600 mt-2 mb-1">GPA</div>
                            <div className="font-semibold text-blue-600">{edu.gpa}</div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Achievements</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {edu.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center bg-slate-50 p-3 rounded-lg">
                          <Award className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                          <span className="text-sm text-slate-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Let's Create Something Amazing</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to bring your ideas to life? I'm always excited to work on challenging projects and collaborate with
              innovative teams.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <a
                  href="mailto:bugingoeloi@gmail.com"
                  className="flex items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-slate-300 group-hover:text-white transition-colors">bugingoeloi@gmail.com</div>
                  </div>
                </a>

                <a
                  href="tel:+250791810242"
                  className="flex items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <div className="text-slate-300 group-hover:text-white transition-colors">+250 791810242</div>
                  </div>
                </a>

                <div className="flex items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Location</div>
                    <div className="text-slate-300">Kigali, Rwanda</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex-1"
                  size="lg"
                  onClick={() => window.open("mailto:bugingoeloi@gmail.com")}
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Send Email
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex-1"
                  size="lg"
                  onClick={() => window.open("tel:+250791810242")}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>

            <div className="text-center lg:text-right">
              <div className="inline-block p-8 bg-white/10 backdrop-blur-sm rounded-3xl">
                <h3 className="text-2xl font-bold text-white mb-4">Available for</h3>
                <div className="space-y-3">
                  {[
                    "Full-time opportunities",
                    "Freelance projects",
                    "Technical consulting",
                    "Code reviews & mentoring",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-center lg:justify-end text-slate-300">
                      <ChevronRight className="h-4 w-4 mr-2 text-blue-400" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-400 py-12 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="font-bold text-xl text-white mb-2">BUGINGO Elua</div>
              <p className="text-slate-500">Building the future, one line of code at a time.</p>
            </div>
            <div className="flex space-x-6">
              <Button
                size="sm"
                variant="ghost"
                className="text-slate-400 hover:text-white hover:bg-slate-700"
                onClick={() => window.open("https://github.com/Elua-b/", "_blank")}
              >
                <Github className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-slate-400 hover:text-white hover:bg-slate-700"
                onClick={() => window.open("https://www.linkedin.com/in/bugingo-elua-b42402231/", "_blank")}
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-slate-400 hover:text-white hover:bg-slate-700"
                onClick={() => window.open("https://www.instagram.com/eloit_ech/", "_blank")}
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-slate-400 hover:text-white hover:bg-slate-700"
                onClick={() => window.open("https://x.com/eloi_bugingo", "_blank")}
              >
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-700 text-center text-slate-500">
            <p>&copy; 2024 BUGINGO Elua. Crafted with passion and precision.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
