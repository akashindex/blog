import React from "react";
import Image from 'next/image';
import DownloadButton from "./Button"
import { section } from "framer-motion/client";


const Hero = () => {
  return (
    <section className=" bg max-sm:px-[30px] mx-auto py-[50px]">
    <div className="flex flex-col-reverse sm:flex-row items-center  max-sm:mt-[104px] w-[80%] mx-auto ">
      {/* Text Section */}
      <div className="flex flex-col justify-center max-sm:text-center">
        <div className="text-[#d99101] font-bold text-[24px] sm:text-[30px] lg:text-[40px] uppercase mt-[15px]">
        Teen Patti Gold APK Pakistan | Free Download Latest Version for Android!
        </div>
        <p className="text-white text-[16px] max-sm:text-[14px] lg:text-[20px] w-full mt-2 ">
        We are here with a refreshing take on table games, card games, slot machines and other variations of these games. Get an immersive gaming experience with 3 Patti Gold APK where there are tons of games to choose. It mainly features classic version of poker but you can enjoy other games too.
        </p>
       
        <div>
          <DownloadButton />
        </div>
      </div>

      {/* Image Section */}
      <div>
        <Image
          src="/images/logoii.jpg"
          alt="description"
          width={400}
          height={400}
          className="rounded-[20%] "
        />
      </div>
    </div>
    </section>

  );
};

export default Hero;
