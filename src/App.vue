<template>
  <div :class="{ rand: !$store.getters.getIsVerified }">
    <SuccessModal />
    <FailedModal />
    <ProfileModal />
    <div
      id="loader"
      class="text-black"
      :class="{ loader: $store.getters.getLoading }"
    ></div>
    <div v-if="!$store.getters.getIsVerified">
      <Login />
    </div>
    <div v-else>
      <Navbar class="z-50" :isAdmin="isAdmin" />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Login from "./views/LoginView.vue";
import SuccessModal from "./components/SuccessModal.vue";
import FailedModal from "./components/FailedModal.vue";
import ProfileModal from "./components/ProfileModal.vue";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    Login,
    SuccessModal,
    FailedModal,
    ProfileModal,
  },
  data() {
    return {
      path: String,
      pathArr: Array,
      location: String,
      isAdmin: false,
    };
  },
  methods: {
    getLocation() {
      let currentLocation = window.location;
      this.location = currentLocation;
      let pathname = currentLocation?.pathname;
      this.pathArr = pathname?.split("/");
      this.path = pathname?.split("/")[1];
      this.isAdmin = this.pathArr?.includes("admin");
    },
  },
  created() {
    this.getLocation();
  },
  computed: {
    ...mapState(),
  },
};
</script>


<style>
.rand {
  font-family: "Acme", sans-serif;
  background-repeat: no-repeat;
  background-image: url("https://source.unsplash.com/random");
  background-size: cover;
}
.loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  /* Ensure it appears on top of other content */
}

.loader::after {
  content: "";
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
