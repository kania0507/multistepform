<template>
  <div class="step-tracker">
    <ol>
      <li
        v-for="(step, i) in steps"
        :key="step.id"
        :class="{'current': i === activeStep - 1}">
        <div>
          <span>Step {{ step.id }}</span>
          <span class="font-bold">{{ step.name }}</span>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "StepNav",
  data () {
    return {
      steps: [
        { id: 1, name: 'Your info' },
        { id: 2, name: 'Select plan' },
        { id: 3, name: 'Add-ons' },
        { id: 4, name: 'Summary' }
      ]
    }
  },
  computed: {
      ...mapGetters({
        activeStep: 'getActiveStep',
        totalSteps: 'getTotalSteps'
    })
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/breakpoint' as *;
@import "../assets/styles/all.scss";

.step-tracker {
  padding: var(--space-l) var(--space-s);
  color: var(--neutral-white);
  background-color: var(--primary-purplish-blue);
  background-image: url('./../assets/images/bg-sidebar-desktop.svg');
  background-size: cover;
  border-radius: var(--radius-m);

  @include breakpoint(medium) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    inset-block-start: 0;
    inset-inline: 0;
    block-size: var(--step-tracker-offset);
    background-image: url('./../assets/images/bg-sidebar-mobile.svg');
    border-radius: 0;
    z-index: 0;
    padding: var(--space-xl) var(--space-s);
  }
}

ol {
  display: flex;
  flex-direction: column;
  gap: var(--space-m);

  @include breakpoint(medium) {
    flex-direction: row;
    gap: var(--space-2xs);
  }
}

li {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  text-transform: uppercase;
  counter-increment: step;

  &::before {
    content: counter(step);
    display: grid;
    place-items: center;
    inline-size: 35px;
    block-size: 35px;
    font-size: var(--font-size--2);
    font-weight: bold;
    border: 1px solid var(--neutral-white);
    border-radius: 50%;
  }

  &.current {
    &::before {
      color: var(--primary-marine-blue);
      background-color: var(--primary-pastel-blue);
      border-color: var(--primary-pastel-blue);
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: var(--space-3xs);

    @include breakpoint(medium) {
      span {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
      }
    }
  }

  span:first-of-type {
    font-size: var(--font-size--2);
    line-height: var(--font-size--1);
  }

  span:last-of-type {
    font-size: var(--font-size--1);
    line-height: var(--font-size-0);
  }
}
</style>
