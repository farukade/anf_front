<template>
  <div>
    <div v-if="path === 'admin'">
      <Login />
    </div>
    <div v-else>
      <Navbar class="z-50" />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Login from "./views/LoginView.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    Login,
  },
  data() {
    return {
      path: String,
      location: String,
    };
  },
  methods: {
    getLocation() {
      let currentLocation = window.location;
      this.location = currentLocation;
      let pathname = currentLocation.pathname;
      this.path = pathname.split("/")[1];
    },
  },
  created() {
    this.getLocation();
  },
};
</script>


<style>
</style>
