import Header from "@/components/header/Header";
import Hero from "@/components/home/hero/Hero";
import About from "@/components/home/about/About";
import Skills from "@/components/home/skills/Skills";
import Experience from "@/components/home/experience/Experience";
import Work from "@/components/home/work/Work";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Footer />
    </>
  );
}