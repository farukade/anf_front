<template>
  <div>
    <Slide :items="topStories" />
    <main class="w-full min-h-3/4 md:flex">
      <Newscard :news="topStories" width="w-1/2" heading="TOP STORIES" />
      <div class="w-full md:w-1/2 p-4">
        <Newscard :news="topStories" heading="EDITOR'S PICK" />
        <Newscard :news="topStories" heading="FEATURED" />
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Slide from "../components/Slide.vue";
import Newscard from "../components/Newscard";
import { request } from "../utils/utils";

export default {
  name: "HomeView",
  components: {
    Slide,
    Newscard,
  },
  data() {
    return {
      slideStories: [],
      topStories: [],
      featuredStories: [],
      editorStories: [],
    };
  },
  methods: {
    async getTopStories() {
      const url = "/news/";
      const res = await request("GET", url);
      if (res.success) {
        console.log("success:- ", res.result);
        return res.result;
      } else {
        console.log("error:- ", res);
      }
    },
  },
  async created() {
    this.topStories = await this.getTopStories();
  },
};
</script>
