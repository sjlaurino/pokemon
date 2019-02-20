import PokeService from "./pokeService.js";

let _pokeService = new PokeService()


function drawPokemon() {
  let pokemon = _pokeService.apiPokemon
  let template = ''
  pokemon.forEach(p => {
    template += p.grabTemplate()
  })
  document.querySelector('.poke-name').innerHTML = template
  debugger
}

function drawTeam() {
  let template = _pokeService.myTeam.pokeDetailsCard()
  document.querySelector('.my-team').innerHTML = template
}





export default class PokeController {
  constructor() {
    _pokeService.addSubscriber('apiPokemon', drawPokemon)
    _pokeService.addSubscriber('myTeam', drawTeam)
    _pokeService.getPokemonData()
  }
  pokeCard(name) {
    _pokeService.pokeCard(name)
  }
}