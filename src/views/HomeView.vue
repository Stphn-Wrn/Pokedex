<template>
  <div>
    <HeaderItem 
    filteredPokemons/>
<div class="container">
  <ul class="main_list">
    <ListItem 
    v-for="(pokemon, index) in filteredPokemons" 
    :key="pokemon.url"
    :num="index+1"
    :name="pokemon.name"
    :url="pokemon.url"/>
    </ul>
</div>
  </div>
</template>

<script>
import HeaderItem from "@/components/HeaderItem.vue";
import ListItem from "@/components/ListItem.vue";
import axios from 'axios';

export default {
  name: "HomeView",
  components: {
    HeaderItem,
    ListItem,
  },
  data() {
    return{
      filteredPokemons: [],
    }
  },
  created: function(){
    axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151') // On va récupérer les 151 premiers pokemon
    .then(response => {
      this.filteredPokemons = response.data.results; // On va stocker dans 'filteredPokemons' le tableau results pour avoir accès aux clés + valeurs (Nom + image)
    }).catch(error => {
      console.log(error);
    });

  },

};
</script>
<style>

</style>
