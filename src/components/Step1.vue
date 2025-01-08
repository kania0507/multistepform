<template>
    <article class="step">
        <div class="step__mobile">
            <header class="step__header">
                <h2>Personal info</h2>
                <p>Please provide your name, email address, and phone number.</p>
            </header>
            <div class="form">
                <label class="medium" ref="name">
                    <span>Name</span>
                    <span class="error-text">Not correct | This field is required</span>
                    <input type="text" placeholder="e.g. Stephen King" v-model="user.name" @input="checkName()">
                </label>
                <label class="medium" ref="email">
                    <span>Email Address</span>
                    <span class="error-text">Not correct |  This field is required</span>
                    <input type="text" placeholder="e.g. stephanking@lorem.com" v-model="user.email" @input="checkEmail()">
                </label>
                <label class="medium" ref="phone">
                    <span>Phone Number</span>
                    <span class="error-text">Not correct | This field is required</span>
                    <input type="text" placeholder="e.g. +1 234 567 890" v-model="user.phone" @input="checkPhone()">
                </label>
            </div>
        </div>
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
            check: false,
            validated: false
        }
    },
    computed: {
        ...mapGetters(['getUser'])
    },
    mounted() {
        this.user.name = this.getUser.name;
        this.user.email = this.getUser.email;
        this.user.phone = this.getUser.phone;
    },
    methods: {
        validateName(name) {
            return String(name)
                   .match(/[^\d]/)
        },
        validateEmail(email) {
            return String(email)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )
        },
        validatePhone(phone) {
            return String(phone)
                .toLowerCase()
                .match(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/)
        },
        checkName() {
            this.validateName(this.user.name) && this.user.name.length > 2 ? this.$refs.name.classList.remove('error') : this.$refs.name.classList.add('error');
            if (this.user.name.length > 2 && this.validateEmail(this.user.email) && this.validatePhone(this.user.phone)) {
                this.emitData()
            }
        },
        checkEmail() {
            this.validateEmail(this.user.email) ? this.$refs.email.classList.remove('error') : this.$refs.email.classList.add('error');
            if (this.user.name.length > 2 && this.validateEmail(this.user.email) && this.validatePhone(this.user.phone)) {
                this.emitData()
            }
        },
        checkPhone() {
            this.validatePhone(this.user.phone) && this.user.phone.length >= 9 ? this.$refs.phone.classList.remove('error') : this.$refs.phone.classList.add('error');
            if (this.user.name.length > 2 && this.validateEmail(this.user.email) && this.validatePhone(this.user.phone)) {
                this.emitData()
            }
        },
        nextStep() {
            if (this.user.name.length > 2 && this.validateEmail(this.user.email) && this.validatePhone(this.user.phone)) {             
                this.$store.commit('setPersonalInfo', {
                    name: this.user.name,
                    email: this.user.email,
                    phone: this.user.phone
                })
                this.$store.commit('activeStepPlus');
            } else {
                this.checkName();
                this.checkEmail();
                this.checkPhone();
                this.check = 1;
            }
        },
        emitData () {
            this.$emit('user-completed', this.user);
        }
    }
}
</script>
<style scoped lang="scss">
@use '../assets/styles/breakpoint' as *;
@import "../assets/styles/all.scss";
.step {
    @include breakpoint(medium) {
        max-width: 90vw;
    }
    .step__header {
        margin-top: var(--space-s);
        margin-bottom: var(--space-l);
        p {
            color: var(--neutral-cool-gray);
        }
    }
    label {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-bottom: var(--space-s);
        color: var(--primary-marine-blue);
        font-size: 14px;

        input {
            outline: 0;
            height: 48px;
            width: 100%;
            margin-top: var(--space-2xs);;
            border: 1px solid var(--neutral-light-gray);
            border-radius: 8px;
            padding: 0 15px 4px;

            font-size: 17px;
            color: var(--primary-marine-blue);
            font-weight: var(--medium);
            letter-spacing: -0.03em;
            transition: .2s;

            &::placeholder {
                color: var(--neutral-text-gray);
                opacity: 1;
            }

            &:-ms-input-placeholder {
                color: var(--neutral-text-gray);
            }

            &::-ms-input-placeholder {
                color: var(--neutral-text-gray);
            }

            &:focus {
                border-color: var(--primary-marine-blue);
            }
        }
    }
    .error-text {
        // margin-left: auto;
        margin-left: var(--space-s);
        color: var(--primary-strawberry-red);
        font-size: 14px;
        font-weight: var(--bold);
        letter-spacing: 0.01em;
        opacity: 0;
        transition: .2s;
    }

    .error {

        .error-text {
            opacity: 1;
        }

        input {
            border-color: var(--primary-strawberry-red) !important;
        }
    }
}
</style>