<template>
    <div class="poll">
        <b-card class="mb-4">

            <div class="poll__header" aria-controls="poll-info" @click="expanded = !expanded">
                <b>{{poll.name}}</b>
            </div>
            <b-collapse class="activity__content mt-3" id="activity-info" v-model="expanded">
                <p>
                  <b>Omschrijving: </b>
                  {{poll.description}}
                </p>
              <div class="container" v-if="!poll.can_vote">
                <div class="row" v-for='option in poll.options'>
                  <div class="col-12">
                    <div class="poll-option-bar" :style="{ width: 1.0 + percentages[option.id] * 0.5 + '%'}"> </div>
                    <b>{{percentages[option.id]}}%:</b> {{option.option}}
                  </div>
                </div>
              </div>
              <div class="container" v-if="poll.can_vote">
                  <div class="row" v-for='option in poll.options'>
                      <b-button variant="primary" to="/">{{ option.option }}</b-button>
                  </div>
              </div>
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
        computed: {
          percentages() {
            let optionPercentages = {}
            let total = 0;

            for (let i = 0; i < this.poll.options.length; i++) {
              total += this.poll.options[i].count;
            }

            console.log(total)

            for (let i = 0; i < this.poll.options.length; i++) {
              let option = this.poll.options[i];
              if (total > 0) {
                optionPercentages[option.id] = 100.0 * option.count / total;
                console.log(optionPercentages[option.id])
              } else {
                optionPercentages[option.id] = 100.0/this.poll.options.length;
              }
            }
            return optionPercentages;

          }
        }

    }
</script>

<style lang="scss">
    .poll {
        &__header {
            cursor: pointer;
        }
    }

    .poll-option-bar {
      background: #f60101;
      height: 0.5em;
      border-radius: 5px;
      display: inline-block;
      margin-right: 2em;
    }
</style>