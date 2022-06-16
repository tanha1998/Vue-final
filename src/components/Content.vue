<template>
  <header-content-vue></header-content-vue>
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
import HeaderContentVue from "./HeaderContent.vue";
export default {
  data() {
    return {
      username: "",
    };
  },
  components: {
    HeaderContentVue,
  },
  mounted() {
    this.username = this.$route.params.userName;
  },
};
</script>

<style></style>
