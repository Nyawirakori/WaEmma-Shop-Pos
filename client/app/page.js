// import Image from "next/image";
// This contains all the contents of the home page <They are imported here>

import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Footer />
    </div>
  );
}
