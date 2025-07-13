"use client";

export default function NoiseSVG({ type }) {
  return (
    <svg
      className="w-full h-full pointer-events-none"
      viewBox="0 0 280 390"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <filter id="n" x="0" y="0">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.01"
          numOctaves="5"
          stitchTiles="stitch"
        />
      </filter>

      {/* Fond rouge */}
      <rect
        x="0"
        y="0"
        width="280"
        height="390"
        fill={
          type === "Feu"
            ? "#ED5040"
            : type === "Eau"
            ? "blue"
            : type === "Électrik"
            ? "#fcd512"
            : "white"
        }
        rx="12"
        ry="12"
      />
      <rect
        x="0"
        y="0"
        width="280"
        height="390"
        filter="url(#n)"
        opacity="0.7"
        rx="24"
        ry="24"
        style={{ mixBlendMode: "luminosity" }}
      />
    </svg>
  );
}
