<template>
  <router-link class="hover:text-anfLightWhitishBlue" :to="link == 'Home' ? '/' : '/section?category=' + link.toLowerCase()">{{text}}</router-link>
</template>

<script>
export default {
  name: 'Link',
  props: {
    text: String,
    link: String,
  }
}
</script>