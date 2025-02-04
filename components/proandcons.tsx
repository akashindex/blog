import React from "react";

function ProAndCons() {
  // Data for Pros and Cons
  const pros = [
    "It is free of cost.",
    "Easy to download.",
    "Wide range of games.",
    "Easy payments.",
  ];

  const cons = [
    "It has an age restriction.",
    "It also has regional restrictions.",
    "As real cash is involved, loss on investments is possible.",
  ];

  const conclusionText = `
  In a nutshell, 3 Patti Gold APK is a well-known gaming app where there are tons of gaming options such as Teen Patti, Andar Bahar, Roulette, and poker. Each game on this platform brings a chance for you to make easy money. All you need to do is find a game that you have the best skills in.
  It offers a stable gaming experience through its advanced technology and highly responsive servers. Players can play a variety of games and easily invest their money to gain instant returns. Although it is best to start by investing small amounts or even exploring the platform without investing initially.
  If you’ve reached this far, then you must be interested in trying out the services of this platform. Download the app for your Android devices from the secure download link and start making online earning.
`;

  return (
    <div className="bg-white text-black py-10 px-5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Pros and Cons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pros Section */}
          <div className="mg p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Pros</h3>
            <ul className="list-disc list-inside space-y-2">
              {pros.map((pro, index) => (
                <li key={index} className="text-lg">
                  {pro}
                </li>
              ))}
            </ul>
          </div>

          {/* Cons Section */}
          <div className="mg p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-red-600 mb-4">Cons</h3>
            <ul className="list-disc list-inside space-y-2">
              {cons.map((con, index) => (
                <li key={index} className="text-lg">
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mg p-6 rounded-lg shadow-md">
          <p className="text-lg leading-relaxed text-justify">{conclusionText}</p>
        </div>
      </div>
    </div>
  );
}

export default ProAndCons;