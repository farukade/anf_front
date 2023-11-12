<template>
  <div id="container">
    <header>
      <div v-for="tab of tabs" :key="tab.name">
        <Button
          :text="tab.name"
          :action="tab.action"
          :active="page === tab.name"
        />
      </div>
    </header>
    <section v-if="page === 'posts'">
      <NewsTable :items="items" :openItem="openItem" />
      <Pagination
        class="bg-veryLightGray"
        v-show="meta"
        :meta="meta"
        :message="`${meta?.totalItems} ${
          meta?.totalItems > 1 ? 'Posts' : 'Post'
        }`"
      />
    </section>
    <section v-else-if="page === 'users'">
      <UserTable :items="items" :openItem="openItem" />
      <Pagination
        class="bg-veryLightGray"
        v-show="meta"
        :meta="meta"
        :message="`${meta?.totalItems} ${
          meta?.totalItems > 1 ? 'Users' : 'User'
        }`"
      />
    </section>
  </div>
</template>

<script>
import { request, tokenValid } from "../utils/utils";
import Button from "../components/Button.vue";
import Accordion from "../components/Accordion.vue";
import NewsTable from "../components/NewsTable.vue";
import Pagination from "../components/Pagination.vue";
import UserTable from "../components/UserTable.vue";
import { mapState } from "vuex";

export default {
  name: "AdminLanding",
  components: {
    Button,
    Accordion,
    NewsTable,
    Pagination,
    UserTable,
  },
  data() {
    return {
      tabs: [{ name: "posts", action: this.showPosts }],
      items: [],
      meta: null,
      post: null,
      page: "posts",
      categoryId: "",
      startDate: "",
      endDate: "",
    };
  },
  methods: {
    async fetchData() {
      const { page, categoryId, startDate, endDate } = this;
      this.$store.commit("updateLoading", true);
      try {
        const url =
          page === "posts"
            ? `/news?categoryId=${categoryId}&startDate=${startDate}&endDate=${endDate}`
            : `/users`;

        const response = await request("GET", url, true);
        if (response?.success) {
          this.$store.commit("updateLoading", false);
          return response;
        } else {
          this.$store.commit("updateLoading", false);
          this.$store.commit("updateFailedMessage", {
            message: response.message,
            timer: 3000,
          });
          return null;
        }
      } catch (error) {
        this.$store.commit("updateLoading", false);
        this.$store.commit("updateFailedMessage", {
          message: error?.message || "Failed to fetch",
          timer: 3000,
        });
        return null;
      }
    },
    async showPosts() {
      this.page = "posts";
      this.items = [];
      const response = await this.fetchData();
      if (response) {
        this.meta = response.paging;
        this.items = response.result;
      }
    },
    async showUsers() {
      this.page = "users";
      this.items = [];
      const response = await this.fetchData();
      if (response) {
        this.meta = response.paging;
        this.items = response.result;
      }
    },
    openItem(item) {
      this.post = item;
    },
    openUser(item) {
      this.user = item;
    },
  },
  computed: {
    ...mapState(),
  },
  watch: {
    user(data) {
      console.log("user", data);
    },
  },
  async mounted() {
    const isValidToken = await tokenValid();
    if (isValidToken) {
      this.expiredLogin = false;
    } else {
      this.expiredLogin = true;
    }

    const response = await this.fetchData();
    if (response && response?.result) {
      this.items = response.result;
      this.meta = response.paging;
    }

    // if (this.user && this.user.type === "admin") {
    this.tabs.push({ name: "users", action: this.showUsers });
    // }
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
#container {
  padding: 110px 60px;
}
header {
  font-family: "Acme", sans-serif;
  background-color: #2201f907;
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
section {
  display: flex;
  flex-direction: column;
  padding: 25px 50px;
  border: 1px solid gray;
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
  header {
    display: flex;
  }
  #container {
    padding: 70px 30px;
  }
}
</style>