import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/main.css";
import terminal from "virtual:terminal";
import { router } from "./router";
globalThis.console = terminal;

createApp(App).use(router).mount("#app");
