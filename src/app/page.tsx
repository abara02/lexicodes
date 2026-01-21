"use client";

import { ArrowRight, Mail, ExternalLink, Github, Send, Download, PlayCircle, Linkedin, User } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCarousel from "@/components/ui/ProjectCarousel";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Vortex } from "@/components/ui/vortex";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero / Home Section */}
      <section id="home" className="min-h-screen flex items-center pt-12 md:pt-0 overflow-hidden bg-background">
        <Vortex
          backgroundColor="transparent"
          rangeY={800}
          particleCount={250}
          baseHue={255}
          rangeHue={25}
          baseSpeed={0.015}
          rangeSpeed={0.08}
          className="w-full h-full flex items-center justify-center py-20 md:py-0"
        >
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-10 animate-in fade-in slide-in-from-left-8 duration-1000">
              <div className="space-y-6">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tight font-outfit text-foreground leading-[0.95]">
                  Alexis<br />Baranauskas
                </h1>
                <p className="max-w-xl text-xl md:text-2xl text-secondary leading-relaxed font-medium opacity-80">
                  Full-stack developer based in Connecticut, building clean,
                  practical applications that solve real problems using modern web technologies.
                </p>
              </div>

              <div className="pt-8">
                <a
                  href="#projects"
                  className="inline-flex items-center space-x-4 px-10 py-5 bg-primary text-white rounded-full hover:bg-primary-hover transition-all duration-300 font-bold shadow-2xl shadow-primary/20 group"
                >
                  <span className="text-lg">View Projects</span>
                  <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-300" />
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end animate-in fade-in zoom-in duration-1000 delay-300">
              <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] rounded-full border-2 border-dashed border-primary/30 p-6 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-stone-200/50 overflow-hidden relative shadow-inner">
                  <img
                    src="/profile.png"
                    alt="Alexis Baranauskas"
                    className="w-full h-full object-cover scale-105"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </Vortex>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-stone-50/10">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title="About Me"
            />
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 mt-16 items-center">
              <div className="lg:col-span-3 space-y-8 text-xl text-secondary leading-relaxed">
                <p>
                  I’m a Software Engineer who enjoys turning real-world problems into clean, intuitive software. My work spans the full stack—from backend logic and APIs to frontend interfaces—always with a focus on usability, clarity, and real impact.
                </p>
                <p>
                  I earned my Bachelor’s degree in Computer Science and have built web and mobile applications using Java, Python, C, and TypeScript, with frameworks like React and Next.js. My foundation includes object-oriented programming, data structures, systems-level concepts, and modern frontend development.
                </p>
                <p>
                  I’m especially interested in translating real workflows into software that feels natural to use. I built a volleyball rotation tracker to solve a problem I've encountered firsthand while coaching, and during my internship at <a href="https://www.mykleo.ai/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">mykleo.ai</a>, I have contributed to backend stability, UI/UX improvements, and created user onboarding content.
                </p>
                <p>
                  Beyond my professional experience, I’m constantly learning—experimenting with new tools, refining existing projects, and exploring areas like AI fundamentals, UI architecture, and performance optimization. I value thoughtful design, ownership, and collaboration, and I’m comfortable working independently or with remote, cross-functional teams.
                </p>
              </div>

              <div className="lg:col-span-2">
                <CardContainer className="w-full">
                  <CardBody className="p-12 md:p-14 rounded-[3rem] border border-border bg-card shadow-2xl shadow-primary/5 w-full h-auto">
                    <CardItem translateZ="50" className="w-full">
                      <h3 className="text-3xl font-bold mb-10 font-outfit text-foreground">Education</h3>
                    </CardItem>

                    <div className="space-y-8">
                      <CardItem translateZ="60" className="w-full">
                        <div>
                          <p className="font-bold text-foreground text-xl">BS in Computer Science</p>
                          <p className="text-secondary font-medium text-lg">Central Connecticut State University</p>
                          <p className="text-muted text-base font-semibold">May 2025</p>
                          <div className="mt-4 inline-block px-4 py-1.5 bg-stone-100 dark:bg-stone-800 rounded-full text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider border border-border">
                            Minor in Arabic Language
                          </div>
                        </div>
                      </CardItem>
                    </div>

                    <div className="pt-10 mt-10 border-t border-border/50">
                      <CardItem translateZ="40" className="w-full">
                        <p className="text-xs font-bold text-muted uppercase tracking-[0.2em] mb-6">Core Competencies</p>
                        <div className="flex flex-wrap gap-2.5">
                          {[
                            "Java & Python",
                            "C & Assembly",
                            "Data Structures",
                            "AI & ML",
                            "Systems Programming",
                            "Digital Forensics"
                          ].map(tag => (
                            <span key={tag} className="px-3.5 py-2 bg-stone-50 dark:bg-stone-800 text-stone-500 dark:text-stone-400 text-[11px] font-bold rounded-xl border border-border uppercase tracking-tighter">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Projects"
            subtitle="Engaging technical implementations and personal projects."
          />
          <ProjectCarousel projects={projects} />
        </div>
      </section>

      {/* Experience Section */}
      <section id="resume" className="py-32 bg-stone-50/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
            <SectionHeader
              title="Experience"
              subtitle="Professional background and technical roles."
            />
            <a href="/Alexis B Resume.pdf" download className="flex items-center space-x-3 px-10 py-5 bg-foreground text-background rounded-full hover:bg-primary transition-all duration-300 font-bold shadow-xl shadow-stone-900/10 dark:shadow-none">
              <Download size={20} />
              <span className="text-lg">Download Resume</span>
            </a>
          </div>
          <div className="max-w-4xl space-y-16">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-12 border-l-2 border-border group">
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-4">
                    <h3 className="text-3xl font-bold font-outfit group-hover:text-primary transition-colors text-foreground">{exp.role}</h3>
                    <span className="px-4 py-1.5 bg-primary/5 text-primary rounded-full text-xs font-bold tracking-widest uppercase">{exp.duration}</span>
                  </div>
                  <p className="text-2xl font-bold text-muted leading-none">{exp.company}</p>
                  <ul className="space-y-5 pt-4">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-secondary leading-relaxed text-lg flex items-start">
                        <span className="mr-5 text-primary mt-2.5 h-1.5 w-1.5 rounded-full bg-border group-hover:bg-primary transition-colors flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Contact Section */}
      < section id="contact" className="py-32" >
        <div className="container mx-auto px-6">
          <div className="bg-card text-foreground rounded-[3rem] p-8 md:p-20 shadow-3xl overflow-hidden relative border border-border">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -ml-32 -mb-32"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div className="space-y-12">
                <SectionHeader
                  title="Let's Connect"
                  subtitle="Open for opportunities, collaborations, or just a technical chat."
                />
                <div className="space-y-8 pt-8">
                  {[
                    { icon: Mail, label: "Email", value: "abaranauskas412@gmail.com", href: "mailto:abaranauskas412@gmail.com" },
                    { icon: Linkedin, label: "LinkedIn", value: "alexis-b-988a72335", href: "https://www.linkedin.com/in/alexis-b-988a72335" },
                    { icon: Github, label: "GitHub", value: "abara02", href: "https://github.com/abara02" }
                  ].map((item) => (
                    <a key={item.label} href={item.href} className="flex items-center group">
                      <div className="p-5 rounded-2xl bg-stone-50 dark:bg-stone-800 border border-border text-foreground group-hover:bg-primary group-hover:text-white transition-all duration-500">
                        <item.icon size={26} />
                      </div>
                      <div className="ml-8">
                        <p className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-2">{item.label}</p>
                        <p className="text-xl font-bold group-hover:text-primary transition-colors">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-stone-50 dark:bg-stone-800/50 p-8 md:p-12 rounded-[2rem] border border-border backdrop-blur-sm">
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-muted uppercase tracking-widest ml-1">Name</label>
                      <input type="text" className="w-full bg-white dark:bg-stone-900 border border-border rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors font-medium text-lg text-foreground" placeholder="John Doe" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-muted uppercase tracking-widest ml-1">Email</label>
                      <input type="email" className="w-full bg-white dark:bg-stone-900 border border-border rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors font-medium text-lg text-foreground" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-muted uppercase tracking-widest ml-1">Message</label>
                    <textarea rows={4} className="w-full bg-white dark:bg-stone-900 border border-border rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors font-medium text-lg resize-none text-foreground" placeholder="How can I help you?"></textarea>
                  </div>
                  <button className="w-full py-6 bg-primary text-white rounded-2xl font-bold text-xl hover:bg-primary-hover transition-all duration-300 shadow-2xl shadow-primary/20 flex items-center justify-center space-x-3 group">
                    <span>Send Message</span>
                    <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 border-t border-stone-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-stone-400 font-medium tracking-tight">
            &copy; 2026 Alexis Baranauskas
          </p>
          <div className="flex space-x-12">
            {[
              { name: "About Me", href: "#about" },
              { name: "Projects", href: "#projects" },
              { name: "Experience", href: "#resume" },
              { name: "Connect", href: "#contact" }
            ].map(l => (
              <a key={l.name} href={l.href} className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400 hover:text-primary transition-colors">
                {l.name}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
