<template>
  <div class="activities">
    <b-container>
      <h1 class="mb-4">Nieuwe activiteit</h1>
      <div>
        <div class="form-group">
          <label for="name">Naam</label>
          <input class="form-control" type="text" id="name" name="name" v-model="data.name">
        </div>
        <div class="form-group">
          <label for="description">Beschrijving</label>
          <textarea class="form-control w-100" id="description" name="description" v-model="data.description" rows="10"></textarea>
        </div>
        <div class="form-group">
          <label for="start-time">Starttijd</label>
          <div class="row">
            <div class="col-6">
              <input class="form-control" type="date" id="start-date" name="start-date" v-model="data.startDate">
            </div>
            <div class="col-6">
              <input class="form-control" type="time" id="start-time" name="start-time" v-model="data.startTime">
            </div>
          </div>

        </div>
        <div class="form-group">
          <label for="end-time">Eindtijd</label>
          <div class="row">
            <div class="col-6">
              <input class="form-control" type="date" id="end-date" name="end-date" v-model="data.endDate">
            </div>
            <div class="col-6">
              <input class="form-control" type="time" id="end-time" name="end-time" v-model="data.endTime">
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="location">Locatie</label>
          <input class="form-control" type="text" id="location" name="location" v-model="data.location">
        </div>
        <div class="form-group">
          <label for="costs">Kosten</label>
          <div class="input-group">
            <div class="input-group-prepend"><span class="input-group-text">&euro;</span></div>
            <input class="form-control" type="number" step="0.01" min="0" id="costs" name="costs" v-model="data.costs">
          </div>
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
  import Activity from "../components/Activity";

  export default {
    name: 'NewActivity',
    data() {
      return {
        data: {
          author: null,
          name: '',
          description: '',
          startDate: null,
          startTime: null,
          endDate: null,
          endTime: null,
          location: '',
          costs: 0
        },
        loading: false,
        error: null
      }
    },
    computed: {
      modelData() {
        let data = this.data
        data.start_time = data.startDate + ' ' + data.startTime
        data.end_time = data.endDate + ' ' + data.endTime
        return data
      }
    },
    methods: {
      save() {
        if (this.loading) return
        this.loading = true
        this.error = null
        Backend.createActivity(this.modelData).then((data) => {
          this.loading = false
          this.$router.push('/activities/')
        }).catch((error) => {
          this.loading = false
          this.error = "Er is iets fout gegaan."
        })
      }
    }
  }
</script>
