import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css"; //import tailwind css
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");
