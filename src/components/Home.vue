<template>
  <div id="home">
    <header class="top-bar">
      <h1>
        <router-link to="/">Cooking Master</router-link>
      </h1>
    </header>
    <search-box-componet />
    <router-view></router-view>
    <footer>Created By Amr Monier</footer>
  </div>
</template>

<script>
import SearchBoxComponet from "./Searchbox.vue";
export default {
  name: "HomeComponent",
  components: { SearchBoxComponet },
};
</script>

<style scoped>
#home {
  width: 100vw;
  min-height: 100vh;
  background-color: var(--grey);
}

.top-bar {
  background-color: var(--red);
  padding: 0.25rem;
  text-align: center;
  font-family: "cinzel", monospace;
}
.top-bar a {
  color: var(--white);
  text-decoration: none;
  font-weight: 700;
  font-size: 3rem;
}
footer {
  width: 100vw;
  background-color: var(--red);
  padding: 0.5rem;
  text-align: center;
  font-size: 1.3rem;
  font-family: "cinzel", monospace;
  color: #fff;
}
</style>
