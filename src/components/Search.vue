<template>
  <div class="w-full self-center">
    <div class="flex justify-start mt-20 text-white text-2xl w-full">
      <div class="self-center focus:border-anfDeepBlue p-2 w-4/5"></div>
      <i @click="toggleSearch" class="text-left fa-solid fa-xmark"></i>
    </div>
    <div class="flex mt-8 w-full justify-center align-center w-screen">
      <input
        class="self-center focus:border-anfDeepBlue rounded-sm p-2 w-1/2"
        type="text"
        name="search"
        id=""
        placeholder="search"
      />
      <button class="bg-anfVeryDeepBlue text-white px-3">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  components: {},
  props: {
    toggleSearch: Function,
  },
  data() {
    return {};
  },
  created() {},
};
</script>