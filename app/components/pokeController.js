import PokeService from "./pokeService.js";

let _pokeService = new PokeService()


function drawPokemon() {
  let pokemon = _pokeService.pokemon
  let template = ''
  pokemon.forEach(p => {
    template += p.grabTemplate()
  })
  document.querySelector('.poke-name').innerHTML = template
}

function drawTeam() {
  let template = ''
  let pokemon = _pokeService.myTeam
}





export default class PokeController {
  constructor() {
    _pokeService.addSubscriber('pokemon', drawPokemon)
    this.grabPokemon()
  }
  grabPokemon(url) {
    _pokeService.getAllPokemonApi(url)
  }
}