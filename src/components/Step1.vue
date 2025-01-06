<template>
    <article class="step">
        <div class="step__mobile">
            <header class="step__header">
                <h2>Personal info</h2>
                <p>Please provide your name, email address, and phone number.</p>
            </header>
            <div class="form">
                <label ref="name">
                    <span>Name</span>
                    <span class="error-text">This field is requireds</span>
                    <input type="text" placeholder="e.g. Stephen King" v-model="name" @input="nameFofus">
                </label>
                <label ref="email">
                    <span>Email Address</span>
                    <span class="error-text">This field is required</span>
                    <input type="text" placeholder="e.g. stephanking@lorem.com" v-model="email" @input="emailFofus">
                </label>
                <label ref="phone">
                    <span>Phone Number</span>
                    <span class="error-text">This field is required</span>
                    <input type="text" placeholder="e.g. +1 234 567 890" v-model="phone" @input="phoneFofus">
                </label>
            </div>
        </div>
        <footer>
            <button class="btn" @click="nextStep">Next Step</button>
        </footer>
    </article>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: "Step1",
    data () {
        return {
            user: {
                name: '',
                email: '',
                phone: ''
            },
            check: false
        }
    },
    computed: {
        ...mapGetters(['getUser'])
    },
    mounted() {
        this.name = this.getUser.name;
        this.email = this.getUser.email;
        this.phone = this.getUser.phone;
    }
}
</script>
<style scoped lang="scss">
@import "../assets/styles/all.scss";
.step {
    padding: 0 var(--space-xl);
}
</style>