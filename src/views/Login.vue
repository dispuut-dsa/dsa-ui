<template>
  <div>
    <b-container fluid>
      <b-row align-h="center">
        <b-col cols="8" lg="4">
          <h1>Login</h1>
          <b-form-group label="Username:">

            <b-form-input v-model="username" placeholder="Username"></b-form-input>
          </b-form-group>
          <b-form-group label="Password:">
            <b-form-input v-model="password" type="password" placeholder="Password" @keypress.enter="submit"></b-form-input>
          </b-form-group>
          <b-button variant="primary" @click="submit">Submit</b-button>
        </b-col>
      </b-row>
    </b-container>
    {{ token }}
  </div>
</template>

<script>
import backend from "@/services/backend";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      token: {
        refresh: "",
        access: "",
      },
    }
  },
  methods: {
    submit() {
      this.login({username: this.username, password: this.password}).then(token => {
        this.token = token
      })
    }
  },
  mixins: [backend]
}
</script>

<style scoped>

</style>