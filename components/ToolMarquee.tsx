"use client";

import { motion } from "framer-motion";
import {
  SiFigma,
  SiCanva,
  SiOpenai,
  SiGooglegemini,
  SiAnthropic,
  SiNotion,
  SiInstagram,
  SiPinterest,
  SiYoutube
} from "react-icons/si";
import { TbBrandAdobePhotoshop, TbBrandAdobePremier } from "react-icons/tb";

// Colorful Brand SVG Icons
const HiggsfieldIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="24" height="24" rx="5" fill="#1A1921" />
    <path d="M6 5v14M18 5v14M6 12h12" stroke="#FF5722" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="12" cy="12" r="2.5" fill="#FF9800" />
  </svg>
);

const ElevenLabsIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="24" height="24" rx="5" fill="#0F0F12" />
    <rect x="7" y="5" width="3" height="14" rx="1.5" fill="#6366F1" />
    <rect x="14" y="5" width="3" height="14" rx="1.5" fill="#818CF8" />
  </svg>
);

const HeyGenIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="24" height="24" rx="5" fill="#181028" />
    <circle cx="12" cy="12" r="9" fill="url(#heygen-grad)" />
    <polygon points="10,8 16,12 10,16" fill="#FFFFFF" />
    <defs>
      <linearGradient id="heygen-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#EC4899" />
      </linearGradient>
    </defs>
  </svg>
);

const CapCutIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="24" height="24" rx="5" fill="#000000" />
    <path d="M7 8l5 4-5 4V8z" fill="#00F0FF" />
    <path d="M17 8l-5 4 5 4V8z" fill="#FF0055" />
    <rect x="6" y="6" width="12" height="12" rx="2" stroke="#FFFFFF" strokeWidth="1.2" />
  </svg>
);

const LightroomIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="24" height="24" rx="4" fill="#001E36" stroke="#31A8FF" strokeWidth="1.5" />
    <text x="5" y="16" fill="#31A8FF" fontSize="11" fontWeight="bold" fontFamily="Arial">Lr</text>
  </svg>
);

const PhotoshopIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="24" height="24" rx="4" fill="#001E36" stroke="#31A8FF" strokeWidth="1.5" />
    <text x="5" y="16" fill="#31A8FF" fontSize="11" fontWeight="bold" fontFamily="Arial">Ps</text>
  </svg>
);

const PremiereIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="24" height="24" rx="4" fill="#260033" stroke="#9999FF" strokeWidth="1.5" />
    <text x="5" y="16" fill="#9999FF" fontSize="11" fontWeight="bold" fontFamily="Arial">Pr</text>
  </svg>
);

const tools = [
  { name: "Higgsfield AI", Icon: HiggsfieldIcon, color: "#FF5722" },
  { name: "ElevenLabs", Icon: ElevenLabsIcon, color: "#6366F1" },
  { name: "Claude", Icon: SiAnthropic, color: "#D97757" },
  { name: "HeyGen", Icon: HeyGenIcon, color: "#EC4899" },
  { name: "ChatGPT", Icon: SiOpenai, color: "#10A37F" },
  { name: "Gemini", Icon: SiGooglegemini, color: "#8E24AA" },
  { name: "CapCut", Icon: CapCutIcon, color: "#00F0FF" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
  { name: "Photoshop", Icon: PhotoshopIcon, color: "#31A8FF" },
  { name: "Lightroom", Icon: LightroomIcon, color: "#31A8FF" },
  { name: "Premiere Pro", Icon: PremiereIcon, color: "#9999FF" },
  { name: "Canva", Icon: SiCanva, color: "#00C4CC" },
  { name: "Notion", Icon: SiNotion, color: "#FFFFFF" },
  { name: "Instagram", Icon: SiInstagram, color: "#E4405F" },
  { name: "Pinterest", Icon: SiPinterest, color: "#E60023" },
  { name: "YouTube", Icon: SiYoutube, color: "#FF0000" }
];

export const ToolMarquee = () => {
  return (
    <div className="py-6 w-full overflow-hidden relative border-y border-white/10 bg-white/[0.02] backdrop-blur-md">
      {/* Gradient fades on the edges for smooth entry/exit */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="flex w-max">
        <motion.div
          className="flex space-x-12 md:space-x-20 px-6 md:px-12 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 36,
            repeat: Infinity,
          }}
        >
          {/* Repeat tools multiple times to create a seamless infinite scroll */}
          {[...tools, ...tools, ...tools, ...tools].map((tool, idx) => {
            const IconComponent = tool.Icon;
            return (
              <div 
                key={idx} 
                className="group relative flex flex-col items-center justify-center px-4 cursor-pointer"
              >
                <div 
                  className="transition-all duration-300 transform group-hover:scale-125 filter drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]"
                  style={{ color: tool.color }}
                >
                  <IconComponent className="w-7 h-7 md:w-8 md:h-8" />
                </div>
                <span className="absolute -bottom-6 opacity-0 group-hover:opacity-100 transition-all duration-300 text-[10px] md:text-xs font-semibold text-white whitespace-nowrap tracking-wider uppercase drop-shadow-md">
                  {tool.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};
