<template>
  <div>
    <div
      id="modal-back"
      ref="modalBack"
      :class="{ 'modal-back': $store.getters.getFailedMessage }"
    >
      <div
        class="modal fade show"
        :class="{ 'modal-back': $store.getters.getFailedMessage }"
        id="successModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="successModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content w-[300px]">
            <p class="text-[20px] text-danger text-center p-3 my-3">
              {{ startCase($store.getters.getFailedMessage) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { startCase } from "lodash";
export default {
  name: "FailedModal",
  data() {
    return {
      startCase,
    };
  },
  computed: {
    ...mapState(["failedMessage"]),
    storeMessage() {
      return this.failedMessage.message;
    },
    storeTimer() {
      return this.failedMessage.timer;
    },
  },
  watch: {
    storeTimer(newValue) {
      setTimeout(() => {
        this.$store.commit("updateFailedMessage", {
          message: "",
          timer: 0,
        });
      }, newValue);
    },
  },
};
</script>

<style>
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
  position: fixed;
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
}
#password-input {
  width: 100%;
  height: 35px;
  margin: 5px 0 20px 0;
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

