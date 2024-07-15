import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  projectslist = [
    {
      name: "Join",
      img:"Join.png",
      language: ["JavaScript", "HTML", "CSS", "Firebase"],
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      liveUrl: "https://join-188.developerakademie.net/html",
      githubUrl: "https://github.com/OlegBenets/join-dummy"
    },
    {
      name: "Pollo Loco",
      img:"Pollo loco 1.png",
      language: ["JavaScript", "HTML", "CSS"],
      description: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
      liveUrl: "https://oleg-benets.developerakademie.net/El_Pollo_Loco/index.html",
      githubUrl: "https://github.com/OlegBenets/El-Pollo-Loco"
    },
    {
      name: "Pokedex",
      img:"Pokedex.png",
      language: ["JavaScript", "HTML", "CSS", "Api"],
      description: "Based on the PokéAPI a simple library that provides and catalogues pokemon information.",
      liveUrl: "https://oleg-benets.developerakademie.net/Pokedex/PokemonHomePage/index.html",
      githubUrl: "https://github.com/OlegBenets/Pokedex"
    },
  ]

}
