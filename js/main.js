const button = document.getElementById('poke-button')
let sprite = document.getElementById('poke-sprite')
const id = document.getElementById('poke-id')
const pokeName = document.getElementById('poke-name')
const type = document.getElementById('poke-type')

button.addEventListener('click', (event) => {
  event.preventDefault()
  const randomPokemon = Math.floor(Math.random() * 1026)
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
    .then(res => res.json())
    .then(pokemon => {
      console.log(pokemon)
      sprite.src = pokemon['sprites']
      id.innerText = pokemon['id']
      pokeName.innerText = pokemon['name']
      type.innerText = pokemon['types'].map(type => type.type.name).join(', ')
    })
    .catch(err=>console.log(err))

})