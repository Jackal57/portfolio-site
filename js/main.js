const button = document.getElementById('poke-button');
const sprite = document.getElementById('poke-sprite')
const id = document.getElementById('poke-id')
const name = document.getElementById('poke-name')
const type = document.getElementById('poke-type')
const dexEntry = document.getElementById('dex-entry')

button.addEventListener('click', (event) => {
  event.preventDefault()
  const randomPokemon = Math.floor(Math.random() * 1026)
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
    .then(res => res.json())
    .then(pokemon => {
      console.log(pokemon)
      sprite.src = pokemon.message
      id.innerText = pokemon['poke-id']
      name.innerText = pokemon['poke-name']
      type.innerText = pokemon['poke-type'].map(type => type.type.name).join(', ')
      dexEntry.innerText = pokemon['dex-entry']
    })
    .catch(err=>console.log(err))

})