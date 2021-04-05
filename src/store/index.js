import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
axios.defaults.baseURL = "https://www.themealdb.com/api/json/v1/1";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [],
    categories: [],
    areas: [],
    MainIngredients: [],
  },
  getters: {
    getCategories(state) {
      return state.categories;
    },
    getAreas(state) {
      return state.areas;
    },
    getIngredients(state) {
      return state.MainIngredients;
    },
  },
  mutations: {
    storeCategories(state, payload) {
      state.categories = payload.categories;
    },
    storeAreas(state, payload) {
      state.areas = payload.areas;
    },
    storeIngredients(state, payload) {
      state.MainIngredients = payload.ingredents;
    },
    storeRecipes(state, payload) {
      state.recipes = payload.recipes;
    },
  },
  actions: {
    async fetchRandomRecipes(context) {
      let x = 0
      let meals =[]
      let ids = []
      let tempMeal
      let exist = false;
      while(x != 10){
        exist = false
        await axios.get("/random.php").then((res) => {
          tempMeal = res.data.meals[0]
          ids.forEach(id => {
            if(id === tempMeal.idMeal){
              exist = true 
            }
          })
          if(!exist){
            meals.push(tempMeal)
            x++
          }
        });
      }
      context.commit("storeRecipes", { recipes: meals });
    },
    async fetchCategories(context) {
      axios.get("/list.php?c=list").then((res) => {
        context.commit("storeCategories", { categories: res.data.meals });
      });
    },
    async fetchAreas(context) {
      axios.get("/list.php?a=list").then((res) => {
        context.commit("storeAreas", { areas: res.data.meals });
      });
    },
    async fetchIngrediants(context) {
      axios.get("/list.php?i=list").then((res) => {
        context.commit("storeIngredients", { ingredents: res.data.meals });
      });
    },
    async fetchRecipesByIngredient(context, data) {
      axios.get(`/filter.php?i=${data}`).then((res) => {
        context.commit("storeRecipes", { recipes: res.data.meals });
      });
    },
    async fetchRecipesByArea(context, data) {
      axios.get(`/filter.php?a=${data}`).then((res) => {
        context.commit("storeRecipes", { recipes: res.data.meals });
      });
    },
    async fetchRecipesByCategory(context, data) {
      axios.get(`/filter.php?c=${data}`).then((res) => {
        context.commit("storeRecipes", { recipes: res.data.meals });
      });
    },
    async searchForMeals(context, data) {
      axios.get(`/search.php?s=${data}`).then((res) => {
        context.commit("storeRecipes", { recipes: res.data.meals });
      });
    },
  },
});
