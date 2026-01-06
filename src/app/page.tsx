import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import Experience from "./components/Experience";
import VisualSection from "./components/VisualSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Manifesto />
      <Experience />
      <VisualSection />
      <Footer />
    </main>
  );
}
