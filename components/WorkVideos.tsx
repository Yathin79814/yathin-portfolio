"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Sparkles, X, Volume2, VolumeX, Maximize2, ChevronDown } from "lucide-react";

interface VideoItem {
  id: string;
  title: string;
  desc: string;
  src: string;
  category: "Hinglish" | "Telugu" | "Healthcare AI" | "Promotional Ads" | "Gen-AI Shorts";
  tags: string[];
  duration?: string;
}

// Shuffled variety list so items are interspersed across categories
const videoData: VideoItem[] = [
  {
    id: "health-1",
    title: "Breast Cancer Early Detection & Care",
    desc: "Healthcare-compliant awareness video combining generative diffusion visuals with AI voice narration.",
    src: "/videos/influx/breast_cancer.mp4",
    category: "Healthcare AI",
    tags: ["Healthcare AI", "Oncology"],
    duration: "1:15"
  },
  {
    id: "hinglish-1",
    title: "Knee Joint Rehabilitation & Care",
    desc: "AI video campaign explaining joint rehabilitation, scripted with Claude and voiced in Hinglish with CapCut motion editing.",
    src: "/videos/influx/knee_hinglish_2.mp4",
    category: "Hinglish",
    tags: ["Hinglish", "Orthopedics"],
    duration: "0:45"
  },
  {
    id: "promo-1",
    title: "Influx Health — Digital Healthcare Ad",
    desc: "High-converting short-form commercial promoting AI-powered patient consultation services.",
    src: "/videos/influx/influx_ad.mp4",
    category: "Promotional Ads",
    tags: ["Promotional Ad", "Brand Campaign"],
    duration: "0:45"
  },
  {
    id: "genai-1",
    title: "AI Product Commercial — Holi Campaign",
    desc: "Festive AI product commercial created with generative diffusion and neural video synthesis.",
    src: "/videos/Task3.mp4",
    category: "Gen-AI Shorts",
    tags: ["Gen-AI Commercial", "Diffusion"],
    duration: "0:30"
  },
  {
    id: "telugu-1",
    title: "Diabetes Awareness & Daily Prevention",
    desc: "Regional AI video campaign on diabetes management created for South Indian patient outreach.",
    src: "/videos/influx/diabetes_telugu_1.mp4",
    category: "Telugu",
    tags: ["Telugu", "Diabetes Care"],
    duration: "1:05"
  },
  {
    id: "health-4",
    title: "Modern Robotic Surgery Precision",
    desc: "Cinematic short showcasing robotic surgical systems in modern operating suites.",
    src: "/videos/influx/robotic_surgery.mp4",
    category: "Healthcare AI",
    tags: ["Robotic Surgery", "3D Motion"],
    duration: "0:30"
  },
  {
    id: "promo-2",
    title: "Influx Health — Patient Care Journey",
    desc: "Brand story video highlighting seamless patient onboarding and specialist consultations.",
    src: "/videos/influx/influx_health_2.mp4",
    category: "Promotional Ads",
    tags: ["Brand Ad", "Healthcare"],
    duration: "0:58"
  },
  {
    id: "genai-2",
    title: "AI Product Commercial — Spices Campaign",
    desc: "Sensory AI-generated brand commercial for organic spices combining motion editing and sound design.",
    src: "/videos/Task2.mp4",
    category: "Gen-AI Shorts",
    tags: ["Product Ad", "AI Generation"],
    duration: "0:35"
  },
  {
    id: "health-2",
    title: "Emergency Protocol: Cardiac Arrest",
    desc: "High-paced educational video detailing critical first-response steps for cardiac emergencies.",
    src: "/videos/influx/cardiac_arrest.mp4",
    category: "Healthcare AI",
    tags: ["Healthcare AI", "Cardiology"],
    duration: "1:10"
  },
  {
    id: "hinglish-2",
    title: "Knee Replacement & Therapy Guide",
    desc: "Short-form patient education video breaking down knee replacement steps using Higgsfield visuals & HeyGen AI.",
    src: "/videos/influx/knee_hinglish_3.mp4",
    category: "Hinglish",
    tags: ["Hinglish", "Knee Care"],
    duration: "0:50"
  },
  {
    id: "telugu-2",
    title: "Knee Health & Joint Recovery",
    desc: "AI voiceover & vertical motion graphics explaining joint therapy options in regional Telugu.",
    src: "/videos/influx/knee_telugu_2.mp4",
    category: "Telugu",
    tags: ["Telugu", "Orthopedics"],
    duration: "0:48"
  },
  {
    id: "health-3",
    title: "Colon Cancer Screening & Diagnosis",
    desc: "AI video campaign emphasizing early diagnostic screening for gastrointestinal health.",
    src: "/videos/influx/colon_cancer.mp4",
    category: "Healthcare AI",
    tags: ["Healthcare AI", "Gastroenterology"],
    duration: "1:20"
  },
  {
    id: "promo-3",
    title: "Influx Health — Specialty Care Campaign",
    desc: "Vertical promotional ad showcasing multi-specialty healthcare services.",
    src: "/videos/influx/influx_health_4.mp4",
    category: "Promotional Ads",
    tags: ["Short-Form Ad", "Higgsfield"],
    duration: "0:40"
  },
  {
    id: "genai-3",
    title: "Cinematic Gen-AI Short Film",
    desc: "Experimental short film combining neural camera synthesis, generative AI, and multi-track pacing.",
    src: "/videos/Ai_shortfilm.mp4",
    category: "Gen-AI Shorts",
    tags: ["AI Short Film", "Generative AI"],
    duration: "1:45"
  },
  {
    id: "health-5",
    title: "Advanced ENT & Sinus Surgery Guide",
    desc: "Vertical explainer video detailing ear, nose, and throat surgical procedures.",
    src: "/videos/influx/ent_2.mp4",
    category: "Healthcare AI",
    tags: ["Healthcare AI", "ENT"],
    duration: "0:55"
  },
  {
    id: "health-6",
    title: "Ophthalmology & Vision Correction",
    desc: "Patient education video covering eye care, lens procedures, and laser vision correction.",
    src: "/videos/influx/eye_1.mp4",
    category: "Healthcare AI",
    tags: ["Healthcare AI", "Ophthalmology"],
    duration: "1:00"
  },
  {
    id: "promo-4",
    title: "Influx Health — Promotional Reel",
    desc: "Dynamic social reel tailored for high engagement on Instagram & social channels.",
    src: "/videos/influx/influx_edited.mp4",
    category: "Promotional Ads",
    tags: ["Social Reel", "Motion Design"],
    duration: "0:35"
  },
  {
    id: "health-7",
    title: "Hypothyroidism & Metabolic Wellness",
    desc: "Short-form explainer video breaking down thyroid health and daily metabolic wellness.",
    src: "/videos/influx/hypothyroidism.mp4",
    category: "Healthcare AI",
    tags: ["Healthcare AI", "Endocrinology"],
    duration: "0:52"
  },
  {
    id: "genai-4",
    title: "Savara Creative AI Campaign",
    desc: "Neural stylization and AI editing campaign produced with advanced multi-track timing.",
    src: "/videos/Savara vvAi edit.mp4",
    category: "Gen-AI Shorts",
    tags: ["Neural Editing", "AI Campaign"],
    duration: "1:10"
  },
  {
    id: "health-8",
    title: "Advanced Surgical Specialties Overview",
    desc: "Multi-specialty surgical showcase produced for healthcare marketing channels.",
    src: "/videos/influx/surgical_specialties_1.mp4",
    category: "Healthcare AI",
    tags: ["Surgery AI", "Higgsfield"],
    duration: "1:25"
  }
];

const categories = [
  "All",
  "Hinglish",
  "Telugu",
  "Healthcare AI",
  "Promotional Ads",
  "Gen-AI Shorts"
] as const;

const ReelCard = ({
  video,
  onClick,
}: {
  video: VideoItem;
  onClick: () => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    el.muted = true;
    let isMounted = true;

    const startPlayback = async () => {
      try {
        if (el.paused && isMounted) {
          await el.play();
        }
      } catch (err: any) {
        // Silently catch AbortError & NotAllowedError from browser media throttling
      }
    };

    startPlayback();

    return () => {
      isMounted = false;
      if (el) {
        el.pause();
      }
    };
  }, [video.src]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="group relative aspect-[9/16] w-full rounded-3xl overflow-hidden bg-[#16161a] border border-white/10 hover:border-[var(--color-accent)]/60 hover:shadow-[0_0_35px_rgba(235,94,40,0.25)] transition-all duration-500 cursor-pointer select-none"
    >
      {/* Full Bleed Background Video */}
      <video
        ref={videoRef}
        src={video.src}
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/20 pointer-events-none transition-opacity duration-300 group-hover:opacity-90" />

      {/* Category Pill Tag - Top Left */}
      <div className="absolute top-3.5 left-3.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[var(--color-accent)] uppercase tracking-wider border border-white/15 shadow-md">
        {video.category}
      </div>

      {/* Duration Badge - Top Right */}
      {video.duration && (
        <div className="absolute top-3.5 right-3.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-white/90 border border-white/15 shadow-md">
          {video.duration}
        </div>
      )}

      {/* Center Hover Play Icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="w-14 h-14 rounded-full bg-[var(--color-accent)]/90 border border-white/40 backdrop-blur-md flex items-center justify-center text-white shadow-[0_0_25px_rgba(235,94,40,0.6)] scale-90 group-hover:scale-100 transition-transform duration-300">
          <Play className="w-6 h-6 fill-current ml-1" />
        </div>
      </div>

      {/* Bottom Content Information Overlay */}
      <div className="absolute bottom-0 inset-x-0 p-5 pt-12 flex flex-col justify-end pointer-events-none">
        <h3 className="text-base font-extrabold text-[#FFFCF2] leading-snug mb-1.5 group-hover:text-[var(--color-accent)] transition-colors drop-shadow-md">
          {video.title}
        </h3>
        <p className="text-xs text-[#CCC5B9]/90 leading-relaxed line-clamp-2 font-normal">
          {video.desc}
        </p>
        <div className="mt-3 flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-[var(--color-accent)] uppercase">
          <span>Click to play full video</span>
          <Maximize2 size={10} />
        </div>
      </div>
    </motion.div>
  );
};

export const WorkVideos = () => {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>("All");
  const [modalVideo, setModalVideo] = useState<VideoItem | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  
  // Display initial 2 rows (8 videos for 4-column layout)
  const [visibleCount, setVisibleCount] = useState<number>(8);

  const filteredVideos = activeCategory === "All"
    ? videoData
    : videoData.filter((v) => v.category === activeCategory);

  const displayedVideos = filteredVideos.slice(0, visibleCount);
  const hasMore = visibleCount < filteredVideos.length;

  const handleCategoryChange = (cat: typeof categories[number]) => {
    setActiveCategory(cat);
    setVisibleCount(8); // Reset to 2 rows whenever tab changes
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  const getCategoryCount = (cat: typeof categories[number]) => {
    if (cat === "All") return videoData.length;
    return videoData.filter((v) => v.category === cat).length;
  };

  return (
    <section id="videos" className="py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#FFFCF2] tracking-tight mb-4 flex items-center justify-center gap-3">
          Featured Motion & AI Work <Sparkles className="text-[var(--color-accent)] w-8 h-8 sm:w-10 sm:h-10" />
        </h2>
        <p className="text-base sm:text-lg text-[var(--color-secondary)] leading-relaxed">
          From smooth transitions to precise audio syncing and dynamic animations — I focus on making your content not just polished, but powerful.
        </p>
      </div>

      {/* Category Filter Pill Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          const count = getCategoryCount(cat);

          return (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 outline-none cursor-pointer ${
                isActive
                  ? "bg-[#FFFCF2] text-[#121212] shadow-[0_0_25px_rgba(255,252,242,0.4)] scale-105"
                  : "bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              <span>{cat}</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  isActive
                    ? "bg-[#121212] text-[var(--color-accent)]"
                    : "bg-white/10 text-white/60"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Video Reel Grid: 4 Vertical 9:16 Reel Cards per Row */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {displayedVideos.map((video) => (
            <ReelCard
              key={video.id}
              video={video}
              onClick={() => setModalVideo(video)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* View More Button (Shows when more videos are available) */}
      {hasMore && (
        <div className="mt-14 text-center">
          <button
            onClick={handleLoadMore}
            className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/5 border border-white/15 text-[#FFFCF2] font-semibold text-sm backdrop-blur-lg hover:bg-white/10 hover:border-[var(--color-accent)]/50 hover:shadow-[0_0_30px_rgba(235,94,40,0.3)] transition-all duration-300 outline-none cursor-pointer"
          >
            <span>View More Motion & AI Work</span>
            <ChevronDown size={18} className="text-[var(--color-accent)] transition-transform duration-300 group-hover:translate-y-1" />
          </button>
        </div>
      )}

      {/* Video Modal Player */}
      <AnimatePresence>
        {modalVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setModalVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-[#121216] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
                <div>
                  <h3 className="text-sm font-bold text-white">{modalVideo.title}</h3>
                  <span className="text-[10px] text-[var(--color-accent)] font-semibold uppercase">{modalVideo.category}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </button>
                  <button
                    onClick={() => setModalVideo(null)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Modal Video Player (9:16 Vertical Reel Player) */}
              <div className="relative aspect-[9/16] w-full max-h-[70vh] bg-black">
                <video
                  src={modalVideo.src}
                  controls
                  autoPlay
                  muted={isMuted}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Modal Description */}
              <div className="p-4 bg-white/[0.02]">
                <p className="text-xs text-[var(--color-secondary)] leading-relaxed">
                  {modalVideo.desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
