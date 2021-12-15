<template>
  <div class="new-wiki-page">
    <b-container>
      <h1>Nieuwe wikipagina</h1>
      <div>
        <div class="form-group">
          <label for="title">Titel</label>
          <input class="form-control" type="text" id="title" name="title" v-model="data.title">
        </div>
        <div class="form-group">
          <label for="content">Tekst</label>
          <textarea class="form-control w-100" id="content" name="content" v-model="data.content" rows="10"></textarea>
        </div>
      </div>
      <button class="btn btn-primary" @click="save">
        <span v-if="loading">Opslaan...</span>
        <span v-else>Opslaan</span>
      </button>
      <div v-if="error" class="text-danger">{{ error }}</div>
    </b-container>
  </div>
</template>

<script>
  import Backend from '../services/backend'

  export default {
    name: 'NewWikiPage',
    data() {
      return {
        data: {
          author: null,
          title: '',
          content: '',
        },
        loading: false,
        error: null
      }
    },
    methods: {
      save() {
        if (this.loading) return
        this.loading = true
        this.error = null
        Backend.createWikiPage(this.data).then((data) => {
          this.loading = false
          this.$router.push('/wiki/'+data.id)
        }).catch((error) => {
          this.loading = false
          this.error = "Er is iets fout gegaan."
        })
      }
    }
  }
</script>
