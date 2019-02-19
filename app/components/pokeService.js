import Pokemon from "../models/pokemon.js";

let pokemonApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/'
})

let _state = {
  pokemon: []
}

let _subscribers = {
  pokemon: []
}

function setState(prop, value) {
  _state[prop] = value
  _subscribers.forEach(fn => fn())

}



export default class PokeService {

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get pokemon() {
    return _state.pokemon.map(p => new Pokemon(p))
  }

}