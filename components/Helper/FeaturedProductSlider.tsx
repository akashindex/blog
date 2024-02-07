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
        actualPrice="$59.99"
        discountPrice="$49.99"
        category="Shooting"
        image="/images/g1.jpg"
      />
       <ProductCard
        title="Zombie House"
        actualPrice="$39.99"
        discountPrice="$29.99"
        category="Action"
        image="/images/g2.jpg"
      />
        <ProductCard
        title="Gun of Wars"
        actualPrice="$49.99"
        discountPrice="$35.99"
        category="Shooting"
        image="/images/g3.jpg"
      />
        <ProductCard
        title="House of Fire"
        actualPrice="$45.99"
        discountPrice="$30.99"
        category="Action"
        image="/images/g4.jpg"
      />
        <ProductCard
        title="Assassin's Creed"
        actualPrice="$69.99"
        discountPrice="$55.99"
        category="Action"
        image="/images/g5.jpg"
      />
      <ProductCard
        title="Space Fight "
        actualPrice="$29.99"
        discountPrice="$15.99"
        category="Action"
        image="/images/g6.jpg"
      />
       <ProductCard
        title="Super Cars 2024 "
        actualPrice="$79.99"
        discountPrice="$65.99"
        category="Action"
        image="/images/g7.jpg"
      />
      <ProductCard
        title="Wild Wolf"
        actualPrice="$39.99"
        discountPrice="$25.99"
        category="Adventure"
        image="/images/g8.jpg"
      />
    </Carousel>
  );
};

export default FeaturedProductSlider;
