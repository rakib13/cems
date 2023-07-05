<template>
    <Link href="/listing">Listing</Link> &nbsp;
    <Link href="/listing/create">New Listing</Link>
    <!-- <div>The page with time {{ timer }}</div> -->
    <header class="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">

    </header>

    <div v-if="flashMessage" class="success">
        {{ flashMessage }}
    </div>
    <slot>
        default
    </slot>
</template>

<script setup>
import { computed } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';

// page.props.flash.success
const page = usePage()
const flashMessage = computed(
    () => page.props.flash.success
);
// import { ref } from 'vue';

// const timer = ref(0);
// setInterval(()=> timer.value++, 1000);
</script>