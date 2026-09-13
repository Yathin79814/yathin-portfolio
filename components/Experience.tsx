"use client";

import { motion } from "framer-motion";
import {
  Video,
  Sparkles,
  Zap,
  Users,
  Calendar,
  MapPin,
  Briefcase,
  Layers,
  Shield,
  Megaphone,
  Camera,
  Globe
} from "lucide-react";

interface WorkExperienceItem {
  role: string;
  company: string;
  location?: string;
  duration: string;
  icon: React.ComponentType<any>;
  bullets: string[];
}

interface CampusExperienceItem {
  role: string;
  company: string;
  duration: string;
  icon: React.ComponentType<any>;
  description: string;
}

const workExperiences: WorkExperienceItem[] = [
  {
    role: "AI Content Creator (Short-Form Creative Content)",
    company: "Influx Health",
    location: "Hyderabad, Telangana",
    duration: "Jul 2026 – Present",
    icon: Video,
    bullets: [
      "Produced 60+ short-form AI videos for healthcare and educational-support clients within one month, sustaining a 5–10 video/day production pace.",
      "Architected an end-to-end AI video pipeline spanning Higgsfield for generation, HeyGen for avatar and voiceover, and CapCut with motion design for editing and polish.",
      "Scripted and structured ideation-to-storyboard workflows using Claude to accelerate production timelines.",
      "Delivered vertical, caption-ready videos with consistent branding across specialties, meeting healthcare-compliant messaging standards."
    ]
  },
  {
    role: "Creative Design, AI Content & Digital Marketing Intern",
    company: "Attacked AI",
    location: "Chennai, Tamil Nadu",
    duration: "Aug 2025 – Dec 2025",
    icon: Sparkles,
    bullets: [
      "Shot and edited short-form videos and reels for social campaigns, leveraging mobile videography and CapCut to cut turnaround time under tight deadlines.",
      "Generated AI-assisted images and videos powering daily visual storytelling across marketing channels.",
      "Produced branded creatives and managed content publishing workflows for AI-driven media, including podcast production."
    ]
  },
  {
    role: "Digital Marketing Intern",
    company: "EVtron Tech",
    location: "Chennai, Tamil Nadu",
    duration: "May 2025 – Aug 2025",
    icon: Zap,
    bullets: [
      "Planned and executed end-to-end social campaigns for an EV charging brand.",
      "Contributed visual storytelling and presentation design to a 2nd-place finish at the IBCN Innovation Challenge."
    ]
  },
  {
    role: "Founder & Content Creator",
    company: "designpreneurss — Instagram Content Brand",
    location: "Remote / Online",
    duration: "Mar 2020 – Present",
    icon: Users,
    bullets: [
      "Grew designpreneurss to 30,000+ organic followers by producing trend-led reels, carousels, and tutorials on UI/UX, Photoshop, and Canva.",
      "Own the full content lifecycle — ideation, shooting, editing, captioning, scheduling, and community engagement."
    ]
  }
];

const campusExperiences: CampusExperienceItem[] = [
  {
    role: "Design Lead",
    company: "Samgatha / Vashisht Fest",
    duration: "2023 - Present",
    icon: Layers,
    description: "Led a team of designers to build brand identity and media coverage for annual fests, scaling visual design systems and managing rapid asset delivery."
  },
  {
    role: "Student Coordinator",
    company: "Placement Cell Coordinator",
    duration: "2023 - Present",
    icon: Briefcase,
    description: "Coordinated recruitment logistics, stakeholder communications, and schedules for 200+ students and top recruiters."
  },
  {
    role: "Senior Under Officer (SUO)",
    company: "National Cadet Corps (NCC)",
    duration: "Nov 2022 – May 2025",
    icon: Shield,
    description: "Commanded a unit of 52+ cadets, representing campus at EBSB national camp and receiving 'Best Cadet' for operational leadership."
  },
  {
    role: "Volunteering & Organizing Committee",
    company: "CVIP 2024 (International Conference)",
    duration: "2024",
    icon: Globe,
    description: "Organized operations and hosted international academic guests for CVIP 2024 under Dr. Jagadeesh Kakarla."
  },
  {
    role: "Publicity Lead",
    company: "SAVA Fest",
    duration: "2024 - Present",
    icon: Megaphone,
    description: "Spearheaded digital publicity campaigns, reels content optimization, and marketing outreach strategies."
  },
  {
    role: "Core Member",
    company: "Photography Club — IMAGIX",
    duration: "2022 - Present",
    icon: Camera,
    description: "Handled event photography, motion showcases, and post-production editing using Lightroom and CapCut."
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-28 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto relative z-10">

      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#FFFCF2] tracking-tight mb-4">
          Work Experience<span className="text-[var(--color-accent)]">.</span>
        </h2>
        <p className="text-base sm:text-lg text-[var(--color-secondary)] max-w-xl mx-auto">
          High-volume AI content production, brand design, and digital marketing milestones.
        </p>
      </div>

      {/* Vertical Alternating Timeline Container */}
      <div className="relative mb-28">

        {/* Central Vertical Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 bg-gradient-to-b from-[var(--color-accent)] via-[#F2A65A] to-[var(--color-accent)] shadow-[0_0_25px_rgba(235,94,40,0.9)] rounded-full z-10" />

        <div className="space-y-16 md:space-y-20">
          {workExperiences.map((exp, idx) => {
            const Icon = exp.icon;
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative flex flex-col md:flex-row items-start md:items-center"
              >
                {/* Timeline Icon Node (Centered on line for desktop, Left for mobile) */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#18181f] border-2 border-[var(--color-accent)] shadow-[0_0_20px_rgba(235,94,40,0.5)] flex items-center justify-center text-white">
                    <Icon size={20} className="text-[var(--color-accent)]" />
                  </div>
                </div>

                {/* Content Card (Alternates left/right on desktop) */}
                <div
                  className={`pl-12 md:pl-0 w-full md:w-[calc(50%-2.5rem)] ${isEven ? "md:mr-auto" : "md:ml-auto"
                    }`}
                >
                  <div className="group relative bg-white/[0.04] backdrop-blur-xl border border-white/15 hover:border-[var(--color-accent)]/50 p-6 sm:p-8 rounded-3xl transition-all duration-300 hover:bg-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:shadow-[0_12px_40px_rgba(235,94,40,0.15)] overflow-hidden">

                    {/* Role Title */}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#FFFCF2] tracking-tight mb-1 group-hover:text-white transition-colors">
                      {exp.role}
                    </h3>

                    {/* Company & Location */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10">
                      <span className="text-sm font-bold tracking-wider text-[var(--color-accent)] uppercase">
                        {exp.company}
                      </span>
                      {exp.location && (
                        <span className="inline-flex items-center gap-1 text-xs text-white/50">
                          <MapPin size={12} /> {exp.location}
                        </span>
                      )}
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2.5 text-xs sm:text-sm text-[#CCC5B9]/90 leading-relaxed">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <span className="text-[var(--color-accent)] mt-1 font-bold">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Campus & Leadership Section */}
      <div className="mt-24 pt-16 border-t border-white/10">
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#FFFCF2] mb-3">
            Campus & Leadership Roles
          </h3>
          <p className="text-sm text-[var(--color-secondary)]">
            Organizing fests, commanding NCC squads, and leading university initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {campusExperiences.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative bg-white/[0.04] backdrop-blur-xl border border-white/15 hover:border-[var(--color-accent)]/50 p-6 sm:p-7 rounded-3xl transition-all duration-300 hover:bg-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:shadow-[0_12px_40px_rgba(235,94,40,0.15)] overflow-hidden"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/40 flex items-center justify-center text-[var(--color-accent)] shadow-[0_0_15px_rgba(235,94,40,0.2)] group-hover:scale-105 transition-transform duration-300">
                    <Icon size={22} />
                  </div>
                </div>

                <h4 className="text-xl font-extrabold text-[#FFFCF2] mb-1.5 group-hover:text-white transition-colors">{item.role}</h4>
                <p className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-wider mb-3">
                  {item.company}
                </p>
                <p className="text-xs sm:text-sm text-[var(--color-secondary)] leading-relaxed font-normal">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

    </section>
  );
};
