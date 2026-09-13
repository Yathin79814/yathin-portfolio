import fs from "fs";
import path from "path";
import { GlobalSpaceCanvas } from "@/components/GlobalSpaceCanvas";
import { Hero } from "@/components/Hero";
import { ToolMarquee } from "@/components/ToolMarquee";
import { WorkVideos } from "@/components/WorkVideos";
import { PinterestAds } from "@/components/PinterestAds";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Achievements } from "@/components/Achievements";
import { Experience } from "@/components/Experience";
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
    <main className="relative bg-black min-h-screen selection:bg-[var(--color-accent)] selection:text-white">
      {/* Global 3D Space Canvas spanning across all sections */}
      <GlobalSpaceCanvas />

      <Hero />
      
      <div className="relative bg-transparent z-20 pt-6 pb-12">
        <ToolMarquee />
        <WorkVideos />
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
