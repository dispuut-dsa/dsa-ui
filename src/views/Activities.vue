<template>
    <div class="activities">
        <b-container>
            <h1 class="mb-4">Activiteiten</h1>
            <ActivitiesList></ActivitiesList>
        </b-container>
    </div>
</template>

<script>
    import ActivitiesList from "../components/ActivitiesList";

    export default {
        name: 'Activities',
        components: {
          ActivitiesList
        },

    }
</script>
