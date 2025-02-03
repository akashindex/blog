import React from "react";
import Image from 'next/image';
import DownloadButton from "./Button"


const Hero = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center mt-[105px] max-sm:mt-[104px] bg max-sm:px-[30px] mx-auto sm:px-[110px] ">
      {/* Text Section */}
      <div className="flex flex-col justify-center max-sm:text-center sm:w-[80%]">
        <div className="text-[#d99101] font-bold text-[24px] sm:text-[30px] lg:text-[40px] uppercase mt-[15px]">
        Teen Patti Gold APK Pakistan | Free Download Latest Version for Android!
        </div>
        <p className="text-white text-[16px] max-sm:text-[14px] lg:text-[20px] w-full mt-2 ">
        We are here with a refreshing take on table games, card games, slot machines and other variations of these games. Get an immersive gaming experience with 3 Patti Gold APK where there are tons of games to choose. It mainly features classic version of poker but you can enjoy other games too.
        </p>
       
        <div className="mt-[10px] max-sm:ml-[-40px]">
          <DownloadButton />
        </div>
      </div>

      {/* Image Section */}
      <div className=" sm:w-[50%] ">
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
