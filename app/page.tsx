import Developed from "@/components/Developed";
import Discuss from "@/components/Discuss";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Planet from "@/components/Planet";
import Projects from "@/components/Projects";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Planet />
      <Projects />
      <Developed />
      <Discuss />
    </main>
  );
}
