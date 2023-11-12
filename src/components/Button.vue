<template>
  <button
    type="button"
    class="btn btn-primary active py-2 px-5 mx-3 my-2"
    data-bs-toggle="button"
    autocomplete="off"
    aria-pressed="true"
    @click="action"
  >
    {{ startCase(text) }}
  </button>
</template>

<script>
import { startCase } from "lodash";

export default {
  name: "Button",
  props: {
    text: String,
    action: Function,
    active: Boolean,
  },
  data() {
    return {
      startCase,
    };
  },
};
</script>