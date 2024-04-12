import React from 'react';
import { useTheme } from 'next-themes';

const ParallaxStarBackground = () => {
  const { theme, resolvedTheme } = useTheme();

  let starColor;
  if (theme === 'system') {
    if (resolvedTheme === 'light') {
      starColor = '#192020'; // Dark color for light theme
    } else {
      starColor = '#FDFFFE'; // Light color for dark theme
    }
  } else if (theme === 'light') {
    starColor = '#192020'; // Dark color for light theme
  } else {
    starColor = '#FDFFFE'; // Light color for dark theme
  }

  // Number of moving stars and stationary stars
  const numMovingStars = 2500; // Increase this number to have more stars moving
  const numStationaryStars = 1000; // Adjust this number as needed

  // Generate an array of moving star elements with unique animation delays
  const movingStars = Array.from({ length: numMovingStars }, (_, index) => (
    <div
      key={index}
      className="star moving-star"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 100}s`, // Unique animation delay for each star
      }}
    />
  ));

  // Generate an array of stationary star elements
  const stationaryStars = Array.from(
    { length: numStationaryStars },
    (_, index) => (
      <div
        key={index + numMovingStars}
        className="star"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
      />
    )
  );

  return (
    <div className="parallax-star-background">
      {movingStars}
      {stationaryStars}
      <style>{`
        .parallax-star-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
        }

        .star {
          position: absolute;
          width: 3px;
          height: 3px;
          background-color: ${starColor};
          border-radius: 50%; /* Make stars circular */
        }

        .moving-star {
          animation: moveStar 100s linear infinite; /* Define animation */
        }

        @keyframes moveStar {
          0% {
            transform: translateY(0) translateX(0);
          }
          100% {
            transform: translateY(100vh) translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default React.memo(ParallaxStarBackground);
// export default ParallaxStarBackground;
