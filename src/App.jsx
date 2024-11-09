import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Upload from "./components/Upload";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThreeScene from './components/ThreeScene';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

function App() {
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
    const debounce = (func, delay) => {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
      };
    };

    const handleScroll = debounce(() => {
      setShowButton(window.scrollY > 200);
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    const backToTop = document.querySelector(".back-to-top");
    if (backToTop) {
      if (showButton) {
        gsap.fromTo(
          backToTop,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, ease: "bounce.out" }
        );
      } else {
        gsap.to(backToTop, { scale: 0, opacity: 0, duration: 0.3 });
      }
    }
  }, [showButton]);

  const scrollToTop = () => {
    gsap.to(window, { duration: 1, scrollTo: { y: 0 } });
  };

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
    <div>
      <div className="fixed w-full flex justify-center z-0 overflow-visible">
        <div style={{ width: '100%', height: '100vh', overflow: 'visible' }}>
          <ThreeScene />
        </div>
      </div>
      <div className="flex flex-col w-full pt-36 items-center overflow-hidden min-h-screen bg-[#462175] text-[#E98074]">
        <h1 className="text-5xl md:text-7xl lg:text-9xl z-10 font-bold pt-20">
          <span className="text-[#D83F87]">V</span>IDEO <span className="text-[#D83F87]">V</span>ERCEL<span className="text-[#D83F87]">.</span>
        </h1>
        <div className="upload">
          <Upload />
        </div>
        <div className="about">
          <About />
        </div>
        <div className="contact">
          <Contact />
        </div>
        <Footer />
        <div className="footer w-full" />
        {showButton && (
          <button
            onClick={scrollToTop}
            className="back-to-top fixed bottom-10 right-10 p-4 bg-[#D83F87] text-white rounded-full shadow-lg hover:bg-[#cd317a] transition duration-300"
            aria-label="Back to Top"
          >
            <span className="text-2xl">↑</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
