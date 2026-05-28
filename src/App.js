import { useState, useEffect } from "react";
import "./index.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { NAV_LINKS } from "./components/data";
function App() {
  const [active, setActive] = useState("Home");

  // Scroll spy — updates active nav link based on visible section
  useEffect(() => {
    const sections = NAV_LINKS.map((n) =>
      document.getElementById(n.toLowerCase())
    );

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = e.target.id;
            setActive(id.charAt(0).toUpperCase() + id.slice(1));
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((s) => s && obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (name) => {
    document.getElementById(name.toLowerCase())?.scrollIntoView({
      behavior: "smooth",
    });
    setActive(name);
  };

  return (
    <>
      <Navbar active={active} onNav={scrollTo} />
      <Hero onNav={scrollTo} />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
