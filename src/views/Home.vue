<template>
  <div class="home">
    <b-container>
      <template v-if="$store.getters.authenticated">
        <div>
          <!--      todo: put authenticated content here-->
          Je bent ingelogd bish
        </div>
      </template>
      <template v-else>
        <h1>Welkom op de homepagina van DSA</h1>
        <b-button variant="primary" to="over">Over DSA</b-button>
      </template>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    // if (!this.$store.getters.authenticated) {
    //   this.$router.push('login')
    // }
  }
}
</script>
