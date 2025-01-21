import React from 'react';

const About = () => {
  return (
    <section className="mt-[103px] sm:mt-[120px]">
      <div className="min-h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <p className="text-lg mb-4">
            Welcome to our website! We are dedicated to providing the best gaming
            products and services to our customers. Our team is passionate about
            delivering an exceptional experience.
          </p>
          <p className="text-lg mb-4">
            Whether you&apos;re a casual gamer or a professional, we have everything
            you need to level up your gaming experience. From top-quality
            products to outstanding customer support, we strive to exceed your
            expectations.
          </p>
          <p className="text-lg">
            Thank you for choosing us. We look forward to being a part of your
            gaming journey!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
