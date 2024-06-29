import ReactGA from "react-ga4";

import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import MemoryGame from "./components/memory-game";
ReactGA.initialize("G-C07ZRV5MDK");
const App = () => {
  useEffect(() => {
    // Track the initial page load
    ReactGA.pageview(
      window.location.pathname + window.location.search + window.location.hash
    );

    // Function to track hash changes
    const trackPageView = () => {
      ReactGA.pageview(
        window.location.pathname + window.location.search + window.location.hash
      );
    };

    // Add event listener for hash changes
    window.addEventListener("hashchange", trackPageView);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", trackPageView);
    };
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
    </>
  );
};
export default App;
