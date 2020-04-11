<template>
  <div>
    <h1>Login</h1>
    <div class="main">
      <p class="sign" align="center">Sign in</p>
      <form class="form1">
        
        <input class="un " type="text" align="center" placeholder="Username" v-model="usernameLogin" />
        <input
          class="pass"
          type="password"
          align="center"
          placeholder="password"
          v-model="passwordLogin"
        />

        <a class="submit" @click.prevent="login" align="center">Sign in</a>
        <p class="forgot" align="center"><a href="#">Forgot Password?</a></p>
        <p v-if="errorLogin" class="error">{{ errorLogin }}</p>

        <input class="un " placeholder="first name" v-model="firstName" />
        <input class="un " placeholder="last name" v-model="lastName" />
        <input class="un " type="text" align="center" placeholder="Username" v-model="username" />
        <input
          class="pass"
          type="password"
          align="center"
          placeholder="Password"
          v-model="password"
        />
        <a class="submit" @click.prevent="register" align="center">Register</a>
        <p v-if="error" class="error">{{ error }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      usernameLogin: "",
      passwordLogin: "",
      error: "",
      errorLogin: "",
    };
  },
    methods: {
      async register() {
        this.error = '';
        this.errorLogin = '';
        if (!this.firstName || !this.lastName || !this.username || !this.password){
          return;
        }
        try {
          let response = await axios.post('/api/users', {
           firstName: this.firstName,
           lastName: this.lastName,
           username: this.username,
           password: this.password,
          });
          console.log(response.data.user)
          this.$root.$data.user = response.data.user;
      } catch (error) {
        this.error = error.response.data.message;
        this.$root.$data.user = null;
      }
    },
    async login() {
      console.log("Hello there login")
      this.error = '';
      this.errorLogin = '';
      if (!this.usernameLogin || !this.passwordLogin){
       return;
      }
      try {
        let response = await axios.post('/api/users/login', {
        username: this.usernameLogin,
        password: this.passwordLogin,
      });
      console.log(response.data.user)
      this.$root.$data.user = response.data.user;
      } catch (error) {
        this.errorLogin = "Error: " + error.response.data.message;
         this.$root.$data.user = null;
      }
    },
  }
};
</script>

<style scoped>

.error {
  margin-top: 20px;
  display: inline;
  padding: 5px 20px;
  border-radius: 30px;
  font-size: 10px;
  background-color: #d9534f;
  color: #fff;
}
h1 {
  border: 2px solid #f18904;
  padding: 10px;
  color: white;
  background-color: #f49f05;
  font-family: "Bangers", cursive;
  text-align: center;
}
body {
  background-color: #f3ebf6;
  font-family: "Ubuntu", sans-serif;
}

.main {
  background-color: #ffffff;
  width: 400px;
  height: 780px;
  margin: 7em auto;
  border-radius: 1.5em;
  box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
}

.sign {
  padding-top: 40px;
  /* color: #8c55aa; */
  color: #f18904;
  font-family: "Ubuntu", sans-serif;
  font-weight: bold;
  font-size: 23px;
}

.un {
  width: 76%;
  color: rgb(38, 50, 56);
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1px;
  background: rgba(136, 126, 126, 0.04);
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  outline: none;
  box-sizing: border-box;
  border: 2px solid rgba(0, 0, 0, 0.02);
  margin-bottom: 50px;
  margin-left: 46px;
  text-align: center;
  margin-bottom: 27px;
  font-family: "Ubuntu", sans-serif;
}

form.form1 {
  padding-top: 40px;
}

.pass {
  width: 76%;
  color: rgb(38, 50, 56);
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1px;
  background: rgba(136, 126, 126, 0.04);
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  outline: none;
  box-sizing: border-box;
  border: 2px solid rgba(0, 0, 0, 0.02);
  margin-bottom: 50px;
  margin-left: 46px;
  text-align: center;
  margin-bottom: 27px;
  font-family: "Ubuntu", sans-serif;
}

.un:focus,
.pass:focus {
  border: 2px solid rgba(0, 0, 0, 0.18) !important;
}

.submit {
  cursor: pointer;
  border-radius: 5em;
  color: #fff;
  /* background: linear-gradient(to right, #9c27b0, #e040fb); */
  background: linear-gradient(to right, #dd5382, #f26897);

  border: 0;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 10px;
  padding-top: 10px;
  font-family: "Ubuntu", sans-serif;
  margin-left: 35%;
  font-size: 13px;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
}

.forgot {
  text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);
  color: #e1bee7;
  padding-top: 15px;
}

a {
  text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);
  color: #e1bee7;
  text-decoration: none;
}

@media (max-width: 600px) {
  .main {
    border-radius: 0px;
  }
}
</style>
