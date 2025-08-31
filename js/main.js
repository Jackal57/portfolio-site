const button = document.getElementById('poke-button');
const sprite = document.getElementById('poke-sprite');
const id = document.getElementById('poke-id');
const pokeName = document.getElementById('poke-name');
const type = document.getElementById('poke-type');

//Calls a random pokemon from the pokeapi based off id

button.addEventListener('click', (event) => {
  event.preventDefault();
  const randomPokemon = Math.floor(Math.random() * 1026);
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
    .then(res => res.json())
    .then(pokemon => {
      console.log(pokemon);
      const imageLink = pokemon.sprites.front_default;
      sprite.setAttribute("src", imageLink);
      id.innerText = pokemon['id'];
      pokeName.innerText = pokemon['name'];
      type.innerText = pokemon['types'].map(type => type.type.name).join(', ');
    })
    .catch(err=>console.log(err));
    document.getElementById('poke-box').style.display = "block";
    sprite.setAttribute("src", "");
})