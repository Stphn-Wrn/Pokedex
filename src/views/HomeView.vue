<template>
  <div>
    <header>
      <div class="container">
        <router-link :to="{ name: 'HomeView' }">
          <a class="logo" href="">Pokédex</a>
        </router-link>
        <nav>
          <input
            type="text"
            placeholder="Find Pokemons"
            aria-label="Find Pokemons"
            v-model="search"
          />
          <button @click="searchPokemons" type="button">&#128269;</button>
        </nav>
      </div>
</header>
    <div class="container">
      <ul class="main_list">
        <ListItem
          v-for="(pokemon, index) in filteredPokemons"
          :key="pokemon.url"
          :num="index + 1"
          :name="pokemon.name"
          :url="pokemon.url"
        />
      </ul>
    </div>
    <footer>
      <div class="container"></div>
    </footer>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    ListItem,

  },
  data() {
    return {
      search: "",
      filteredPokemons: [],
      pokemons: [],
    };
  },
  created: function () {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151") // On va récupérer les 151 premiers pokemon
      .then((response) => {
        this.pokemons = response.data.results;
        this.filteredPokemons = response.data.results; // On va stocker dans 'filteredPokemons' le tableau results pour avoir accès aux clés + valeurs (Nom + image)
      })
      .catch((error) => {
        console.log(error);
      });
  },
  
  methods: {
    searchPokemons: function () {
      this.filteredPokemons = this.pokemons;
      if (this.search == "" || this.search == " ") {
        this.filteredPokemons = this.pokemons;
      } else {
        this.filteredPokemons = this.pokemons.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(this.search.toLowerCase())
        );
      }
    },
  },
};
</script>
<style>
</style>
