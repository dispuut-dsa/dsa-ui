<template>
  <div class="wiki">
    <b-container>
      <h1 class="mb-4 d-inline-block">Wiki</h1>
      <router-link class="btn btn-primary float-right" to="/wiki/nieuw">Nieuwe wikipagina</router-link>

      <div v-if="wikiPages !== null">
        <table class="table table-bordered">
          <tr v-for="wikiPage in wikiPages">
            <td>
              <router-link :to="'/wiki/'+wikiPage.id">{{ wikiPage.title }}</router-link>
            </td>
          </tr>
        </table>
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
    name: 'Wiki',
    asyncComputed: {
      async wikiPages() {
        return await Backend.getWikiPages();
      }
    }
  }
</script>
