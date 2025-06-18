import { createRouter, createWebHistory } from "vue-router";
import AdminView from "../views/AdminView.vue";
import HomeView from "../views/HomeView.vue";
import SparepartView from "../views/SparepartView.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/sparepart", name: "sparepart", component: SparepartView },
  { path: "/admin", name: "admin", component: AdminView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
// menambahkan router untuk navigasi antar halaman
