"use client";

import { ArrowRight, Mail, ExternalLink, Github, Send, Download, PlayCircle, Linkedin, User, GraduationCap, Code2, Calendar } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCarousel from "@/components/ui/ProjectCarousel";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Vortex } from "@/components/ui/vortex";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { useActionState } from "react";
import { sendEmail } from "@/actions/send-email";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} type="submit" className="w-full py-6 bg-primary text-white rounded-2xl font-bold text-xl hover:bg-primary-hover transition-all duration-300 shadow-2xl shadow-primary/20 flex items-center justify-center space-x-3 group disabled:opacity-70 disabled:cursor-not-allowed">
      <span>{pending ? "Sending..." : "Send Message"}</span>
      {!pending && <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />}
    </button>
  );
}

export default function Home() {
  const [state, formAction] = useActionState(sendEmail, null);
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
          className="w-full h-full flex items-center justify-center py-10 md:py-0"
        >
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-10 animate-in fade-in slide-in-from-left-8 duration-1000">
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight font-outfit text-foreground leading-[0.95]">
                  Alexis<br />Baranauskas
                </h1>
                <p className="max-w-xl text-xl md:text-2xl text-secondary leading-relaxed font-medium opacity-80">
                  Full-stack developer, building clean,
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
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] rounded-full border-2 border-dashed border-primary/30 p-6 flex items-center justify-center">
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
      <section id="about" className="py-24 lg:py-32 bg-stone-50/10">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title="About Me"
            />
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 mt-16 items-center">
              <div className="lg:col-span-3 space-y-8 text-xl text-secondary leading-relaxed">
                <p>
                  I’m a software engineer who solves real-world problems with clean, intuitive software. I work across backend systems, APIs, and modern frontend interfaces, focusing on clarity and usability to build products people enjoy using and that help them get things done.
                </p>

                <div>
                  <h3 className="text-foreground font-bold mb-4">What I enjoy building</h3>
                  <ul className="list-disc pl-5 space-y-3 text-lg">
                    <li>Web and mobile applications that are practical, maintainable, and user focused</li>
                    <li>Simple, responsive, and intentional frontend experiences that look great</li>
                    <li>Backend systems and APIs designed to be stable, clear, maintainable, and built to scale</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-foreground font-bold mb-4">Projects & Experience</h3>
                  <div className="space-y-4">
                    <p>
                      Some of my best ideas come from firsthand frustration. I built a volleyball rotation tracker after repeatedly running into coordination issues while coaching—turning a real workflow problem into a practical software solution.
                    </p>
                    <div>
                      <p className="mb-2">During my internship at <a href="https://www.mykleo.ai/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">mykleo.ai</a>, I contributed across the stack by:</p>
                      <ul className="list-disc pl-5 space-y-2 text-lg">
                        <li>Improving backend stability</li>
                        <li>Refining UI/UX flows</li>
                        <li>Creating onboarding content to help users understand the product faster and with less guesswork</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-foreground font-bold mb-4">How I Work</h3>
                  <p>
                    I’m always learning, experimenting with new tools, refining projects, and exploring areas like AI fundamentals, frontend architecture, and performance optimization. I value quality, thoughtful design, and clear communication, and I enjoy working both independently and with remote, cross-functional teams.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-2">
                <CardContainer className="w-full">
                  <CardBody className="p-10 md:p-14 rounded-[3rem] border border-stone-200/60 dark:border-stone-800 bg-gradient-to-br from-white/90 to-stone-100/50 dark:from-stone-900/90 dark:to-black/50 backdrop-blur-3xl shadow-2xl shadow-stone-200/50 dark:shadow-none w-full min-h-[650px] flex flex-col justify-center relative overflow-hidden group/card hover:shadow-primary/10 transition-shadow duration-500">
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-primary/5 rounded-full blur-[60px] -ml-20 -mb-20 pointer-events-none"></div>

                    <CardItem translateZ="50" className="w-full relative z-10">
                      <div className="flex items-center space-x-4 mb-12">
                        <div className="p-3.5 bg-primary/10 rounded-2xl text-primary">
                          <GraduationCap size={28} />
                        </div>
                        <h3 className="text-3xl font-bold font-outfit text-foreground tracking-tight">Education</h3>
                      </div>
                    </CardItem>

                    <div className="space-y-10 relative z-10">
                      <CardItem translateZ="60" className="w-full">
                        <div className="relative pl-6 border-l-2 border-primary/20">
                          <p className="font-bold text-foreground text-2xl mb-1 tracking-tight">BS in Computer Science</p>
                          <p className="text-secondary font-medium text-lg mb-3">Central Connecticut State University</p>
                          <div className="flex items-center text-muted font-medium mb-5 text-base">
                            <Calendar size={16} className="mr-2.5 text-primary/70" />
                            <span>May 2025</span>
                          </div>

                          <div className="inline-flex items-center px-4 py-2 bg-stone-100 dark:bg-stone-800/80 rounded-xl text-xs font-bold text-stone-600 dark:text-stone-300 uppercase tracking-widest border border-stone-200 dark:border-stone-700/50 shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2.5"></span>
                            Minor in Arabic Language
                          </div>
                        </div>
                      </CardItem>
                    </div>

                    <div className="pt-12 mt-12 border-t border-border/40 relative z-10">
                      <CardItem translateZ="40" className="w-full">
                        <div className="flex items-center space-x-3 mb-8">
                          <Code2 size={18} className="text-primary" />
                          <p className="text-xs font-bold text-muted uppercase tracking-[0.2em]">Core Competencies</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {[
                            "Java & Python",
                            "C & Assembly",
                            "Data Structures",
                            "AI & ML",
                            "Systems Programming",
                            "Digital Forensics"
                          ].map(tag => (
                            <span key={tag} className="px-4 py-2.5 bg-white dark:bg-stone-800/50 hover:bg-primary/5 text-secondary dark:text-stone-300 text-xs font-bold rounded-xl border border-stone-200 dark:border-stone-700/50 shadow-sm hover:border-primary/30 transition-all duration-300 cursor-default">
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
      <section id="projects" className="py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Projects"
            subtitle="Engaging technical implementations and personal projects."
          />
          <ProjectCarousel projects={projects} />
        </div>
      </section>

      {/* Experience Section */}
      <section id="resume" className="py-24 lg:py-32 bg-stone-50/10">
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
              <div key={exp.id} className="relative pl-6 md:pl-12 border-l-2 border-border group">
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
      < section id="contact" className="py-24 lg:py-32" >
        <div className="container mx-auto px-6">
          <div className="bg-card text-foreground rounded-[3rem] p-8 md:p-20 shadow-3xl overflow-hidden relative border border-border">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -ml-32 -mb-32"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <div className="space-y-12">
                <SectionHeader
                  title="Let's Connect"
                  subtitle="Open for opportunities, collaborations, or just a technical chat."
                />
                <div className="space-y-8 pt-8">
                  {[
                    { icon: Mail, label: "Email", value: "lexi.codes.dev@gmail.com", href: "mailto:lexi.codes.dev@gmail.com?subject=Portfolio Connection" },
                    { icon: Linkedin, label: "LinkedIn", value: "alexisb-dev", href: "https://www.linkedin.com/in/alexisb-dev/" },
                    { icon: Github, label: "GitHub", value: "abara02", href: "https://github.com/abara02" }
                  ].map((item) => (
                    <a key={item.label} href={item.href} target={item.label !== "Email" ? "_blank" : undefined} rel={item.label !== "Email" ? "noopener noreferrer" : undefined} className="flex items-center group">
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
                <form action={formAction} className="space-y-8">
                  {state?.error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm font-bold">
                      {state.error}
                    </div>
                  )}
                  {state?.success && (
                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-500 text-sm font-bold">
                      Message sent successfully!
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-muted uppercase tracking-widest ml-1">Name</label>
                      <input name="senderName" type="text" required className="w-full bg-white dark:bg-stone-900 border border-border rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors font-medium text-lg text-foreground" placeholder="John Doe" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-muted uppercase tracking-widest ml-1">Email</label>
                      <input name="senderEmail" type="email" required className="w-full bg-white dark:bg-stone-900 border border-border rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors font-medium text-lg text-foreground" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-muted uppercase tracking-widest ml-1">Message</label>
                    <textarea name="message" rows={4} required className="w-full bg-white dark:bg-stone-900 border border-border rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors font-medium text-lg resize-none text-foreground" placeholder="How can I help you?"></textarea>
                  </div>
                  <SubmitButton />
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
