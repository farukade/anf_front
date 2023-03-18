<template>
  <div>
    <div id="modal-back">
      <p id="modal-on"></p>
    </div>
    <div id="form-container">
      <form id="form">
        <h2 id="login-form-header">ANF-tv Admin Login</h2>
        <div id="response-container">
          <p id="response"></p>
        </div>
        <div id="username">
          <label for="username" id="username-label"> Username </label>
          <input
            @input="(e) => getVal(e, 'username')"
            type="text"
            name="username"
            id="username-input"
          />
        </div>
        <div id="password">
          <label for="password" id="password-label"> Password </label>
          <input
            @input="(e) => getVal(e, 'password')"
            type="password"
            name="password"
            id="password-input"
          />
        </div>
        <div id="remember">
          <label for="remember" id="remember"> Remember me </label>
          <input
            @input="(e) => getVal(e, 'remember')"
            type="checkbox"
            name="checkbox"
            id="checkbox"
          />
        </div>
        <div id="submit">
          <input
            type="submit"
            @click="(e) => login(e)"
            value="Login"
            id="login"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { request } from "../utils/utils";

export default {
  name: "LoginView",
  components: {},
  data() {
    return {
      username: String,
      password: String,
      remember: false,
    };
  },
  methods: {
    async login(e) {
      e.preventDefault();
      const url = "/users/login";
      const data = {
        username: this.username,
        password: this.password,
      };
      try {
        const res = await request("POST", url, false, data);
        if (res.success) {
          console.log("success:- ", res.result);
          return res.result;
        } else {
          console.log("error:- ", res);
        }
      } catch (error) {
        console.log(error);
      }
    },
    getVal(e, name) {
      if (e) {
        switch (name) {
          case "username":
            this.username = e.target.value;
            break;

          case "password":
            this.password = e.target.value;
            break;

          case "remember":
            console.log(e.target.checked);
            this.remember = e.target.checked ? true : false;
            break;
        }
      }
    },
  },
  async created() {
    this.rememberMe = false;
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Acme&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: "Acme", sans-serif;
  background-repeat: no-repeat;
  /* background-image: url("https://source.unsplash.com/random"); */
  background-size: cover;
}
.modal-back {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.651);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-on {
  position: absolute;
  min-height: 150px;
  min-width: 250px;
  background-color: #fff;
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
  color: green;
  text-align: center;
  justify-self: center;
  align-self: center;
  padding: 50px;
}
.modal-off {
  display: none;
}
#form-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
h2 {
  width: 100%;
  text-align: center;
  margin: 20px auto;
}
form {
  width: 20%;
  min-width: 300px;
  background-color: #2201f9be;
  padding: 40px;
  color: #fff;
  border-radius: 5px;
}
#response {
  color: rgb(255, 77, 77);
  font-size: 1rem;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  top: 10px;
  margin: 10px auto;
  width: 100%;
  height: 30px;
  text-align: center;
}
#username-input {
  width: 100%;
  height: 35px;
  margin: 5px 0 20px 0;
  color: black;
}
#password-input {
  width: 100%;
  height: 35px;
  margin: 5px 0 20px 0;
  color: black;
}
label {
  margin-left: 5px;
  margin-right: 10px;
}
#login {
  cursor: pointer;
  border: none;
  box-shadow: none;
  border-radius: 5%;
  width: 100%;
  height: 35px;
  background-color: red;
  color: #fff;
  margin: 5px 0 20px 0;
  font-size: 20px;
}
input:focus {
  outline: none;
  border: 2px solid red;
}
input {
  padding: 5px;
  border-radius: 5px;
  border: none;
}
</style>
