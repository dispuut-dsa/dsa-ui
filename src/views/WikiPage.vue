<template>
  <div class="wiki-page">
    <b-container>
      <div v-if="wikiPage">
        <h1 class="mb-4">{{ wikiPage.title }}</h1>
        <div>
          <div v-html="wikiPage.content"></div>
        </div>
      </div>
      <div v-else>
        Laden...
      </div>
    </b-container>
  </div>
</template>

<script>
  import Backend from '../services/backend'

  export default {
    name: 'WikiPage',
    asyncComputed: {
      async wikiPage() {
        return await Backend.getWikiPage(this.$route.params.id);
      }
    }
  }
</script>
