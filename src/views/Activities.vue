<template>
  <div class="activities">
    <b-container>
      <h1 class="mb-4">Activiteiten</h1>
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
  import Activity from "../components/Activity";
  import backend from "../services/backend";

  export default {
    name: 'Activities',
    components: {Activity},
    asyncComputed: {
      async activities() {
        return await this.getActivities()
      }
    },
    mixins: [backend]
  }
</script>
