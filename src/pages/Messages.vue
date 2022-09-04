<template>
  <div class="flex-1 flex">
    <!-- CHAT LIST -->
    <div class="w-2/5 border-r border-color overflow-y-scroll">
      <div class="flex flex-col">
        <div class="name p-3 h-14 font-bold text-lg border-b border-color">쪽지</div>
        <!-- A CHAT LIST -->
        <div v-for="message in 3" :key="message" class="flex px-3 py-4 hover:bg-gray-50 border-b border-color">
          <img src="http://picsum.photos/200" alt="" class="w-10 h-10 rounded-full cursor-pointer mr-2" />
          <div>
            <div class="nickname flex space-x-1">
              <div class="font-bold">Marco.com</div>
              <div class="text-gray">@Marco</div>
              <div class="text-gray">7월 29일</div>
            </div>
            <div class="content text-gray">메시지</div>
          </div>
        </div>
      </div>
    </div>
    <!-- CHATTING -->
    <div class="w-3/5 border-r border-color">
      <div class="flex flex-col h-screen">
        <!-- TITLE -->
        <div class="flex px-3 h-14 items-center border-b border-color">
          <img src="http://picsum.photos/100" alt="" class="w-8 h-8 rounded-full mr-2 cursor-pointer" />
          <div class="nickname">
            <div class="font-bold text-lg">Marco.com</div>
            <div class="text-sm text-gray">@Marco</div>
          </div>
        </div>
        <!-- USER INFO -->
        <div class="flex flex-col justify-center items-center py-6 border-b border-color hover:bg-gray-50">
          <div class="nickname">
            <span class="font-bold mr-1">Marco.com</span>
            <span class="text-gray">@Marco</span>
          </div>
          <div class="content">
            <span class="font-bold mr-1">28</span>
            <span>팔로우 중</span>
            <span class="font-bold ml-3 mr-1">7</span>
            <span>팔로워</span>
          </div>
          <div class="content">
            <span class="text-gray mr-1">가입일</span>
            <span class="text-gray">2022년 7월</span>
          </div>
        </div>
        <div class="flex-1 overflow-y-scroll">
          <!-- CHAT BUBBLE : MY CHAT -->
          <div class="text-right px-3 py-3">
            <span class="message bg-primary text-white px-4 py-2 rounded-full">메시지</span>
            <div class="content mt-3 text-xs text-gray">2022년 7월 29일 오후 4:21</div>
          </div>
          <!-- CHAT BUBBLE : OPPONENT CHAT -->
          <div v-for="chat in 3" :key="chat" class="text-left px-3 py-3">
            <span class="message bg-gray-100 px-4 py-2 rounded-full">메시지</span>
            <div class="content mt-3 text-xs text-gray">2022년 7월 29일 오후 4:21</div>
          </div>
        </div>
        <!-- CHAT INPUT -->
        <div class="flex items-center bg-white border-t border-color sticky">
          <input type="text" placeholder="새로운 메시지 작성하기" class="m-2 py-1 px-4 rounded-full bg-gray-100 resize-none outline-none flex-1" />
          <button class="text-center">
            <i class="far fa-paper-plane text-primary text-lg hover:bg-blue-50 mr-2 px-2 py-1.5 rounded-full w-10 h-10"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
