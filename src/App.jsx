import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Upload from "./components/Upload";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Register the plugins
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (showButton) {
      gsap.fromTo(
        ".back-to-top",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "bounce.out" }
      );
    } else {
      gsap.to(".back-to-top", { scale: 0, opacity: 0, duration: 0.3 });
    }
  }, [showButton]);

  const scrollToTop = () => {
    gsap.to(window, { duration: 1, scrollTo: { y: 0 } });
  };

  // ScrollTrigger animations for each section with blur and fade effect
  useEffect(() => {
    const sections = [".upload", ".about", ".contact", ".footer"];
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, filter: "blur(10px)", y: 50 },
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <Navbar onToggle={() => setDarkMode((prevMode) => !prevMode)} darkMode={darkMode} />
      <div className={`flex flex-col w-full items-center overflow-hidden min-h-screen ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
        <h1 className={`text-5xl md:text-7xl lg:text-9xl font-bold pt-20 ${darkMode ? "text-white" : "text-black"}`}>
          VIDEO VERCEL.
        </h1>
        <div className="upload">
          <Upload darkMode={darkMode} />
        </div>
        <div className="about">
          <About isDarkMode={darkMode} />
        </div>
        <div className="contact">
          <Contact isDarkMode={darkMode} />
        </div>
        <div className="footer w-full">
          <Footer isDarkMode={darkMode} />
        </div>
        
        {/* Back to Top Button */}
        {showButton && (
          <button
            onClick={scrollToTop}
            className="back-to-top fixed bottom-10 right-10 p-4 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-700 transition duration-300"
            aria-label="Back to Top"
          >
            {/* Upward Arrow Icon */}
            <span className="text-2xl">↑</span>
          </button>
        )}
      </div>
    </>
  );
}

export default App;
