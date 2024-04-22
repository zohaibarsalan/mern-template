import React from 'react';
import { useTheme } from 'next-themes';

const ParallaxBackground = () => {
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

  // Generate an array of star elements with unique animation delays
  const stars = Array.from({ length: 1500 }, (_, index) => (
    <div
      key={index}
      className="star"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 100}s`, // Unique animation delay for each star
      }}
    />
  ));

  return (
    <div className="parallax-star-background">
      {stars}
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
          animation: moveStar 100s linear infinite; /* Define animation */
        }

        @keyframes moveStar {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(100vw, 100vh);
          }
        }
      `}</style>
    </div>
  );
};

export default React.memo(ParallaxBackground);
