import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import router from "./router";

// membuat instance aplikasi
const app = createApp(App);

// menggunakan router di aplikasi
app.use(router);

// menjalankan aplikasi
app.mount("#app");
