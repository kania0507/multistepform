<template>
    <div class="main-form">
        <StepNav />
        <section class="steps">
            <Step1 v-if="activeStep === 1" @user-completed="handleEmit" />
            <Step2 v-if="activeStep === 2" />
            <Step3 v-if="activeStep === 3" />
            <Step4 v-if="activeStep === 4" />
            <Step5 v-if="activeStep === 5" />
            <div class="buttons" :class="{'align-right': activeStep === 1}">
              <FormButton
                variant="secondary"
                v-if="activeStep > 1 && activeStep <= totalSteps"
                @click="handlePreviousStep"
              >Go back</FormButton>
              <FormButton
                type="submit"
                v-if="activeStep < (totalSteps - 1)"
                @click="handleNextStep"
              >Next step</FormButton>
              <FormButton
                variant="confirm"
                type="submit"
                v-if="activeStep === (totalSteps - 1)"
                @click="handleNextStep"
              >Confirm</FormButton>
          </div>
        </section>
    </div>
</template>

<script>
import StepNav from "./StepNav.vue";
import Step1 from "./Step1.vue";
import Step2 from "./Step2.vue";
import Step3 from "./Step3.vue";
import Step4 from "./Step4.vue";
import Step5 from "./Step5.vue";
import FormButton from './FormButton.vue'
import { mapGetters } from 'vuex';
export default {
    name: "MainForm",
    components: {
      StepNav,
      Step1,
      Step2,
      Step3,
      Step4,
      Step5,
      FormButton
    },
    data () {
        return {
          emitReceived: false,
          user: {}
        }
    },
    computed: {
        ...mapGetters({
          activeStep: 'getActiveStep',
          totalSteps: 'getTotalSteps'
      })
    },
    methods: {
      handlePreviousStep () {
        this.$store.commit('activeStepMinus');
      },
      handleEmit (obj) {
        if (!this.emitReceived) {
          this.emitReceived = true
          this.user = obj
        }
      },
      handleNextStep () {
        // validated
        if (this.emitReceived) {
          this.$store.commit('setUser', this.user)
          this.$store.commit('activeStepPlus')
        }
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
    height: 100vh;
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
  .steps {
    padding: 0 var(--space-xl);
    @include breakpoint(medium) {
      max-width: 90%;
      margin: -2rem auto;
      z-index: 2;
      background-color: var(--neutral-white);
      border-radius: var(--radius-h);
      padding-bottom: var(--space-xl);
    }
    .align-right {
      justify-content: end;
    }
  }
  .buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: var(--space-xl) 0;
    @include breakpoint(medium) {
      width: 100%;
      max-width: 100vw;
      position: absolute;
      bottom: 0;
      margin-left: -17%;
      padding: var(--space-s) var(--space-s);
      background-color: var(--neutral-white);
    }
  }
}

</style>