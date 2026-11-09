# React Basics 08 : le CSS dans React (Pokédex)

Petit Pokédex en React + TypeScript (Vite) qui utilise les trois techniques de
style vues dans la quête.

## Les trois techniques, et où les voir

| Technique | Fichier | Utilisée pour |
|-----------|---------|---------------|
| Classes CSS (`className` + fichier importé) | `src/App.css`, `src/App.tsx` | mise en page générale et grille |
| Attribut `style` (objet JavaScript) | `src/PokemonCard.tsx` | couleur du badge et barre de vie, qui dépendent des données |
| Module CSS | `src/PokemonCard.module.css` | l'apparence d'une carte, sans risque de conflit de noms |

## Pourquoi ce choix

- Pour la mise en page, un fichier CSS classique suffit et reste facile à lire.
- La couleur du badge change selon le type du Pokémon et la largeur de la barre
  selon ses points de vie : ce sont des valeurs calculées en JavaScript, donc
  l'attribut `style` est pertinent. Je ne l'ai pas utilisé pour le reste parce
  qu'il ne gère ni le `:hover` ni les media queries.
- Pour la carte, le module CSS donne des noms de classe uniques (dans le build,
  `.card` devient `_card_19ob2`). Un autre composant peut donc avoir sa propre
  classe `.card` sans qu'elles se contredisent.

## Lancer

```bash
npm install
npm run dev
```
