<template>
    <div class="home">
        <b-container>
            <h1>Welkom op de homepagina van DSA</h1>
            <b-row class="mt-4">
                <b-col xs="12" md="8">
                    <b-card>
                        <b-card-title>
                            <router-link to="activities">Activities</router-link>
                        </b-card-title>
                        <b-card-body>
                            <ActivitiesList></ActivitiesList>
                        </b-card-body>
                    </b-card>
                </b-col>
                <!--                <b-col>-->
                <!--                    <b-button variant="primary" to="over">Over DSA</b-button>-->
                <!--                </b-col>-->
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import ActivitiesList from "../components/ActivitiesList";

    export default {
        name: 'Home',
        components: {
            ActivitiesList
        }
    }
</script>
