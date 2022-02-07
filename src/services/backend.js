import axios from 'axios'

export default {
    data() {
        return {
            API: axios.create({
                baseURL: process.env.VUE_APP_API_URL,
                timeout: 5000
            }),
        }
    },
    methods: {
        get(url) {
            let headers = {}
            if (this.$store.getters.authenticated) {
                headers['Authorization'] = `Bearer ${this.$store.getters.token['access']}`
            }
            return this.API.get(url, {headers: headers})
        },
        getActivities() {
            return this.get('activities/').then((result) => {
                if (result.status === 200) {
                    return result.data
                } else {
                    return []
                }
            })
        },

        createExample(params) {
            return this.API.post('example/', params).then((result) => {
                return result.data
            })
        },

        login(params) {
            return this.API.post('token/', params).then((result) => {
                return {refresh: result.data.refresh, access: result.data.access}
            })
        }
    }

}

