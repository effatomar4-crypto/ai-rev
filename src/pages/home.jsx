import AiBenefits from "../components/aiBenefits";
import AiTypes from "../components/aiTypes";
import Contact from "../components/contact";
import Footer from "../components/footer";
import HeroSection from "../components/heroSection";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
    <Navbar />
    <main>
         <HeroSection />
         <AiTypes />
         <AiBenefits />
         <Contact />
         <HeroSection />
    </main>
    <Footer />
    </>
  )
}