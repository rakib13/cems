<template>
    <span>
        {{ listing.id }}. {{ listing.city }}, {{ listing.area }},
        {{ listing.street }}, {{ listing.streety_nr }}
    </span>
</template>
 
<script setup>
defineProps({
    listing: Object
})
</script>