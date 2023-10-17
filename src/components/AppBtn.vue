<template>
    <button class="bg-primaryColor text-white px-4 py-2 font-semibold rounded-md hover:opacity-90">
        {{ caption }}
    </button>
</template>

<script>

export default {
    props: ['caption']
}

</script>