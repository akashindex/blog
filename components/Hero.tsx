import React from "react";
import Image from 'next/image';
import DownloadButton from "./Button"


const Hero = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center mt-[105px] max-sm:mt-[120px] bg max-sm:px-[30px] mx-auto sm:px-[110px] ">
      {/* Text Section */}
      <div className="w-[90%] md:w-[80%] flex flex-col p-[20px] sm:p-[30px] justify-center max-w-[80%]">
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
      <div className="w-[50%]  ">
        <Image
          src="/images/teenpati.jpg"
          alt="description"
          width={400}
          height={400}
          className="rounded-[20%] "
        />
      </div>
    </div>

  );
};

export default Hero;
