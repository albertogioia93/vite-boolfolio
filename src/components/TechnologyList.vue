<script>
import axios from 'axios';
import store from '../store';
export default {
    name: 'TechnologyList',
    data() {
        return {
            store,
            technologies: []
        }
    },
    methods: {
        getTechnologies() {
            axios.get(`${this.store.apiBaseUrl}/technologies`)
                .then((response) => {
                    // console.log(response);
                    this.technologies = response.data.results;

                })
                .catch((error) => {
                    console.log(error);
                })
        },
        // changePage(){
        //     this.$router.push({name: 'technology', params:{slug: this.currentTechnology}});
        // }
    },
    created(){
        this.getTechnologies();
    }
}
</script>
<!-- <template>
    <select class="form-select" v-if="technologies.length > 0" @change="changePage" v-model="currentTechnology">
        <option :value="technology.slug" v-for="technology in technologies">{{ technology.name }}</option>
    </select>
</template> -->
<template>
    <div class="dropdown">
        <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
           Select Technology
        </button>
        <ul class="dropdown-menu">
            <li :key="technology.id" v-for="technology in technologies">
                <router-link :to="{name :'technology', params:{slug: technology.slug}}" class="dropdown-item">{{ technology.name }}</router-link>

            </li>
        </ul>
    </div>

</template>