import React from "react";
import Image from 'next/image';


const Hero = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center mt-[105px] md:mt-[120px] bg-gradient-to-b from-gray-800 via-gray-900 to-black md:p-[20px] mx-auto">
      {/* Text Section */}
      <div className="w-[90%] md:w-[80%] flex flex-col p-[20px] sm:p-[30px] justify-center">
        <div className="text-white font-bold text-[24px] sm:text-[30px] lg:text-[40px] uppercase mb-6 sm:mb-10 mt-6 sm:mt-10">
          Teen Patti Gold Pakistan APK Download <br /> (Latest Version) v1.629 for Android
        </div>
        <p className="text-white text-[14px] sm:text-[16px] lg:text-[20px] w-full mt-2 sm:mt-4 mb-2 sm:mb-4">
          Are you a gaming enthusiast looking for a riveting online casino experience? If yes, then Teen Patti Gold (or 3 Patti Gold) is a popular Android casino app today. It is taking the virtual gaming scene by storm. Gamers can enjoy nearly 22 games spanning skill, multiplayer, slots, and sports categories. Hence, it is a one-stop-shop for those seeking excitement, friendship, and a chance to win big.
        </p>
        <p className="text-white text-[14px] sm:text-[16px] lg:text-[20px] w-full mt-2 sm:mt-4 mb-2 sm:mb-4">
          Teen Patti Online games are trending in India & Pakistan. Virtual gatherings are common nowadays in addition to physical events. That’s why every gamer knows about 3 Patti apps. However, the Teen Patti Gold app ranks among the most reputable portals without any doubt. In this article, you can learn all about this casino-like app. The download link for the updated version is also available here.
        </p>
        <div className="mt-4 sm:mt-6">
          <button className="px-6 sm:px-8 py-2 sm:py-3 bg-blue-500 text-white text-[14px] sm:text-[17px] rounded-full">
            Download Now
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-[90%] sm:w-auto mb-6 sm:mb-0 sm:pr-[20px]">
        <Image
          src="/images/teenpati.jpg"
          alt="description"
          width={400}
          height={300}
          className="rounded-[50px] sm:rounded-[50px]"
        />
      </div>
    </div>

  );
};

export default Hero;
