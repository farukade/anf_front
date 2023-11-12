<template>
  <div class="flex justify-content-between cursor-pointer">
    <div class="p-2">
      <span>{{ message }}</span>
    </div>
    <ul class="pagination">
      <li class="page-item" :key="first">
        <a id="first-pagi" class="page-link"> &lt; &lt; </a>
      </li>
      <li class="page-item" :key="previous">
        <a id="previous-pagi" class="page-link"> &lt; </a>
      </li>
      <li class="page-item" :key="currentMinus" v-show="currentMinus > 0">
        <a id="previous-pagi" class="page-link">{{ currentMinus }} </a>
      </li>
      <li class="page-item" :key="current">
        <a id="current-pagi" class="page-link">
          {{ current }}
        </a>
      </li>
      <li class="page-item" v-show="currentPlus > 2" :key="currentPlus">
        <a id="previous-pagi" class="page-link">{{ currentPlus }} </a>
      </li>
      <li class="page-item" :key="next">
        <a id="next-pagi" class="page-link"> &gt; </a>
      </li>
      <li class="page-item" :key="last">
        <a id="last-pagi" class="page-link"> &gt; &gt; </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    meta: Object,
    message: String,
  },
  data() {
    return {
      first: 1,
      current: 1,
      next: 1,
      previous: 1,
      last: 1,
      currentMinus: 0,
      currentPlus: 0,
    };
  },
  computed() {
    if (this.meta) {
      this.current = this.meta.currentPage;
      this.next =
        this.meta.totalPages > this.meta.currentPage
          ? this.meta.currentPage + 1
          : this.meta.totalPages;
      this.previous = this.meta.currentPage > 2 ? this.meta.currentPage - 1 : 1;
      this.last = this.meta.totalPages;
      this.currentMinus = this.meta.currentPage - 1;
      this.currentPlus = this.meta.currentPage + 1;
    }
  },
};
</script>

<style scoped>
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