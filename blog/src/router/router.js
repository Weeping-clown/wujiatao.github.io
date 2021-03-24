// import VueRouter from 'vue-router'
// import Vue from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'

// import HellowWorld from '../components/HelloWorld.vue'
import Test from '../components/Test.vue'
import Home from '../components/Home.vue'
import Blog from '../components/Blog.vue'
// Vue.use(VueRouter)

const routes = [
    {   
        path: '/',
        name: 'home',
        component: Blog
    },
    {   
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/Blog',
        name: 'Blog',
        component: Blog
    },
    {
        path: '/hello',
        name: 'hello',
        component: Test
    },
]

// const router = new VueRouter({
//     routes,
// })
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router