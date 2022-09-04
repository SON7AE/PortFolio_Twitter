<template>
    <div class="hidden lg:block lg:w-2/5 px-4 py-2">
        <!-- TWEETS SEARCH INPUT -->
        <div class="relative mb-3">
            <input type="text" placeholder="트위터 검색" class="pl-10 rounded-full w-full p-2 bg-gray-100 text-sm focus:ring-1 focus:ring-primary focus:bg-white focus:outline-none" />
            <i class="fas fa-search absolute left-0 mt-2.5 ml-3 text-light"></i>
        </div>
        <!-- TREND FOR ME -->
        <div class="w-full rounded-xl bg-gray-50 flex flex-col">
            <div class="flex items-center justify-between px-3 py-1 border-b border-gray-100">
                <span class="text-lg font-bold name">나를 위한 트렌드</span>
                <i class="fas fa-cog text-center text-lg text-primary hover:bg-blue-50 p-2 rounded-full w-10"></i>
            </div>
            <div v-for="trend in 3" :key="trend" class="border-b border-gray-100 hover:bg-gray-100 px-4 py-2 cursor-pointer">
                <div class="flex">
                    <div class="flex-1 flex flex-col">
                        <div class="content text-gray-500">대한민국에서 트렌드 중</div>
                        <div class="content font-bold text-lg">마르코</div>
                        <div class="content text-gray-500">3,564 트윗</div>
                    </div>
                    <i class="fas fa-ellipsis-h text-gray-500"></i>
                </div>
            </div>
            <div class="px-4 py-2 hover:bg-gray-100 rounded-b-lg">
                <span class="text-primary text-lg rounded-2xl content">더보기</span>
            </div>
        </div>
        <!-- FOLLOW RECOMMENDS -->
        <div class="mt-5 w-full rounded-xl bg-gray-50 flex flex-col">
            <div class="px-3 py-3 border-b border-gray-100">
                <span class="text-lg font-bold name">팔로우 추천</span>
            </div>
            <div v-for="trend in 3" :key="trend" class="border-b border-gray-100 hover:bg-gray-100 px-4 py-2 cursor-pointer">
                <div class="flex">
                    <img src="http://picsum.photos/200" alt="" class="w-12 h-12 rounded-full mr-2" />
                    <div class="flex-1 flex flex-col">
                        <div class="content font-bold">마르코</div>
                        <div class="content text-gray-500 text-sm">@Marco</div>
                    </div>
                    <div>
                        <button class="nickname text-sm border-2 border-primary hover:bg-blue-50 px-2 py-1 text-sm rounded-full text-primary">팔로우</button>
                    </div>
                </div>
            </div>
            <div class="px-4 py-2 hover:bg-gray-100 rounded-b-lg">
                <span class="text-primary text-lg rounded-2xl content">더보기</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
