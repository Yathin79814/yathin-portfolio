"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export const Overlay = ({ scrollYProgress }: OverlayProps) => {
  const op1 = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.2], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [50, -50]);

  const op2 = useTransform(scrollYProgress, [0.15, 0.25, 0.35, 0.4], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.15, 0.4], [50, -50]);

  const op3 = useTransform(scrollYProgress, [0.35, 0.45, 0.55, 0.6], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.35, 0.6], [50, -50]);

  const op4 = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.8], [0, 1, 1, 0]);
  const y4 = useTransform(scrollYProgress, [0.55, 0.8], [50, -50]);

  const op5 = useTransform(scrollYProgress, [0.75, 0.85, 0.95, 1], [0, 1, 1, 0]);
  const y5 = useTransform(scrollYProgress, [0.75, 1], [50, -50]);

  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center text-center px-4">
      <motion.div style={{ opacity: op1, y: y1 }} className="absolute">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-[#FFFCF2]">Damalla Yathin</h1>
        <p className="text-xl md:text-2xl text-[var(--color-secondary)]">AI Content Creator · Short-Form Specialist · AI Video Lead</p>
      </motion.div>

      <motion.div style={{ opacity: op2, y: y2 }} className="absolute">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight text-[#FFFCF2]">Bridging AI video production<br />with creative storytelling.</h2>
      </motion.div>

      <motion.div style={{ opacity: op3, y: y3 }} className="absolute">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-[#FFFCF2]">Higgsfield · HeyGen · Claude · CapCut</h2>
        <p className="text-xl md:text-2xl text-[var(--color-secondary)]">60+ AI Videos Produced at Scale.</p>
      </motion.div>

      <motion.div style={{ opacity: op4, y: y4 }} className="absolute">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-[#FFFCF2]">Grew a 30K+ design community</h2>
        <p className="text-xl md:text-2xl text-[var(--color-secondary)]">through strategic content & design.</p>
      </motion.div>

      <motion.div style={{ opacity: op5, y: y5 }} className="absolute">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-[#FFFCF2]">I don’t just push pixels.</h2>
        <p className="text-2xl md:text-3xl text-[var(--color-accent)] font-semibold">I design for impact.</p>
      </motion.div>
    </div>
  );
};
