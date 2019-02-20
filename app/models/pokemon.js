export default class Pokemon {
  constructor(data) {
    this.url = data.url
    this.name = data.name
    if (data.sprites) {
      this.img = data.sprites.front_default
    }
  }

  grabTemplate() {
    return `
   <button onclick=onclick="app.controllers.pokeController.pokeCard('${this.name}')" type="button" class="btn btn-outline-secondary">${this.name}</button>
    `
  }

  pokeDetailsCard(name) {
    return `
<div class="card">
      <img src="${this.img}" class="card-img-top" alt="...">
  <div class="card-body">
      <h5 class="card-title">${this.name}</h5>
      <p class="card-text">Pokemon details here</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    `
  }
}

