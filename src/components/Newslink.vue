<template>
  <div class="bg-anfLightWhitishBlue p-3">
    <p class="text-anfDeepBlue">
      {{text}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Newslink',
  props: {
    text: String,
    id: String
  }
}
</script>