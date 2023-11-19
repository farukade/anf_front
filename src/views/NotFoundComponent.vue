<template>
  <div
    id="container"
    class="text-anfDeepBlue d-flex flex-column align-content-center text-center"
  >
    <div>
      <strong class="text">PAGE</strong>
    </div>
    <div class="bg-anfDeepBlue text-white">
      <strong class="text">4</strong>
      <strong class="text">0</strong>
      <strong class="text">4</strong>
    </div>
    <div>
      <strong class="text">NOT FOUND</strong>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFoundComponent",
};
</script>

<style>
.text {
  font-size: 100px;
  font-weight: bolder;
  font-family: "Acme", sans-serif;
}
#container {
  padding: 100px;
}
</style>