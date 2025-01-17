
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Featuredroducts from "@/components/Featuredroducts";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



const HomePage = () => {
  //Animation setup
  useEffect(() => {
    AOS.init(
      {
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      },
      
    );
  },[]);

  return (
    <div className="overflow-hidden">
      <Nav />
      <Hero />
      <Featuredroducts />
      <Footer />
    </div>
  );
};

export default HomePage;
