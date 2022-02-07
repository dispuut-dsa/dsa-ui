import Vue from 'vue'
import Vuex from 'vuex'
import VueCookies from 'vue-cookies'
import backend from "@/services/backend";
import { decodeJwt } from 'jose';

Vue.use(Vuex)
Vue.use(VueCookies)


export default new Vuex.Store({
  state: {
    token: null,
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
      if (new_token) {
        const access_claim = decodeJwt(new_token['access'])
        // calculate delay (ms) for refreshing token, 30 secs before expiration
        let delay = (access_claim['exp'] - 30) * 1000 - Date.now()
        setTimeout(() => {
          this.dispatch('refresh_token')
        }, delay)
      }
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
      if (token) {
        Vue.$cookies.set("token", token);
      } else {
        Vue.$cookies.remove('token');
      }
    },
    read_token_from_cookie(context) {
        let token = Vue.$cookies.get("token")
        if (token) {
            context.commit('set_token', token)
        }
    },
    refresh_token(context) {
      backend.methods.refresh_token(this)
    }
  },
  modules: {
  },
})
