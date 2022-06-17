<template>
  <HeaderContentVue />
  <div class="form-demo mt-5">
    <div class="flex justify-content-center">
      <div class="card scalein animation-duration-500 font-bold">
        <h2 class="text-center">Add user</h2>
        <form @submit.prevent="handleSubmit(!v$.$invalid)" class="p-fluid">
          <div class="field">
            <div class="p-float-label">
              <InputText
                id="name"
                v-model="v$.name.$model"
                :class="{ 'p-invalid': v$.name.$invalid && submitted }"
              />
              <label
                for="name"
                :class="{ 'p-error': v$.name.$invalid && submitted }"
                >Name*</label
              >
            </div>
            <small
              v-if="
                (v$.name.$invalid && submitted) || v$.name.$pending.$response
              "
              class="p-error"
              >{{ v$.name.required.$message.replace("Value", "Name") }}</small
            >
          </div>
          <div class="field">
            <div class="p-float-label p-input-icon-right">
              <i class="pi pi-envelope" />
              <InputText
                id="email"
                v-model="v$.email.$model"
                :class="{ 'p-invalid': v$.email.$invalid && submitted }"
                aria-describedby="email-error"
              />
              <label
                for="email"
                :class="{ 'p-error': v$.email.$invalid && submitted }"
                >Email*</label
              >
            </div>
            <span v-if="v$.email.$error && submitted">
              <span
                id="email-error"
                v-for="(error, index) of v$.email.$errors"
                :key="index"
              >
                <small class="p-error">{{ error.$message }}</small>
              </span>
            </span>
            <small
              v-else-if="
                (v$.email.$invalid && submitted) || v$.email.$pending.$response
              "
              class="p-error"
              >{{ v$.email.required.$message.replace("Value", "Email") }}</small
            >
          </div>
          <div class="field">
            <div class="p-float-label">
              <Password
                id="password"
                v-model="v$.password.$model"
                :class="{
                  'p-invalid': v$.password.$invalid && submitted,
                }"
                toggleMask
              >
                <template #header>
                  <h6>Pick a password</h6>
                </template>
                <template #footer="sp">
                  {{ sp.level }}
                  <Divider />
                  <p class="mt-2">Suggestions</p>
                  <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                    <li>At least one lowercase</li>
                    <li>At least one uppercase</li>
                    <li>At least one numeric</li>
                    <li>Minimum 8 characters</li>
                    <li>At least one symbol</li>
                  </ul>
                </template>
              </Password>
              <label
                for="password"
                :class="{ 'p-error': v$.password.$invalid && submitted }"
                >Password*</label
              >
            </div>
            <small
              v-if="
                (v$.password.$invalid && submitted) ||
                v$.password.$pending.$response
              "
              class="p-error"
              >{{
                v$.password.required.$message.replace("Value", "Password")
              }}</small
            >
          </div>
          <div class="field">
            <div class="p-float-label">
              <Calendar id="date" v-model="date" :showIcon="true" />
              <label for="date">Birthday</label>
            </div>
          </div>
          <div class="field">
            <div class="p-float-label">
              <Dropdown
                id="country"
                v-model="country"
                :options="countries"
                optionLabel="name"
              />
              <label for="country">Country</label>
            </div>
          </div>
          <!-- <div class="field-checkbox">
            <Checkbox
              id="accept"
              name="accept"
              value="Accept"
              v-model="v$.accept.$model"
              :class="{ 'p-invalid': v$.accept.$invalid && submitted }"
            />
            <label
              for="accept"
              :class="{ 'p-error': v$.accept.$invalid && submitted }"
              >I agree to the terms and conditions*</label
            >
          </div> -->
          <Button type="submit" label="Submit" class="mt-2 mb-3" />
          <router-link to="/login"
            ><span>Already have account! Login</span></router-link
          >
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { email, required, minLength, helpers } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import axios from "axios";
import CountryService from "@/service/CountryService";
import HeaderContentVue from "./HeaderContent.vue";
const urlApi = "https://62a6f20e97b6156bff8339c2.mockapi.io/users";
// const contains = (param) => (value) =>
//   !helpers.req(value) || value.match(param);

const alpha = helpers.regex(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/
);
export default {
  components: {
    HeaderContentVue,
  },
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      name: "",
      email: "",
      password: "",
      date: null,
      country: null,
      accept: null,
      submitted: false,
      countries: null,
      showMessage: false,
      dataUser: [],
    };
  },
  countryService: null,
  validations() {
    return {
      name: {
        required,
      },
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(8),
        checkSymbolP: alpha,
        // checkSymbol: contains(
        //   "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})"
        // ),
      },
      // ,
      // accept: {
      //   required,
      // },
    };
  },
  mounted() {
    const countrys = new CountryService();
    countrys.getCountries().then((d) => (this.countries = d));
  },
  methods: {
    async handleSubmit(isFormValid) {
      this.submitted = true;
      if (!isFormValid) {
        return;
      }
      this.submitted = false;
      const users = await axios
        .get(urlApi)
        .then((res) => this.checkDataRegister(res.data));
      if (users) {
        this.$toast.add({
          severity: "error",
          summary: "Email existed",
          detail: this.email,
          life: 3000,
        });
      } else {
        this.postDataUser();
      }
    },
    checkDataRegister(data) {
      const email = data.find((item) => item.email === this.email);
      if (email) return email;
    },
    postDataUser() {
      axios
        .post(urlApi, {
          name: this.name,
          email: this.email,
          password: this.password,
          birthday: this.date,
          country: this.country,
        })
        .then((res) => res.data)
        .then(() =>
          this.$toast.add({
            severity: "success",
            summary: "Register success",
            detail: "Email: " + this.email,
            life: 3000,
          })
        )
        .then(() => this.$router.push("/datalist"))
        .catch((error) => console.log(error))
        .finally(() => console.log("success"));
    },
    // resetForm() {
    //   this.name = "";
    //   this.email = "";
    //   this.password = "";
    //   this.date = null;
    //   this.country = null;
    //   this.accept = null;
    //   this.submitted = false;
    // },
  },
};
</script>

<style scoped>
.form-demo {
}
.card {
  min-width: 300px;
  background-color: #d6dbe0da;
  border-radius: 50px;
}
form {
  margin-top: 2rem;
}

.field {
  margin-bottom: 1.5rem;
}
@media screen and (min-width: 960px) {
  .p-float-label {
    width: 500px;
  }
  .card {
    background-color: #d6dbe0da;
    padding: 100px 250px;
    border-radius: 50px;
  }
}
@media screen and (max-width: 960px) {
  .card {
    width: 100%;
  }
}
</style>
