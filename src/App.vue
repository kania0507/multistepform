<template>
  <div class="w-100 h-100 flex-centered">
    <MainForm/>
    <footer class="text-gray">&copy; AKC</footer>
  </div>
</template>

<script>
import MainForm from "./components/MainForm.vue";

export default {
  name: "App",
  components: {
    MainForm,
  },
};
</script>

<style lang="scss">
@use './assets/styles/breakpoint' as *;
@import "./assets/styles/all.scss";

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--neutral-magnolia);
  font-family: 'Ubuntu', sans-serif;
  font-size: 16px;
  @include breakpoint(medium) {
    justify-content: start;
  }
}
.flex-centered {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @include breakpoint(medium) {
    justify-content: start;
  }
}
.w-100 {
  width: 100%;
}
.h-100 {
  height: 100%;
}
.text-gray {
  color: var(--neutral-cool-gray);
}
</style>
