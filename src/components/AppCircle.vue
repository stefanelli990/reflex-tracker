<template>
  <div class="bg-primaryColor h-[75px] w-[75px]  rounded-full cursor-pointer  animate-customPulse" @click="clickTimer"></div>
</template>

<script>
export default {
  inject: ["clickTimer"],
};
</script>
