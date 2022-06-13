import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ToastService from "primevue/toastservice";
import Password from "primevue/password";
import InputText from "primevue/inputtext";
import Dialog from "primevue/dialog";

import Calendar from "primevue/calendar";
import Dropdown from "primevue/dropdown";
import Checkbox from "primevue/checkbox";
import Toast from "primevue/toast";
import Divider from "primevue/divider";
import PrimeVue from "primevue/config";
import Button from "primevue/button";

import "primeflex/primeflex.css";
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css";

const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.use(ToastService);
app.component("Button", Button);
app.component("Password", Password);
app.component("Dialog", Dialog);
app.component("Divider", Divider);
app.component("Dropdown", Dropdown);
app.component("Checkbox", Checkbox);
app.component("Calendar", Calendar);

app.component("InputText", InputText);
app.component("Toast", Toast);

app.mount("#app");
