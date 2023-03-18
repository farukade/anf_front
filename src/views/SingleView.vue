<template>
  <div>
    <main id="single-view-main">
      <div id="header-container">
        <h1 id="news-header">{{ subject }}</h1>
      </div>
      <ImageCard :src="media" class="w-full h-96" />
      <div id="write-up">{{ content }}</div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import { request } from "../utils/utils";
import ImageCard from "../components/Imagecard.vue";

export default {
  name: "SingleView",
  components: {
    ImageCard,
  },
  data() {
    return {
      news: {},
      subject: String,
      content: String,
      media: String,
    };
  },
  methods: {
    async getSingleNews(id) {
      const url = "/news/?id=" + id;
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
    const id = window.location.href.split("?")[1].split("id=")[1].split("&")[0];
    console.log(id);
    this.news = await this.getSingleNews(id);
    this.subject = this.news.subject;
    this.content = this.news.content;
    this.media = this.news.media;
    if (this.news) {
      console.log(this.news);
    }
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
body {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
}
main {
  font-family: "Acme", sans-serif;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #2201f908;
  margin: 110px auto 10px auto;
}
#video-container {
  width: 95%;
  text-align: center;
  padding: 50px 0;
}
#video {
  justify-content: center;
  width: 76%;
  min-height: 400px;
}
#image {
  justify-content: center;
  width: 76%;
  height: 400px;
}
#write-up {
  padding: 50px;
  color: #000;
  font-weight: 100;
  font-size: 17px;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 2;
}
.paragraph {
  padding: 10px;
}
#news-header {
  padding: 20px 50px;
  color: #000;
  font-size: 2rem;
}
@media (max-width: 769px) {
  #single-view-main {
    width: 100%;
    margin: 50px auto 10px auto;
  }
  #video-container {
    padding: 10px;
    width: 100%;
    height: auto;
  }
  #video {
    width: 100%;
    min-height: 250px;
  }
  #image {
    width: 100%;
    height: auto;
  }
  #write-up {
    padding: 20px 5px;
    font-weight: 300;
    font-size: 20px;
  }
  #news-header {
    padding: 20px;
    font-size: 1.5rem;
  }
}
</style>