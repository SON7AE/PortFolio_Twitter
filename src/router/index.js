import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Search from "../pages/Search.vue";
import Notification from "../pages/Notification.vue";
import Messages from "../pages/Messages.vue";
import Bookmark from "../pages/Bookmark.vue";
import List from "../pages/List.vue";
import Profile from "../pages/Profile.vue";
import Register from "../pages/Register.vue";
import Login from "../pages/Login.vue";

const routes = [
  {
    path: "/",
    component: Home,
    title: "홈",
    icon: "fas fa-home fa-fw text-2xl",
    meta: { isMenu: true, layout: "DefaultLayout" },
  },
  {
    path: "/search",
    component: Search,
    title: "탐색",
    icon: "fas fa-hashtag fa-fw text-2xl",
    meta: { isMenu: true, layout: "DefaultLayout" },
  },
  {
    path: "/notifications",
    component: Notification,
    title: "알림",
    icon: "far fa-bell fa-fw text-2xl",
    meta: { isMenu: true, layout: "DefaultLayout" },
  },
  {
    path: "/messages",
    component: Messages,
    title: "쪽지",
    icon: "far fa-envelope fa-fw text-2xl",
    meta: { isMenu: true, layout: "DefaultLayout" },
  },
  {
    path: "/bookmark",
    component: Bookmark,
    title: "북마크",
    icon: "far fa-bookmark fa-fw text-2xl",
    meta: { isMenu: true, layout: "DefaultLayout" },
  },
  {
    path: "/list",
    component: List,
    title: "리스트",
    icon: "far fa-list-alt fa-fw text-2xl",
    meta: { isMenu: true, layout: "DefaultLayout" },
  },
  {
    path: "/profile",
    component: Profile,
    title: "프로필",
    icon: "far fa-user fa-fw text-2xl",
    meta: { isMenu: true, layout: "DefaultLayout" },
  },
  {
    path: "/",
    component: Home,
    title: "더보기",
    icon: "fas fa-ellipsis-h fa-fw text-2xl",
    meta: { isMenu: true, layout: "DefaultLayout" },
  },
  {
    path: "/register",
    component: Register,
    meta: { isMenu: false, layout: "EmptyLayout" },
  },
  {
    path: "/login",
    component: Login,
    meta: { isMenu: false, layout: "EmptyLayout" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

{
  /* <RouterLink to="/" class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer flex items-center">
      <i class="fas fa-hashtag fa-fw text-2xl"></i>
      <span class="ml-5 mt-0.5 text-xl hidden xl:inline-block name">탐색하기</span>
    </RouterLink>

    <RouterLink to="/notification" class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer flex items-center">
      <i class="far fa-bell fa-fw text-2xl"></i>
      <span class="ml-5 mt-0.5 text-xl hidden xl:inline-block name">알림</span>
    </RouterLink>

    <RouterLink to="/messages" class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer flex items-center">
      <i class="far fa-envelope fa-fw text-2xl"></i>
      <span class="ml-5 mt-0.5 text-xl hidden xl:inline-block name">쪽지</span>
    </RouterLink>

    <RouterLink to="/" class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer flex items-center">
      <i class="far fa-bookmark fa-fw text-2xl"></i>
      <span class="ml-5 mt-0.5 text-xl hidden xl:inline-block name">북마크</span>
    </RouterLink>

    <RouterLink to="/" class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer flex items-center">
      <i class="far fa-list-alt fa-fw text-2xl"></i>
      <span class="ml-5 mt-0.5 text-xl hidden xl:inline-block name">리스트</span>
    </RouterLink>

    <RouterLink to="/profile" class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer flex items-center">
      <i class="far fa-user fa-fw text-2xl"></i>
      <span class="ml-5 mt-0.5 text-xl hidden xl:inline-block name">프로필</span>
    </RouterLink>

    <RouterLink to="/" class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer flex items-center">
      <i class="fas fa-ellipsis-h fa-fw text-2xl"></i>
      <span class="ml-5 mt-0.5 text-xl hidden xl:inline-block name">더보기</span>
    </RouterLink> */
}
