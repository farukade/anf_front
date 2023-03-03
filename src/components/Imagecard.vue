<template>
  <div>
    <iframe
      class="border-t-[3px] border-anfVeryDeepBlue w-full min-h-[200]"
      :src="src"
      alt=""
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "Imagecard",
  props: {
    src: String,
  },
};
</script>