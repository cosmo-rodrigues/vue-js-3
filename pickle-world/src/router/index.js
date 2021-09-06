import { createRouter, createWebHistory } from "vue-router";

import NotFound from "../views/NotFound";
import Home from "../views/Home.vue";
import Episodes from "../views/Episodes.vue";
import Characters from "../views/Characters.vue";
import EpisodeDetail from "../views/EpisodeDetail.vue";
import CharacterDetail from "../views/CharacterDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/characters",
    name: "Characters",
    component: Characters,
  },
  {
    path: "/characters/:id",
    name: "CharacterDetail",
    component: CharacterDetail,
  },
  {
    path: "/episodes",
    name: "Episode",
    component: Episodes,
  },
  {
    path: "/episodes/:id",
    name: "EpisodeDetail",
    component: EpisodeDetail,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
