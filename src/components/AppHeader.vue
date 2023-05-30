<script>
import TypeList from './TypeList.vue';
import TechnologyList from './TechnologyList.vue';

export default {
    name: "AppHeader",
    components: { TypeList, TechnologyList },
    // components: { TechnologyList }
}
</script>
<template>
    <header>
        <div class="container">
            <div class="d-flex justify-content-between align-items-center">
                <div class="logo">Blog</div>
                <nav>
                    <ul class="list-unstyled m-0 p-0 gap-4 d-flex align-items-center">
                        <li>
                            <router-link :to="{ name: 'home' }" class="nav-link">
                                Home
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'about' }" class="nav-link">
                                About
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'blog' }" class="nav-link">
                                Projects
                            </router-link>
                        </li>
                        <li>
                           <TypeList />
                        </li>
                        <li>
                           <TechnologyList />
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<style></style>