"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "AI Video Production",
    skills: [
      "Higgsfield",
      "HeyGen",
      "Claude Workflows",
      "Motion Design",
      "AI Video Tools",
      "Short-Form AI Pipelines"
    ]
  },
  {
    category: "Video & Editing",
    skills: [
      "CapCut",
      "Short-Form Video Editing",
      "Mobile Videography",
      "Reel Shooting",
      "Vertical Video Production",
      "Storyboarding"
    ]
  },
  {
    category: "Content & Social",
    skills: [
      "Instagram Reels",
      "Content Strategy",
      "Trend Research",
      "Content Scheduling",
      "Community Building",
      "Brand Storytelling"
    ]
  },
  {
    category: "Design & Tools",
    skills: [
      "Figma",
      "Canva",
      "Adobe Photoshop",
      "Adobe Lightroom",
      "UI/UX Design",
      "Visual Assets & Branding"
    ]
  }
];

const languages = ["English", "Telugu (Native)", "Hindi"];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      <h2 className="text-3xl md:text-5xl font-bold mb-16 text-[#FFFCF2] text-center">Core Expertise</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-[var(--color-accent)]/40 transition-colors"
          >
            <h3 className="text-lg font-bold mb-6 text-[var(--color-accent)] border-b border-white/10 pb-3">
              {group.category}
            </h3>
            <ul className="space-y-3">
              {group.skills.map((skill, sIdx) => (
                <li key={sIdx} className="text-[var(--color-secondary)] text-sm flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mr-3 opacity-60" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Languages Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 pt-10 border-t border-white/10 text-center max-w-2xl mx-auto"
      >
        <h3 className="text-xs font-bold text-[var(--color-accent)] tracking-widest uppercase mb-6">Languages</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {languages.map((lang, idx) => (
            <span
              key={idx}
              className="bg-white/5 border border-white/10 px-5 py-2 rounded-full text-[var(--color-secondary)] font-medium text-xs shadow-md"
            >
              {lang}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
