<template>
  <div id="app">
    <HomeComponent />
  </div>
</template>
<script>
import HomeComponent from "@/components/Home.vue";

export default {
  components: { HomeComponent },
};
</script>

<style>
@font-face {
  font-family: "cinzel";
  src: url("./fonts/Cinzel.ttf");
}
:root {
  --red: #eb594c;
  --white: #f1e5e0;
  --redish-white: #a59495;
  --grey: #ced4da;
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
#app {
  overflow-x: hidden;
  background-color: var(--redish-white);
}
.btn-red {
  background-color: var(--red) !important;
  color: var(--white) !important;
}
.btn-red:focus {
  box-shadow: 0 0 0 0.25rem #eb594c80 !important;
}
</style>
