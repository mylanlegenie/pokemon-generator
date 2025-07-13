"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";
import NavPokemonCard from "./components/NavPokemonCard";

export default function Home() {
  const [pokemon, setPokemon] = useState("");
  const [edition, setEdition] = useState(""); // shiny / regular

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("pokemon")?.toString() || "";
    setPokemon(name);
  };

  return (
    <div>
      <div className="max-w-md mx-auto mt-10 space-y-6 bg-white border border-gray-200 shadow-lg rounded-xl p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Champ texte */}
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="pokemon">Nom du Pokémon</Label>
            <Input
              type="text"
              name="pokemon"
              id="pokemon"
              placeholder="ex : pikachu"
              required
            />
          </div>

          {/* Select d'édition */}
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="edition">Édition</Label>
            <Select
              value={edition}
              onValueChange={(value) => setEdition(value)}
              required
            >
              <SelectTrigger id="edition">
                <SelectValue placeholder="Choisir une édition" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Éditions</SelectLabel>
                  <SelectItem value="regular">Regular</SelectItem>
                  <SelectItem value="shiny">Shiny</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end">
            <Button type="submit">Rechercher</Button>
          </div>
        </form>
      </div>

      {/* Affichage de la carte */}
      {pokemon && edition && (
        <div className="pt-4">
          <NavPokemonCard pokemon_name={pokemon} pokemon_edition={edition} />
        </div>
      )}
    </div>
  );
}
