<template>
    <!-- <div>The page with time {{ timer }}</div> -->
    <header class="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 dark:text-white w-full">
        <div class="container mx-auto">
            <nav class="p-4 flex items-center justify-between">
                <div class="text-lg font-medium">
                    <Link :href="route('listing.index')">Listing</Link>
                </div>
                <div class="text-xl text-indigo-600 dark:text-indogo-200 font-bold text-center">
                    <Link :href="route('listing.index')">CEMS</Link>
                </div>
                <div>
                    <Link :href="route('listing.create')"
                        class="bg-indigo-600 hover:bg-indigo-400 text-white font-medium p-2 rounded-md">+ New Listing</Link>
                </div>
            </nav>
        </div>

    </header>
    <main class="container mx-auto p-4">
        <div v-if="flashMessage" class="mb-4 border rounded-md shadow-sm border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900 p-2 dark:text-white">
            {{ flashMessage }}
        </div>
        <slot>
            default
        </slot>
    </main>
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