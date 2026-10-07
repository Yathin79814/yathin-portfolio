import fs from "fs";
import path from "path";
import { GlobalSpaceCanvas } from "@/components/GlobalSpaceCanvas";
import { Preloader } from "@/components/Preloader";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ToolMarquee } from "@/components/ToolMarquee";
import { Services } from "@/components/Services";
import { WorkVideos } from "@/components/WorkVideos";
import { UGCVideos } from "@/components/UGCVideos";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Achievements } from "@/components/Achievements";
import { Experience } from "@/components/Experience";
import { PinterestAds } from "@/components/PinterestAds";
import { CombinedGallery } from "@/components/CombinedGallery";
import { CTA } from "@/components/CTA";

export default async function Home() {
  const categories = ["ncc", "savara", "imagix", "cvip"];
  let galleryFiles: string[] = [];

  try {
    categories.forEach((category) => {
      const dirPath = path.join(process.cwd(), "public", "work", category);
      if (fs.existsSync(dirPath)) {
        const files = fs.readdirSync(dirPath)
          .filter((file) => !file.startsWith("."))
          .map((file) => `/work/${category}/${file}`);
        galleryFiles = [...galleryFiles, ...files];
      }
    });
  } catch (error) {
    console.error("Error reading gallery files in Home page:", error);
  }

  return (
    <main className="relative bg-[#121212] min-h-screen selection:bg-[var(--color-accent)] selection:text-white">
      {/* Futuristic Preloader Curtain */}
      <Preloader />

      {/* Top Floating Glass Navbar */}
      <Navbar />

      {/* Global 3D Space Canvas spanning across all sections */}
      <GlobalSpaceCanvas />

      {/* Redesigned Split Hero with Image Fade */}
      <Hero />
      
      <div className="relative bg-transparent z-20 pt-6 pb-12">
        <ToolMarquee />
        <Services />
        <WorkVideos />
        <UGCVideos />
        <About />
        <Experience />
        <PinterestAds />
        <Achievements />
        <Skills />
        <CombinedGallery files={galleryFiles} />
        <CTA />
      </div>
    </main>
  );
}
