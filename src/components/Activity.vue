<template>
    <div class="card">
        <p>Author: {{ activity.author }} </p>
        <p>Name: {{ activity.name }}</p>
        <p>Description: {{ activity.description }}</p>
        <p>start time: {{ parse_date(activity.start_time) }}</p>
        <p>end time: {{ parse_date(activity.end_time) }}</p>
        <p>location: {{ activity.location }}</p>
        <p>costs: $$$€€€€$$$ {{ activity.costs }}</p>
    </div>
</template>

<script>
    export default {
        name: "Activity",
        props: [
            'activity',
        ],
        methods: {
            parse_date(date) {
                return new Date(Date.parse(date))
            }
        }
    }


</script>

<style scoped>

    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        background: #FFD218
    }
</style>