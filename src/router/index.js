import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import { firebaseAuth } from "../firebase/config";

const requireAuth = (to, from, next) => {
  let user = firebaseAuth.currentUser;
  if (!user) {
    next({ name: "Home" });
  } else {
    next();
  }
};

const requireNoAuth = (to, from, next) => {
  let user = firebaseAuth.currentUser;
  if (user) {
    next({ name: "Dashboard" });
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: requireNoAuth,
  },
  {
    path: "/chatView",
    name: "chatView",
    component: Dashboard,
    beforeEnter: requireAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
