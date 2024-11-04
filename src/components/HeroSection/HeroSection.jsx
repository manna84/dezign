import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const refCurvyLine = useRef(null);

  useEffect(() => {
    const el = refCurvyLine.current;

    // Get the path length
    const pathLength = el.getTotalLength();

    // Set initial dash properties to "hide" the path
    gsap.set(el, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    // Animate the dash offset to "draw" the line as user scrolls
    gsap.to(el, {
      strokeDashoffset: 0,
      scrollTrigger: {
        trigger: el,
        start: "top 30%", // Animation starts when the SVG enters the viewport
        end: "+=100%", // Animation ends when the SVG is fully in view
        scrub: 1, // Smoothly animate with scroll position
      },
    });
  }, []);

  return (
    <div>
      <div style={{ height: "100vh" }}></div> {/* Scroll space at the top */}
      <div className="line-box">
        <svg
          width="1440"
          height="969"
          viewBox="0 0 1440 969"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-1.01562 21C325.003 206.06 675.683 727.443 325.003 804.516C-12.5561 878.704 -51 191.5 571.062 354.849C908.084 443.349 717.441 923.506 1086 805.485C1087.9 804.878 1089.93 804.349 1091.89 804.036C1144.81 795.626 1241.54 799.062 1309.7 854.605C1337.78 877.495 1368.68 919.889 1403.98 928.083C1419.93 931.786 1439.41 936.528 1463 942.5C1622.6 982.9 1631.83 919.667 1616.5 883"
            stroke="url(#paint0_linear_360_23753)"
            strokeWidth="41.216"
            strokeLinecap="round"
            ref={refCurvyLine}
          />
          <defs>
            <linearGradient
              id="paint0_linear_360_23753"
              x1="-279.223"
              y1="-185.492"
              x2="1633.49"
              y2="957.768"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.179527" stopColor="#A100FF" />
              <stop offset="0.954314" stopColor="#21005E" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div style={{ height: "100vh" }}></div>
    </div>
  );
};

export default HeroSection;
