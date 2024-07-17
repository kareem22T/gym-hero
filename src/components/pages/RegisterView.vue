<template>
    <div class="login_wrapper">
        <img src="./../../assets/register.jpeg" alt="gym-img">
        <div class="head">
            <router-link to="/home">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 17V7C21 4.79086 19.2091 3 17 3L7 3C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21H17C19.2091 21 21 19.2091 21 17Z" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.5 15L10.5 12L13.5 9" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </router-link>
            <h1>Sign up</h1>
        </div>
        <form action="" @submit.prevent="navigateToHome()">
            <input type="text" name="username" id="username" placeholder="Username">
            <input type="text" name="username" id="username" placeholder="Password">
            <input type="text" name="confirm" id="username" placeholder="Confirm password">
            <button class="submit">Sign up</button>
        </form>
    </div>
</template>

<script>
export default {
  name: 'RegisterView',
  methods: {
    navigateToHome() {
      this.$router.push('/home');
    }
  }
}
</script>