<template>
  <div class="view">
    <b-container fluid="md">
      <Activity
              v-for="activity in activities"
              :activity="activity"
      ></Activity>
    </b-container>
  </div>
</template>

<script>
  import Activity from "../components/Activity";

  export default {
    name: 'Activities',
    components: {
      Activity
    },

    computed: {
      activities: () => {
        return [
          {
            author: "Henk",
            name: "Bier tanken",
            description: "Mensjes we gaan tantoehard zuipen",
            startTime: new Date(2020, 7, 22, 20, 0, 0),
            endTime: new Date(2020, 7, 23, 4, 0, 0),
            location: "De kelder",
            costs: 0
          },
          {
            author: "Klaas",
            name: "Kaulohard Bami Vreten",
            description: "Jammie, bami",
            startTime: new Date(2020, 7, 22, 19, 0, 0),
            endTime: new Date(2020, 7, 23, 20, 0, 0),
            location: "Eettafel",
            costs: 5
          },
        ]
      }
    }
  }
</script>
