<template>
  <section :class="`mt-0 mb-0 pb-0 pt-0 w-full md:${width} md:mt-20 p-6`">
    <div class="bg-anfDeepBlue">
      <h1 :class="`p-1 pl-5 text-1xl md:text-2xl text-white mt-32 md:mt-5`">
        {{ heading }}
      </h1>
    </div>
    <router-link class="" :key="item.id" :to="''" v-for="item of news">
      <Imagecard class="h-72" :src="item.media" v-show="isTopStory" />
      <hr />
      <Newslink :text="truncate(item.content)" :id="item._id" />
    </router-link>
  </section>
</template>

<script>
import Newslink from "../components/Newslink";
import Imagecard from "../components/Imagecard";
import { truncate } from "../utils/utils";

export default {
  name: "Newscard",
  components: {
    Newslink,
    Imagecard,
  },
  props: {
    heading: String,
    cardSize: Number,
    news: Array,
    width: String,
  },
  data() {
    return {
      news: this.news,
      truncate,
    };
  },
  created() {
    // this.news = [
    //   {
    //     id: "1",
    //     content:
    //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias praesentium deleniti ut culpa natus perspiciatis assumenda reprehenderit  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias praesentium deleniti ut culpa natus perspiciatis assumenda reprehenderit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias praesentium deleniti ut culpa natus perspiciatis assumenda reprehenderitsint ex et.",
    //     src: "/img/AfCTA.jpg",
    //   },
    //   {
    //     id: "2",
    //     content:
    //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias praesentium deleniti ut culpa natus perspiciatis assumenda reprehenderit sint ex et.",
    //     src: "/img/th.jpeg",
    //   },
    //   {
    //     id: "3",
    //     content:
    //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias praesentium deleniti ut culpa natus perspiciatis assumenda reprehenderit sint ex et.",
    //     src: "/img/NRC-1.jpg",
    //   },
    //   {
    //     id: "4",
    //     content:
    //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias praesentium deleniti ut culpa natus perspiciatis assumenda reprehenderit sint ex et.",
    //     src: "/img/osinbamjo.jpeg",
    //   },
    // ];
  },
  computed: {
    isTopStory() {
      console.log(this.heading);
      if (this.heading == "TOP STORIES") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>