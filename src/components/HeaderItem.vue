<template>
  <header>
    <div class="container">
      <router-link :to="{ name: 'HomeView' }">
        <a class="logo" href="">Pokédex</a>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderItem",
  data() {
    return {};
  },
};
</script>


<style>
</style>
