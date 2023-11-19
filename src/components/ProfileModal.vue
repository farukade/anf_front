<template>
  <div>
    <div
      id="modal-back"
      ref="modalBack"
      class=""
      :class="{ 'modal-back': $store.getters.getProfileOpen }"
    >
      <div
        class="modal fade show"
        :class="{ 'modal-back': $store.getters.getProfileOpen }"
        id="profileModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="profileModalLabel"
        aria-hidden="true"
      >
        <div
          class="modal-dialog text-primary position-relative"
          role="document"
        >
          <div class="modal-content w-[300px] position-fixed top-10 end-10">
            <div class="modal-header">
              <h5 class="modal-title">Profile</h5>
              <button type="button" class="text-primary">
                <i class="fa-solid fa-close" @click="closeProfile()"></i>
              </button>
            </div>
            <p class="text-[10px] text-primary text-center my-2">
              {{ user?.username }}
            </p>
            <p class="text-[10px] text-primary text-center my-2">
              {{ user?.email }}
            </p>
            <p class="text-[10px] text-primary text-center my-2">
              {{ user?.status }}
            </p>
            <p class="text-[10px] text-primary text-center my-2">
              {{ user?.type }}
            </p>
            <p class="text-[10px] text-primary text-center my-2">
              {{ user?.createdAt }}
            </p>
            <button
              type="button"
              class="btn btn-primary active m-3"
              @click="logUserOut()"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { startCase } from "lodash";
import { logOut } from "@/utils/utils.js";
export default {
  name: "ProfileModal",
  data() {
    return {
      startCase,
      profileOpen: false,
    };
  },
  methods: {
    closeProfile() {
      this.$store.commit("updateProfileOpen", false);
    },
    logUserOut() {
      this.$store.commit("updateProfileOpen", false);
      logOut();
    },
  },
  computed: {
    ...mapState(["user", "profileOpen"]),
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
  /* position: absolute; */
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