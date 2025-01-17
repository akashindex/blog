
import Hero from "@/components/Hero";
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
      <Hero />
      <Featuredroducts />
    </div>
  );
};

export default HomePage;
