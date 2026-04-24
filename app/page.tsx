
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LMS from "./components/LMS";
import TrainingPrograms from "./components/TrainingPrograms";
import ManagementsProgram from "./components/ManagementsProgram";
import ExtraPrograms from "./components/ExtraPrograms";
import CtaAndTestimonial from "./components/CtaAndTestimonial";
import Footer from "./components/Footer";

export default function TrainingPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LMS />
      <TrainingPrograms />
      <ManagementsProgram />
      <ExtraPrograms />
      <CtaAndTestimonial />
      <Footer />
    </main>
  );
}
