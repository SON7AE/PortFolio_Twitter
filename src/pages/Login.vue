<template>
  <div class="flex flex-col items-center space-y-4 mt-10">
    <i :class="`fab fa-twitter text-4xl text-primary ${loading ? 'animate-bounce' : ''}`"></i>
    <span class="text-2xl nickname">로그인</span>
    <input v-model="email" type="text" class="rounded w-96 px-4 py-3 border border-gray-300 focus:ring-2 focus:border-primary focus:outline-none" placeholder="이메일" />
    <input v-model="password" type="text" class="rounded w-96 px-4 py-3 border border-gray-300 focus:ring-2 focus:border-primary focus:outline-none" placeholder="비밀번호" />
    <button @click="onLogin" class="content w-96 rounded bg-primary text-white py-4 hover:bg-dark">회원가입</button>
    <RouterLink to="/register">
      <button class="content text-primary">계정이 없으신가요? 회원가입 하기</button>
    </RouterLink>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const loading = ref(false);

    const onLogin = () => {
      console.log(username.value);
    };

    return { email, password, loading, onLogin };
  },
};
</script>

<style></style>
