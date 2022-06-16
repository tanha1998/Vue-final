<template>
  <TabMenu :model="items" />
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const active = ref(3);
    const items = ref([
      {
        label: "Home",
        icon: "pi pi-fw pi-home",
        to: "/content",
      },
      {
        label: "List User",
        icon: "pi pi-fw pi-calendar",
        to: "/listUser",
      },
      {
        label: "Log Out",
        icon: "pi pi-fw pi-cog",
        to: "/login",
      },
    ]);
    return {
      items,
      active,
    };
  },
};
</script>
<style scoped lang="scss">
::v-deep(.tabmenudemo-content) {
  padding: 2rem 1rem;
}
</style>
