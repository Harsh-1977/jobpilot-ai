import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Companies from "../components/Companies";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Statistics from "../components/Statistics";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Features />
      <HowItWorks />
      <Statistics />
      <Footer />
    </>
  );
}

export default Home;