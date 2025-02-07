import React from "react";
import Question from "@/components/Question";
import { section } from "framer-motion/client";

const aboutContent = [
  {
    title: "About Us",
    text: "Welcome to , the ultimate destination for Teen Patti Gold! Enjoy the latest version of the app with thrilling card and casino games like Teen Patti, Ludo, Poker, Blackjack, Baccarat, Andar Bahar, and more. Play and win real rewards on Android and PC. Download now and start playing today!"
  },
  {
    title: "Who We Are?",
    text: "3 Patti Gold is developed by Pkteenpatti, a trusted gaming platform known for its secure and reliable services. We prioritize user safety, ensuring a protected environment for deposits and withdrawals. With a smooth gameplay experience and intuitive UI, we guarantee an exceptional gaming journey."
  },
  {
    title: "Our Commitment",
    text: "Our goal is to offer a secure, engaging, and hassle-free gaming experience. We are dedicated to user satisfaction by providing top-notch customer support, resolving issues efficiently, and ensuring an uninterrupted gaming experience. Need help? Our support team is available 24/7!"
  }
];

const highlights = [
  "🚀 Always Updated – Get the latest APK versions instantly.",
  "🔒 Safe & Fair – Play in a secure and trustworthy environment.",
  "⚡ Fast & Lightweight – Quick downloads, no storage worries.",
  "🎮 Smooth Gameplay – Intuitive UI with seamless controls.",
  "🚫 Zero Lag – Optimized for a bug-free experience.",
  "🌍 Multi-Language – Play in your preferred language.",
  "🏆 High Performance – Enjoy top-tier gaming quality.",
  "📞 24/7 Support – We're always here to help!",
];

const About = () => {
  return (
    <section>
    <div className="mt-24 px-6 sm:px-12 lg:px-20 mg">
      <div className="min-h-screen max-w-7xl mx-auto py-16">
        {aboutContent.map((section, index) => (
          <div key={index} className="mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              {section.title}
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed">{section.text}</p>
          </div>
        ))}

        {/* Why Choose Us Section */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
            Why Choose Us?12
          </h1>
          <ul className="list-none space-y-3 mt-4">
            {highlights.map((point, index) => (
              <li key={index} className="text-lg sm:text-xl flex items-center gap-2">
                {point}
              </li>
            ))}
          </ul>
        </div>

        
      </div>
      
    </div>
    <Question />
    </section>
  );
};

export default About;
