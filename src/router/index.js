import Vue from "vue";
import VueRouter from "vue-router";
import RecipesComponent from "@/components/Recipes.vue";
import RecipeDetailsComponent from "@/components/RecipeDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Recipes",
    component: RecipesComponent,
  },
  {
    path: "/meal/:id",
    name: "Recipe-details",
    props: (route) => ({ ...route.params }),
    component: RecipeDetailsComponent,
    beforeEnter: (to, from, next) => {
      Number.isInteger(Number.parseInt(to.params.id)) ? next() : next("/");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
