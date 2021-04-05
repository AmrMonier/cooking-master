<template>
  <main class="container" id="recipes">
    <h3 v-if="recipes.length == 0">Oops no recipes to show!</h3>
    <div class="card" v-for="recipe in recipes" :key="recipe.idMeal">
      <img :src="recipe.strMealThumb" alt="" class="card-img-top" />
      <div class="card-body">
        <router-link
          class="card-title"
          :to="{
            name: 'Recipe-details',
            params: { id: recipe.idMeal, recipe },
          }"
          >{{ recipe.strMeal }}</router-link
        >
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: mapState(["recipes"]),
  methods:{
    ...mapActions(['fetchRandomRecipes'])
  },
  async created(){
    await this.fetchRandomRecipes()
  }
};
</script>

<style scoped>
#recipes {
  padding-top: 1rem !important;
  display: flex;
  flex-wrap: wrap;
  min-height: 73vh;
  justify-content: center;
}
.card {
  width: 250px;
  min-height: 250px;
  max-height: 300px;
  margin: 0.25rem 0.5rem;
  overflow: hidden;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
}

.card-img-top {
  object-fit: cover;
  height: 200px;
}
.card-body {
  padding: 0;
}
.card-title {
  width: 100%;
  height: 100%;
  display: block;
  background-color: var(--red);
  color: #fff;
  padding: 0.25rem;
  margin-bottom:0 ;
  text-decoration: none;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

}
@media screen and (max-width: 576px) {
  .card{
    width: 300px;
    }
}
</style>
