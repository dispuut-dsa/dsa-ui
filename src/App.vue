<template>
  <div id="app">
    <Navbar />
    <router-view class="mt-5 router-view" />
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

.router-view {
  margin-left: 20px;
}
</style>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  },
  mounted() {
    console.log('mounted')
    this.$store.dispatch('initialize')
  }
}
</script>