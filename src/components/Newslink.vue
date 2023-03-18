<template>
  <router-link :to="'single/?id=' + id">
    <div class="bg-anfLightWhitishBlue p-3">
      <p class="text-anfDeepBlue">
        {{ text }}
      </p>
      <hr class="bg-black border-2 text-black" />
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Newslink",
  props: {
    text: String,
    id: String,
  },
};
</script>