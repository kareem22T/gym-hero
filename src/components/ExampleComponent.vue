<!-- ExampleComponent.vue -->
<template>
  <div>
    <p v-if="isAuthentication">Welcome, {{ username }}!</p>
    <button @click="login" style="color: #fff;">Login</button>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import useAuth from '@/composables/useAuth';

export default {
  name: 'ExampleComponent',
  setup() {
    const { username, isAuthentication, login, logout } = useAuth();

    const handleLogin = () => {
      login({
        username: 'John Doe',
        token: 'abcd1234',
        refreshToken: 'efgh5678',
        refreshTokenExpiration: '2024-12-31',
      });
    };

    return {
      username,
      isAuthentication,
      login: handleLogin,
      logout,
    };
  },
};
</script>
