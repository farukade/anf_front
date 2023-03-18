<template>
  <div id="pagination">
    <a id="first-pagi" :key="first" class="pagi-button"> &lt; &lt; </a>
    <a id="previous-pagi" :key="previous" class="pagi-button"> &lt; </a>
    <a id="current-pagi" :key="current" class="pagi-button"> {{ current }} </a>
    <a id="next-pagi" :key="next" class="pagi-button"> &gt; </a>
    <a id="last-pagi" :key="last" class="pagi-button"> &gt; &gt; </a>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    meta: Object,
  },
  data() {
    return {
      first: this.meta.first,
      current: this.meta.current,
      next: this.meta.next,
      previous: this.meta.previous,
      last: this.meta.last,
    };
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