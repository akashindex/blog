import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1300, min: 764 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const FeaturedProductSlider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      <ProductCard
        title="Call of duty"
        actualPrice=""
        discountPrice=""
        category="Shooting"
        image="/images/g1.jpg"
      />
       <ProductCard
        title="Zombie House"
        actualPrice=""
        discountPrice=""
        category="Action"
        image="/images/g2.jpg"
      />
        <ProductCard
        title="Gun of Wars"
        actualPrice=""
        discountPrice=""
        category="Shooting"
        image="/images/g3.jpg"
      />
        <ProductCard
        title="House of Fire"
        actualPrice=""
        discountPrice=""
        category="Action"
        image="/images/g4.jpg"
      />
        <ProductCard
        title="Assassin's Creed"
        actualPrice=""
        discountPrice=""
        category="Action"
        image="/images/g5.jpg"
      />
      <ProductCard
        title="Space Fight "
        actualPrice=""
        discountPrice=""
        category="Action"
        image="/images/g6.jpg"
      />
       <ProductCard
        title="Super Cars 2024 "
        actualPrice=""
        discountPrice=""
        category="Action"
        image="/images/g7.jpg"
      />
      <ProductCard
        title="Wild Wolf"
        actualPrice=""
        discountPrice=""
        category="Adventure"
        image="/images/g8.jpg"
      />
    </Carousel>
  );
};

export default FeaturedProductSlider;
