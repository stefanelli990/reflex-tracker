<template>
  <div class="modal-backdrop">
    <div class="modal">
      <h2>
        Your reaction time is <span>{{ reactionTime }}</span> ms
      </h2>
      <p>{{ category }}</p>
      <button @click="$emit('startAgain')">Try Again</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["reactionTime", "category"],
  emits: ["startAgain"],
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1rem;
}

.modal {
  background-color: #fff;
  color: #292929;
  max-width: 450px;
  border-radius: 1rem;
  margin: 10vh auto 0;
  padding: 3rem 2rem;
  text-align: center;
}

span {
  color: #1da393;
}

p {
  margin: 2rem 0;
}
</style>
