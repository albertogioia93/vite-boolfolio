import { createWebHistory, createRouter } from 'vue-router';

//import delle pagine che sono incluse nel router
import AppHome from './pages/AppHome.vue';
import AboutPage from './pages/AboutPage.vue';
import BlogPage from './pages/BlogPage.vue';
import PostPage from './pages/PostPage.vue';
import TypePage from './pages/TypePage.vue';
import TechnologyPage from './pages/TechnologyPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        //specifico le rotte
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/chi-siamo',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/blog',
            name: 'blog',
            component: BlogPage
        },
        {
            path: '/blog/:slug',
            name: 'post',
            component: PostPage
        },
        {
            path: '/types/:slug',
            name: 'type',
            component: TypePage
        },
        {
            path: '/technologies/:slug',
            name: 'technology',
            component: TechnologyPage
        },
        { 
            path: '/:pathMatch(.*)*', 
            name: 'not-found',
            component: NotFoundPage 
        }
    ]
});

export { router };