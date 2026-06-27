import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProcessSection from "./components/ProcessSection";
import CaseStudySection from "./components/CaseStudySection";
import DifferenceSection from "./components/DifferenceSection";
import TeamSection from "./components/TeamSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <CaseStudySection />
        <DifferenceSection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
