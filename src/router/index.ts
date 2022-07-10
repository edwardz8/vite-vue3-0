import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Home from '@/views/Home.vue'
import ThreadShow from '@/views/ThreadShow.vue'
import threadCreate from '@/views/ThreadCreate.vue'
import Forum from '@/views/Forum.vue'
import Category from '@/views/Category.vue'
import Profile from '@/views/Profile.vue'
import Index from '@/views/Index.vue'
import NotFound from '@/components/NotFound.vue'

import * as sourceData from '@/data.json'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/', name: 'Home', component: Home
    },
    {
        path: '/index', name: 'Index', component: Index
    },
    {
        path: '/category/:id', name: 'Category', component: Category, props: true
    },
    {
        path: '/me', name: 'Profile', component: Profile, /* meta: { toTop: scroll, smoothScroll: true} */
    },
    {
        path: '/me/edit', name: 'ProfileEdit', component: Profile, props: { edit: true }
    },
    {
        path: '/forum/:id',
        name: 'Forum',
        component: Forum,
        props: true
    },
    {
        path: '/form/:forumId/thread/create',
        name: 'ThreadCreate',
        component: threadCreate,
        props: true
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
                next()
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
        path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
    /* scrollBehavior(to) {
        const scroll = {}
        if (to.meta.toTop) scroll.top = 0;
        if (to.meta.smoothScroll) scroll.behavior = "smooth"
        return scroll
    } */
})

export default router