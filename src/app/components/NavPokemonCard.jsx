"use client";
import BaniereInfo from "./BaniereInfo";
import Image from "next/image";
import NoiseSVG from "./NoiseSVG";
import { useState, useEffect } from "react";

export default function PokemonCard({ pokemon_name, pokemon_edition, select }) {
  const [name, setName] = useState("");
  const [hp, setHp] = useState("");
  const [type, setType] = useState("");
  const [sprite, setSprite] = useState("");
  const [sons, setSons] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const pokeData = await fetch(
          `https://tyradex.vercel.app/api/v1/pokemon/${pokemon_name}`
        ).then((res) => res.json());

        setName(pokeData.name.fr);
        setHp(pokeData.stats.hp);
        setType(pokeData.types[0].name);
        setSprite(
          pokeData.sprites[pokemon_edition] ??
            pokeData.sprites["regular"] ??
            pokeData.sprites["shiny"]
        );
      } catch (err) {
        console.error("Erreur tyradex :", err);
      }
    }

    fetchData();
  }, [pokemon_name, pokemon_edition]);

  useEffect(() => {
    async function fetchAndPlayCry() {
      try {
        const audioData = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon_name}`
        ).then((res) => res.json());

        const cryUrl = audioData.cries?.latest;
        if (cryUrl) {
          setSons(cryUrl);
          const audio = new Audio(cryUrl);
          await audio.play();
        }
      } catch (e) {
        console.warn("Impossible de jouer le cri :", e);
      }
    }

    fetchAndPlayCry();
  }, [pokemon_name]);
  return (
    <section className="relative w-md mx-auto mt-20 rounded-xl shadow-lg border-[15px] border-[#FFE366] bg-[#FFE366] aspect-[29/40]">
      {/* Fond SVG */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <NoiseSVG type={type} />
      </div>
      {/* Contenu au-dessus */}
      <div className="relative z-10 w-full h-full p-4 pt-2 flex flex-col justify-between align-center">
        {/* En-tête */}
        <div className="flex justify-between items-center ">
          <div className="flex gap-1 ">
            <div className="flex items-start -ml-7 z-3 mt-1">
              <Image
                src="/basic2.webp"
                width={60}
                height={50}
                alt="basic badge"
              />
            </div>
            <span className="text-2xl font-bold font-gill tracking-wide">
              {name}
            </span>
          </div>
          {/* PV + feu */}
          <div className="flex items-center -mr-3">
            <div className="flex items-end gap-1">
              <span className="text-sm font-extrabold text-black">PV</span>
              <span className="text-2xl font-bold text-black">{hp}</span>
            </div>
            <Image
              src={`/icon-type/${type.toLowerCase()}.png`}
              width={30}
              height={30}
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
