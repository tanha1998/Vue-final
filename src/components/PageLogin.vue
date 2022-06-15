<template>
  <div class="flex justify-content-center mt-5">
    <div class="card scalein animation-duration-500 font-bold">
      <img
        alt="Vue logo"
        style="width: 100px; height: 100px"
        src="../assets/logo.png"
      />
      <h1 class="text-center">Login</h1>
      <form @submit.prevent="handleSubmit(!v$.$invalid)" class="p-fluid">
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
        <br />
        <div class="field">
          <div class="p-float-label">
            <Password
              id="password"
              v-model="v$.password.$model"
              :class="{ 'p-invalid': v$.password.$invalid && submitted }"
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
        <Button type="submit" label="Login" class="mt-2 mb-3" />
        <router-link to="/register"><span>Register</span></router-link>
      </form>
    </div>
  </div>
</template>

<script>
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import axios from "axios";
const urlApi = "https://62a6f20e97b6156bff8339c2.mockapi.io/users";
export default {
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      email: "",
      password: "",
      showMessage: false,
      submitted: false,
    };
  },
  validations() {
    return {
      email: {
        required,
        email,
      },
      password: {
        required,
      },
    };
  },
  methods: {
    async handleSubmit(isFormValid) {
      this.submitted = true;
      if (!isFormValid) {
        return;
      }
      const users = await axios
        .get(urlApi)
        .then((res) => this.checkLogin(res.data));
      if (users) {
        // const userName = users.name;
        this.$router.push({
          path: "/content",
          params: { userName: users.name },
        });
      } else {
        this.$toast.add({
          severity: "error",
          summary: "Invalid Email or Password",
          life: 3000,
        });
      }
    },
    checkLogin(data) {
      const checkLogin = data.find(
        (item) => item.email === this.email && item.password === this.password
      );
      if (checkLogin) return checkLogin;
    },
  },
};
</script>

<style scoped>
.card {
  min-width: 300px;
  background-color: #d6dbe0da;
}
form {
  margin-top: 2rem;
}
.field {
  margin-bottom: 1.5rem;
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
