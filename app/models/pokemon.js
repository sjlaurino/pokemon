export default class Pokemon {
  constructor(data) {
    this.name = data.name
    this.sprites.front_default = data.img
  }

  get Template() {
    return `
    <div class="card" style="width: 18rem;">
      <img src="${this.sprites.front_default}" class="card-img-top" alt="...">
     <div class="card-body">
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     </div>
    </div>
    `
  }
}