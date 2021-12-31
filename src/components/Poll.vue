<template>
    <div class="poll">
        <b-card class="mb-4">

            <div class="poll__header" aria-controls="poll-info" @click="expanded = !expanded">
                <h3>{{poll.name}}</h3>
            </div>
            <b-collapse class="activity__content mt-3" id="activity-info" v-model="expanded">
                <h5>Omschrijving: </h5>
                <p>{{poll.description}}</p>

                <h5>Stemmen: </h5>

                <ul>
                    <li v-for='option in poll.options'>
                        {{option.option}}: {{option.count}}
                    </li>
                </ul>
            </b-collapse>
        </b-card>
        </div>
</template>

<script>
    export default {
        name: "Poll",
        props: {
            poll: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                expanded: false
            }
        },
    }
</script>

<style lang="scss">
    .poll {
        &__header {
            cursor: pointer;
        }
    }
</style>