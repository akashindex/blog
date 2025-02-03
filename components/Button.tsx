"use client";

import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const DownloadButton: React.FC = () => {
  const [downloading, setDownloading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const controls = useAnimation();

  const startDownload = async () => {
    if (downloading) return;

    setDownloading(true);

    // Simulated animation duration
    const animationDuration = 1;

    // Start the progress animation
    await controls.start({
      pathLength: [0, 1],
      transition: { duration: animationDuration, ease: "easeInOut" },
    });

    setCompleted(true);

    // Redirect to the URL after 1 second
    setTimeout(() => {
      window.location.href = "https://teenpattigold99.com/?from_gameid=6782883&channelCode=100000";
    }, 1000); // 1-second delay
  };

  return (
      <motion.button
        className="cursor-pointer bg-transparent border-none outline-none  font-rethink font-[30px] "
        onClick={startDownload}
      >
        <svg
          viewBox="0 0 100 50"
          width="300" // Smaller size
          height="150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Button Path */}
          <motion.path
            d="M50,25 h30 a10,10 0 0,1 10,10 a10,10 0 0,1 -10,10 s-30,0 -60,0 a10,10 0 0,1 -10,-10 a10,10 0 0,1 10,-10 h30"
            fill="transparent"
            stroke="#00cffc"
            strokeWidth="0.7"
            className="btn"
            initial={false}
            animate={{ stroke: completed ? "#02fc86" : "#00cffc" }}
          />

          {/* Main Circle */}
          <circle
            cx="20"
            cy="35"
            r="8.5"
            fill="#d99101"
            className="mainCircle"
          />
          <circle
            cx="20"
            cy="35"
            r="8.05"
            stroke="#00cffc"
            strokeWidth="0.9"
            fill="url(#gradient)"
            className="mainCircleFill"
          />
          <path
            d="M20,39 l3.5,-3.5 l0,0 M20,39 l-3.5,-3.5 l0,0 M20,39 l0,-7.5"
            stroke="#fff"
            strokeLinecap="round"
            strokeWidth="0.8"
            className="arrow"
          />

          {/* Animated Progress SubCircle */}
          <motion.circle
            cx="20"
            cy="35"
            r="7.9"
            fill="none"
            stroke="#fff"
            strokeWidth="1.6"
            strokeOpacity={downloading ? 1 : 0}
            animate={controls}
            initial={{ pathLength: 0 }}
          />

          {/* Text */}
          <motion.text
            x="55"
            y="37.5"
            fill="#fff"
            textAnchor="middle"
            fontSize="4.5" // Smaller font size
            fontFamily="Roboto"
            letterSpacing="0.2"
            className="text-[8px] "
            initial={{ opacity: 1, y: 0 }}
            animate={{
              opacity: downloading ? 0 : 1,
              y: completed ? -5 : 0,
              transition: { duration: 0.3 },
            }}
          >
            {completed ? "open" : downloading ? "" : "DOWNLOAD"}
          </motion.text>

          {/* Dot */}
          <motion.circle
            cx="50"
            cy="26"
            r={downloading ? 2.5 : 0}
            fill={completed ? "#02fc86" : "#fff"}
            className="dot"
            animate={{
              y: downloading ? 10 : 0,
              transition: { duration: 0.4 },
            }}
          />

          {/* Gradient Definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="98%" className="gradient" stopColor="transparent" />
              <stop offset="98%" className="gradient" stopColor="#00afd3" />
            </linearGradient>
          </defs>
        </svg>
      </motion.button>
  );
};

export default DownloadButton;
