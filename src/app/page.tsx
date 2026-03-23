import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CurrentWork from "@/components/CurrentWork";
import PastVentures from "@/components/PastVentures";
import TechStack from "@/components/TechStack";
import SelectedProjects from "@/components/SelectedProjects";
import Writing from "@/components/Writing";
import Speaking from "@/components/Speaking";
import Teaching from "@/components/Teaching";
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
        <TechStack />
        <SelectedProjects />
        <Writing />
        <Speaking />
        <Teaching />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
