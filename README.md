# Calm Pairs

Calm Pairs is a relaxing memory game. You open cards and look for two cards with the same picture. Try to finish the game fast and make few mistakes.

**▶ Play online:** [pashcode.github.io/calm-pairs](https://pashcode.github.io/calm-pairs/)

## What the game has

- **4 levels.** Every game uses random pictures from 15 pictures.

  | Level  | Pairs | Cards |
  |--------|:-----:|:-----:|
  | Easy   | 6     | 12    |
  | Basic  | 8     | 16    |
  | Medium | 10    | 20    |
  | Hard   | 15    | 30    |

- **Timer and mistakes.** You can see your time and your mistakes during the game.
- **Best results.** The game saves your best time and your mistakes for every level. After the game, you can see if you are better than before.
- **Restart.** You can play the same level again or choose a new level.
- **Nice background.** Small bubbles move slowly on the screen.
- **Sounds.** You hear a sound when you choose a level, open a card or find a pair.
- **Loading screen.** All pictures load before the game starts.
- **Phone and computer.** The game works well on big and small screens.

## Technologies

- TypeScript (without frameworks)
- Vite
- Sass
- Howler.js (sounds)
- nanoid (IDs for cards)
- GitHub Pages

## Folders

```
src/
├── main.ts          # the game starts here
├── styles/          # styles (Sass)
└── ts/
    ├── gameState.ts # game data and settings
    ├── buttons/     # buttons: restart, new level
    ├── preload/     # loading pictures
    ├── score/       # timer, mistakes, results
    ├── ui/          # animations and background
    ├── utils/       # small helper functions
    └── types/       # TypeScript types
```

## How it works

1. The game loads all pictures.
2. You choose a level.
3. The game takes random pictures, makes pairs and mixes the cards.
4. You click on two cards. If the pictures are the same, the cards stay open. If not, you get a mistake and the cards close.
5. When you find all pairs, you see your results.
