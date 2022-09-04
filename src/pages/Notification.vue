<template>
    <!-- NOTIFICATION PART -->
    <div class="flex-1 border-r border-color flex flex-col overflow-y-auto">
        <!-- TITLE -->
        <div class="name p-3 font-bold text-lg border-b border-gray-1">알림</div>
        <!-- NOTIFICATION -->
        <div v-for="notification in 3" :key="notification" class="flex flex-col hover:bg-gray-50 p-3 space-y-2 border-b border-color cursor-pointer">
            <div class="flex justify-between">
                <img src="http://picsum.photos/120" alt="" class="w-10 h-10 rounded-full hover:opacity-80" />
                <i class="fas fa-ellipsis-h text-gray hover:bg-blue-50 hover:text-primary p-2 rounded-full w-10 h-10 flex items-center justify-center"></i>
            </div>
            <div class="content"><span class="font-bold">마르코</span> 님의 최근 트윗</div>
            <div class="content text-gray">안녕하세요, 이것은 알림 페이지 테스트 문구입니다. 참고만 해주세요.</div>
        </div>
    </div>
    <!-- TREND PART -->
    <Trends />
</template>

<script>
import Trends from '../components/Trends.vue';

export default {
    components: { Trends },
    setup() {},
};
</script>

<style></style>
