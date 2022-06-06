import React, { useState, useEffect } from 'react';
import usePokemonSprite from './hooks/usePokemonSprite';
import './App.css';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  
  const [pokemonImage,setPokemonUrl ] = usePokemonSprite();

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=151&limit=151");
      const { results } = await response.json();
      setPokemonList(results);
    }
    fetchPokemon();
  }, []);
  return (
    <div className="App">
      <h1>Pokelist</h1>
      <img
        src={pokemonImage}
        alt="pokemon selecionado"
      />
      <ul>
        {pokemonList.map(({ name, url }) => <li
          key={name}
          onClick={() => setPokemonUrl(url) }
        >
          {name}
          
        </li>)}
      </ul>

    </div>
  );
}

export default App;
