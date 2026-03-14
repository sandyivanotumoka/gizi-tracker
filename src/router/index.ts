// import fungsi router dari vue-router
import { createRouter, createWebHistory } from "vue-router";

// import halaman
import DashboardUser from "../pages/DashboardUser.vue";
import LoginPage from "../pages/LoginPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";

// daftar route aplikasi
const routes = [
  // halaman login
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  // Halaman Register
  {
    path: "/register",
    name: "register",
    component: RegisterPage,
  },

  // halaman dashboard yang membutuhkan login
  {
    path: "/",
    name: "dashboard",
    component: DashboardUser,
    meta: { requiresAuth: true },
  },
];

// membuat instance router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// navigation guard global
router.beforeEach((to, _from, next) => {
  // menyimpan status login user
  localStorage.setItem("isLoggedIn", "true");
  // mengambil status login
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  // cek apakah halaman membutuhkan login
  if (to.meta.requiresAuth && !isLoggedIn) {
    // redirect ke login
    next("/login");
  } else {
    // lanjutkan navigasi
    next();
  }
});

// export router
export default router;
