<template>
    <div class="about">
        <b-container>
            <h1>{{ title }}</h1>
            <activity v-for="activity in activities" :activity="activity"></activity>
        </b-container>
    </div>
</template>

<script>
    import Activity from "../components/Activity";
    import Backend from "../services/backend.js";

export default {

    name: "Activities",
    components: {
        'activity': Activity,
    },
    data() {
        return {
            title: 'Activities',
            activities: [],
        }
    },
    methods: {
        get_activities() {
            Backend.getActivities().then((activities) => {
                this.activities = activities;
            })
        }
    },
    mounted() {
        this.get_activities();
    },
}

</script>