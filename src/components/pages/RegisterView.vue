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
        <form @submit.prevent="login()">
            <input type="text" name="username" id="username" placeholder="Username" v-model="username">
            <input type="password" name="username" id="username" placeholder="Password" v-model="password">
            <input type="password" name="confirm" id="username" placeholder="Confirm password" v-model="confirmPassword">
            <button class="submit">Sign up</button>
        </form>
    </div>
</template>

<script>
import useAuth from '@/composables/useAuth';
import instance from '@/api';
import 'vue-toast-notification/dist/theme-sugar.css';
import { useToast } from 'vue-toast-notification';
import { useRouter } from 'vue-router';
import { ref } from 'vue';


export default {
  name: 'RegisterView',
  methods: {
    navigateToHome() {
      this.$router.push('/home');
    }
  },
  setup() {
    const { access_token, isAuthentication, login, logout } = useAuth();
    const username = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const router = useRouter();
    const $toast = useToast();

    const handleLogin = async () => {
      if (!username.value) {
        $toast.error("Please enter your username");
      } else if (!password.value) {
        $toast.error("Please enter your password");
      } else if (!confirmPassword.value) {
        $toast.error("Pleas enter you password confirmation")
      } else if (confirmPassword.value != password.value) {
        $toast.error("Passwords do not match");
      } else {
        try {
          const response = await instance.post('/auth/register', {
            username: username.value,
            password: password.value,
            confirmPassword: confirmPassword.value,
          });
  
          $toast.success('Successfully Register');
  
          if(response.data.access_token) {
            login({
              access_token: response.data.access_token,
              username: username.value
            });
    
            setTimeout(() => {
              router.push('/home');
            }, 500);
          } else {
            $toast.error('Failed to log in');
          }
  
          console.log('Response data:', response.data);
        } catch (error) {
          $toast.error('Failed to register');
  
          if (error.response) {
            console.log('Error response data:', error.response.data);
            console.log('Error response status:', error.response.status);
            console.log('Error response headers:', error.response.headers);
          } else {
            console.log('Error message:', error.message);
          }
        }
      }
    };

    return {
      access_token,
      isAuthentication,
      login: handleLogin,
      logout,
      username,
      password,
      confirmPassword,
    };
  },

}
</script>