<template>
    <div class="container">
        <h2>{{name}}</h2>
        <div class="form-group" id="login-page-form">
            <label for="Email" class="float-left">Email</label><br>
            <input id="login-email" type="email" class="form-control" v-model="user_email" placeholder="Email">
            <label for="password" class="float-left">Password</label><br>
            <input id="login-password" type="Password" class="form-control" v-model="user_password" name="password" placeholder="Password">
            <button class="btn btn-success" v-on:click="loginTry">Login</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            api:{
                url: 'https://mort-rest.azurewebsites.net/api/users/',
                api_user_email: 'test',
                api_user_password: 'test'

            },
            user:{
                user_id: 0,
                user_email: '',
                user_password: '',
                user_firstname: '',
                user_lastname: '',
                user_mobile: 0,
                fk_account_status_id: 0,
            }
        }
    },
    created() {
        
    },
    methods: {
        login() {
            console.log('login')
            this.createUserPage = false
            this.loginPage = true
            document.getElementById('login-email').className = "form-control";
        },
        loginTry() {
            this.axios.get(this.api.url).then((response) => {
                var test1  = response.data[2].user_email;
                console.log(`a is ` + test1)
            })
        },
    }
}
</script>

<style>
    #login-page-form .error,
    #opret-page-form .error {
      border-color: red;
    }
</style>