
import Hero from "@/components/Hero";
import Featuredroducts from "@/components/Featuredroducts";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import BlogSlider from "@/components/Blogslider";
import Overview from "@/components/overview";
import Informationpage from "@/components/Informationpage";
import Question from "@/components/Question";



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
    <div className="overflow-hidden ">
      <Hero />
      <Featuredroducts />
      <BlogSlider />
      <Overview/>
      <Informationpage />
      <Question />
    </div>
  );
};

export default HomePage;
