import Nav from "@/components/chrome/Nav";
import ScrollProgress from "@/components/chrome/ScrollProgress";
import Footer from "@/components/chrome/Footer";
import SmoothScroll from "@/components/motion/SmoothScroll";
import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Vision from "@/components/sections/Vision";
import Craft from "@/components/sections/Craft";
import Customize from "@/components/sections/Customize";
import Creations from "@/components/sections/Creations";
import Maker from "@/components/sections/Maker";
import Testimonials from "@/components/sections/Testimonials";
import BeginCTA from "@/components/sections/BeginCTA";

export default function Home() {
  return (
    <SmoothScroll>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Philosophy />
        <Vision />
        <Craft />
        <Customize />
        <Creations />
        <Maker />
        <Testimonials />
        <BeginCTA />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
