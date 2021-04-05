<template>
  <div class="container" id="recipe-p">
    <h2 class="recipe-name">
      {{ recipe.strMeal }}
    </h2>
    <div class="img-thumbnail-container">
      <img :src="recipe.strMealThumb" alt="" class="img-thumbnail" />
    </div>
    <div class="container specs">
      <div class="row">
        <div class="col-4">
          Culture: <strong>{{ recipe.strArea }}</strong>
        </div>
        <div class="col-4">
          Category: <strong>{{ recipe.strCategory }}</strong>
        </div>
        <div class="col-4">
          <a target="_blank" :href="recipe.strYoutube">Watch on youtube</a>
        </div>
      </div>
    </div>
    <div class="recipe-ingredient">
      <h3>ingredient</h3>
      <ul>
        <li v-for="(ing, idx) in recipe.ingredients" :key="idx">
          {{ ing }}
        </li>
      </ul>
    </div>
    <div class="recipe-instructions">
      <h3>instructions</h3>
      <p class="instructions">
        {{ recipe.strInstructions }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      recipe: null,
    };
  },
  methods: {
    format() {
      this.recipe.ingredients = [];
      let re = new RegExp("(strIngredient\\d*)");
      Object.keys(this.recipe).forEach((key) => {
        if (re.test(key)) {
          if (this.recipe[key]) {
            let number = key.split("strIngredient")[1];
            this.recipe.ingredients.push(
              `${this.recipe["strMeasure" + number]} ${this.recipe[key]}`
            );
          }
        }
      });
    },
  },
  async created() {
    let id = this.$route.params.id;
    await this.axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        this.recipe = res.data.meals[0];
        this.format();
      });
  },
};
</script>

<style scoped>
#recipe {
  padding-top: 1rem;
}
.specs {
  padding: 0.5rem;
  text-align: center;
}
.recipe-name {
  text-align: center;
  font-size: 3rem;
  font-family: "cinzel";
  font-style: italic;
  padding: 0.5rem;
}
.img-thumbnail {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
}
p.instructions {
  padding-left: 1.5rem;
}
</style>
