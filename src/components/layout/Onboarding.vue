<template>
    <div class="onboarding_wrapper">
        <img src="./../../assets/onboarding.jpeg" alt="logo">
        <div class="card">
            <h1>Get started with Gym Hero</h1>
            <p>Set your goals and unlock a fitter you. Tell us about yourself, or sign in if you already have an account</p>
            <div class="btns">
                <router-link to="/login">Sign in</router-link>
                <router-link to="/register">Sign up</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'LoaderComponent',
  data() {
  },
}
</script>