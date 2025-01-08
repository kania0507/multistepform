<template>
  <article class="step">
    <div class="step__mobile">
      <header class="step__header">
        <h2>Select your plan</h2>
        <p class="description">You have the option of monthly or yearly billing.</p>
      </header>
      <div class="form">
        <div class="radios">
          <label class="custom-radio" v-for="(item, index) in planInfo.items" :key="index"
            :class="{ 'active' : item.title===plan}">
            <input type="radio" :value="item.title" v-model="plan">
            <img :src="'/img/' + item.img" alt="" width="40" height="40">
            <div>
              <span class="title">{{ item.title }}</span>
              <div v-if="planInfo.choice==0">
                <span class="price">${{ item.month }}/mo</span>
              </div>
              <div v-if="planInfo.choice==1">
                <span class="price">${{ item.year }}/yr</span>
              </div>
            </div>
          </label>
        </div>
        <label class="switch-price">
          <span :class="{ 'active' : planInfo.choice==0}">Monthly</span>
          <input type="checkbox" true-value="1" false-value="0" v-model="planInfo.choice">
          <span class="slider"></span>
          <span :class="{ 'active' : planInfo.choice==1}">Yearly</span>
        </label>
      </div>
    </div>
  </article>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: "Step2",
    data() {
      return {
        plan: 'Arcade',
      }
    },
    methods: {
      nextStep() {
        if (this.plan !== '') {
          this.$store.commit('setPlan', {
            choice: this.planInfo.choice,
            choicePlan: this.plan
          })
          this.$store.commit('activeStepPlus');
        }
      },
      prevStep() {
        this.$store.commit('activeStepMinus');
      }
    },
    computed: {
      ...mapGetters({
        'planInfo': 'getPlan'
      })
    }
  };
</script>

<style scoped lang="scss">
 @import "../assets/styles/all.scss";

 .step__header {
  margin-top: var(--space-s);
  margin-bottom: var(--space-l);
 }

  .radios {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 30px;
  }

  .custom-radio {
    min-height: 160px;
    width: calc(calc(100% - 40px) / 3);
    display: flex;
    flex-direction: column;
    padding: 15px;
    border: 1px solid var(--neutral-light-gray);
    border-radius: 10px;
    cursor: pointer;

    &.active {
      border-color: var(--primary-marine-blue);
      background-color: var(--neutral-alabaster);
    }

    input {
      height: 0;
      width: 0;
      visibility: hidden;
    }

    img {
      margin-bottom: 42px;
    }

    .title {
      display: inline-flex;
      margin-bottom: 2px;
    }

    .price {
      display: inline-flex;
      color: var(--neutral-cool-gray);
      font-size: 14px;
    }

    .info {
      display: inline-flex;
      color: var(--primary-marine-blue);
      font-size: 12px;
      margin-top: 9px;
    }
  }

  .switch-price {
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--neutral-alabaster);
    border-radius: 0.625rem;

    input {
      height: 0;
      width: 0;
      visibility: hidden;

      &:checked+.slider:before {
        -webkit-transform: translateX(17px);
        -ms-transform: translateX(17px);
        transform: translateX(17px);
      }
    }

    .slider {
      position: relative;
      display: inline-block;
      width: 38px;
      height: 20px;
      background-color: var(--primary-marine-blue);
      border-radius: 1.25rem;
      transition: .4s;
      margin: 0 24px;
      cursor: pointer;

      &:before {
        position: absolute;
        content: "";
        height: 12px;
        width: 12px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        border-radius: 100%;
        -webkit-transition: .4s;
        transition: .4s;
      }
    }

    span {
      font-size: 15px;
      color: var(--neutral-cool-gray);
      font-weight: 500;
      letter-spacing: -0.02em;

      &.active {
        color: var(--primary-marine-blue);
      }
    }
  }

  @media(max-width: 991px) {
    .radios {
      flex-direction: column;
      gap: 10px;
      margin-bottom: 23px;
    }

    .custom-radio {
      min-height: 79px;
      width: 100%;
      flex-direction: row;
      padding: 15px 10px;

      img {
        margin-bottom: 0;
        margin-right: 15px;
      }
    }
  }
</style>