<h1 align="center">Welcome to PokéTrunfo</h1>

<div align="center">
  <img src="images/logo.svg" alt="Logo" width="200" height="200">
  <p align="center">
    Top Trumps-like Card Game of Pokémon's first generation.
    <br />
    <a href="https://bryanef00.github.io/Poketrunfo-ts/">View Demo</a>
</div>

# About The Project

The initial concept of this project was developed during the Frontend module of Trybe's Web Development Course.
The idea was to develop an React Application based on the [Top Trumps](https://en.wikipedia.org/wiki/Top_Trumps) Card Game.

The user was able to:
* Create a deck, with a free theme;
* Add and remove cards from the deck;
* View all cards that have been added to the deck;
* Play with the created deck.

After finishing the module, i've decided to use all the knowledge that i've gathered to this point, and challenge my self to rebuild this project adding some new features to it, like:

* TypeScript;
* ReactRouter;
* Light and Dark Mode;
* And a complete new design.

I removed the card creation feature, and added 151 Pokémon Cards using the data from [PokéAPI](https://pokeapi.co).

## Acknowledgments

A huge thanks to my friend [Raphael Quintela](https://www.linkedin.com/in/raphael-quintela-51a88a24b/). He helped me with the design of the pages, and created amazing SVGs for the icons and the layout of the cards.

<div align="center">

### Light Mode 

  <img src="images/HomePageLight.png" alt="Home Page Light Mode">
  
### Dark Mode 
  
  <img src="images/HomePageDark.png" alt="Home Page Dark Mode">
</div>

## Deck

<details>
  <summary>Show Screenshots</summary><br />
  <div align="center">
    <img src="images/Deck.png" alt="Deck Page">
    <img src="images/ClickOnCard.png" alt="Card Example 1">
    <img src="images/ClickOnCard2.png" alt="Card Example 2">
  </div>
</details>

## Collection 

<details>
  <summary>Show Screenshots</summary><br />
  <div align="center">
    <img src="images/EmptyCollection.png" alt="Empty Collection Page">
    <img src="images/FullCollection.png" alt="Full Collection Page">
  </div>
</details>

## Game

<details>
  <summary>Show Screenshots</summary><br />
  <div align="center">
    <img src="images/GamePage1.png" alt="Game Page 1">
    <img src="images/GamePage2.png" alt="Game Page 2">
    <img src="images/GamePage3.png" alt="Game Page 3">
    <img src="images/GamePage4.png" alt="Game Page 4">
    <img src="images/GamePage5.png" alt="Game Page 5">
    
  </div>
</details>

# Built With

* [![TypeScript][TypeScript-badge]][TypeScript-url]
* [![React][React-badge]][React-url]
* [![ReactRouter][ReactRouter-badge]][ReactRouter-url]
* [![Tailwind][Tailwind-badge]][Tailwind-url]

# Getting Started

## Prerequisites

To run this project, you'll need to install [Node.js](https://nodejs.org/en/) first.

## Installation

1. Clone the repository.
  * `git clone git@github.com:BryanEF00/Poketrunfo-ts.git`
  * Open the repository folder you just cloned:
    * `cd Poketrunfo-ts`

2. Install dependencies and initialize the project.
  * Install dependencies:
    * `npm install`
  * Initialize the project:
    * `npm run dev`
  * An url to a localhost page should appear in your terminal:    
    * `http://localhost:5173/Poketrunfo-ts/`

# Usage

  You'll need to have at least 6 Pokémons in your collection to play.

  If you want to choose the cards on your own, navigate to the `Deck Page` and search for the cards. <br/>
  Optionally, you can go directly to the `Collection Page`, and select random cards to your deck or just select a fully random team.

## How to Play

  If you already have 6 Pokémons in your collection, you can just navigate to the `Game Page` and hit the start button.

  * The game has 6 turns in total, and they switch between Player and CPU at the end of each turn.
  * On the first turn you'll select an attribute that fit your best Pokemon.
  * Once selected, hit the fight button.
  * Based on your selected attribute, the CPU will pick a card with the highest status possible from it's deck and compare it against yours.
  * The highest status win and both selected cards are discarded.
  * On the next turn, the CPU will lock an attribute of it's best card, and now you'll have to select a card besed on the CPU choise.

  After 6 turns, the one with the most victories will be the winner.

# Mobile Version

<div align="center">
  <img src="images/HomePageMobile.png" alt="Home Page Mobile">
  <img src="images/DeckMobile.png" alt="Deck Page Mobile">
  <img src="images/CollectionMobile.png" alt="Collection Page">
  <img src="images/GameMobile.png" alt="Game Page Mobile">
</div>

<!-- MARKDOWN LINKS & IMAGES -->
[TypeScript-badge]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org
[React-badge]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org
[ReactRouter-badge]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[ReactRouter-url]: https://reactrouter.com/en/main
[Tailwind-badge]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com
