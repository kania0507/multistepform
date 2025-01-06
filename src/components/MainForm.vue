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
@import "../assets/styles/_variables.scss";

.main-form {
    width: 60%;
    min-height: 560px;
    display: flex;
    background-color: $white;
    border-radius: 1rem;
    padding: 1rem;
    @media(max-width: 991px) {
      max-width: 100%;
      width: 100%;
      height: auto;
      flex-direction: column;
      padding: 0;
      background-color: transparent;
    }

    .steps {
        position: relative;
        width: calc(100% - 275px);
        padding: 2rem 0.5rem 0 1rem;
    }
}

</style>