<script>
import axios from 'axios';
import CardPost from '../components/CardPost.vue';
export default {
    name: "BlogPage",
    components: {
        CardPost
    },
    data() {
        return {
            currentPage: 1,
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            showButton: true,
            apiUrls: {
                posts: '/posts'
            },
            posts: []
        }
    },
    methods: {
        getPosts() {
            axios.get(this.apiBaseUrl + this.apiUrls.posts, {
                params: {
                    page: this.currentPage
                }
            })
                .then((response) => {
                    const results = response.data.results.data ?? response.data.results;
                    const morePosts = response.data.results.next_page_url ?? null;
                    this.posts = [...this.posts, ...results];
                    if (!morePosts)
                        this.showButton = false;
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        nextPage() {
            this.currentPage += 1;
            this.getPosts();
        }
    },
    created() {
        this.getPosts();
    }
}
</script>


<template>
    <section>
        <h1 class="mt-5 mb-3">Projects</h1>
        <main>
            <div class="container">
                <div class="row my-4 gy-4">
                    <div class="col col-md-4" v-for="post in posts">
                        <CardPost :post="post" />
                    </div>
                </div>
                <div class="text-center my-5" v-if="showButton"><button class="btn btn-primary" @click.prevent="nextPage">Mostra altri</button></div>
            </div>
        </main>
    </section>
</template>


<style scoped></style>