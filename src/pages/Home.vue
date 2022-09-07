<template>
    <!-- MAIN PART -->
    <div class="flex-1 border-r border-color overflow-y-auto">
        <div class="flex flex-col">
            <!-- PAGE TITLE -->
            <div class="name border-b border-color p-3 font-bold text-lg">홈</div>
            <!-- TWEETING SECTION -->
            <div class="flex px-3 py-3 border-b-8 border-color">
                <img :src="currentUser.profile_image_url" alt="" class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer" />
                <div class="ml-2 flex-1 flex flex-col">
                    <textarea v-model="tweetBody" placeholder="무슨 일이 일어나고 있나요?" class="w-full text-lg font-bold focus:outline-none mb-3 resize-none"></textarea>
                    <div class="text-right">
                        <button v-if="!tweetBody.length" class="bg-light text-sm font-bold text-white px-4 py-1 rounded-full name">Tweet</button>
                        <button v-else @click="onAddTweet()" class="bg-primary hover:bg-dark text-sm font-bold text-white px-4 py-1 rounded-full name">Tweet</button>
                    </div>
                </div>
            </div>
            <!-- TWEETS -->
            <Tweet v-for="tweet in 5" :key="tweet" :currentUser="currentUser" />
        </div>
    </div>
    <!-- TREND PART -->
    <Trends />
</template>

<script>
import Trends from '../components/Trends.vue';
import Tweet from '../components/Tweet.vue';
import { ref, computed } from 'vue';
import store from '../store';
import { TWEET_COLLECTION } from '../firebase';

export default {
    components: {
        Trends,
        Tweet,
    },
    setup() {
        const tweetBody = ref('');
        const currentUser = computed(() => store.state.user);

        const onAddTweet = async () => {
            try {
                const doc = TWEET_COLLECTION.doc();
                await doc.set({
                    id: doc.id,
                    tweet_body: tweetBody.value,
                    uid: currentUser.value.uid,
                    created_at: Date.now(),
                    num_comments: 0,
                    num_retweets: 0,
                    num_likes: 0,
                });
                tweetBody.value = '';
            } catch (error) {
                console.log('on add tweet error on homepage:', error);
            }
        };

        return { tweetBody, currentUser, onAddTweet };
    },
};
</script>

<style></style>
