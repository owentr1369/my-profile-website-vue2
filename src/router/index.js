import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProjectsView from "../views/ProjectsView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
    meta: {
      title: "About Me",
    },
  },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectsView,
    meta: {
      title: "Projects",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Tran Tam`;
  next();
});

export default router;
