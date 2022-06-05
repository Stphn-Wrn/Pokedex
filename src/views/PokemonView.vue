<template>
<div><HeaderItem/>
<main>
  <div class="main_pokemon">
    <h1>Détails de {{ upperCaseFirstLetter }}</h1>
    <div class="wrapper">
      <div class="left_side">
        <img class="illustration" :src="currentImg" alt="pokemon" />
      </div>
      <div class="right_side">
        <h2 class="title"><span></span></h2>
        <div class="types">
          <ul>
            <li class="type"></li>
          </ul>
        </div>
        <div class="stats">
          <h3>Statistiques</h3>
          <div class="stat">
            <div class="label">Height :</div>
            <div class="value">{{ pokemon.height }}</div>
          </div>
          <div class="stat">
            <div class="label">Poids</div>
            <div class="value">{{ pokemon.weight }}</div>
          </div>
          <div class="stat">
            <div class="label">Type :</div>
            <div class="value" v-for="(value, index) in pokemon.types" :key="index">{{ value }}</div>

          </div>
          <div class="stat">
            <div class="label">Abilité :</div>
            <div class="value" v-for="(value, index) in pokemon.abilities" :key="index">{{ value.name }}</div>
            
          </div>
         
         
        </div>
      </div>
      
    </div>
    <router-link :to="{name: 'HomeView'}">
    <a class="back" href="">Revenir à la liste</a>
    </router-link>
  </div>
  </main>
  </div>
</template>
<script>
import HeaderItem from '@/components/HeaderItem.vue'
export default {
  name: "PokemonView",
  components: {
    HeaderItem
  },
    data(){
    return{
      currentImg: '',
      data: {},
      pokemon: {
        name: '',
        abilities: [],
        types: [],
        front: '',
        height: 0,
        weight: 0,
      }
    }
   
  },
  created: function(){
    this.data = this.$route.params.data;
    this.pokemon.name = this.data.name;
    this.pokemon.height = this.data.height;
    this.pokemon.weight = this.data.weight;
    this.data.types.forEach(type => {
      this.pokemon.types.push(type.type.name);
    });
    this.data.abilities.forEach(index => {
      this.pokemon.abilities.push(index.ability);
    });
    this.currentImg = this.data.sprites.front_default;
  },
  computed: {
    upperCaseFirstLetter: function () {
      let pokemonName =
        this.pokemon.name[0].toUpperCase() + this.pokemon.name.slice(1);
      return pokemonName;
    },
  },
};
</script>
<style>

</style>