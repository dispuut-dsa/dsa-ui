<template>
  <div class="activity">
    <b-card class="activity-card" :title="activity.name" :sub-title="activity.startTime.toString()">
    </b-card>

  </div>
</template>

<script>
  export default{
    name: 'Activity',
    props: {
      activity: Object
    },

  }

</script>

<style>
  .activity {
    margin: 3px;
  }

  .activity-card:hover {
    background: #e6e6e6;
  }
</style>