import axios from 'axios'

export default {
    data() {
        return {
            API: axios.create({
                baseURL: process.env.VUE_APP_API_URL,
                timeout: 5000
            })
        }
    },
    methods: {
        getActivities() {
            return this.API.get('activities/').then((result) => {
                return result.data
            })
        },

        createExample(params) {
            return this.API.post('example/', params).then((result) => {
                return result.data
            })
        },

        login(params) {
            console.log(`we gaan hier iets doen met de login params yeaaah lets go: ${params.password}, ${params.username}`)
            return this.API.post('token/', params).then((result) => {
                return
            })
        }
    }
}

