"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/data";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export function ExperienceSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-12 relative border-l border-white/10 ml-4 md:ml-0 md:pl-0">
        {EXPERIENCE.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 md:pl-0"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-5px] md:left-auto md:right-full md:mr-8 top-1 w-3 h-3 rounded-full bg-teal-500 ring-4 ring-slate-950"></div>

            <div className="md:flex gap-6 justify-between group">
               {/* Date & Location (Desktop Left) */}
               <div className="hidden md:block w-48 text-right flex-shrink-0 pt-1">
                 <div className="flex items-center justify-end text-sm text-teal-400 font-medium mb-1 gap-2">
                    {job.date}
                    <Calendar size={14} />
                 </div>
                 <div className="flex items-center justify-end text-xs text-slate-500 gap-2">
                    {job.location}
                    <MapPin size={12} />
                 </div>
               </div>

               {/* Content */}
               <div className="flex-1 bg-slate-900/50 p-6 rounded-2xl border border-white/5 hover:border-teal-500/30 transition-colors">
                  <div className="block md:hidden mb-4">
                     <span className="text-xs font-mono text-teal-400">{job.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-teal-400 transition-colors">
                    {job.role}
                  </h3>
                  <div className="text-lg text-slate-400 mb-4 font-medium flex items-center gap-2">
                     <Briefcase size={16} className="text-teal-500" />
                     {job.company}
                  </div>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 border border-white/5">
                            {tag}
                        </span>
                    ))}
                  </div>

                  {/* Mobile Location */}
                  <div className="block md:hidden mt-4 pt-4 border-t border-white/5 text-xs text-slate-500 flex items-center gap-2">
                     <MapPin size={12} />
                     {job.location}
                  </div>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
