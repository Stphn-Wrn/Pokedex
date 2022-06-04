<template>
  <div class="container">
    <ul class="main_list">
      <li>
        <a href="">
          <img class="illustration" :src="currentImg" alt="Pokemon" />
          <div class="name">
            {{ upperCaseFirstLetter }}<span class="number"> {{ num }}</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
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
  created: function() {
      axios.get(this.url).then(response => {
          this.pokemonData = response.data;
          this.currentImg = response.data.sprites.front_default;
      }).catch(error => {
          console.log(error);
      });
  }
};
</script>


<style scoped>
</style>
