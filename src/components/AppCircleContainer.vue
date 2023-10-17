<template>
    <div class="flex h-[calc(100vh-216px)] p-4" :class="flexClass">
        <AppCircle/>
    </div>
</template>

<script>
import AppCircle from '../components/AppCircle.vue';

export default {
    components: {
        AppCircle
    },
    props: ['flexClass'] 
}

</script>