<template>
    <div class="flex justify-center items-center min-h-screen p-4" :class="flexClass">
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