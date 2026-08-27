import { ContactCta } from "@/sections/contact";
import { Hero } from "@/sections/hero";
import { Services } from "@/sections/services";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Services />
      <ContactCta />
    </main>
  );
}
