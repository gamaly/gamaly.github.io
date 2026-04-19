import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CurrentWork from "@/components/CurrentWork";
import PastVentures from "@/components/PastVentures";
import TechStack from "@/components/TechStack";
import SelectedProjects from "@/components/SelectedProjects";
import Speaking from "@/components/Speaking";
import Teaching from "@/components/Teaching";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <CurrentWork />
        <PastVentures />
        <SelectedProjects />
        <TechStack />
        <Speaking />
        <Teaching />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
