export default class Pokemon {
  constructor(data) {
    this.name = data.name
  }

  grabTemplate() {
    return `
   <button onclick=onclick="app.controllers.pokeController.pokeDetails(name)" type="button" class="btn btn-outline-secondary">${this.name}</button>
    `
  }
}

