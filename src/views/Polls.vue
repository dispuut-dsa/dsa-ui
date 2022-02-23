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
    import Poll from "../components/Poll";

    export default {
        name: "Polls",
        components: {Poll},
        computed: {
          polls() {
            return this.$store.getters.polls
          }
        },
        mounted() {
          this.$store.dispatch('get_polls')
        },
    }
</script>

<style scoped>

</style>