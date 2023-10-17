<template>
  <div class="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-start  bg-black/50 pt-20">
    <div class="bg-white text-black max-w-sm m-4 rounded-xl px-8 py-12 space-y-4">
      <h2 class="text-3xl font-semibold">
        Your reaction time is <br> <span class="text-primaryColor">{{ reactionTime / 1000 }}</span> seconds
      </h2>
      <p>{{ category }}</p>
      <AppBtn caption="Try again" @click="$emit('start-again')"/>
    </div>
  </div>
</template>

<script>
import AppBtn from './AppBtn.vue'

export default {
  components: {
    AppBtn
  },
  props: ["reactionTime", "category"],
  emits: ["start-again"],
};
</script>
