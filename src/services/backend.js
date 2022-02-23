import axios from 'axios'

const API = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    timeout: 5000
})
export default {
    methods: {
        get(url, store) {
            let headers = {}
            if (store.getters.authenticated) {
                headers['Authorization'] = `Bearer ${store.getters.token['access']}`
            }
            return API.get(url, {headers: headers})
        },
        getActivities(store) {
            return this.get('activities/', store).then((result) => {
                if (result.status === 200) {
                    return result.data
                } else {
                    return []
                }
            })
        },
        getPolls(store) {
            return this.get('polls/', store).then((result) => {
                if (result.status === 200) {
                    return result.data
                } else {
                    return []
                }
            })
        },
        async login(store, params) {
            let response = await API.post('token/', params)
            let token = {refresh: response.data.refresh, access: response.data.access}
            store.dispatch('set_token', token)
        },
        logout(store) {
            store.dispatch('set_token', null)
        },
        async refresh_token(store) {
            console.log('refreshing token')
            let params = {refresh: store.getters.token['refresh']}
            try {
                let response = await API.post('token/refresh/', params)
                let token = {refresh: store.getters.token['refresh'], access: response.data.access}
                store.dispatch('set_token', token)
                console.log('refreshed token')
            } catch (error) {
                if (error.response && error.response.status === 401) { // our refresh token probably expired
                    this.logout(store)
                }
            }

        }
    }

}

