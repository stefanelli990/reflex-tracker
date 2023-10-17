<template>
  <AppHeader />
  <AppBtn v-if="appBtnIsVisible" @click="startReact" caption="Click to start" />
  <p class="text-xl" v-else-if="!appBtnIsVisible && !appCircleContainerIsVisible">Get ready...</p>
  <AppCircleContainer v-else-if="appCircleContainerIsVisible" :flexClass="flexOption"/>
  <teleport to="body" v-if="modalIsVisible">
    <AppModal
      @start-again="startAgain"
      :reactionTime="clickTime"
      :category="categoryText"
    />
  </teleport>
</template>

<script>
import AppBtn from "./components/AppBtn.vue";
import AppHeader from "./components/AppHeader.vue";
import AppModal from "./components/AppModal.vue";
import AppCircleContainer from "./components/AppCircleContainer.vue";

export default {
  name: "App",
  components: { AppBtn, AppHeader, AppModal, AppCircleContainer },
  provide() {
    return {
      clickTimer: this.clickTimer
    }
  },
  data() {
    return {
      appCircleContainerIsVisible: false,
      appBtnIsVisible: true,
      justifyContentOptions: ['justify-start', 'justify-center','justify-end'],
      alignItemsOptions: ['items-start', 'items-center', 'items-end'],
      flexOption: [],
      startTime: null,
      clickTime: 0,
      modalIsVisible: false,
    };
  },
  methods: {
    startReact() {
      this.appBtnIsVisible = false;
      const randomJustifyContent =
        this.justifyContentOptions[
          Math.floor(Math.random() * this.justifyContentOptions.length)
        ];
      const randomAlignItems =
        this.alignItemsOptions[
          Math.floor(Math.random() * this.alignItemsOptions.length)
        ];

      this.flexOption.push(randomJustifyContent,randomAlignItems)
      
      setTimeout(() => {
        this.appCircleContainerIsVisible = true;
        this.startTimer();
      }, 4000);
    },
    startTimer() {
      this.startTime = setInterval(() => {
        this.clickTime += 10;
      }, 10);
    },
    clickTimer() {
      clearInterval(this.startTime);
      this.modalIsVisible = true;
      console.log(this.clickTime);
    },
    startAgain() {
      this.modalIsVisible = !this.modalIsVisible;
      this.startTime = null;
      this.clickTime = 0;
      this.appCircleContainerIsVisible = false;
      this.appBtnIsVisible = true;
      this.flexOption = []
    }
  },
  computed: {
    categoryText() {
      if (this.clickTime < 1000) {
        return "Wow, your reaction time is really quick! Keep practicing to get even faster!";
      } else if (this.clickTime >= 1000 && this.clickTime <= 2000) {
        return "You have a decent reaction time, but there's room for improvement. Keep practicing regularly!";
      } else {
        return "Your reaction time is on the slower side. No worries, practice regularly, and you'll see improvements!";
      }
    },
  },
};
</script>

