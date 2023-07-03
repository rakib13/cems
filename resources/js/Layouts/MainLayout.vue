<template>
    <Link href="/">Main Page</Link> &nbsp;
    <Link href="/hello">Show Page</Link> &nbsp;
    <Link href="/listing">Listing Page</Link>
    <!-- <div>The page with time {{ timer }}</div> -->
    <div v-if="page.props.flash.success" class="success">
        {{ page.props.flash.success }}
    </div>
    <slot>
        default
    </slot>
</template>

<script setup>
import { Link, usePage } from '@inertiajs/vue3';

// page.props.flash.success
const page = usePage()
// import { ref } from 'vue';

// const timer = ref(0);
// setInterval(()=> timer.value++, 1000);
</script>
<style scoped>
    .success{
        background-color: greenyellow;
        color: black;
    }
</style>