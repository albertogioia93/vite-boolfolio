<script>
import axios from 'axios';
import store from '../store';
export default {
    name: 'TypeList',
    data() {
        return {
            store,
            types: []
        }
    },
    methods: {
        getTypes() {
            axios.get(`${this.store.apiBaseUrl}/types`)
                .then((response) => {
                    // console.log(response);
                    this.types = response.data.results;

                })
                .catch((error) => {
                    console.log(error);
                })
        },
        // changePage(){
        //     this.$router.push({name: 'type', params:{slug: this.currentType}});
        // }
    },
    created(){
        this.getTypes();
    }
}
</script>
<!-- <template>
    <select class="form-select" v-if="types.length > 0" @change="changePage" v-model="currentType">
        <option :value="type.slug" v-for="type in types">{{ type.name }}</option>
    </select>
</template> -->

<template>
    <div class="dropdown">
        <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
           Select type
        </button>
        <ul class="dropdown-menu">
            <li :key="type.id" v-for="type in types">
                <router-link :to="{name :'type', params:{slug: type.slug}}" class="dropdown-item">{{ type.name }}</router-link>

            </li>
        </ul>
    </div>

</template>