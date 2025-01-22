import React from 'react';

const contentSections = [
    {
        text: "The unemployment dilemma has become a pressing concern and therefore it is crucial for the youth to find an activity that pays them some amount. 3 Patti Gold is an Android app where you can find activities that offer passive earning opportunities especially if you are residing in Pakistan."
    },
    {
        text: "Now coming to the main objective of this app which is to have a good time while gaming and clinching its monetary gains. It has three main categories of games that include card games, fish games, and some other casino games that players can find."
    },
    {
        text: "While there are numerous other similar apps in Pakistan, users are mostly concerned about data privacy and safety. With this platform, users don’t need to be concerned about data privacy. This is a popular platform and it has got great reviews from existing users in that department."
    },
    {
        text: "Here players can play in real-time and compete against each other. This platform offers a fair environment that restricts players from performing any unethical activity. Other than the safe playing environment, the app has a responsive user interface and games offer HD graphics for enhanced gaming experience."
    },
    {
        text: "Another reason why this app is loved by many players is that they get to engage with other players while enjoying their favorite card and casino games. People in Pakistan especially love to play card and dice games like Ludo together. The app also has a leaderboard where you can view where you stand among others. This creates a thriving environment as every player strives to reach the top of the leaderboard."
    }
];

function Overview() {
    return (
        <div className="overview-container mt-5 bg-gray-50 min-h-screen font-rethink">
            <header className="overview-header bg-white text-balck text-center max-sm:py-6 sm:py-8">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wide">
                    Overview Page
                </h1>
            </header>
            <main className="overview-content flex flex-col items-center p-4 sm:p-6 space-y-6 bg-gradient-to-b from-gray-800 via-gray-900 to-black">
                {contentSections.map((section, index) => (
                    <section
                        key={index}
                        className="overview-section bg-white px-[30px] w-[80%] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
                    >
                        <p className="text-sm sm:text-base lg:text-lg text-gray-700 ">
                            {section.text}
                        </p>
                    </section>
                ))}
            </main>
        </div>
    );
}

export default Overview;
