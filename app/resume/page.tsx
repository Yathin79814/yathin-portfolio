"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  Phone,
  Printer,
  Sparkles,
  GraduationCap,
  Briefcase,
  Layers,
  Globe
} from "lucide-react";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";

export default function ResumePage() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0d] text-[#FFFCF2] py-12 px-4 sm:px-6 lg:px-8 selection:bg-[var(--color-accent)] selection:text-white print:bg-white print:text-black print:p-0">
      {/* Top Action Bar (Hidden when printing) */}
      <div className="max-w-4xl mx-auto mb-8 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all"
        >
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-accent)] text-white text-sm font-semibold shadow-lg hover:bg-[#f06935] transition-all cursor-pointer"
          >
            <Printer size={16} /> Print / Save PDF
          </button>
        </div>
      </div>

      {/* Main Resume Document Wrapper */}
      <div className="max-w-4xl mx-auto bg-[#121216] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl print:shadow-none print:border-none print:bg-white print:text-black print:rounded-none print:p-0">
        
        {/* Header */}
        <header className="border-b border-white/10 pb-8 mb-8 print:border-black/20">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3 text-[#FFFCF2] print:text-black">
            DAMALLA YATHIN
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-accent)] font-semibold mb-6 print:text-black">
            AI Content Creator · Short-Form Creative Video Producer · UI/UX Designer
          </p>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-white/70 print:text-black/80">
            <a href="tel:7981466508" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone size={14} className="text-[var(--color-accent)] print:text-black" /> 7981466508
            </a>
            <a href="mailto:damallayathin030@gmail.com" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail size={14} className="text-[var(--color-accent)] print:text-black" /> damallayathin030@gmail.com
            </a>
            <a href="https://linkedin.com/in/damallayathin" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <FaLinkedin size={14} className="text-[var(--color-accent)] print:text-black" /> linkedin.com/in/damallayathin
            </a>
            <a href="https://instagram.com/designpreneurss" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <FaInstagram size={14} className="text-[var(--color-accent)] print:text-black" /> @designpreneurss
            </a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-8">
          <h2 className="text-xs font-bold tracking-widest text-[var(--color-accent)] uppercase mb-3 print:text-black print:border-b print:border-black">
            Professional Summary
          </h2>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed print:text-black">
            AI Content Creator with a track record of producing high-volume, on-brand short-form video at scale. Delivered 60+ AI-generated videos for healthcare and education clients in under one month, sustaining a 5–10 video/day production pace using Higgsfield, HeyGen, CapCut, and Claude. Grew <span className="text-white font-semibold print:text-black">designpreneurss</span> to 30,000+ organic followers through trend-driven reels and consistent brand storytelling.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-xs font-bold tracking-widest text-[var(--color-accent)] uppercase mb-6 print:text-black print:border-b print:border-black">
            Experience
          </h2>

          <div className="space-y-6">
            {/* Influx Health */}
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="text-base font-bold text-[#FFFCF2] print:text-black">
                  Influx Health <span className="font-normal text-xs text-white/50 print:text-black/60">— Hyderabad, Telangana</span>
                </h3>
                <span className="text-xs font-medium text-[var(--color-accent)] print:text-black">Jul 2026 – Present</span>
              </div>
              <p className="text-xs font-semibold text-white/70 mb-2 italic print:text-black/80">
                AI Content Creator (Short-Form Creative Content)
              </p>
              <ul className="list-disc list-outside ml-4 space-y-1.5 text-xs sm:text-sm text-white/75 print:text-black/90">
                <li>Produced 60+ short-form AI videos for healthcare and educational-support clients within one month, sustaining a 5–10 video/day production pace.</li>
                <li>Architected an end-to-end AI video pipeline spanning Higgsfield for generation, HeyGen for avatar and voiceover, and CapCut with motion design for editing and polish.</li>
                <li>Scripted and structured ideation-to-storyboard workflows using Claude to accelerate production timelines.</li>
                <li>Delivered vertical, caption-ready videos with consistent branding across specialties, meeting healthcare-compliant messaging standards.</li>
              </ul>
            </div>

            {/* Attacked AI */}
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="text-base font-bold text-[#FFFCF2] print:text-black">
                  Attacked AI <span className="font-normal text-xs text-white/50 print:text-black/60">— Chennai, Tamil Nadu</span>
                </h3>
                <span className="text-xs font-medium text-[var(--color-accent)] print:text-black">Aug 2025 – Dec 2025</span>
              </div>
              <p className="text-xs font-semibold text-white/70 mb-2 italic print:text-black/80">
                Creative Design, AI Content & Digital Marketing Intern
              </p>
              <ul className="list-disc list-outside ml-4 space-y-1.5 text-xs sm:text-sm text-white/75 print:text-black/90">
                <li>Shot and edited short-form videos and reels for social campaigns, leveraging mobile videography and CapCut to cut turnaround time under tight deadlines.</li>
                <li>Generated AI-assisted images and videos powering daily visual storytelling across marketing channels.</li>
                <li>Produced branded creatives and managed content publishing workflows for AI-driven media, including podcast production.</li>
              </ul>
            </div>

            {/* EVtron Tech */}
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="text-base font-bold text-[#FFFCF2] print:text-black">
                  EVtron Tech <span className="font-normal text-xs text-white/50 print:text-black/60">— Chennai, Tamil Nadu</span>
                </h3>
                <span className="text-xs font-medium text-[var(--color-accent)] print:text-black">May 2025 – Aug 2025</span>
              </div>
              <p className="text-xs font-semibold text-white/70 mb-2 italic print:text-black/80">
                Digital Marketing Intern
              </p>
              <ul className="list-disc list-outside ml-4 space-y-1.5 text-xs sm:text-sm text-white/75 print:text-black/90">
                <li>Planned and executed end-to-end social campaigns for an EV charging brand; contributed visual storytelling and presentation design to a 2nd-place finish at the IBCN Innovation Challenge.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Content Creation */}
        <section className="mb-8">
          <h2 className="text-xs font-bold tracking-widest text-[var(--color-accent)] uppercase mb-4 print:text-black print:border-b print:border-black">
            Content Creation
          </h2>
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h3 className="text-base font-bold text-[#FFFCF2] print:text-black">
                designpreneurss <span className="font-normal text-xs text-white/50 print:text-black/60">— Instagram Content Brand</span>
              </h3>
              <span className="text-xs font-medium text-[var(--color-accent)] print:text-black">Mar 2020 – Present</span>
            </div>
            <p className="text-xs font-semibold text-white/70 mb-2 italic print:text-black/80">
              Founder & Content Creator
            </p>
            <ul className="list-disc list-outside ml-4 space-y-1.5 text-xs sm:text-sm text-white/75 print:text-black/90">
              <li>Grew designpreneurss to <span className="font-bold text-white print:text-black">30,000+ followers</span> by producing trend-led reels, carousels, and tutorials on UI/UX, Photoshop, and Canva.</li>
              <li>Own the full content lifecycle — ideation, shooting, editing, captioning, scheduling, and community engagement.</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-xs font-bold tracking-widest text-[var(--color-accent)] uppercase mb-4 print:text-black print:border-b print:border-black">
            Education
          </h2>
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h3 className="text-base font-bold text-[#FFFCF2] print:text-black">
                IIITDM Kancheepuram <span className="font-normal text-xs text-white/50 print:text-black/60">— Chennai, Tamil Nadu</span>
              </h3>
              <span className="text-xs font-medium text-[var(--color-accent)] print:text-black">Nov 2022 – May 2026</span>
            </div>
            <p className="text-xs font-semibold text-white/70 mb-2 italic print:text-black/80">
              B.Tech — Computer Science & Engineering (Artificial Intelligence)
            </p>
            <p className="text-xs sm:text-sm text-white/75 print:text-black/90">
              <span className="font-medium text-white print:text-black">Relevant Coursework:</span> Human-Computer Interaction, Product Design, UX Strategy, Artificial Intelligence.
            </p>
          </div>
        </section>

        {/* Skills & Languages */}
        <section>
          <h2 className="text-xs font-bold tracking-widest text-[var(--color-accent)] uppercase mb-4 print:text-black print:border-b print:border-black">
            Skills & Languages
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm print:text-black">
            <div>
              <span className="font-bold text-white print:text-black block mb-1">AI Video Production:</span>
              <p className="text-white/75 print:text-black/90">Higgsfield, HeyGen, Claude, Motion Design, AI Video Tools</p>
            </div>
            <div>
              <span className="font-bold text-white print:text-black block mb-1">Video & Editing:</span>
              <p className="text-white/75 print:text-black/90">CapCut, Short-Form Video Editing, Mobile Videography, Reel Shooting</p>
            </div>
            <div>
              <span className="font-bold text-white print:text-black block mb-1">Content & Social:</span>
              <p className="text-white/75 print:text-black/90">Instagram Reels, Content Strategy, Trend Research, Content Scheduling</p>
            </div>
            <div>
              <span className="font-bold text-white print:text-black block mb-1">Design Tools:</span>
              <p className="text-white/75 print:text-black/90">Figma, Canva, Adobe Photoshop, Adobe Lightroom</p>
            </div>
            <div className="sm:col-span-2 pt-2 border-t border-white/10 print:border-black/20">
              <span className="font-bold text-white print:text-black">Languages:</span>{" "}
              <span className="text-white/75 print:text-black/90">English, Telugu (Native), Hindi</span>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
