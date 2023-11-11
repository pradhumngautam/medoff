import React from "react";

const BgNoise = () => {
  return (
    <div>
      <svg
        style={{ filter: "contrast(125%) brightness(110%)" }}
        className="fixed z-[-100] w-full h-full opacity-[35%]"
      >
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".7"
            numOctaves="3"
            stitchTiles="stitch"
          ></feTurbulence>
          <feColorMatrix type="saturate" values="0"></feColorMatrix>
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)"></rect>
      </svg>
    </div>
  );
};

export default BgNoise;