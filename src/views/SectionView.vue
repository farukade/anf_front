<template>
  <main id="category-main">
    <div id="main-container" v-for="item of news" :key="item._id">
      <section id="image-and-caption">
        <router-link :to="'single/?id=' + item._id">
          <summary class="summary">
            <ImageCard :src="item.media" class="h-96 z-0 summary-media" />
            <p class="caption">
              {{ item.subject }} <br />
              <br />
              <span class="text-sm">{{ truncate(item.content, 80) }}</span>
            </p>
          </summary>
        </router-link>
      </section>
    </div>
    <Pagination :meta="meta" />
  </main>
</template>

<script>
import { request } from "../utils/utils";
import ImageCard from "../components/Imagecard.vue";
import Pagination from "../components/Pagination.vue";
import { truncate } from "../utils/utils";

export default {
  name: "SectionView",
  components: {
    ImageCard,
    Pagination,
  },
  data() {
    return {
      news: [],
      meta: {
        current: 1,
      },
      truncate,
    };
  },
  methods: {
    async getNews(category) {
      const url = "/news/?category=" + category;
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
    const category = window.location.href
      .split("?")[1]
      .split("category=")[1]
      .split("&")[0];
    const rs = await this.getNews(category);
    this.news = rs;
    this.meta.current = 1;
    this.meta.next = 2;
    this.meta.previous = 1;
    this.meta.first = 1;
    this.meta.last = 1;
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Acme&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
main {
  font-family: "Acme", sans-serif;
  margin: 100px auto;
}
.summary {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  margin: 10px;
  background-color: #2201f91a;
  cursor: pointer;
  line-height: 2;
}
#main-container {
  display: flex;
  width: 100%;
}
#image-and-caption {
  width: 100%;
  z-index: 1;
  /* margin: 110px 100px 10px 100px; */
  padding: 10px 50px;
}
.summary-media {
  width: 100%;
  max-height: 300px;
  cursor: pointer;
  /* border-radius: 10px; */
}
.caption {
  display: inline-block;
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: 100;
  color: #000;
  margin: 10px 50px;
  padding: 10px;
  cursor: pointer;
}
#summary-link {
  text-decoration: none;
}
#pagination {
  text-align: center;
}
.pagi-button {
  margin: 20px;
  padding: 5px 10px;
  font-size: 20px;
  font-weight: 600;
  color: #2201f9;
  background-color: #2201f92a;
  border: none;
  text-decoration: none;
}
#pagination a:hover {
  border: #2201f92a solid 1px;
  border-radius: 1px;
}
@media (max-width: 1000px) {
  #image-and-caption {
    margin: 110px auto 10px auto;
  }
}
@media (max-width: 735px) {
  #main-container {
    width: 100vw;
    margin: 0;
  }
  #image-and-caption {
    margin: 50px auto;
    padding: 0;
  }
  .summary {
    flex-direction: column-reverse;
    margin: 20px 0;
    padding: 0;
    min-height: 50px;
  }
  .summary-media {
    min-height: 300px;
    height: auto;
    cursor: pointer;
    width: 100%;
  }
  .summary .caption {
    padding: 20px;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
  }
  .summary video {
    width: 100%;
  }
  .summary img {
    width: 100%;
  }
  #pagination {
    margin: 20px 0;
    max-width: 100vw;
  }
  .pagi-button {
    margin: 10px;
  }
}
</style>