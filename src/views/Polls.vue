<template>
    <div class="polls">
        <b-container>
            <h1 class="mb-4">Polls</h1>
            <div v-if="polls !== null">
                <Poll v-for="poll in polls" :poll="poll" :key="poll.id" />
            </div>
            <div v-else>
                Laden...
            </div>
        </b-container>
    </div>
</template>

<script>
    import Backend from '../services/backend'
    import Poll from "../components/Poll";

    export default {
        name: "Polls",
        components: {Poll},
        asyncComputed: {
            async polls() {
                return await Backend.getPolls();
            }
        }
    }
</script>

<style scoped>

</style>