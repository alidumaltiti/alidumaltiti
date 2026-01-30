"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import { Github, ExternalLink, Code2 } from "lucide-react";
import Image from "next/image";

export function ProjectsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {PROJECTS.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-white/5 hover:border-teal-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/10"
        >
          <div className="aspect-video relative overflow-hidden bg-slate-800">
             {/* Use Next.js Image component if image is available, else placeholder */}
             {project.image ? (
                <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-500">
                {/* Note: Using unoptimized images for external URLs in this example. In prod, config domains. */}
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                 <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-teal-500 rounded-full text-slate-950 hover:bg-teal-400 transition-colors">
                        <ExternalLink size={20} />
                    </a>
                 </div>
                </div>
             ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-600">
                    <Code2 size={48} />
                </div>
             )}
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                {project.title}
            </h3>
            <div className="w-full h-px bg-white/5 mb-4"></div>
            
            <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-slate-800 text-teal-300 text-xs rounded border border-teal-500/10">
                        {tech}
                    </span>
                ))}
            </div>
            
            <div className="flex justify-between items-center text-xs text-slate-500 font-mono">
                <span>{project.role}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
