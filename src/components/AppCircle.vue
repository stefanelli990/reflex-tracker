<template>
    <div class="circle" @click="$emit('click-timer')"></div>
</template>

<script>
    export default {
        emits: ['click-timer']
    }
</script>

<style scoped>

</style>