<template>
  <TabMenu :model="items" :activeIndex="activeIndex" />
  <h1>Hello {{ $store.state.name }}</h1>
  <div class="">
    <FileUpload
      name="demo[]"
      url="./upload.php"
      :multiple="true"
      accept="image/*"
      :maxFileSize="1000000"
    >
      <template #empty>
        <p>Drag and drop files to here to upload.</p>
      </template>
    </FileUpload>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { label: "Home", icon: "pi pi-fw pi-home" },
        { label: "Calendar", icon: "pi pi-fw pi-calendar" },
        { label: "Edit", icon: "pi pi-fw pi-pencil" },
        { label: "Documentation", icon: "pi pi-fw pi-file" },
        { label: "Log Out", icon: "pi pi-fw pi-power-off", to: "/" },
      ],
      username: "",
    };
  },
  mounted() {
    this.username = this.$route.params.userName;
  },
};
</script>

<style></style>
