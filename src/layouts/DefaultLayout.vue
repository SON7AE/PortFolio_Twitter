<template>
    <div class="flex h-screen container mx-auto ralative">
        <!-- SIDE SECTION -->
        <div class="w-20 xl:w-1/4 pt-5 xl:ml-10 flex flex-col justify-between border-r border-gray-100">
            <div class="flex flex-col items-center xl:items-start">
                <!-- TWITTER LOGO -->
                <i class="fab fa-twitter text-3xl text-primary xl:ml-4 mb-3"></i>
                <!-- SIDE MEMU ICONS -->
                <div class="flex flex-col items-start">
                    <RouterLink :to="route.path" v-for="route in routes" :key="route" class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer flex items-center">
                        <div v-if="route.meta.isMenu">
                            <i :class="route.icon"></i> <span class="ml-5 mt-0.5 text-xl hidden xl:inline-block name">{{ route.title }}</span>
                        </div>
                    </RouterLink>
                </div>
                <!-- TWEET BUTTON -->
                <div class="w-full xl:pr-3 flex justify-center">
                    <button class="mt-3 bg-primary text-white xl:w-full w-12 h-12 rounded-full hover:bg-dark name">
                        <span class="hidden xl:block">Tweet</span>
                        <i class="fas fa-plus xl:hidden"></i>
                    </button>
                </div>
            </div>
            <!-- PROFILE BUTTON -->
            <div class="xl:pr-3 mb-3 relative" @click="showProfileDropdown = true">
                <button class="hidden xl:flex mt-3 px-2 py-1 w-full h-12 rounded-full hover:bg-blue-50 items-center">
                    <img src="https://picsum.photos/100" alt="" class="w-10 h-10 rounded-full" />
                    <div class="xl:ml-2 hidden xl:flex flex-col">
                        <span class="text-sm font-bold nickname">Marco.com</span>
                        <span class="text-xs text-gray-500 text-left nickname">@Marco</span>
                    </div>
                    <i class="ml-auto fas fa-ellipsis-h fa-fw text-xs hidden xl:block"></i>
                </button>
                <div class="xl:hidden flex justify-center">
                    <img src="http://picsum.photos/100" alt="" class="w-10 h-10 rounded-full cursor-pointer hover:opacity-80" />
                </div>
            </div>
        </div>
        <!-- MAIN SECTION -->
        <div class="flex-1 flex h-screen">
            <RouterView />
        </div>
        <!-- PROFILE DROPDOWN MENU -->
        <div v-if="showProfileDropdown" class="absolute bottom-20 shadow rounded-lg w-60 bg-white" @click="showProfileDropdown = false">
            <button class="hover:bg-gray-50 border-b border-gray-100 flex p-3 w-full items-center">
                <img src="http://picsum.photos/200" alt="" class="w-10 h-10 rounded-full" />
                <div class="ml-2">
                    <div class="nickname text-sm">Marco@nate.com</div>
                    <div class="content text-left text-gray-500 text-sm">@Marco</div>
                </div>
                <i class="fas fa-check text-primary ml-auto"></i>
            </button>
            <button class="message p-3 hover:bg-gray-50 w-full text-left text-sm" @click="onLogout">@Marco 계정에서 로그아웃</button>
        </div>
    </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import router from '../router';
import { auth } from '../firebase';
import store from '../store';

export default {
    setup() {
        const routes = ref([]);
        const showProfileDropdown = ref(false);
        const onLogout = async () => {
            await auth.signOut();
            store.commit('SET_USER', null);
            await router.replace('/login');
        };

        onBeforeMount(() => {
            routes.value = router.options.routes;
        });

        return { routes, showProfileDropdown, onLogout };
    },
};
</script>
