"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Sparkles,
  X,
  Volume2,
  VolumeX,
  RotateCcw,
  Maximize2,
  Flame
} from "lucide-react";
import Image from "next/image";

interface UGCVideoItem {
  id: string;
  title: string;
  desc: string;
  src: string;
  poster: string;
  tag: string;
  duration?: string;
}

const ugcVideos: UGCVideoItem[] = [
  {
    id: "ugc-1",
    title: "UGC Series Intro",
    desc: "High-retention series hook designed for Influx Health patient outreach.",
    src: "/videos/ugc/series-intro_sep29.mp4",
    poster: "/videos/ugc/posters/series-intro_sep29.jpg",
    tag: "Series Hook",
    duration: "0:45"
  },
  {
    id: "ugc-2",
    title: "5 Key Patient Questions",
    desc: "Interactive Q&A format addressing essential healthcare inquiries.",
    src: "/videos/ugc/five-questions_sep29.mp4",
    poster: "/videos/ugc/posters/five-questions_sep29.jpg",
    tag: "Q&A Format",
    duration: "0:50"
  },
  {
    id: "ugc-3",
    title: "Marketing Budget & ROI",
    desc: "Data-focused breakdown of clinic marketing efficiency and patient funnels.",
    src: "/videos/ugc/marketing-budget_sep29.mp4",
    poster: "/videos/ugc/posters/marketing-budget_sep29.jpg",
    tag: "ROI Breakdown",
    duration: "1:02"
  },
  {
    id: "ugc-4",
    title: "Finding the Best Doctor",
    desc: "Authentic testimonial UGC highlighting specialist discovery & booking.",
    src: "/videos/ugc/Best_Dr_Final.mp4",
    poster: "/videos/ugc/posters/Best_Dr_Final.jpg",
    tag: "Doctor Booking",
    duration: "0:40"
  },
  {
    id: "ugc-5",
    title: "5-Min Diagnostic Test",
    desc: "Fast-paced UGC feature showing home testing convenience & swift results.",
    src: "/videos/ugc/5min_Test_Final_24sep.mp4",
    poster: "/videos/ugc/posters/5min_Test_Final_24sep.jpg",
    tag: "Diagnostics",
    duration: "0:35"
  },
  {
    id: "ugc-6",
    title: "Clinic Revenue Growth",
    desc: "Impactful UGC storytelling showing clinic scale & active user engagement.",
    src: "/videos/ugc/Revenue_Final_Sep24.mp4",
    poster: "/videos/ugc/posters/Revenue_Final_Sep24.jpg",
    tag: "Growth Story",
    duration: "0:55"
  },
  {
    id: "ugc-7",
    title: "Diagnostic Video Review",
    desc: "User perspective reviewing digital lab reports and doctor consultations.",
    src: "/videos/ugc/Review_Diagnostics_Videos_Sep25.mp4",
    poster: "/videos/ugc/posters/Review_Diagnostics_Videos_Sep25.jpg",
    tag: "User Review",
    duration: "0:48"
  },
  {
    id: "ugc-8",
    title: "Metrics vs Real Retention",
    desc: "Insightful breakdown comparing vanity metrics to sustainable patient growth.",
    src: "/videos/ugc/Vanity_matrix_final_sep25.mp4",
    poster: "/videos/ugc/posters/Vanity_matrix_final_sep25.jpg",
    tag: "Analytics",
    duration: "0:52"
  },
  {
    id: "ugc-9",
    title: "Front Desk & Reception",
    desc: "Short-form showcase of automated clinic booking & reception efficiency.",
    src: "/videos/ugc/front-desk-Sep26.mp4",
    poster: "/videos/ugc/posters/front-desk-Sep26.jpg",
    tag: "Operations",
    duration: "0:38"
  },
  {
    id: "ugc-10",
    title: "10-Sec High-Convert Hook",
    desc: "Ultra short-form promotional hook video tailored for high-CTR social ads.",
    src: "/videos/ugc/website-10-sec_sep26.mp4",
    poster: "/videos/ugc/posters/website-10-sec_sep26.jpg",
    tag: "Ad Hook",
    duration: "0:10"
  },
  {
    id: "ugc-11",
    title: "App Walkthrough UGC",
    desc: "Mobile-first walkthrough demonstrating effortless specialist appointment booking.",
    src: "/videos/ugc/V1_Sep24_vid3.mp4",
    poster: "/videos/ugc/posters/V1_Sep24_vid3.jpg",
    tag: "App Showcase",
    duration: "0:42"
  }
];

// Ultra-performant Marquee Card: Uses sharp poster image during scroll & plays video preview on hover
const UGCCard = ({
  video,
  onSelect
}: {
  video: UGCVideoItem;
  onSelect: (video: UGCVideoItem) => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isHovered && videoRef.current) {
      const el = videoRef.current;
      el.muted = true;
      el.play().catch(() => {});
    }
  }, [isHovered]);

  return (
    <div
      onClick={() => onSelect(video)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex-shrink-0 w-[240px] sm:w-[280px] md:w-[320px] aspect-[9/16] rounded-3xl overflow-hidden bg-[#16161a] border border-white/10 hover:border-[var(--color-accent)] hover:shadow-[0_0_35px_rgba(235,94,40,0.4)] transition-all duration-300 cursor-pointer select-none transform hover:-translate-y-1.5 will-change-transform"
    >
      {/* Background Poster Image (Loaded instantly for 100% butter-smooth 60fps marquee scrolling) */}
      <img
        src={video.poster}
        alt={video.title}
        loading="lazy"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Live Video Preview (Plays seamlessly on Hover when scrolling is paused) */}
      {isHovered && (
        <video
          ref={videoRef}
          src={video.src}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/20 pointer-events-none transition-opacity duration-300 group-hover:opacity-90" />

      {/* Tag Badge */}
      <div className="absolute top-3.5 left-3.5 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[var(--color-accent)] uppercase tracking-wider border border-white/15 shadow-md flex items-center gap-1.5 z-10">
        <Flame size={11} className="text-[var(--color-accent)]" />
        <span>{video.tag}</span>
      </div>

      {/* Duration Badge */}
      {video.duration && (
        <div className="absolute top-3.5 right-3.5 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-white/90 border border-white/15 shadow-md z-10">
          {video.duration}
        </div>
      )}

      {/* Center Hover Play Button */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10">
        <div className="w-14 h-14 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center shadow-[0_0_30px_rgba(235,94,40,0.8)] scale-90 group-hover:scale-100 transition-transform duration-300 border border-white/40">
          <Play className="w-6 h-6 fill-current ml-1" />
        </div>
      </div>

      {/* Bottom Content Info */}
      <div className="absolute bottom-0 inset-x-0 p-5 pt-12 flex flex-col justify-end pointer-events-none z-10">
        <h3 className="text-base font-extrabold text-[#FFFCF2] leading-tight mb-1.5 group-hover:text-[var(--color-accent)] transition-colors drop-shadow-md">
          {video.title}
        </h3>
        <p className="text-xs text-[#CCC5B9]/90 leading-relaxed line-clamp-2 font-normal">
          {video.desc}
        </p>

        <div className="mt-3 flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-[var(--color-accent)] uppercase">
          <span>Click to Play Unmuted</span>
          <Maximize2 size={10} />
        </div>
      </div>
    </div>
  );
};

export const UGCVideos = () => {
  const [activeVideo, setActiveVideo] = useState<UGCVideoItem | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  // Open active video modal starting from currentTime = 0, unmuted
  const handleSelectVideo = (video: UGCVideoItem) => {
    setActiveVideo(video);
    setIsMuted(false);
  };

  useEffect(() => {
    if (activeVideo && modalVideoRef.current) {
      const el = modalVideoRef.current;
      el.currentTime = 0; // Restart from 0:00
      el.muted = false; // Unmute
      setIsMuted(false);

      const promise = el.play();
      if (promise !== undefined) {
        promise.catch((err) => {
          console.warn("Audio autoplay blocked by browser policy:", err);
          el.muted = true;
          setIsMuted(true);
          el.play().catch(() => {});
        });
      }
    }
  }, [activeVideo]);

  const handleRestart = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.currentTime = 0;
      modalVideoRef.current.play().catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!modalVideoRef.current) return;
    const nextState = !isMuted;
    modalVideoRef.current.muted = nextState;
    setIsMuted(nextState);
  };

  // Duplicate items array for seamless continuous looping marquee
  const marqueeItems = [...ugcVideos, ...ugcVideos];

  return (
    <section id="ugc-videos" className="py-24 relative z-10 overflow-hidden bg-transparent">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-12 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-2">
            <Sparkles size={14} />
            <span>04 — UGC VIDEO REELS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#FFFCF2] tracking-tight">
            UGC Campaigns & Edits
          </h2>
        </div>
        <p className="text-sm sm:text-base text-white/60 max-w-lg leading-relaxed font-normal">
          High-converting user-generated video edits crafted for patient outreach, clinic growth, and high social media retention.
        </p>
      </div>

      {/* Marquee Wrapper with Left & Right Black Fade Overlays */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left Black Fade Gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 md:w-56 bg-gradient-to-r from-[#121212] via-[#121212]/90 to-transparent z-20 pointer-events-none" />

        {/* Right Black Fade Gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 md:w-56 bg-gradient-to-l from-[#121212] via-[#121212]/90 to-transparent z-20 pointer-events-none" />

        {/* Scrolling Track: Right to Left Loop & Pauses on Hover */}
        <div className="animate-marquee-rtl gap-6 px-3">
          {marqueeItems.map((item, index) => (
            <UGCCard
              key={`${item.id}-${index}`}
              video={item}
              onSelect={handleSelectVideo}
            />
          ))}
        </div>
      </div>

      {/* Helper text prompt */}
      <div className="text-center mt-6 text-xs text-white/40 font-mono tracking-wider flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
        Hover any video to pause & preview • Click to play from beginning unmuted
      </div>

      {/* Spotlight Video Modal Player */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/92 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md sm:max-w-lg bg-[#141418] border border-white/20 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(235,94,40,0.3)] flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5 backdrop-blur-md">
                <div>
                  <h3 className="text-sm font-bold text-[#FFFCF2] leading-snug">
                    {activeVideo.title}
                  </h3>
                  <span className="text-[10px] text-[var(--color-accent)] font-semibold uppercase tracking-widest">
                    {activeVideo.tag} • Playing from 0:00
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Restart Button */}
                  <button
                    onClick={handleRestart}
                    title="Play from Beginning"
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  >
                    <RotateCcw size={16} />
                  </button>

                  {/* Toggle Sound */}
                  <button
                    onClick={toggleMute}
                    title={isMuted ? "Unmute" : "Mute"}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer flex items-center gap-1 text-xs px-3"
                  >
                    {isMuted ? (
                      <>
                        <VolumeX size={16} className="text-red-400" />
                        <span className="text-red-400 font-bold">Unmute</span>
                      </>
                    ) : (
                      <>
                        <Volume2 size={16} className="text-emerald-400" />
                        <span className="text-emerald-400 font-bold">Muted</span>
                      </>
                    )}
                  </button>

                  {/* Close Modal */}
                  <button
                    onClick={() => setActiveVideo(null)}
                    title="Close"
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* 9:16 Vertical Video Player */}
              <div className="relative aspect-[9/16] w-full bg-black">
                <video
                  ref={modalVideoRef}
                  src={activeVideo.src}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Modal Footer Description */}
              <div className="p-4 bg-white/[0.03] border-t border-white/10 flex items-center justify-between gap-4">
                <p className="text-xs text-[#CCC5B9] font-normal leading-relaxed line-clamp-2">
                  {activeVideo.desc}
                </p>

                <button
                  onClick={handleRestart}
                  className="flex-shrink-0 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--color-accent)] text-white text-xs font-bold hover:bg-[#ff6e38] transition-all cursor-pointer shadow-md"
                >
                  <RotateCcw size={12} />
                  <span>Restart (0:00)</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
