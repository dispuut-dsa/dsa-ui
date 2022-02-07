import axios from 'axios'

const API = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    timeout: 5000
})
export default {
    // data() {
    //     return {
    //         API: axios.create({
    //             baseURL: process.env.VUE_APP_API_URL,
    //             timeout: 5000
    //         }),
    //     }
    // },
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

        createExample(params) {
            return API.post('example/', params).then((result) => {
                return result.data
            })
        },

        login(params) {
            return API.post('token/', params).then((result) => {
                return {refresh: result.data.refresh, access: result.data.access}
            })
        }
    }

}

