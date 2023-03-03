<template>
  <hr />
  <div>
    <router-link
      :to="''"
      class="hidden h-96 min-h-full slide lg:flex justify-center align-center text-center w-full bg-anfDeepBlue"
    >
      <div class="self-center m-5 w-1/2">
        <h1 class="text-white text-3xl h-10">
          {{ truncate(current.content, 100) }}
        </h1>
      </div>
      <div
        id="slide-router"
        :to="`/single-view/${current.id}`"
        class="w-1/2 cursor-pointer"
      >
        <!-- <router-link to="" class="bg-white w-full h-full m-0 p-0 flex items-center justify-center align-center"> -->
        <iframe
          class="object-cover w-full h-full"
          scrolling="no"
          :src="current.media"
          frameborder="0"
          allowfullscreen
        ></iframe>
        <!-- </router-link> -->
      </div>
    </router-link>
    <div class="relative flex top-80 -left-96">
      <div class="slide-icon"></div>
      <div class="slide-icon"></div>
      <div class="slide-icon"></div>
      <div class="slide-icon"></div>
      <div class="slide-icon"></div>
    </div>
  </div>
</template>

<script>
import { truncate } from "../utils/utils";

export default {
  name: "Slide",
  props: {
    items: Array,
  },
  data() {
    return {
      data: this.items,
      current: String,
      truncate,
    };
  },
  created() {
    let i = 0;
    this.current = this.data[i];
    setInterval(() => {
      if (i > this.data.length - 1) {
        i = 0;
      }
      this.current = this.data[i];
      i++;
    }, 10000);
  },
};
</script>