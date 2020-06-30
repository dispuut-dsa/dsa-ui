<template>
  <div class="activity">
    <b-card class="mb-4">
      <div class="activity__header" aria-controls="activity-info" @click="expanded = !expanded">
        <b>{{activity.name}}</b>
        <span class="float-right">
          {{startTime}} - {{endTime}}
        </span>
      </div>
      <b-collapse class="activity__content mt-3" id="activity-info" v-model="expanded">
        <div class="activity__props">
          <b>Locatie: </b>
          {{activity.location}}<br>

          <b>Prijs: </b>
          <span v-if="activity.costs > 0">&euro;{{activity.costs}}</span>
          <span v-else>Gratis</span><br>
        </div>
        <div class="activity__description mt-3">
          {{activity.description}}
        </div>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
  import moment from 'moment';

  export default {
    name: 'Activity',
    props: {
      activity: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        expanded: false
      }
    },
    computed: {
      startTime() {
        let time = moment(this.activity.start_time).utc()
        return time.format("DD-MM-YYYY HH:mm");
      },
      endTime() {
        let time = moment(this.activity.end_time).utc()
        if (time.isSame(this.activity.start_time, "day")) {
          return time.format("HH:mm");
        } else {
          return time.format("DD-MM-YYYY HH:mm");
        }
      }
    }
  }
</script>

<style lang="scss">
  .activity {
    &__header {
      cursor: pointer;
    }
  }
</style>