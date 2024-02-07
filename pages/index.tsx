import BestSeller from "@/components/BestSeller";
import Featuredroducts from "@/components/Featuredroducts";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import TopProduct from "@/components/TopProduct";
import News from "@/components/News";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
      <TopProduct />
      <BestSeller />
      <News />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
