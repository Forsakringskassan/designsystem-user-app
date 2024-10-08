import "@fkui/icon-lib-default/dist/f";
import "@fkui/user-lib-design";
import "./main.scss";

import {
    ValidationPlugin,
} from "@fkui/vue";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App)
app.use(ValidationPlugin);
app.mount("#app");
