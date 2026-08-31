import { AboutSection } from "@/sections/about";
import { ContactSection } from "@/sections/contact";
import { FaqSection } from "@/sections/faq";
import { FinalCtaSection } from "@/sections/final-cta";
import { Hero } from "@/sections/hero";
import { ProblemSection } from "@/sections/problem";
import { ProcessSection } from "@/sections/process";
import { ProjectsSection } from "@/sections/projects";
import { ServicesSection } from "@/sections/services";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <ProblemSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <AboutSection />
      <FaqSection />
      <ContactSection />
      <FinalCtaSection />
    </main>
  );
}
