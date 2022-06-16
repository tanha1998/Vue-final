import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Register from "../components/PageRegister.vue";
import Login from "../components/PageLogin.vue";
import Content from "../components/Content.vue";
import ListUser from "../components/ListUser.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/content",
    name: "Content",
    component: Content,
  },
  {
    path: "/listUser",
    name: "listUser",
    component: ListUser,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
