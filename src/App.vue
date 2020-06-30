<template>
  <div id="app">
    <Navbar />
    <router-view class="mt-5" />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
</style>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>