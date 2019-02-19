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
  pokemon: [],
  _myTeam: []
}

let _subscribers = {
  pokemon: [],
  _myTeam: []
}

function setState(prop, value) {
  _state[prop] = value
  _subscribers[prop].forEach(fn => fn())

}



export default class PokeService {

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get pokemon() {
    return _state.pokemon.map(p => new Pokemon(p))
  }

  get myTeam() {
    return _state.myTeam.map(p => new Pokemon(p))
  }

  addToTeam(name) {
    let pokemon = _state.pokemon.find(pokemon => pokemon.name == name)
    let myPokemon = _state._myTeam.find(p => p.name == pokemon.name)
    if (myPokemon) {
      alert('Duplicate Hero')
      return
    }
    _sandbox.post('', pokemon)
      .then(res => {
        this.getMyTeamData()
      })
      .catch(err => {
        console.log(err);
      })
  }

  getMyTeamData() {
    _sandbox.get()
      .then(res => {
        let data = res.data.data.map(d => new Pokemon(d))
        setState('myTeam', data)
      })
  }





  getAllPokemonApi(url = '') {
    _pokemonApi.get(url)
      .then(response => {
        console.log(response)
        let pokemon = response.data.results
        console.log('pokemon', pokemon)
        setState('pokemon', pokemon)
      })
  }

}