<template>
  <button
    :class="variant"
    :type="type"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "FormButton",
  props: {
    type: {
      type: String,
      required: true,
      default: 'button'
    },
    variant: {
      type: String,
      required: false,
      default: 'primary'
    }
  }
}
</script>



<style lang="scss" scoped>
@import "../assets/styles/all.scss";
button {
  padding: var(--space-s) var(--space-m);
  font-weight: bold;
  border-color: var(--primary-marine-blue);
  border-radius: var(--radius-m);
  border-width: 2px;
  text-decoration: none;
  text-underline-offset: 8px;
  text-decoration-color: transparent;
  transition: all var(--animation-speed-fast) var(--cubic-bezier);

  &:is(:hover, :focus-visible) {
    text-underline-offset: 2px;
    text-decoration-color: currentColor;
  }

  &.primary {
    color: var(--neutral-white);
    background-color: var(--primary-marine-blue);

    &:is(:hover, :focus-visible) {
      box-shadow: 0 4px 4px var(--neutral-light-gray);
    }
  }

  &.secondary {
    color: var(--neutral-cool-gray);
    background-color: var(--neutral-white);
    border: 0;

    &:is(:hover, :focus-visible) {
      color: var(--primary-marine-blue);
    }
  }

  &.tertiary {
    color: var(--neutral-white);
    background-color: var(--error-color-dark);
    border-color: var(--error-color-dark);

    &:is(:hover, :focus-visible) {
      box-shadow: 0 2px 2px var(--neutral-light-gray);
    }
  }
  &.confirm {
    color: var(--neutral-white);
    background-color: var(--primary-purplish-blue);
    border-color: var(--primary-purplish-blue);

    &:is(:hover, :focus-visible) {
      box-shadow: 0 2px 2px var(--primary-pastel-blue);
    }
  }
}
</style>