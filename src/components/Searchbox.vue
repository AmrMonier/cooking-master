<template>
  <div class="container-fluid search-box">
    <div class="row">
      <div class="col col-12 col-lg-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search..."
          v-model="searchName"
        />
      </div>
      <div class="col col-12 col-lg-3">
        <select
          class="form-select"
          v-model="currentCategory"
          @change="fetchRecipesByCategory(currentCategory)"
        >
          <option selected disabled hidden value="0">Category</option>
          <option
            v-for="(category, idx) in categories"
            :key="idx"
            :value="category.strCategory"
          >
            {{ category.strCategory }}
          </option>
        </select>
      </div>
      <div class="col col-12 col-lg-3">
        <select
          class="form-select"
          v-model="currentCulture"
          @change="fetchRecipesByArea(currentCulture)"
        >
          <option selected disabled hidden value="0">Culture food</option>
          <option v-for="(area, idx) in areas" :key="idx" :value="area.strArea">
            {{ area.strArea }}
          </option>
        </select>
      </div>
      <div class="col col-12 col-lg-3">
        <select
          class="form-select"
          v-model="currentIngredient"
          @change="fetchRecipesByIngredient(currentIngredient)"
        >
          <option selected disabled hidden value="0">Main ingredient</option>
          <option
            v-for="(ingredient, idx) in MainIngredients"
            :key="idx"
            :value="ingredient.strIngredient"
          >
            {{ ingredient.strIngredient }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "SearchComponent",
  computed: mapState(["areas", "categories", "MainIngredients"]),
  data: () => {
    return {
      currentIngredient: 0,
      currentCulture: 0,
      currentCategory: 0,
      searchName: null,
    };
  },
  watch: {
    currentIngredient: function () {
      this.searchName = null;
      this.currentCulture = 0;
      this.currentCategory = 0;
      this.goHome()
    },
    currentCulture: function () {
      this.currentIngredient = 0;
      this.searchName = null;
      this.currentCategory = 0;
      this.goHome()
    },
    currentCategory: function () {
      this.currentIngredient = 0;
      this.currentCulture = 0;
      this.searchName = null;
      this.goHome()
    },
    searchName: function (val) {
      this.currentIngredient = 0;
      this.currentCulture = 0;
      this.currentCategory = 0;
      this.searchForMeals(val);
      this.goHome()
    },
  },
  methods: {
    ...mapActions([
      "fetchAreas",
      "fetchIngrediants",
      "fetchCategories",
      "fetchRecipesByIngredient",
      "fetchRecipesByArea",
      "fetchRecipesByCategory",
      "searchForMeals",
    ]),
    goHome(){
    if(this.$route.path !== '/')
      this.$router.push({path: '/'})
    }
  },
  mounted() {
    this.fetchAreas().then(() => {
      this.fetchCategories().then(() => {
        this.fetchIngrediants();
      });
    });
  },
};
</script>

<style scoped>
.search-box {
  padding: 0.5rem 1rem;
  border-bottom: 1px solid var(--grey);
}
.search-box input,
.search-box select {
  border: none;
}
.search-box input:focus,
.search-box select:focus {
  outline: none;
  box-shadow: 0 0 0 2px var(--white);
}
select:invalid {
  color: var(--grey);
}
.col-12{
  margin: 0.25rem auto;
}
</style>
