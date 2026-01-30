"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { Section } from "./components/Section";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { ContactSection } from "./components/ContactSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { PERSONAL_DETAILS } from "@/lib/data";

export default function Home() {
  return (
    <div className="flex flex-col">
        {/* HERO SECTION */}
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <section className="pt-32 pb-16 md:pt-48 md:pb-32 max-w-5xl mx-auto">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 text-sm font-medium border border-teal-500/20"
            >
            Available for new opportunities
            </motion.div>
            
            <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 tracking-tight text-white"
            >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">{PERSONAL_DETAILS.name.split(" ")[0]}</span>. <br />
            I build <span className="text-white">digital impact.</span>
            </motion.h1>
            
            <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
            {PERSONAL_DETAILS.headlines.join(" • ")}
            </motion.p>
            
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
            <Link 
                href="#projects"
                className="group relative px-8 py-3 bg-white text-slate-950 font-semibold rounded-full hover:bg-slate-200 transition-all flex items-center gap-2"
            >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a 
                href={PERSONAL_DETAILS.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-slate-800 text-white font-medium rounded-full border border-slate-700 hover:bg-slate-700 transition-all flex items-center gap-2"
            >
                <Download className="w-4 h-4" />
                Resume / CV
            </a>
            </motion.div>

            {/* Tech Stack Marquee Placeholder */}
            <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-20 pt-10 border-t border-white/5"
            >
            <p className="text-sm text-slate-500 mb-6 uppercase tracking-wider font-semibold">Technologies I work with</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <span className="text-xl font-bold text-slate-300">Next.js</span>
                <span className="text-xl font-bold text-slate-300">React</span>
                <span className="text-xl font-bold text-slate-300">Tailwind</span>
                <span className="text-xl font-bold text-slate-300">Python</span>
                <span className="text-xl font-bold text-slate-300">AWS</span>
                <span className="text-xl font-bold text-slate-300">PHP</span>
            </div>
            </motion.div>
        </section>
        </div>

        <Section id="experience" title="Professional Experience" className="bg-slate-950">
            <ExperienceSection />
        </Section>

        <Section id="projects" title="Featured Projects">
            <ProjectsSection />
        </Section>

        <Section id="skills" title="Skills & Education" className="bg-slate-950">
            <SkillsSection />
        </Section>

        <Section id="testimonials" title="What Others Say">
            <TestimonialsSection />
        </Section>

        <Section id="contact" title="Get In Touch" className="bg-slate-950">
            <ContactSection />
        </Section>
    </div>
  );
}
