import styles from "./PokemonCard.module.css";
import type { Pokemon } from "./pokemons";

const couleurs: Record<string, string> = {
  plante: "#3f9142",
  feu: "#d9541e",
  eau: "#2b73b8",
  électrik: "#b8900f",
};

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  // Technique 2 : l'attribut style, utile ici parce que la couleur dépend des données
  const badgeStyle = { backgroundColor: couleurs[pokemon.type] ?? "#555" };
  // la barre de vie dépend aussi de la donnée, on la calcule en JavaScript
  const barreStyle = {
    width: `${Math.min(pokemon.hp, 100)}%`,
    height: "6px",
    marginTop: "8px",
    borderRadius: "3px",
    backgroundColor: "#4caf50",
  };

  return (
    <article className={styles.card}>
      <p>#{pokemon.id}</p>
      <h2 className={styles.name}>{pokemon.name}</h2>
      <span className={styles.badge} style={badgeStyle}>
        {pokemon.type}
      </span>
      <div style={barreStyle} />
    </article>
  );
}
