<script>
import axios from 'axios';
import store from '../store';
import CardPost from '../components/CardPost.vue';
export default {
    name: "TechnologyPage",
    components: {
        CardPost
    },
    data() {
        return {
            store,
            technology: null
        }
    },
    methods: {
        getTechnology() {
            axios.get(`${this.store.apiBaseUrl}/technologies/${this.$route.params.slug}`)
                .then((response) => {
                    console.log(response);
                    this.technology = response.data.results;
                })
        }
    },
    created() {
        this.getTechnology();

        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                console.log({toParams})
                console.log({previousParams})
                this.getTechnology();
            }
        )
    }
}
</script>


<template>
    <section v-if="technology">
        <div class="container">
            <h1 class="mt-5 mb-3">Technology Page: {{ technology.name }}</h1>

            <div class="row my-4 gy-4">
                <div class="col col-md-4" v-for="post in technology.posts">
                    <CardPost :post="post" />
                </div>
            </div>


        </div>
    </section>
</template>


<style scoped></style>