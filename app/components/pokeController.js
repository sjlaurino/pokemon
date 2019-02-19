import PokeService from "./pokeService.js";

let _pokeService = new PokeService()


function drawPokemon() {
  let pokemon = _pokeService.pokemon
  let template = ''
  pokemon.forEach(p => {
    template += p.Template
  })
  document.querySelector('poke-name').innerHTML = template
}





export default class PokeController {

}