"use client";

export default function NoiseSVG({ type }) {
  const getColor = (type) => {
    switch (type) {
      case "Électrik":
        return "#ffd324";
      case "Plante":
        return "#96cf4e";
      case "Feu":
        return "#f05320";
      case "Normal":
        return "#D0D1D6";
      case "Insecte":
        return "#96c94e";
      case "Eau":
        return "#05a6de";
      case "Psy":
        return "#793D96";
      case "Poison":
        return "#793D96";
      case "Spectre":
        return "#793D96";
      case "Sol":
        return "#d67e2c";
      case "Combat":
        return "#d67e2c";
      case "Ténèbres":
        return "#505050";
      case "Acier":
        return "#B6BEC1";
      case "Dragon":
        return "#e0b63b";
      default:
        return "white";
    }
  };

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
        fill={getColor(type)}
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
