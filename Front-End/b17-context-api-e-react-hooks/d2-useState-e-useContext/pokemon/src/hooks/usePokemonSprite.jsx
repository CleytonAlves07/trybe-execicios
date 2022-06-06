import { useState, useEffect } from "react";
const usePokemonSprite = () => {
  const [pokemonUrl, setPokemonUrl] = useState('https://pokeapi.co/api/v2/pokemon/152/');
  const [pokemonImage, setPokemonImage] = useState('');
  useEffect(() => {
    const getPokemonImage = async () => {
      const response = await fetch(pokemonUrl);
      const { sprites } = await response.json();
      const { front_default: sprite } = sprites;
      setPokemonImage(sprite);
    }
    getPokemonImage();
  }, [pokemonUrl])
  return [pokemonImage, setPokemonUrl];
};

export default usePokemonSprite;