"use client";
import BaniereInfo from "./BaniereInfo";
import Image from "next/image";
import NoiseSVG from "./NoiseSVG";
import { useState, useEffect } from "react";

export default function PokemonCard({ pokemon_name, pokemon_edition }) {
  const [name, setName] = useState("");
  const [hp, setHp] = useState("");
  const [type, setType] = useState("");
  const [typeImage, setTypeImage] = useState("");
  const [sprite, setSprite] = useState("");

  useEffect(() => {
    fetch(`https://tyradex.vercel.app/api/v1/pokemon/${pokemon_name}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name.fr);
        setHp(data.stats.hp);
        setType(data.types[0].name);
        setTypeImage(data.types[0].image);
        setSprite(
          data.sprites[pokemon_edition] ??
            data.sprites["regular"] ??
            data.sprites["shiny"]
        );
        console.log("regular:", data.sprites["regular"]);
        console.log("shiny:", data.sprites["shiny"]);
        console.log("edition:", pokemon_edition);

        console.log(setSprite);
      });
  }, [pokemon_name, edition]);

  return (
    <section className="relative w-md mx-auto mt-20 rounded-xl shadow-lg border-[10px] border-[#FFE366] bg-[#FFE366] overflow-hidden aspect-[29/40]">
      {/* Fond SVG */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <NoiseSVG type={type} />
      </div>
      {/* Contenu au-dessus */}
      <div className="relative z-10 w-full h-full p-4 flex flex-col justify-between">
        {/* En-tête */}
        <div className="flex justify-between items-center">
          {/* Type + Nom */}
          <div className="flex items-center">
            <Image
              src="/basic.webp"
              className="-ml-4"
              width={60}
              height={50}
              alt="basic badge"
            />
            <span className="text-2xl font-bold tracking-wide ml-2">
              {name}
            </span>
          </div>

          {/* PV + feu */}
          <div className="flex items-center gap-2">
            <div className="flex items-end">
              <span className="text-xs font-extrabold text-black">PV</span>
              <span className="text-2xl font-bold text-black">{hp}</span>
            </div>
            <Image
              src={typeImage}
              width={24}
              height={24}
              alt={`type ${type}`}
            />
          </div>
        </div>
        <div className="z-99 w-full mr-20  flex-grow">
          <Image
            src={sprite}
            alt="dede"
            className="border-2 border-stone-300"
            height={400}
            width={400}
          />
          <BaniereInfo pokemon={pokemon_name} />
        </div>
      </div>
    </section>
  );
}
