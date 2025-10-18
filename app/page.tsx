import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Pricing from "./components/Pricing";
import Cases from "./components/Cases";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Pricing />
      <Cases />
      <CTA />
      <Footer />
    </main>
  );
}
