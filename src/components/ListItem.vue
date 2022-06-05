<template>
  
    
        
      <li>
<router-link :to="{name: 'PokemonView', params: {name: this.name, data: this.pokemonData}}">
          <img :src="currentImg" alt="Pokemon" />
          <div class="name">
            {{ upperCaseFirstLetter }}<span class="number"> {{ num }}</span>
          </div>
          </router-link>
      </li>
      
    
  
</template>

<script>
import axios from "axios";
export default {
  name: "ListItem",
  data() {
    return {
      currentImg: "",
      pokemonData: {},
      pokemon: {},
    };
  },
  props: {
    num: Number,
    name: String, // On récupère les data du composants parents 'HomeView'
    url: String,
  },
  computed: {
    upperCaseFirstLetter: function () {
      let pokemonName = this.name[0].toUpperCase() + this.name.slice(1);
      return pokemonName;
    },
  },
    created: function () {
    axios.get(this.url)
      .then((response) => {
        this.pokemonData = response.data;
        this.currentImg = response.data.sprites.front_default;
        
        caches.open('pokedexImg').then(function(cache) {
           return cache.add(response.data.sprites.front_default);
         }
       )
    })
      .catch((error) => {
        console.log(error);
      })

      

  },
  
};
</script>


<style scoped>
</style>
