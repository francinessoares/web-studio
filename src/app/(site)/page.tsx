import { AboutSection } from "@/sections/about";
import { ContactSection } from "@/sections/contact";
import { FaqSection } from "@/sections/faq";
import { FinalCtaSection } from "@/sections/final-cta";
import { Hero } from "@/sections/hero";
import { PlansSection } from "@/sections/plans";
import { ProblemSection } from "@/sections/problem";
import { ProcessSection } from "@/sections/process";
import { ProjectsSection } from "@/sections/projects";
import { ServicesSection } from "@/sections/services";
import { SolutionSection } from "@/sections/solution";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <PlansSection />
      <AboutSection />
      <FaqSection />
      <ContactSection />
      <FinalCtaSection />
    </main>
  );
}
