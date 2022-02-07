import Vue from 'vue'
import Vuex from 'vuex'
import backend from "@/services/backend";

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
      this.dispatch('save_token_to_cookie')
    },
    set_activities(state, new_activities) {
      state.activities = new_activities
    }
  },
  actions: {
    initialize(context) {
      this.dispatch('read_token_from_cookie')

    },
    set_token(context, new_token) {
      context.commit('set_token', new_token)
    },
    get_activities(context) {
      backend.methods.getActivities(this).then((data) => {
        context.commit('set_activities', data)
      })
    },
    save_token_to_cookie(context) {
      let token = context.getters.token
      // todo: implement
    },
    read_token_from_cookie(context) {
      // todo: implement
      let token = null // read from cookie
      context.commit('set_token', token)
    }
  },
  modules: {
  },
})
