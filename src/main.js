import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ToastService from "primevue/toastservice";
import Password from "primevue/password";
import InputText from "primevue/inputtext";
import Dialog from "primevue/dialog";

import FileUpload from "primevue/fileupload";
import Menubar from "primevue/menubar";
import TabMenu from "primevue/tabmenu";
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

//import table
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup"; //optional for column grouping
import Row from "primevue/row"; //optional for row
import MultiSelect from "primevue/multiselect";
import InputNumber from "primevue/inputnumber";
import ProgressBar from "primevue/progressbar";
import Slider from "primevue/slider";
import "@/assets/flags.css";
import "@/assets/bag.css";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(PrimeVue);
app.use(ToastService);
//use component primeVue
app.component("Button", Button);
app.component("TabMenu", TabMenu);
app.component("Password", Password);
app.component("Dialog", Dialog);
app.component("Divider", Divider);
app.component("Dropdown", Dropdown);
app.component("Checkbox", Checkbox);
app.component("Calendar", Calendar);
app.component("Menubar", Menubar);
app.component("InputText", InputText);
app.component("Toast", Toast);
app.component("FileUpload", FileUpload);
app.component("MultiSelect", MultiSelect);
app.component("InputNumber", InputNumber);
app.component("ProgressBar", ProgressBar);
app.component("Slider", Slider);
//use
app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("ColumnGroup", ColumnGroup);
app.component("Row", Row);

app.mount("#app");
