import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Search from '../pages/Search.vue';
import Notification from '../pages/Notification.vue';
import Messages from '../pages/Messages.vue';
import Bookmark from '../pages/Bookmark.vue';
import List from '../pages/List.vue';
import Profile from '../pages/Profile.vue';
import Register from '../pages/Register.vue';
import Login from '../pages/Login.vue';
import store from '../store';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        title: '홈',
        icon: 'fas fa-home fa-fw text-2xl',
        meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true },
    },
    {
        path: '/search',
        name: 'search',
        component: Search,
        title: '탐색',
        icon: 'fas fa-hashtag fa-fw text-2xl',
        meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true },
    },
    {
        path: '/notifications',
        name: 'notifications',
        component: Notification,
        title: '알림',
        icon: 'far fa-bell fa-fw text-2xl',
        meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true },
    },
    {
        path: '/messages',
        name: 'messages',
        component: Messages,
        title: '쪽지',
        icon: 'far fa-envelope fa-fw text-2xl',
        meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true },
    },
    {
        path: '/bookmark',
        name: 'bookmark',
        component: Bookmark,
        title: '북마크',
        icon: 'far fa-bookmark fa-fw text-2xl',
        meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true },
    },
    {
        path: '/list',
        name: 'list',
        component: List,
        title: '리스트',
        icon: 'far fa-list-alt fa-fw text-2xl',
        meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true },
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile,
        title: '프로필',
        icon: 'far fa-user fa-fw text-2xl',
        meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true },
    },
    {
        path: '/more',
        name: 'more',
        component: Home,
        title: '더보기',
        icon: 'fas fa-ellipsis-h fa-fw text-2xl',
        meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true },
    },
    {
        path: '/register',
        component: Register,
        meta: { isMenu: false, layout: 'EmptyLayout' },
    },
    {
        path: '/login',
        component: Login,
        meta: { isMenu: false, layout: 'EmptyLayout' },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

/** Navigation Guard */
router.beforeEach((to, from, next) => {
    const currentUser = store.state.user;
    // some() 메서드는 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트한다.
    const requireAuth = to.matched.some((record) => record.meta.requireAuth);
    // not authenticated
    if (requireAuth && !currentUser) next('/login');
    // authenticated
    else next();
});
export default router;
