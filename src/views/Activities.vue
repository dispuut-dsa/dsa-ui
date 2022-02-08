<template>
  <div class="activities">
    <b-container>
      <h1 class="d-inline-block mb-4">Activiteiten</h1>
      <router-link class="btn btn-primary float-right" to="/activities/nieuw">Nieuwe activiteit</router-link>

      <div v-if="activities !== null">
        <Activity v-for="activity in activities" :activity="activity" :key="activity.id" />
      </div>
      <div v-else>
        Laden...
      </div>
    </b-container>
  </div>
</template>

<script>
  import Backend from '../services/backend'
  import Activity from "../components/Activity";

  export default {
    name: 'Activities',
    components: {Activity},
    asyncComputed: {
      async activities() {
        return await Backend.getActivities();
      }
    }
  }
</script>
