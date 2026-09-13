"use client";

import { motion } from "framer-motion";
import {
  SiFigma,
  SiCanva,
  SiOpenai,
  SiGooglegemini,
  SiNotion,
  SiInstagram,
  SiPinterest,
  SiYoutube
} from "react-icons/si";

// Colorful Brand SVG Icons with high contrast gradient badges
const HiggsfieldIcon = (props: any) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="32" height="32" rx="8" fill="url(#higgsfield-bg)" />
    <path d="M9 8V24M23 8V24M9 16H23" stroke="#FFFFFF" strokeWidth="3.2" strokeLinecap="round" />
    <circle cx="16" cy="16" r="3.5" fill="#FFD700" stroke="#FFFFFF" strokeWidth="1.2" />
    <defs>
      <linearGradient id="higgsfield-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF4500" />
        <stop offset="50%" stopColor="#FF6B00" />
        <stop offset="100%" stopColor="#FF8C00" />
      </linearGradient>
    </defs>
  </svg>
);

const ElevenLabsIcon = (props: any) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="32" height="32" rx="8" fill="#000000" stroke="#333345" strokeWidth="1" />
    <rect x="9" y="7" width="4" height="18" rx="2" fill="#6366F1" />
    <rect x="19" y="7" width="4" height="18" rx="2" fill="#818CF8" />
  </svg>
);

const ClaudeIcon = (props: any) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="32" height="32" rx="8" fill="#D97757" />
    <path d="M16 6L18.5 13.5L26 16L18.5 18.5L16 26L13.5 18.5L6 16L13.5 13.5L16 6Z" fill="#FFFFFF" />
  </svg>
);

const HeyGenIcon = (props: any) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="32" height="32" rx="8" fill="url(#heygen-bg)" />
    <path d="M12 9.5V22.5L22 16L12 9.5Z" fill="#FFFFFF" />
    <defs>
      <linearGradient id="heygen-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7C3AED" />
        <stop offset="100%" stopColor="#EC4899" />
      </linearGradient>
    </defs>
  </svg>
);

const CapCutIcon = (props: any) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="32" height="32" rx="8" fill="#0D0D12" stroke="#2D2D3A" strokeWidth="1" />
    <path d="M8 10L14 16L8 22V10Z" fill="#00F0FF" />
    <path d="M24 10L18 16L24 22V10Z" fill="#FF0055" />
    <circle cx="16" cy="16" r="2.5" fill="#FFFFFF" />
  </svg>
);

const LightroomIcon = (props: any) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="32" height="32" rx="6" fill="#001E36" stroke="#31A8FF" strokeWidth="1.5" />
    <text x="6" y="22" fill="#31A8FF" fontSize="15" fontWeight="bold" fontFamily="Arial">Lr</text>
  </svg>
);

const PhotoshopIcon = (props: any) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="32" height="32" rx="6" fill="#001E36" stroke="#31A8FF" strokeWidth="1.5" />
    <text x="6" y="22" fill="#31A8FF" fontSize="15" fontWeight="bold" fontFamily="Arial">Ps</text>
  </svg>
);

const PremiereIcon = (props: any) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="32" height="32" rx="6" fill="#260033" stroke="#9999FF" strokeWidth="1.5" />
    <text x="6" y="22" fill="#9999FF" fontSize="15" fontWeight="bold" fontFamily="Arial">Pr</text>
  </svg>
);

const tools = [
  { name: "Higgsfield AI", Icon: HiggsfieldIcon, color: "#FF5722" },
  { name: "ElevenLabs", Icon: ElevenLabsIcon, color: "#6366F1" },
  { name: "Claude", Icon: ClaudeIcon, color: "#D97757" },
  { name: "HeyGen", Icon: HeyGenIcon, color: "#EC4899" },
  { name: "CapCut", Icon: CapCutIcon, color: "#00F0FF" },
  { name: "ChatGPT", Icon: SiOpenai, color: "#10A37F" },
  { name: "Gemini", Icon: SiGooglegemini, color: "#8E24AA" },
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
                  className="transition-all duration-300 transform group-hover:scale-125 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.25)]"
                >
                  <IconComponent className="w-8 h-8 md:w-9 md:h-9" />
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
