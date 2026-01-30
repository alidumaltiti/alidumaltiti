"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/data";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {TESTIMONIALS.map((t, index) => (
        <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-8 bg-slate-900/30 rounded-3xl border border-white/5 relative"
        >
            <Quote className="absolute top-8 left-8 text-teal-500/20 w-12 h-12" />
            <p className="text-lg text-slate-300 italic mb-6 relative z-10 leading-relaxed">
                "{t.text}"
            </p>
            <div>
                <div className="font-bold text-white">{t.name}</div>
                <div className="text-teal-400 text-sm">{t.role}</div>
            </div>
        </motion.div>
      ))}
    </div>
  );
}
