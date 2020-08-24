<template>
<div class="activities_list">
    <div v-if="activities !== null">
        <Activity v-for="activity in activities" :activity="activity" :key="activity.id" />
    </div>
    <div v-else>
        Laden...
    </div>
</div>
</template>

<script>
    import Backend from "../services/backend";
    import Activity from "./Activity";

    export default {
        name: "ActivitiesList",
        components: {
            Activity,
        },
        asyncComputed: {
            async activities() {
                return await Backend.getActivities();
            }
        },
    }

</script>

<style scoped>

</style>