<template>
  <div class="modal" id="modal-background" onclick="closeNav()">
    <div id="close" onclick="closeNav()">
      <i class="fas fa-times"></i>
    </div>
    <div class="news-categories-mobile">
      <ul id="news-list-container-mobile" class="news-cat-container">
        <li id="news-mobile">
          <a href="../index.html" id="news-link">News</a>
        </li>
        <li id="politics-mobile">
          <a href="./category.html" id="politics-link">Politics</a>
        </li>
        <li id="sports-mobile">
          <a href="./category.html" id="sports-link">Sports</a>
        </li>
        <li id="culture-mobile">
          <a href="./category.html" id="culture-link">Culture</a>
        </li>
        <li id="business-mobile">
          <a href="./category.html" id="business-link">Business</a>
        </li>
        <li id="entertainment-mobile">
          <a href="./category.html" id="entertainment-link">Entertainment</a>
        </li>
        <li id="science-technology-mobile">
          <a href="./category.html" id="science-technology-link">Technology</a>
        </li>
      </ul>
    </div>
  </div>
  <main id="main">
    <section id="manage-news">
      <a href="#" id="manage-news-button" class="manage-button">Manage News</a>
      <div id="news-buttons" class="news-buttons">
        <a href="./add-news.html" class="manage-button">Add News</a>
        <a href="./edit-news.html" class="manage-button">Edit News</a>
        <a href="#" class="manage-button">Delete News</a>
      </div>
    </section>
    <section id="manage-users">
      <a href="#" id="manage-user-button" class="manage-button">Manage Users</a>
      <div id="user-buttons" class="user-buttons">
        <a href="#" class="manage-button">Add Users</a>
        <a href="#" class="manage-button">View Users</a>
        <a href="#" class="manage-button">Delete Users</a>
      </div>
    </section>
  </main>
</template>

<script>
import { request } from "../utils/utils";

export default {
  name: "AdminLanding",
  components: {},
  data() {
    return {};
  },
  methods: {
    async getNews(category) {
      const url = "/news/?category=" + category;
      const res = await request("GET", url, true);
      if (res.success) {
        console.log("success:- ", res.result);
        return res.result;
      } else {
        console.log("error:- ", res);
      }
    },
  },
  async created() {
    // const category = window.location.href
    //   .split("?")[1]
    //   .split("category=")[1]
    //   .split("&")[0];
    // const rs = await this.getNews(category);
    // this.news = rs;
    // this.meta.current = 1;
    // this.meta.next = 2;
    // this.meta.previous = 1;
    // this.meta.first = 1;
    // this.meta.last = 1;
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
}
main {
  font-family: "Acme", sans-serif;
  background-color: #2201f907;
  margin: 110px auto 10px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height: 70vh;
}
section {
  display: flex;
  flex-direction: column;
  padding: 25px 50px;
}
.manage-button {
  background-color: #2201f9;
  color: #fff;
  border-radius: 2px;
  padding: 10px;
  margin: 10px;
}
#manage-news {
  background-color: #2201f91e;
}
#manage-users {
  background-color: #2201f91e;
}
.news-buttons {
  display: none;
}
.user-buttons {
  display: none;
}
.open-news-buttons {
  display: flex;
  flex-direction: column;
}
.open-user-buttons {
  display: flex;
  flex-direction: column;
}
@media (max-width: 769px) {
  main {
    display: flex;
    flex-direction: column;
  }
}
</style>