"use client";
import { useEffect, useState } from "react";
import "../globals.css";
export default function BaniereInfo({ pokemon }) {
  const [poids, setPoids] = useState();
  const [numero, setNumero] = useState();
  const [taille, setTaille] = useState();
  useEffect(() => {
    fetch(`https://tyradex.vercel.app/api/v1/pokemon/${pokemon}`)
      .then((res) => res.json())
      .then((data) => {
        setPoids(data.weight);
        setNumero(data.pokedex_id);
        setTaille(data.height);
      });
  }, [pokemon]);
  return (
    <div className="flex justify-center bg-gray-50 border-2 border-zinc-300 text-xs gap-2">
      <span>N°{numero ? numero : "..."}</span>
      <span>Taille : {taille ? taille : "..."}</span>
      <span>Poids : {poids ? poids : "..."} </span>
    </div>
  );
}
