import Vue from 'vue'
import Vuex from 'vuex'
import backend from "@/services/backend";

var Backend = Vue.extend({
  mixins: [backend],
})

var _backend = new Backend()

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: "",
    activities: null,
  },
  getters: {
    token: state => {
      return state.token
    },
    activities: state => {
      return state.activities
    },
    authenticated: state => {
      if (state.token) {
        return true
      } else {
        return false
      }
    }
  },
  mutations: {
    set_token(state, new_token) {
      state.token = new_token
    },
    set_activities(state, new_activities) {
      state.activities = new_activities
    }
  },
  actions: {
    set_token(context, new_token) {
      context.commit('set_token', new_token)
    },
    get_activities(context) {
      _backend.getActivities().then((data) => {
        context.commit('set_activities', data)
      })
    }
  },
  modules: {
  },
})
