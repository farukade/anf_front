<template>
  <div class="accordion" id="accordionExample">
    <div class="accordion-item" v-for="item of items" :key="item.id">
      <h2 class="accordion-header" id="headingOne">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          {{ item.subject }}
        </button>
      </h2>
      <div
        id="collapseOne"
        class="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          {{ item.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { startCase } from "lodash";

export default {
  name: "Accordion",
  props: {
    items: Array,
  },
  data() {
    return {
      startCase,
    };
  },
};
</script>
