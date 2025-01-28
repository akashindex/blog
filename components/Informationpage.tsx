import React from 'react';
import DownloadButton from "./Button"


// Data for Features
const features = [
  {
    title: "Diverse Collection of Games",
    description:
      "This app is known for its extensive collection of games including traditional as well as modern card games. Furthermore, for Pakistani users, there is a category of desi card games such as Teen Patti and Andar Bahar. There are some other games too such as slots and sports. This variety helps players to choose their preferred games easily.",
  },
  {
    title: "Real Earning",
    description:
      "Although there are many earning apps, finding the legit one is very important. Here you will make a passive income by playing games and getting huge prizes. So instead of playing other games, you can choose to play better for monetary benefits.",
  },
  {
    title: "Bonuses",
    description:
      "3 Patti Gold has lucrative bonuses such as a welcome bonus where players can win up to 9999 rupees once they register. Furthermore, there is a first deposit bonus to claim here as well. There are also free spins every 24 hours where players get a surprise reward.",
  },
  {
    title: "Referral Reward",
    description:
      "There are three levels of this program, namely, level 1, level 2, and level 3. The higher the level the higher will be the reward. So, make sure you invite as many new users as you can to earn your higher commissions. You can share the app in messages or share the referral code with others to join.",
  },
  {
    title: "Free Wheel Spin",
    description:
      "As said earlier, you can spin a fortune wheel every day and win gifts such as free plays, cash prizes, cashback, and discounts. Make sure you log in daily to avail this opportunity. The fortune wheel is also available on a weekly basis.",
  },
  {
    title: "Engaging Gameplay",
    description:
      "The games in the app are really engaging especially card games that are played with other players in multiplayer mode. These games will take you to the real Las Vegas environment and therefore are immersive. The performance is fast and the visuals are vibrant.",
  },
  {
    title: "Simple Interface",
    description:
      "The app is easy to use due to its simple and intuitive interface. The home page offers game categories and on the left, you will find account and settings. Similarly, on the main page, there is an option to add and withdraw money.",
  },
  {
    title: "Tournaments",
    description:
      "If you want to elevate your experience, make sure you join the daily and weekly events and tournaments. You will be playing with and against live players. Upon winning you will be getting huge cash prizes. You can view your and others' performance on the leaderboard.",
  },
  {
    title: "Trusted Payment Channels",
    description:
      "The transactions are seamless as the app supports Easypaisa and Jazzcash. These two e-wallets are widely used in Pakistan and therefore the app becomes accessible to a wide population. These two e-wallets are trusted as they offer safe and instant transactions.",
  },
  {
    title: "Community",
    description:
      "Enjoy the vibrant community and socialize with the players. You can discuss the strategies and tips to play different games and learn a lot from others. You can also join different social media groups such as Facebook. There you can also post your queries and get answers.",
  },
  {
    title: "Customer Support",
    description:
      "In case of any problem you can always rely on the customer service team. The team is available 24/7 and ready to help you. You can contact me via live chat or through email. You can also leave a message on official social media sites.",
  },
];

// Data for Games
const games = [
  "Teen Patti", "Andar Bahar", "Roulette", "Blackjack", "Poker", "Domino",
  "Ludo", "Slots", "Bingo", "Fruit Line", "Zoo Roulette", "Mines",
  "Dragon and Tiger", "Crash", "Best of Five",
];

// Data for Steps
const downloadSteps = [
  "Download the APK using the provided link.",
  "Go to your phone settings and enable 'Install from unknown sources.'",
  "Open your file manager, find the APK, and install it.",
  "Launch the app and start enjoying games and rewards.",
];

const depositSteps = [
  "Click 'Buy' on the homepage.",
  "Choose a chip bundle starting from RS 100.",
  "Select a payment method (Easypaisa or Jazzcash).",
  "Bind your e-wallet and confirm the transaction.",
];

const withdrawSteps = [
  "Tap 'Withdraw' on the homepage.",
  "Enter the amount you wish to cash out.",
  "Select Easypaisa or Jazzcash and confirm the transaction.",
];

function Informationpage() {
  return (
    <div className=" font-rethink bg  text-white p-6 sm:p-8 lg:p-12 space-y-8">
      {/* Introduction */}
      <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 font-rethink">
        <h1 className="text-[50px] leading-[60px] text-[#2356FE]">
          3 Patti Gold: Your Ultimate Online Gaming App
        </h1>
        <p className="text-sm sm:text-base lg:text-lg mt-4 text-black">
          3 Patti Gold Apk is an online play-to-earn platform. As the app’s name signals, it has the famous card game called Teen Patti and other card game variants like Andar Bahar, Roulette, Baccarat, and dice games. There are over 20 different games which are enough to keep you entertained while they introduce new games in the updates.
          Card games have been loved by South Asians for centuries and people in India and Pakistan still play Teen Patti which is like Indian Poker with slightly different rules. In the past people used to go to physical casinos to enjoy all these games but with time they were replaced by online casino platforms which are a lot more convenient than physical casinos. If you are also interested in playing casino games online, 3 Patti Gold Game is a great option.
          Apart from different games, this app also offers income prospects. Players can earn money through games, winning prizes, bonuses, and rewards. The money earned can be then cashed out to your e-wallets such as Easypaisa and Jazzcash.

        </p>
      </div>

      {/* Core Features */}
      <div className=" p-6 sm:p-8 rounded-lg bg shadow-lgshadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg border-[2px] shadow-md"
            >
              <h3 className="text-lg font-bold text-black mb-2">{feature.title}</h3>
              <p className="text-sm sm:text-base text-black">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Games Section */}
      <div className=" rounded-lg p-6 sm:p-8 bg shadow-lgshadow-lg">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-4">
          Games Available
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {games.map((game, index) => (
            <div
              key={index}
              className="bg-gray-100 p-2 sm:p-4 text-center rounded-full shadow-sm text-gray-800 font-medium text-sm sm:text-base transition-all transform duration-300 hover:scale-105 hover:bg-[#2356FE] hover:text-white"
            >
              {game}
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-evenly gap-[20px] max-sm:flex-col bg shadow-lgshadow-lg'>
        {/* Download Steps */}
        <div className="bg-gray-50 shadow-md rounded-lg p-6 sm:p-8">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold    text-black mb-4">
            How to Download and Install
          </h2>
          <ol className="list-decimal pl-4 sm:pl-6 text-sm sm:text-base lg:text-lg space-y-2">
            {downloadSteps.map((step, index) => (
              <li key={index} className="text-black">{step}</li>
            ))}
          </ol>
        </div>

        {/* Deposit Steps */}
        <div className="bg-white shadow-md rounded-lg p-6 sm:p-8">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-black mb-4">How to Deposit Money</h2>
          <ol className="list-decimal pl-4 sm:pl-6 text-sm sm:text-base lg:text-lg space-y-2">
            {depositSteps.map((step, index) => (
              <li key={index} className="text-black">{step}</li>
            ))}
          </ol>
        </div>

        {/* Withdraw Steps */}
        <div className="bg-gray-50 shadow-md rounded-lg p-6 sm:p-8">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-black mb-4">How to Withdraw Money</h2>
          <ol className="list-decimal pl-4 sm:pl-6 text-sm sm:text-base lg:text-lg space-y-2">
            {withdrawSteps.map((step, index) => (
              <li key={index} className="text-black">{step}</li>
            ))}
          </ol>
        </div>
      </div>
      <div className='flex items-center justify-center'>
      <DownloadButton />
      </div>
    </div>
  );
}

export default Informationpage;
