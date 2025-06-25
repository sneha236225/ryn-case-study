import BlogSection from "./components/BlogSection";
import { Experience } from "./components/Experience";
import ExpertiseSection from "./components/ExpertiseSection";
import FAQSection from "./components/FAQ";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Testimonial from "./components/Testimonial";
import WorksSection from "./components/WorksSection";
import "./index.css";

function App() {
  return (
    <>
      <HeroSection />
      <ExpertiseSection/>
      <WorksSection/>
      <Experience/>
      <BlogSection/>
      <Testimonial/>
      <FAQSection/>
      <Footer/>
    </>
  );
}

export default App;
