import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/', component: () => import('@layouts/LayoutMain.vue'), children: [
            { path: '', component: () => import('@views/ViewHome.vue') }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router 