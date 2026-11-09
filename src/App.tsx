import "./App.css";
import PokemonCard from "./PokemonCard";
import { pokemons } from "./pokemons";

export default function App() {
  return (
    <main className="app">
      <h1>Pokédex</h1>
      <div className="liste">
        {pokemons.map((p) => (
          <PokemonCard key={p.id} pokemon={p} />
        ))}
      </div>
    </main>
  );
}
