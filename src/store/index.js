import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
    state() {
        return {
            user: null,
        };
    },
    mutations: {
        SET_USER: (state, payload) => {
            state.user = payload;
        },
    },
    plugins: [createPersistedState()],
});

export default store;
