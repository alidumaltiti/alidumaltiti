"use client";

import { motion } from "framer-motion";
import { SKILLS, EDUCATION } from "@/lib/data";
import { GraduationCap, Award } from "lucide-react";

export function SkillsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      {/* SKILLS */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Award className="text-teal-500" />
            Skills & Expertise
        </h3>
        
        <div className="space-y-8">
            {Object.entries(SKILLS).map(([category, skills], index) => (
                <motion.div 
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                >
                    <h4 className="text-lg font-medium text-slate-300 mb-4">{category}</h4>
                    <div className="flex flex-wrap gap-3">
                        {skills.map(skill => (
                            <span key={skill} className="px-4 py-2 bg-slate-800 rounded-lg text-sm text-slate-300 hover:text-teal-300 hover:bg-slate-700 transition-colors cursor-default border border-white/5">
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
      </div>

      {/* EDUCATION */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <GraduationCap className="text-teal-500" />
            Education
        </h3>

        <div className="space-y-6">
            {EDUCATION.map((edu, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-slate-900/50 rounded-2xl border border-white/5 hover:border-teal-500/20 transition-colors"
                >
                    <h4 className="text-lg font-bold text-white mb-1">{edu.institution}</h4>
                    <div className="text-teal-400 font-medium mb-2">{edu.degree}</div>
                    {edu.major && <div className="text-slate-400 text-sm mb-2">{edu.major}</div>}
                    <div className="text-slate-500 text-xs font-mono">{edu.date}</div>
                </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}
