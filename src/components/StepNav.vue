<template>
  <div class="sidebar">
    <nav class="nav">
      <div class="nav__step">nav temp</div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "StepNav",
  computed: {
    ...mapGetters(['activeStep'])
  }
  }
</script>

<style scoped lang="scss">
@import "../assets/styles/_variables.scss";
.sidebar {
  background: no-repeat url(../assets/images/bg-sidebar-desktop.svg);
  background-size: 100% 100%;
  width: 275px; // img size
  max-height: inherit;
  .nav {
    width: 100%;
    height: 100%;
    .nav__step {
    }
  }
}
</style>