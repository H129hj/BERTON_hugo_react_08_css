export type Pokemon = {
  id: number;
  name: string;
  type: string;
  hp: number;
};

export const pokemons: Pokemon[] = [
  { id: 1, name: "Bulbizarre", type: "plante", hp: 45 },
  { id: 4, name: "Salamèche", type: "feu", hp: 39 },
  { id: 7, name: "Carapuce", type: "eau", hp: 44 },
  { id: 25, name: "Pikachu", type: "électrik", hp: 35 },
];
