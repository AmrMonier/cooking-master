<template>
  <div id="home">
    <header class="top-bar">
      <h1>
        <router-link to="/">Cooking Master</router-link>
      </h1>
    </header>
    <search-box-componet/>
    <router-view></router-view>
  </div>
</template>

<script>
import SearchBoxComponet from './Searchbox.vue'
export default {
    name: 'HomeComponent',
    components:{SearchBoxComponet}
};
</script>

<style scoped>
#home {
  width: 100vw;
  min-height: 100vh;
  background-color: #fff;
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

</style>