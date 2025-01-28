import React from "react";
import Image from 'next/image';
import DownloadButton from "./Button"


const Hero = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center mt-[105px] md:mt-[120px] bg md:p-[20px] mx-auto">
      {/* Text Section */}
      <div className="w-[90%] md:w-[80%] flex flex-col p-[20px] sm:p-[30px] justify-center">
        <div className="text-white font-bold text-[24px] sm:text-[30px] lg:text-[40px] uppercase mb-6 sm:mb-10 mt-6 sm:mt-10">
        Teen Patti Gold APK Pakistan | Free Download Latest Version for Android!
        </div>
        <p className="text-white text-[14px] sm:text-[16px] lg:text-[20px] w-full mt-2 sm:mt-4 mb-2 sm:mb-4">
        We are here with a refreshing take on table games, card games, slot machines and other variations of these games. Get an immersive gaming experience with 3 Patti Gold APK where there are tons of games to choose. It mainly features classic version of poker but you can enjoy other games too.
        </p>
       
        <div className="mt-4 sm:mt-6 max-sm:ml-[-25px]">
          <DownloadButton />
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
