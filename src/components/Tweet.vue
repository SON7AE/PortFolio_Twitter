<template>
    <!-- TWEETS -->
    <div class="flex px-3 py-3 border-b border-color hover:bg-gray-50 cursor-pointer">
        <img src="http://picsum.photos/200" alt="" class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer" />
        <div class="ml-3 flex-1 flex flex-col space-y-1">
            <div class="text-sm space-x-1 nickname">
                <span class="font-bold">마르코</span>
                <span class="content text-gray text-xs">@Marco</span>
                <span>&middot;</span>
                <span class="content text-gray text-xs">7분</span>
            </div>
            <!-- TWEET BODY -->
            <p class="content">안녕하세요, 이것은 Vue.js 버전3으로 만들어 본 Twitter 클론코딩 페이지입니다.</p>
            <!-- TWEET ACTIONS -->
            <div class="flex items-center justify-between">
                <div class="text-gray hover:text-primary">
                    <i class="far fa-comment hover:bg-blue-50 rounded-full p-2"></i>
                    <span class="ml-1 text-sm">11</span>
                </div>
                <div class="text-gray hover:text-green-500">
                    <i class="fas fa-retweet hover:bg-green-50 rounded-full p-2"></i>
                    <span class="ml-1 text-sm">11</span>
                </div>
                <div class="text-gray hover:text-red-500">
                    <i class="far fa-heart hover:bg-red-50 rounded-full p-2"></i>
                    <span class="ml-1 text-sm">11</span>
                </div>
                <div class="text-gray hover:text-primary">
                    <i class="far fa-share-square hover:text-primary"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
