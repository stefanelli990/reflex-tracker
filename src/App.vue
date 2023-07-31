<template>
  <AppHeader />
  <!-- <AppContainer/> -->
  <button v-if="btnVisible" @click="startReact">Click to start</button>
  <p v-else-if="!btnVisible && !clickDivVisible">Get ready...</p>
  <div v-else-if="clickDivVisible" class="circle-wrapper" :style="flexOption">
    <AppCircle @click-timer="clickTimer" />
    <!-- <div class="circle" @click="clickTimer"></div> -->
  </div>
  <teleport to="body" v-if="isShownModal">
    <AppModal
      @startAgain="receiveEmit"
      :reactionTime="clickTime"
      :category="categoryText"
    />
  </teleport>
</template>

<script>
import AppCircle from "./components/AppCircle.vue";
import AppHeader from "./components/AppHeader.vue";
import AppModal from "./components/AppModal.vue";

export default {
  name: "App",
  components: { AppHeader, AppModal, AppCircle },
  data() {
    return {
      clickDivVisible: false,
      btnVisible: true,
      justifyContentOptions: ["flex-start", "center", "flex-end"],
      alignItemsOptions: ["flex-start", "center", "flex-end"],
      flexOption: {},
      startTime: null,
      clickTime: 0,
      isShownModal: false,
    };
  },
  methods: {
    startReact() {
      this.btnVisible = false;
      const randomJustifyContent =
        this.justifyContentOptions[
          Math.floor(Math.random() * this.justifyContentOptions.length)
        ];
      const randomAlignItems =
        this.alignItemsOptions[
          Math.floor(Math.random() * this.alignItemsOptions.length)
        ];

      console.log(randomJustifyContent, randomAlignItems);
      this.flexOption = {
        justifyContent: randomJustifyContent,
        alignItems: randomAlignItems,
      };
      setTimeout(() => {
        this.clickDivVisible = true;
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
      this.isShownModal = true;
      console.log(this.clickTime);
    },
    receiveEmit() {
      console.log("start again");
      this.isShownModal = !this.isShownModal;
      this.startTime = null;
      this.clickTime = 0;
      this.clickDivVisible = false;
      this.btnVisible = true;
    },
  },
  computed: {
    categoryText() {
      if (this.clickTime > 500 && this.clickTime < 1000) {
        return "Wow, your reaction time is really quick! Keep practicing to get even faster!";
      } else if (this.clickTime > 1000 && this.clickTime < 2000) {
        return "You have a decent reaction time, but there's room for improvement. Keep practicing regularly!";
      } else {
        return "Your reaction time is on the slower side. No worries, practice regularly, and you'll see improvements!";
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap");

#app {
  text-align: center;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

body {
  min-height: 100vh;
  background: linear-gradient(180deg, #300f8e 0%, #0e0036 100%);
  color: #fff;
}

p {
  font-size: 1.25rem;
  line-height: 130%;
}

button {
  padding: 1rem;
  cursor: pointer;
  background-color: #1da393;
  border: none;
  border-radius: 0.5rem;
  color: #fff;
}

.circle-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 234px);
  padding: 1rem;
}
.circle {
  background-color: #1da393;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  box-shadow: 0px 0px 1px 1px #0000001a;
  cursor: pointer;
  animation: pulse-animation 1s infinite;
}

@keyframes pulse-animation {
  0% {
    box-shadow: 0 0 0 0px rgb(29, 163, 147, 0.5);
  }
  100% {
    box-shadow: 0 0 0 40px rgb(29, 163, 147, 0);
  }
}
</style>
