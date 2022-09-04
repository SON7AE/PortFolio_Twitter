<template>
    <div class="flex flex-col items-center space-y-4 mt-10">
        <i :class="`fab fa-twitter text-4xl text-primary ${loading ? 'animate-bounce' : ''}`"></i>
        <span class="text-2xl nickname">로그인</span>
        <input v-model="email" type="text" class="rounded w-96 px-4 py-3 border border-gray-300 focus:ring-2 focus:border-primary focus:outline-none" placeholder="이메일" />
        <input
            v-model="password"
            @keyup.enter="onLogin"
            type="password"
            class="rounded w-96 px-4 py-3 border border-gray-300 focus:ring-2 focus:border-primary focus:outline-none"
            placeholder="비밀번호"
        />

        <button v-if="loading" class="content w-96 rounded bg-light text-white py-3">로그인 중입니다.</button>
        <button v-else @click="onLogin" class="content w-96 rounded bg-primary text-white py-3 hover:bg-dark">로그인</button>

        <RouterLink to="/register">
            <button class="content text-primary">계정이 없으신가요? 회원가입 하기</button>
        </RouterLink>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { auth, USER_COLLECTION } from '../firebase';
import { useRouter } from 'vue-router';
import store from '../store';

export default {
    setup() {
        const email = ref('');
        const password = ref('');
        const loading = ref(false);
        const router = useRouter();

        const onLogin = async () => {
            if (!email.value || !password.value) {
                alert(' 이메일, 비밀번호를 모두 입력해주세요.');
            }
            try {
                loading.value = true;
                const { user } = await auth.signInWithEmailAndPassword(email.value, password.value);

                // GET USER INFO
                const doc = await USER_COLLECTION.doc(user.uid).get();
                store.commit('SET_USER', doc.data());

                // 뒤로가기 눌렀을 때, 로그인 페이지로 가는 것을 방지
                router.replace('/');
            } catch (error) {
                switch (error.code) {
                    case 'auth/invalid-email':
                        alert('잘못된 이메일 형식입니다.');
                        break;
                    case 'auth/wrong-password':
                        alert('비밀번호가 일치하지 않습니다.');
                        break;
                    case 'auth/user-not-found':
                        alert('등록되지 않은 이메일입니다.');
                        break;
                    default:
                        alert(error.message);
                        break;
                }
            } finally {
                loading.value = false;
            }
        };

        return { email, password, loading, onLogin };
    },
};
</script>

<style></style>
