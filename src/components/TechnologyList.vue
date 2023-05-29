<script>
import axios from 'axios';
import store from '../store';
export default {
    name: 'TechnologyList',
    data() {
        return {
            store,
            currentTechnology: '',
            technologies: []
        }
    },
    methods: {
        getTechnologies() {
            axios.get(`${this.store.apiBaseUrl}/technologies`)
                .then((response) => {
                    console.log(response);
                    this.technologies = response.data.results;

                })
                .catch((error) => {
                    console.log(error);
                })
        },
        changePage(){
            this.$router.push({name: 'technology', params:{slug: this.currentTechnology}});
        }
    },
    created(){
        this.getTechnologies();
    }
}
</script>
<template>
    <select class="form-select" v-if="technologies.length > 0" @change="changePage" v-model="currentTechnology">
        <option :value="technology.slug" v-for="technology in technologies">{{ technology.name }}</option>
    </select>
</template>