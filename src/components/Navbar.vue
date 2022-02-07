<template>
  <b-navbar class="px-0" toggleable="lg" type="dark" variant="primary">
    <b-container>
      <b-navbar-brand href="#/">DSA</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <template v-if="$store.getters.authenticated">
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="over">Over</b-nav-item>
            <b-nav-item to="activities">Activiteiten</b-nav-item>
          </template>
          <template v-else-if="$route.path != '/login'">
            <b-nav-item to="login">Login</b-nav-item>
          </template>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>