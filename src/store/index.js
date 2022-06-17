import { reactive, readonly } from "vue";

const state = reactive({
  user: "admin",
  dataList: [],
});
const methods = {
  addUser() {
    state.user = "admin2";
  },
};
const getters = {};
export default {
  state: readonly(state),
  methods,
  getters,
};
