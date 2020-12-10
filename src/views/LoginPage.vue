<template>
  <div class="container">
    <h2>Login</h2>
    <div class="form-group" id="login-page-form">
      <label for="Email" class="float-left">Email</label><br />
      <input
        id="login-email"
        type="email"
        class="form-control"
        v-model="loginEmail"
        placeholder="Email"
      />
      <label for="password" class="float-left">Password</label><br />
      <input
        id="login-password"
        type="Password"
        class="form-control"
        v-model="loginPassword"
        name="password"
        placeholder="Password"
      />
      <div class="text-warning">{{ errorMessage }}</div>
      <br />
      <button class="btn btn-success">
        Login
      </button>
      
      <button class="btn btn-primary">
        Opret Bruger
      </button>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
let baseUserUri = "https://mort-rest.azurewebsites.net/api/users/";

export default {
  name: "Login",
  data() {
    return {
      users: [],
      //user: {
        //user_id: 0,
        //user_email: "",
        //user_password: "",
        //user_firstname: "",
        //user_lastname: "",
        //user_mobile: 0,
        //fk_account_status_id: 0,
      //},

    };
  },
  async created() {
    const result = await axios.get(baseUserUri);
    const Users = result.data;
    this.users = Users;
  },
  methods: {
    login() {
      console.log("login");
      this.createUserPage = false;
      this.loginPage = true;
      document.getElementById("login-email").className = "form-control";
    },
    loginTry() {
      this.axios.get(this.api.url).then((response) => {
        var test1 = response.data[2].user_email;
        console.log(`a is ` + test1);
      });
    },
  },
};
</script>

<style>
#login-page-form .error,
#opret-page-form .error {
  border-color: red;
}
</style>