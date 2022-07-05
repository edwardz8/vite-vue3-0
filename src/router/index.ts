import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Forum from '@/views/Forum.vue'
import ThreadShow from '@/views/ThreadShow.vue'
import Index from '@/views/Index.vue'
import NotFound from '@/components/NotFound.vue'
// import sourceData from '../data.json'
import * as sourceData from '../data.json'

const routes = [
    {
        path: '/', name: 'Home', component: Home
    },
    {
        path: '/index', name: 'Index', component: Index
    },
    {
        path: '/thread/:id',
        name: 'ThreadShow',
        component: ThreadShow,
        props: true,
        beforeEnter(to, from, next) {
            // check if thread exists
            const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)
            // if exists continue
            if (threadExists) {
                return next()
            } else {
                next({
                    name: 'NotFound',
                    params: { pathMatch: to.path.substring(1).split('/') },
                    // preserve existing query and hash
                    query: to.query,
                    hash: to.hash
                })
            }
            // if doesnt exist redirect to not found
        }
    },
    {
        path: '/forum/:id',
        name: 'Forum',
        component: Forum,
        props: true
    },
    {
        path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router