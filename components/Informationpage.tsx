import React from "react";
import DownloadButton from "./Button";
import { section } from "framer-motion/client";
import ProAndCons from "./proandcons";
import Image from "next/image";

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
      "There are three levels of this program, namely, level 1, level 2, and level 3. The higher the level, the higher the reward. So, make sure you invite as many new users as you can to earn higher commissions. You can share the app in messages or share the referral code with others to join.",
  },
  {
    title: "Free Wheel Spin",
    description:
      "As said earlier, you can spin a fortune wheel every day and win gifts such as free plays, cash prizes, cashback, and discounts. Make sure you log in daily to avail this opportunity. The fortune wheel is also available on a weekly basis.",
  },
  {
    title: "Engaging Gameplay",
    description:
      "The games in the app are really engaging, especially card games that are played with other players in multiplayer mode. These games will take you to the real Las Vegas environment and therefore are immersive. The performance is fast and the visuals are vibrant.",
  },
  {
    title: "Simple Interface",
    description:
      "The app is easy to use due to its simple and intuitive interface. The home page offers game categories, and on the left, you will find account and settings. Similarly, on the main page, there is an option to add and withdraw money.",
  },
  {
    title: "Tournaments",
    description:
      "If you want to elevate your experience, make sure you join the daily and weekly events and tournaments. You will be playing with and against live players. Upon winning, you will be getting huge cash prizes. You can view your and others' performance on the leaderboard.",
  },
  {
    title: "Trusted Payment Channels",
    description:
      "The transactions are seamless as the app supports Easypaisa and Jazzcash. These two e-wallets are widely used in Pakistan and therefore the app becomes accessible to a wide population. These two e-wallets are trusted as they offer safe and instant transactions.",
  },
  {
    title: "Community",
    description:
      "Enjoy the vibrant community and socialize with the players. You can discuss strategies and tips to play different games and learn a lot from others. You can also join different social media groups such as Facebook. There you can also post your queries and get answers.",
  },
  {
    title: "Customer Support",
    description:
      "In case of any problem, you can always rely on the customer service team. The team is available 24/7 and ready to help you. You can contact them via live chat or through email. You can also leave a message on official social media sites.",
  },
];

// Data for Games
const games = [
  "Teen Patti",
  "Andar Bahar",
  "Roulette",
  "Blackjack",
  "Poker",
  "Domino",
  "Ludo",
  "Slots",
  "Bingo",
  "Fruit Line",
  "Zoo Roulette",
  "Mines",
  "Dragon and Tiger",
  "Crash",
  "Best of Five",
  "Teen Patti 20-20",
  "Rummy",
  "10 Cards",
  "Variation",
  "777 Bingo",
  "Rattling Gems",
  "Dynamite World",
  "Sweet Bonanza",
  "Double",
  "7 Up Down",
  "God of Fortune",
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
  "	You will see your total balance and the available amount that you can cash out.",
  "	Mention the amount you want to withdraw.",
  "	Click on Easypaisa or Jazzcash.",
  "	Now add your account details such as name and e-wallet account number.",
  "	Confirm the transaction and click on withdraw.",
  "	The withdrawal process will take a few minutes to complete",
  "	The withdrawal process will take a few minutes to complete",
];

const installSteps = [
  "God of Fortune: This is a slot machine game with reels to spin. As you spin the reel you will have to wait for the combination. If you get the same combination of reels in each row, your investment will be doubled or more in some cases.",
  "Best of Five: It is a card game where players compete in five rounds. If any player wins three out of five rounds he/she will win. Players can choose their desired card games here.",
  "Dominos: It is also a card game where two decks of 28 cards are played. You will have to make a wager before playing.",
  "Andar Bahar: It is a South Asian version of a card game and players have to tell the sides of the cards correctly to win.",
];
const accountSteps = [
  "Open the app after installation.",
  "	Go to “play as a guest” and you will be redirected to the homepage where you can view different games.",
  "	On the top left corner, there is an ID where you need to click.",
  "Select the 'Bind' option.",
  "	You will find a bind option, click on it..",
  "	Fill out the form: Write your Email>Get OTP>Write Captcha> Create and Confirm your Password.",
];
const ipIssueSteps = [
  "Due to unknown reasons, sometimes even a new player can face IP limitations. To solve this problem, download a well-known VPN and use the app after connecting to the VPN. Switching your IP address can be helpful to overcome IP limitation issues.",
];

function Informationpage() {
  return (
    <section>
      <div className=" font-rethink mg   max-sm:p-2 space-y-8 md:px-[56px] mx-auto pt-[30px] ">
        {/* Introduction */}
       
        <div>
              <Image
                src="/images/01.jpg"
                alt="Company Logo"
                width={1200}
                height={1200}
                className="w-full md:max-w-7xl h-full mx-auto object-cover mb-4"
              />
            </div>
            <div className=" shadow-md rounded-lg p-6  font-rethink w-[94%] mx-auto">
          <h1 className="text-[50px] leading-[60px] max-sm:text-[30px] max-sm:leading-[30px] text-[#d99101] text-center">
            What is the 3 Patti Gold App
          </h1>
          <p className="text-sm sm:text-base lg:text-lg mt-4 text-[#666666]">
            3 Patti Gold Apk is an online play-to-earn platform. As the apps
            name signals, it has the famous card game called Teen Patti and
            other card game variants like Andar Bahar, Roulette, Baccarat, and
            dice games. There are over 20 different games which are enough to
            keep you entertained while they introduce new games in the updates.
            Card games have been loved by South Asians for centuries, and people
            in India and Pakistan still play Teen Patti, which is like Indian
            Poker with slightly different rules. In the past, people used to go
            to physical casinos to enjoy all these games, but with time they
            were replaced by online casino platforms which are a lot more
            convenient than physical casinos. If you are also interested in
            playing casino games online, 3 Patti Gold Game is a great option.
            Apart from different games, this app also offers income prospects.
            Players can earn money through games, winning prizes, bonuses, and
            rewards. The money earned can be then cashed out to your e-wallets
            such as Easypaisa and Jazzcash. The availability of these Pakistani
            e-wallets is another reason why this app is widely used. You can
            find high-paying games, play and enjoy, and win lots of money. You
            can also earn through a referral program which will be explained in
            detail here.
          </p>
        </div>

        {/* Core Features */}
        <div className="rounded-lg mg">
          
          <div>
              <Image
                src="/images/refer.jpg"
                alt="Company Logo"
                width={1200}
                height={1200}
                className="w-full md:max-w-7xl h-full mx-auto object-cover mb-4"
              />
            </div>
            <div className=" rounded-lg p-6  font-rethink w-[94%] mx-auto">
            <h1 className="text-[50px] leading-[60px] max-sm:text-[30px] max-sm:leading-[30px] text-[#d99101] text-center">
              Core Features of 3 Patti Gold App
            </h1>
            
            <p className="text-sm sm:text-base lg:text-lg mt-4 text-[#666666]">
              Heres a detailed list of handy and important features of this app
              that will help you understand the app better and make up your mind
              to install it. These properties and features are innovative and
              not many apps offer them.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className=" p-4 rounded-lg border-[2px] shadow-md"
              >
                <h3 className="text-lg font-bold text-[#d99101] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-[#666666]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Games Section */}
        <div className=" rounded-lg shadow-lg max-sm:mb-[10px] mg">
          <h2 className=" text-[50px] leading-[60px] text-[#d99101] max-sm:text-[30px] mb-[20px] text-center">
            Games Available
          </h2>
          <div>
              <Image
                src="/images/AllGames.jpg"
                alt="Company Logo"
                width={1200}
                height={1200}
                className="w-full md:max-w-7xl h-full mx-auto object-cover mb-4"
              />
            </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-6">
            {games.map((game, index) => (
              <div
                key={index}
                className="bg-gray-100 p-2 sm:p-4 text-center rounded-full shadow-sm text-gray-800 font-medium text-sm sm:text-base transition-all transform duration-300 hover:scale-105 hover:bg-[#d99101] hover:text-white"
              >
                {game}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mx-auto">
          {/* Download Steps */}
          <div className="mg shadow-md rounded-lg p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#666666] mb-4">
              How to Download and Install
            </h2>
            <p className="text-sm sm:text-base lg:text-lg mt-4 text-[#666666]">
              It is an easy-to-follow process that can be done in seconds if you
              follow the steps correctly. Also don’t worry about the safety of
              the app as it is fully secure and free of viruses. Users can
              simply follow the listed steps to download and install the APK
              file.
            </p>
            <ol className="list-decimal pl-4 sm:pl-6 text-sm sm:text-base lg:text-lg space-y-2">
              {downloadSteps.map((step, index) => (
                <li key={index} className="text-[#666666]">
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <div className="mg shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-[#666666] mb-4">
              How to Create an Account or Bind Email
            </h2>
            <p className="text-sm sm:text-base lg:text-lg mt-4 text-[#666666]">
              Registering on the app or binding the email is crucial for many
              reasons. First of all, you will be able to play all the games and
              access all the app features. Secondly, you will get a welcome
              bonus which is quite exciting on its own. You can also perform
              transactions easily which will be safe too. Finally, you can save
              your gaming progress and view the leaderboard for all the players.
            </p>
            <ol className="list-decimal text-sm sm:text-base lg:text-lg mt-4 text-[#666666]">
              {accountSteps.map((step, index) => (
                <li key={index} className="text-[#666666]">
                  {step}
                </li>
              ))}
            </ol>
          </div>
          {/* Deposit Steps */}

          <div className="mg">
            <div>
              <Image
                src="/images/deposit.jpg"
                alt="Company Logo"
                width={1300}
                height={1300}
                className="w-full md:max-w-7xl h-full mx-auto object-cover mb-4"
              />
            </div>
            <div className="shadow-md rounded-lg p-6">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#666666] mb-4">
                How to Deposit Money
              </h2>
              <p className="text-sm sm:text-base lg:text-lg mt-4 text-[#666666]">
                In order to enjoy the games on this platform you need to invest
                some money by adding cash. You can view different bundles of
                Teen Patti Gold Chips to buy and also get a deposit bonus. Here
                is how to do that.
              </p>
              <ol className="list-decimal text-sm sm:text-base lg:text-lg ">
                {depositSteps.map((step, index) => (
                  <li key={index} className="text-[#666666]">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Withdraw Steps */}
          <div className="mg">
          <div>
              <Image
                src="/images/withdrawl.jpg"
                alt="Company Logo"
                width={1300}
                height={1300}
                className="w-full md:max-w-7xl h-full mx-auto object-cover mb-4"
              />
            </div>
            <div className="shadow-md rounded-lg p-6">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#666666] mb-4">
              How to Withdraw Money
            </h2>
            <p className="text-sm sm:text-base lg:text-lg mt-4 text-[#666666]">
              Now that you have made money and are ready to withdraw, let us
              tell you what to do. You can cash out to Easypaisa or Jazzcash
              whatever matches your preference.
            </p>
            <ol className="list-decimal pl-4 sm:pl-6 text-sm sm:text-base lg:text-lg space-y-2">
              {withdrawSteps.map((step, index) => (
                <li key={index} className="text-[#666666]">
                  {step}
                </li>
              ))}
            </ol>
            </div>
          
          
          </div>
          {/* earn Steps */}
          <div className=" shadow-md rounded-lg p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#666666] mb-4">
              How to Play Games and Earn Money?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#666666] mb-6">
              There are different games on the app and you can choose based on
              your skills and preference. Each game has its own payout rate and
              while some are low RTP games, there are high RTP games too. I’d
              you want to make a handsome amount then go for high RTP games such
              as slots. Here are some games that you can play to earn money.
            </p>
            <ol className="list-decimal pl-4 sm:pl-6 text-sm sm:text-base lg:text-lg space-y-2">
              {installSteps.map((step, index) => (
                <li key={index} className="text-[#666666]">
                  {step}
                </li>
              ))}
            </ol>
          </div>
         

          {/* IP Issue Resolution Steps */}
          <div className="mg shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-[#666666] mb-4">
              How to Solve IP Limit Exceeds Issue
            </h2>
            <ol className="list-decimal text-sm sm:text-base lg:text-lg mt-4 text-[#666666]">
              {ipIssueSteps.map((step, index) => (
                <li key={index} className="text-[#666666]">
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <ProAndCons />
      <div className="flex items-center justify-center bg w-[100%]">
        <DownloadButton />
      </div>
    </section>
  );
}

export default Informationpage;
