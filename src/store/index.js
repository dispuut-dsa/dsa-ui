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
      return !!state.token;
    },
  },
  mutations: {
    set_token(state, new_token) {
      state.token = new_token
      this.dispatch('save_token_to_cookie')
      if (new_token) {
        const access_claim = decodeJwt(new_token['access'])
        // calculate delay (ms) for refreshing token, 30 secs before expiration
        // todo: discuss whether this 30 secs is early enough, and if 5 minutes is a long enough access token lifetime
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
    async initialize(context) {
      await context.dispatch('read_token_from_cookie')
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
    async refresh_token(context) {
      const refresh_claim = decodeJwt(context.getters.token['refresh'])
      let refresh_expiration = refresh_claim['exp']
      if ((Date.now()/1000 + 30) > refresh_expiration ) {
        await backend.methods.refresh_token(this)
      } else { // our refresh token will expire within 30 seconds, so we logout.
        console.log('expired')
        // todo: discuss whether this is okay, since it might lead to annoying loss of work when you are in the middle of editing something and you are logged out.
        backend.methods.logout(this)
      }
    }
  },
  modules: {
  },
})
