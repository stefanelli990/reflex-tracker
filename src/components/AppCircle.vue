<template>
    <div class="bg-primaryColor h-[100px] w-[100px] rounded-full cursor-pointer" @click="$emit('click-timer')"></div>
</template>

<script>
    export default {
        emits: ['click-timer']
    }
</script>
