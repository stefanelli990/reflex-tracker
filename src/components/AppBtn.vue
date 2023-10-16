<template>
    <button class="bg-primaryColor px-4 py-2 rounded-md hover:opacity-90" @click-timer="clickTimer">
        {{ caption }}
    </button>
</template>

<script>

export default {
    props: ['caption']
}

</script>