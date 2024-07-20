import Application from "@/components/Application";
import Developed from "@/components/Developed";
import Discuss from "@/components/Discuss";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Planet from "@/components/Planet";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Faq from "@/components/Faq";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Planet />
      <Projects />
      <Developed />
      <Discuss />
      <Application />
      <Team />
      <Faq />
      <Footer />
    </main>
  );
}
