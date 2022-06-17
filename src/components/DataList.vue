<template>
  <HeaderContentVue />
  <div class="main">
    <DataTable
      :value="products"
      responsiveLayout="scroll"
      :paginator="true"
      :rows="10"
      v-model:filters="filters"
      paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
      :rowsPerPageOptions="[10, 20, 50]"
    >
      <template #header>
        <div class="flex justify-content-center align-items-center">
          <!-- <h5 class="m-0">Customers</h5> -->
          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText
              v-model="filters['global'].value"
              placeholder="Keyword Search"
            />
          </span>
        </div>
      </template>
      <Column field="id" header="Code" :sortable="true"></Column>
      <Column field="name" header="Name" :sortable="true"></Column>
      <Column field="email" header="Email" :sortable="true"></Column>
      <Column field="birthday" header="Birthday"> </Column>
      <Column field="country.name" header="Province" :sortable="true"></Column>
      <Column>
        <template #body="{ data }">
          <Button
            @click="deleteUser(data.id)"
            type="button"
            icon="pi pi-times-circle"
          ></Button>
        </template>
      </Column>
      <!-- <Column>
        <template #body="{ data }">
          <Button type="button" icon="pi pi-user-edit"></Button>
        </template>
      </Column> -->
    </DataTable>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import UserService from "@/service/UserService";
import HeaderContentVue from "./HeaderContent.vue";
import { FilterMatchMode } from "primevue/api";
export default {
  components: {
    HeaderContentVue,
  },
  setup() {
    onMounted(() => {
      productService.value
        .getUser()
        .then((data) => console.log((products.value = data)));
    });
    const formatDate = (value) => {
      return value.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    };
    const deleteUser = (id) => {
      productService.value
        .deleteUsers(id)
        .then(
          () =>
            (products.value = products.value.filter((items) => items.id !== id))
        );
    };
    const products = ref();
    const productService = ref(new UserService());
    const filters = ref({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    return { products, productService, filters, formatDate, deleteUser };
  },
};
</script>

<style scoped>
@media screen and (min-width: 960px) {
  .main {
    margin: 10px auto;
    padding: 80px;
    background-color: #d6dbe0da;
  }
}
</style>
