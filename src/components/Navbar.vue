<template class="relative">
  <nav class="z-10 top-0 fixed bg-translucentWhite mx-auto py-1 px-6 w-full">
    <!-- Flex container -->
    <div class="flex items-center justify-between">
      <!-- Logo -->
      <div id="logo-cont" class="w-20">
        <img class="" src="../assets/img/logo.png" alt="logo" />
      </div>
      <!-- Menu -->
      <div class="hidden lg:flex text-l text-anfDeepBlue flex space-x-6">
        <Link :key="item" v-for="item of menu" :text="item" :link="item" />
      </div>
      <!-- Search -->
      <div
        class="flex justify-center align-center text-l md:p-2 bg-anfDeepBlue rounded p-1 text-white"
      >
        <button
          v-if="!searchOpen"
          class="hidden sm:block md:hidden xl:hidden lg:hidden px-2"
        >
          Search
        </button>
        <i
          v-if="!searchOpen"
          @click="toggleSearch"
          class="fa-solid fa-magnifying-glass"
        ></i>
        <i
          v-if="searchOpen"
          @click="toggleSearch"
          class="fa-solid fa-xmark"
        ></i>
      </div>
      <!-- Hamburger Icon -->
      <button
        id="menu-btn"
        :class="`${
          isClicked ? 'open' : ''
        } block hamburger lg:hidden focus:outline-none`"
        @click="hamburgerClick"
      >
        <span class="hamburger-top bg-anfBlue"></span>
        <span class="hamburger-middle bg-anfBlue"></span>
        <span class="hamburger-bottom bg-anfBlue"></span>
      </button>
      <!-- Mobile menu -->
      <div
        :class="`${
          isClicked ? '' : 'hidden'
        } absolute lg:hidden flex flex-col items-center self-end top-12 py-8 mt-10 font-bold bg-translucentWhite sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`"
      >
        <Link
          :key="item"
          v-for="item of menu"
          :text="item"
          :link="item"
          class="text-anfBlue p-3 hover:bg-anfBlue hover:text-white w-3/4 text-center"
          @click="linkClicked"
        />
      </div>
    </div>
  </nav>
  <div v-if="searchOpen" class="fixed bg-searchBg w-screen h-screen">
    <Search
      :toggleSearch="toggleSearch"
      class="fixed w-screen flex flex-col justify-center align-center top-0 left-0 mt-50"
    />
  </div>
</template>

<script>
import Link from "./Link.vue";
import Search from "./Search.vue";

export default {
  name: "Navbar",
  components: {
    Link,
    Search,
  },
  props: {},
  data() {
    return {
      menu: [],
      isClicked: false,
      searchOpen: false,
      hamburgerClick: () => {
        this.isClicked = !this.isClicked;
      },
      toggleSearch: () => {
        this.searchOpen = !this.searchOpen;
      },
      linkClicked: () => {
        this.isClicked = false;
      },
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