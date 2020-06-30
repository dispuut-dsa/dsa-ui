<template>
  <b-navbar class="px-0" toggleable="lg" type="dark" variant="primary">
    <b-container>
      <b-navbar-brand href="#">DSA</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="over">Over</b-nav-item>
          <b-nav-item to="activities">Activities</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>