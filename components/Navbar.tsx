"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, FileText, ArrowUpRight } from "lucide-react";

const navLinks = [
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "gallery", label: "Gallery" },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-20% 0px -20% 0px" }
    );

    navLinks.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-5 left-0 right-0 z-[100] px-4 md:px-8 flex justify-center pointer-events-none"
    >
      <div
        className={`w-full max-w-6xl flex items-center justify-between px-4 sm:px-6 py-3 rounded-full transition-all duration-500 pointer-events-auto shadow-2xl border ${
          scrolled
            ? "bg-[#121216]/85 backdrop-blur-xl border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)]"
            : "bg-white/[0.04] backdrop-blur-md border-white/10"
        }`}
      >
        {/* Brand / Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2.5 group transition-opacity hover:opacity-90 cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white shadow-[0_0_15px_rgba(235,94,40,0.5)]">
            <Sparkles size={16} className="fill-white" />
          </div>
          <span className="font-extrabold text-sm sm:text-base tracking-tight text-[#FFFCF2]">
            Yathin
          </span>
        </button>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/10 px-3 py-1.5 rounded-full">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "text-[#FFFCF2]"
                    : "text-white/60 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 bg-white/10 rounded-full border border-white/20"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Action Button: Original PDF Resume */}
        <div className="flex items-center gap-2">
          <a
            href="/Damalla_Yathin_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-5 py-2 rounded-full bg-[var(--color-accent)] text-white text-xs sm:text-sm font-bold tracking-tight shadow-[0_0_20px_rgba(235,94,40,0.4)] hover:bg-[#ff6e38] hover:shadow-[0_0_25px_rgba(235,94,40,0.6)] transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            <FileText size={15} />
            <span>Resume</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </motion.header>
  );
};
