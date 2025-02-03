import React, { useState } from "react";
import Image from "next/image";

const FAQs: React.FC = () => {
  const faqs = [
    {
      question: "Is 3 Patti Gold APK legit?",
      answer:
        "Yes, it is real and secure to download Teen Patti Gold Apk. You can make some real cash on it.",
    },
    {
      question: "Is there 3 Patti Gold Mod APK?",
      answer:
        "There are Teen Patti Gold Mod versions available but those aren't recommended due to security issues and account suspension risks.",
    },
    {
      question: "How to download 3 Patti Gold APK?",
      answer:
        "Users can download Teen Patti Gold APK file easily from the offered link on this page.",
    },
    {
      question: "Do I need to add money on 3 Patti Gold APK to play games?",
      answer:
        "You don’t necessarily need to invest money to start playing games. You can use your no-deposit bonus also called the welcome bonus to play games.",
    },
  ];

  // Add a type for the state
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Provide a type for the 'index' parameter
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="font-rethink mx-auto bg w-full text-white p-8">
      <div className="mx-auto flex justify-evenly w-[1200px] flex-col  lg:flex-row max-sm:w-[100%] sm:w-[100%]">
        <h2 className="text-[50px] leading-[60px] mb-6 lg:w-[486px]">
          Got Questions? We’ve
          <span className="text-[#d99101]"> Got Answers</span>
        </h2>
        <div className="flex flex-col gap-[10px] lg:w-[628px]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`p-4 border rounded-lg transition-all duration-300 ease-in-out ${
                activeIndex === index
                  ? "bg-[#0C1B53] border-[#6589FF] shadow-lg "
                  : "bg-[#0e1838] border-blue-100 overflow-hidden"
              }`}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-[18px] font-medium">{faq.question}</h3>
                <span className="text-blue-400">
                  {activeIndex === index ? (
                    <Image
                      src="/images/up.png"
                      alt="Up"
                      width={36}
                      height={36}
                      className="icon-class"
                    />
                  ) : (
                    <Image
                      src="/images/downarrow.png"
                      alt="Down"
                      width={36}
                      height={36}
                      className="icon-class"
                    />
                  )}
                </span>
              </div>
              {activeIndex === index && (
                <p className="text-[#A7ADBD] mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
