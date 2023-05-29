<script>
import axios from 'axios';
import store from '../store';
import CardPost from '../components/CardPost.vue';
export default {
    name: "TypePage",
    components: {
        CardPost
    },
    data() {
        return {
            store,
            type: null
        }
    },
    methods: {
        getType() {
            axios.get(`${this.store.apiBaseUrl}/types/${this.$route.params.slug}`)
                .then((response) => {
                    console.log(response);
                    this.type = response.data.results;
                })
        }
    },
    created() {
        this.getType();

        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                console.log({toParams})
                console.log({previousParams})
                this.getType();
            }
        )
    }
}
</script>


<template>
    <section v-if="type">
        <div class="container">
            <h1 class="mt-5 mb-3">Type Page: {{ type.name }}</h1>

            <div class="row my-4 gy-4">
                <div class="col col-md-4" v-for="post in type.posts">
                    <CardPost :post="post" />
                </div>
            </div>


        </div>
    </section>
</template>


<style scoped></style>