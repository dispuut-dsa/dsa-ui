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

function getWikiPages() {
  return API.get('wiki/').then((result) => {
    return result.data
  })
}

function getWikiPage(id) {
  return API.get(`wiki/${id}`).then((result) => {
    return result.data
  })
}

function createWikiPage(params) {
  return API.post('wiki/', params).then((result) => {
    return result.data
  })
}

export default {
  getActivities,
  getWikiPages,
  getWikiPage,
  createWikiPage
}
