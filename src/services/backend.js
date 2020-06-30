import axios from 'axios'

const API = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 5000
})

function getActivities() {
  return API.get('activities/').then((result) => {
    return result.data
  })
}

function createExample(params) {
  return API.post('example/', params).then((result) => {
    return result.data
  })
}

export default {
  getActivities,
  createExample
}
