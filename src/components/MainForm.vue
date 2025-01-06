<template>
    <div class="main-form">
        <StepNav />
        <section class="steps">
            <Step1 v-if="activeStep === 1" />
        </section>
    </div>
</template>

<script>
import StepNav from "./StepNav.vue";
import Step1 from "./Step1.vue";
export default {
    name: "MainForm",
    components: {
      StepNav,
      Step1
    },
    data () {
        return {
            activeStep: 1
        }
    }
    
}
</script>

<style lang="scss">
@use '../assets/styles/breakpoint' as *;
@import "../assets/styles/all.scss";


.main-form {
  position: relative;
  display: grid;
  grid-template-columns: 275px auto;
  inline-size: min(100%, 975px);
  min-block-size: 600px;
  margin: var(--space-s);
  padding: var(--space-s) var(--space-s) var(--space-s) var(--space-s);
  background-color: var(--neutral-white);
  border-radius: var(--radius-h);
  box-shadow: var(--elevation-3);

  @include breakpoint(medium) {
    inline-size: 100%;
    min-block-size: 75vh;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    background-color: transparent;
    border-radius: 0;
    box-shadow: none;
  }
}

</style>