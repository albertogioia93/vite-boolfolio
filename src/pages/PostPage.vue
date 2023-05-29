<script>
import axios from 'axios';
export default {
    name: "PostPage",
    data() {
        return {
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            apiUrls: {
                posts: '/posts'
            },
            post: null,
            isError: false,
            errorMessage: null
        }
    },
    methods: {
        getPost() {
            axios.get(this.apiBaseUrl + this.apiUrls.posts + "/" + this.$route.params.slug)
                .then((response) => {
                    // console.log(response);
                    this.post = response.data.results;
                })
                .catch((error) => {
                    // console.log(error);

                    if (error.response.status === 404) {
                        // console.log('redirect')
                        this.$router.push({ name: 'not-found' });
                    }
                    this.isError = true;
                    this.errorMessage = error.message;

                })
        }
    },
    created() {
        this.getPost();

        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                console.log({toParams})
                console.log({previousParams})
                this.getPost();
            }
        )
    }

}
</script>


<template>
    <section v-if="post">
        <div class="container">
            <h1 class="mt-5 mb-3">{{ post.title }}</h1>
            <h2>
                <router-link :to="{ name: 'type', params: {slug: post.type.slug} }" class="nav-link">
                    {{ post.type.name }}
                </router-link>
            </h2>
            <p>{{ post.content }}</p>
            <hr>
            <div class="my-3" v-show="post.technologies.length">
                <span class="badge text-bg-warning me-1" v-for="technology in post.technologies">{{ technology.name }}</span>
            </div>
        </div>
    </section>
    <section v-if="isError">
        <div class="container">
            <p>{{ errorMessage }}</p>
        </div>
    </section>
</template>


<style scoped></style>