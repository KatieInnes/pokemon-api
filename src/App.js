import './App.css';
import React, { useEffect, useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = () => {
    return fetch("https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0")
          .then(response => response.json())
          .then(response => setPokemon(response.results));
  }

  useEffect(() => {
    fetchPokemon();
  },[])

  return (
    <main className='App'>
      <h1>Pokemon List</h1>
      <ul>
        {pokemon && pokemon.length > 0 && pokemon.map((pokemonObj, index) => (
            <li className="list" key={pokemonObj.id}>{pokemonObj.name}</li>
          ))}
      </ul>
    </main>
  );
}

export default App;
