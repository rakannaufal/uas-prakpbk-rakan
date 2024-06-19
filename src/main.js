import { createApp } from "vue";
import { Quasar } from "quasar";

import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";

import App from "./App.vue";

const myApp = createApp(App);

import { createRouter, createWebHistory } from "vue-router";
import Tugas1 from "./components/Tugas1.vue";
import Tugas2 from "./components/Tugas2.vue";
import Tugas3 from "./components/Tugas3.vue";
import Tugas4 from "./components/Tugas4.vue";
import Tugas5 from "./components/Tugas5.vue";
import Tugas6 from "./components/Tugas6.vue";
import Cuaca from "./components/Cuaca.vue";

const routes = [
  { path: "/", component: Cuaca },
  { path: "/tugas1", component: Tugas1 },
  { path: "/tugas2", component: Tugas2 },
  { path: "/tugas3", component: Tugas3 },
  { path: "/tugas4", component: Tugas4 },
  { path: "/tugas5", component: Tugas5 },
  { path: "/tugas6", component: Tugas6 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

myApp.use(router);
myApp.use(Quasar, {
  plugins: {},
});
myApp.mount("#app");
