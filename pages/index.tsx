
import Hero from "@/components/Hero";
import Featuredroducts from "@/components/Featuredroducts";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import BlogSlider from "@/components/Blogslider";



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
      <BlogSlider />
    </div>
  );
};

export default HomePage;
