import BackgroundEffects from "@/components/BackgroundEffects";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";
import FloatingSideNav from "@/components/FloatingSideNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SkillsMatrix from "@/components/SkillsMatrix";
import Projects from "@/components/Projects";
import CaseStudies from "@/components/CaseStudies";
import ExposureLeadership from "@/components/ExposureLeadership";
import MerchWidgets from "@/components/MerchWidgets";
import PhilosophyTimeline from "@/components/PhilosophyTimeline";
import Workflow from "@/components/Workflow";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08090D] text-slate-100 relative overflow-hidden font-sans scroll-smooth">
      <BackgroundEffects />
      <Navbar />
      <FloatingSideNav />
      <Hero />
      <About />
      <SkillsMatrix />
      <Projects />
      <CaseStudies />
      <ExposureLeadership />
      <MerchWidgets />
      <PhilosophyTimeline />
      <Workflow />
      <ContactFooter />
      <ScrollToTop />
    </main>
  );
}