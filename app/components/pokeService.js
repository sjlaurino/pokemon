import Pokemon from "../models/pokemon.js";

// @ts-ignore
let _pokemonApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/'
})

// @ts-ignore
let _sandbox = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/Steven/heroes'
})

let _state = {
  apiPokemon: [],
  myTeam: {}
  //important that the individual pokemon you select is an object and not an array.
}

let _subscribers = {
  pokemon: [],
  myTeam: []
}

function setState(prop, value) {
  _state[prop] = value
  _subscribers[prop].forEach(fn => fn())

}



export default class PokeService {

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get apiPokemon() {
    return _state.apiPokemon.map(p => new Pokemon(p))
  }

  get myTeam() {
    return _state.myTeam
  }

  getPokemonData() {
    _pokemonApi.get()
      .then(res => {
        let data = res.data.data.results.map(d => new Pokemon(d))
        setState('apiPokemon', data)
      })
      .catch(err => {
        console.error(err)
      })
  }

  pokeCard(name) {
    _pokemonApi.get(name)
      .then(res => {
        let data = new Pokemon(res.data)
        setState('myTeam', data)
      })
      .catch(err => {
        console.error(err)
      })
  }
}