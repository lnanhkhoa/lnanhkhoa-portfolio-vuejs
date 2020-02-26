import Vue from "vue";
import VueRouter from "vue-router";
import MiniHome from "../views/MiniHome.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: MiniHome
  },
  {
    path: "/profile",
    name: "Profile",
    component: ()=>import(/* webpackChunkName: "about" */ "../views/Home.vue")
  },
  {
    path: "/my-projects/:id",
    name: "My Projects",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MyProjects.vue")
  },
  {
    path: "/resume",
    name: "Resume",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ()=>import(/* webpackChunkName: "about" */ "../views/Resume.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
