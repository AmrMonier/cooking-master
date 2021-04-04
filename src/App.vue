<template>
  <div id="app">
    <HomeComponent/>
  </div>
</template>
<script>
import HomeComponent from '@/components/Home.vue'

export default{
  components:{HomeComponent}
}
</script>

<style>
@font-face {
  font-family: 'cinzel';
  src: url('./fonts/Cinzel.ttf');
}
:root{
  --red: #EB594C;
  --white: #F1E5E0;
  --redish-white: #A59495;
  --grey: #ced4da
}
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.btn-red{
  background-color: var(--red) !important;
  color: var(--white)!important;
}
.btn-red:focus{
  box-shadow: 0 0 0 0.25rem #EB594C80 !important;
}
.btn-red:hover{
  background-color:  #EB594C99 !important;
}
</style>
