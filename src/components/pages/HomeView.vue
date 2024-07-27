<template>
    <div class="home_wrapper">
        <div class="profile">
            <router-link to="/profile" v-if="isAuthentication">
                <img src="./../../assets/profile.jpeg" />
                Welcome {{ username }}
            </router-link>
            <router-link to="/login" v-if="!isAuthentication">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>
                Sign In
            </router-link>
        </div>
        <form action="" class="search">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5 18.5C15.366 18.5 18.5 15.366 18.5 11.5C18.5 7.63401 15.366 4.5 11.5 4.5C7.63401 4.5 4.5 7.63401 4.5 11.5C4.5 15.366 7.63401 18.5 11.5 18.5Z" stroke="#C4C4C4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.5 16.5L19.5 19.5" stroke="#C4C4C4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <input type="text" name="Search" id="Search" placeholder="Search" v-model="search" @input="handleSearch()">
        </form>
        <div class="workout-head">
            <h1>Workouts</h1>
            <router-link to="/bmi-calculator">BMI Calculator</router-link>
        </div>

        <div class="workouts-body">
            <router-link v-for="workout in ((search && workouts_search) ? workouts_search : workouts)" :to="`/workout/${workout.id}`" class="program-card" :key="workout.id">
                <img :src="'data:image/png;base64,' + workout.photo" alt="">
                <h1>{{workout.name}}</h1>
                <div class="features">
                    <span>
                        {{ workout.exercises.length }}
                        <h2>Workouts</h2>
                    </span>
                    <span>
                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.615 1.66267C2.12833 2.282 1.83333 3.128 1.83333 4.01167C1.83333 4.524 1.92133 5.01467 2.07667 5.48167H4.97167L6.101 3.47367L6.80667 5.94367L7.67 4.83333H9.83333V5.5H7.99667L6.52667 7.39L5.899 5.193L5.36167 6.148H0.5V5.48133H1.37867C1.23892 5.00381 1.16754 4.50889 1.16667 4.01133C1.16667 2.98633 1.507 1.99333 2.09067 1.25067C2.676 0.506 3.51867 0 4.51067 0C5.67833 0 6.56633 0.654333 7.16667 1.578C7.76667 0.654667 8.655 0 9.823 0C10.8147 0 11.6577 0.506 12.243 1.251C12.826 1.99333 13.1667 2.98667 13.1667 4.01167C13.1667 6.20567 11.652 8.038 10.2193 9.28867C9.3478 10.0439 8.39873 10.7047 7.388 11.26L7.33767 11.2867L7.32433 11.294L7.32033 11.2957L7.31933 11.2963C7.31933 11.2963 7.31867 11.2967 7.16667 11L7.022 11.3L7.02 11.2993L7.01533 11.297L6.99867 11.2887L6.936 11.2573C6.85905 11.218 6.7826 11.1776 6.70667 11.1363C6.43582 10.989 6.16969 10.8331 5.90867 10.669C5.25833 10.261 4.40533 9.66 3.60267 8.89133C3.17467 8.48133 2.75933 8.02133 2.396 7.51533C2.36902 7.47988 2.34943 7.43937 2.33838 7.39622C2.32732 7.35306 2.32503 7.30812 2.33164 7.26406C2.33824 7.22001 2.35362 7.17772 2.37684 7.1397C2.40007 7.10169 2.43069 7.06871 2.46687 7.04273C2.50306 7.01675 2.54409 6.99828 2.58754 6.98843C2.63099 6.97857 2.67597 6.97752 2.71983 6.98535C2.76369 6.99317 2.80553 7.00971 2.84289 7.03398C2.88025 7.05826 2.91236 7.08977 2.93733 7.12667C3.27233 7.59333 3.65933 8.02233 4.064 8.41C4.82367 9.138 5.63733 9.71167 6.263 10.1043C6.55625 10.2886 6.85623 10.462 7.16233 10.624L7.24633 10.577C8.14827 10.0656 8.99721 9.46584 9.78067 8.78667C11.1813 7.56367 12.5 5.90167 12.5 4.01133C12.5 3.128 12.205 2.28167 11.7187 1.66233C11.2333 1.04567 10.571 0.666667 9.823 0.666667C8.78867 0.666667 7.98633 1.34 7.466 2.40067L7.16667 3.01L6.86733 2.40067C6.347 1.34 5.54467 0.666667 4.51067 0.666667C3.76233 0.666667 3.1 1.04533 2.615 1.66267ZM7.16667 11L7.022 11.3L7.17133 11.3723L7.319 11.2967L7.16667 11Z" fill="#EBFC64"/>
                        </svg>
                        <h2>cardio</h2>
                    </span>
                    <span>
                        <svg width="17" height="8" viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.15461 0.363647H3.11825C3.00252 0.363647 2.89153 0.409621 2.80969 0.491455C2.72786 0.573289 2.68188 0.68428 2.68188 0.800011V7.20001C2.68188 7.25732 2.69317 7.31406 2.7151 7.367C2.73703 7.41994 2.76917 7.46805 2.80969 7.50857C2.85021 7.54909 2.89832 7.58123 2.95126 7.60316C3.0042 7.62509 3.06094 7.63637 3.11825 7.63637H5.15461C5.21192 7.63637 5.26866 7.62509 5.3216 7.60316C5.37454 7.58123 5.42265 7.54909 5.46317 7.50857C5.50369 7.46805 5.53583 7.41994 5.55776 7.367C5.57969 7.31406 5.59098 7.25732 5.59098 7.20001V0.800011C5.59098 0.68428 5.545 0.573289 5.46317 0.491455C5.38133 0.409621 5.27034 0.363647 5.15461 0.363647ZM13.8819 0.363647H11.8455C11.7298 0.363647 11.6188 0.409621 11.537 0.491455C11.4551 0.573289 11.4092 0.68428 11.4092 0.800011V7.20001C11.4092 7.25732 11.4204 7.31406 11.4424 7.367C11.4643 7.41994 11.4964 7.46805 11.537 7.50857C11.5775 7.54909 11.6256 7.58123 11.6785 7.60316C11.7315 7.62509 11.7882 7.63637 11.8455 7.63637H13.8819C13.9392 7.63637 13.9959 7.62509 14.0489 7.60316C14.1018 7.58123 14.1499 7.54909 14.1904 7.50857C14.231 7.46805 14.2631 7.41994 14.285 7.367C14.307 7.31406 14.3182 7.25732 14.3182 7.20001V0.800011C14.3182 0.68428 14.2723 0.573289 14.1904 0.491455C14.1086 0.409621 13.9976 0.363647 13.8819 0.363647Z" stroke="#EBFC64" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.59091 3.99999H11.4091M0.5 5.74545V2.25454C0.5 2.13881 0.545974 2.02782 0.627808 1.94598C0.709642 1.86415 0.820633 1.81818 0.936364 1.81818H2.24545C2.36119 1.81818 2.47218 1.86415 2.55401 1.94598C2.63584 2.02782 2.68182 2.13881 2.68182 2.25454V5.74545C2.68182 5.86118 2.63584 5.97217 2.55401 6.05401C2.47218 6.13584 2.36119 6.18181 2.24545 6.18181H0.936364C0.820633 6.18181 0.709642 6.13584 0.627808 6.05401C0.545974 5.97217 0.5 5.86118 0.5 5.74545ZM16.5 5.74545V2.25454C16.5 2.13881 16.454 2.02782 16.3722 1.94598C16.2904 1.86415 16.1794 1.81818 16.0636 1.81818H14.7545C14.6388 1.81818 14.5278 1.86415 14.446 1.94598C14.3642 2.02782 14.3182 2.13881 14.3182 2.25454V5.74545C14.3182 5.86118 14.3642 5.97217 14.446 6.05401C14.5278 6.13584 14.6388 6.18181 14.7545 6.18181H16.0636C16.1794 6.18181 16.2904 6.13584 16.3722 6.05401C16.454 5.97217 16.5 5.86118 16.5 5.74545Z" stroke="#EBFC64" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <h2>weights</h2>
                    </span>
                </div>
            </router-link>
        </div>
        <NavBar />
    </div>
</template>

<script>
import NavBar from './../layout/NavBar'
import instance from './../../api'
import useAuth from '@/composables/useAuth';

export default {
  name: 'HomeView',
  components: {
    NavBar
  },
  data() {
    return {
        workouts: [],
        search: "",
        workouts_search: []
    }
  },
  methods: {
    async getWorkouts() {
        try {
            const response = await instance.get('/workout');

            this.workouts = response.data;
            console.log('Response data:', response.data);
        } catch (error) {
            if (error.response) {
                console.log('Error response data:', error.response.data);
                console.log('Error response status:', error.response.status);
                console.log('Error response headers:', error.response.headers);
            } else {
                console.log('Error message:', error.message);
            }
        }
    },
    async handleSearch() {
        try {
            const response = await instance.get('/workout/search?name=' + this.search);

            this.workouts_search = response.data;
            console.log('Response data:', response.data);
        } catch (error) {
            if (error.response) {
                console.log('Error response data:', error.response.data);
                console.log('Error response status:', error.response.status);
                console.log('Error response headers:', error.response.headers);
            } else {
                console.log('Error message:', error.message);
            }
        }
    }
  },
  setup() {
    const { username, isAuthentication } = useAuth();

    return {
      username,
      isAuthentication,
    };
  },
  mounted() {
    this.getWorkouts()
  }
}
</script>