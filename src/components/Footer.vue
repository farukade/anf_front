<template>
  <footer class="p-10 w-screen mx-auto bg-anfVeryDeepBlue">
    <div
      class="flex text-white flex-col w-full space-y-5 items-center justify-between"
    >
      <!-- Image -->
      <div id="footer-image-cont" class="w-1/2 my-10">
        <img class="" src="../assets/img/logo.png" alt="logo" />
      </div>
      <div class="flex text-sm w-full align-center justify-between">
        <p class="self-center">Company</p>
        <img class="w-16" src="../assets/img/logo.png" alt="logo" />
        <p class="self-center">Helpdesk</p>
      </div>
      <hr class="footer-hr" />
      <div class="flex text-2xl text-white space-x-5 justify-between">
        <a href="https://web.facebook.com/watch/ANFTV.NET/" target="_blank">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="" target="_blank">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="" target="_blank">
          <i class="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UCsGp2q5PC4i9zuOgx850fbQ"
          target="_blank"
        >
          <i class="fab fa-youtube"></i>
        </a>
      </div>
      <p id="footer-copy-right" class="text-sm">
        &copy; ANF-tv, Inc. 2022. Thank you for visiting.
      </p>
    </div>
  </footer>
</template>

<script>
import Link from "./Link.vue";

export default {
  name: "Footer",
  components: {
    Link,
  },
  props: {},
  data() {
    return {
      menu: [],
    };
  },
  created() {
    this.menu = [
      "Home",
      "Politics",
      "Sports",
      "Culture",
      "Business",
      "Entertainment",
      "Technology",
    ];
  },
};
</script>