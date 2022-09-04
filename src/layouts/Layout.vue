<template>
    <component :is="layout" />
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import DefaultLayout from './DefaultLayout.vue';
import EmptyLayout from './EmptyLayout.vue';

export default {
    components: { DefaultLayout, EmptyLayout },
    setup() {
        const route = useRoute();
        const layout = computed(() => route.meta.layout || 'DefaultLayout');

        return { layout };
    },
};
</script>

<style></style>
