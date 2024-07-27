<template>
    <div class="profile_wrapper">
        <div class="page-head">
            <router-link to="/home">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 17V7C21 4.79086 19.2091 3 17 3L7 3C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21H17C19.2091 21 21 19.2091 21 17Z" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13.5 15L10.5 12L13.5 9" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </router-link>
            <h1>Profile</h1>
        </div>
        <form action="">
            <label for="profile_img">
                <div class="img">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.2001 13.84H12.8001C13.6838 13.84 14.4001 13.1237 14.4001 12.24V5.68003C14.4001 4.79638 13.6838 4.08003 12.8001 4.08003H11.2001L10.0801 2.16003H5.9201L4.8001 4.08003H3.2001C2.31644 4.08003 1.6001 4.79638 1.6001 5.68003V12.24C1.6001 13.1237 2.31644 13.84 3.2001 13.84Z" fill="url(#paint0_linear_11_1028)"/>
                        <path d="M10.4001 8.56003C10.4001 9.88552 9.32558 10.96 8.0001 10.96C6.67461 10.96 5.6001 9.88552 5.6001 8.56003C5.6001 7.23455 6.67461 6.16003 8.0001 6.16003C9.32558 6.16003 10.4001 7.23455 10.4001 8.56003Z" fill="url(#paint1_linear_11_1028)"/>
                        <path d="M4.8001 4.08003V4.58003C4.97793 4.58003 5.14238 4.48558 5.23199 4.33197L4.8001 4.08003ZM5.9201 2.16003V1.66003C5.74226 1.66003 5.57781 1.75449 5.48821 1.9081L5.9201 2.16003ZM10.0801 2.16003L10.512 1.9081C10.4224 1.75449 10.2579 1.66003 10.0801 1.66003V2.16003ZM11.2001 4.08003L10.7682 4.33197C10.8578 4.48558 11.0223 4.58003 11.2001 4.58003V4.08003ZM2.1001 12.24V5.68003H1.1001V12.24H2.1001ZM3.2001 4.58003H4.8001V3.58003H3.2001V4.58003ZM5.23199 4.33197L6.35199 2.41197L5.48821 1.9081L4.36821 3.8281L5.23199 4.33197ZM5.9201 2.66003H10.0801V1.66003H5.9201V2.66003ZM9.64821 2.41197L10.7682 4.33197L11.632 3.8281L10.512 1.9081L9.64821 2.41197ZM11.2001 4.58003H12.8001V3.58003H11.2001V4.58003ZM13.9001 5.68003V12.24H14.9001V5.68003H13.9001ZM13.9001 12.24C13.9001 12.8475 13.4076 13.34 12.8001 13.34V14.34C13.9599 14.34 14.9001 13.3998 14.9001 12.24H13.9001ZM12.8001 4.58003C13.4076 4.58003 13.9001 5.07252 13.9001 5.68003H14.9001C14.9001 4.52024 13.9599 3.58003 12.8001 3.58003V4.58003ZM2.1001 5.68003C2.1001 5.07252 2.59258 4.58003 3.2001 4.58003V3.58003C2.0403 3.58003 1.1001 4.52023 1.1001 5.68003H2.1001ZM3.2001 13.34C2.59258 13.34 2.1001 12.8475 2.1001 12.24H1.1001C1.1001 13.3998 2.0403 14.34 3.2001 14.34V13.34ZM9.9001 8.56003C9.9001 9.60937 9.04944 10.46 8.0001 10.46V11.46C9.60172 11.46 10.9001 10.1617 10.9001 8.56003H9.9001ZM8.0001 10.46C6.95076 10.46 6.1001 9.60937 6.1001 8.56003H5.1001C5.1001 10.1617 6.39847 11.46 8.0001 11.46V10.46ZM6.1001 8.56003C6.1001 7.51069 6.95076 6.66003 8.0001 6.66003V5.66003C6.39847 5.66003 5.1001 6.95841 5.1001 8.56003H6.1001ZM8.0001 6.66003C9.04944 6.66003 9.9001 7.51069 9.9001 8.56003H10.9001C10.9001 6.95841 9.60172 5.66003 8.0001 5.66003V6.66003ZM12.8001 13.34H3.2001V14.34H12.8001V13.34Z" fill="#C4C4C4"/>
                        <defs>
                            <linearGradient id="paint0_linear_11_1028" x1="1.6001" y1="8.00003" x2="14.4001" y2="8.00003" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#2B2B2B"/>
                                <stop offset="1" stop-color="#474747"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_11_1028" x1="1.6001" y1="8.00003" x2="14.4001" y2="8.00003" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#2B2B2B"/>
                                <stop offset="1" stop-color="#474747"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <img src="./../../assets/profile.jpeg" alt="">
                </div>
                <h1>{{ username }}</h1>
                <input type="file" id="profile_img">
            </label>
        </form>
        <div class="info" v-if="age && height && weight">
            <h1>
                <span>Age</span>
                {{ age }}
            </h1>
            <h1>
                <span>Weight (kg)</span>
                {{ weight }}
            </h1>
            <h1>
                <span>Height (cm)</span>
                {{ height }}
            </h1>
        </div>
        <div class="stats_head" @click="showWaterChart = !showWaterChart">
            <h3>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.45 15C7.2 14.6667 7.96667 14.4167 8.75 14.25C9.53333 14.0833 10.325 14 11.125 14C11.625 14 12.121 14.0333 12.613 14.1C13.105 14.1667 13.5923 14.2667 14.075 14.4C14.9083 14.6333 15.546 14.7917 15.988 14.875C16.43 14.9583 16.9007 15 17.4 15H17.55L18.75 4H5.25L6.45 15ZM6.975 22C6.45833 22 6.01267 21.8333 5.638 21.5C5.26333 21.1667 5.05067 20.7417 5 20.225L3 2H21L19 20.225C18.95 20.7417 18.7373 21.1667 18.362 21.5C17.9867 21.8333 17.541 22 17.025 22H6.975Z" fill="#C4C4C4"/>
                </svg>
                Water Weekly Stats
            </h3>
            <svg xmlns="http://www.w3.org/2000/svg" v-if="!showWaterChart" class="icon icon-tabler icon-tabler-chevron-down" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M6 9l6 6l6 -6" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" v-if="showWaterChart" class="icon icon-tabler icon-tabler-chevron-up" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M6 15l6 -6l6 6" />
            </svg>
        </div>
        <div class="water_chart" v-if="showWaterChart">
            <apexchart type="bar" height="150" :options="chartOptions" :series="series"></apexchart>
        </div>
        <div class="stats_head" @click="showSleepChart = !showSleepChart">
            <h3>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.45 15C7.2 14.6667 7.96667 14.4167 8.75 14.25C9.53333 14.0833 10.325 14 11.125 14C11.625 14 12.121 14.0333 12.613 14.1C13.105 14.1667 13.5923 14.2667 14.075 14.4C14.9083 14.6333 15.546 14.7917 15.988 14.875C16.43 14.9583 16.9007 15 17.4 15H17.55L18.75 4H5.25L6.45 15ZM6.975 22C6.45833 22 6.01267 21.8333 5.638 21.5C5.26333 21.1667 5.05067 20.7417 5 20.225L3 2H21L19 20.225C18.95 20.7417 18.7373 21.1667 18.362 21.5C17.9867 21.8333 17.541 22 17.025 22H6.975Z" fill="#C4C4C4"/>
                </svg>
                Sleep Weekly Stats
            </h3>
            <svg xmlns="http://www.w3.org/2000/svg" v-if="!showSleepChart" class="icon icon-tabler icon-tabler-chevron-down" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M6 9l6 6l6 -6" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" v-if="showSleepChart" class="icon icon-tabler icon-tabler-chevron-up" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M6 15l6 -6l6 6" />
            </svg>
        </div>
        <div class="sleep_chart" v-if="showSleepChart">
            <apexchart type="area" height="200" :options="chartOptions" :series="series"></apexchart>
        </div>
        <button class="log_out" @click="logout">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-logout-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
            <path d="M15 12h-12l3 -3" />
            <path d="M6 15l-3 -3" />
            </svg>
            Logout
        </button>
        <NavBar />
    </div>
</template>

<script>
import instance from '@/api';
import NavBar from './../layout/NavBar'
import useAuth from '@/composables/useAuth';
import VueApexCharts from "vue3-apexcharts";
import { useRouter } from 'vue-router';

export default {
  name: 'ProfileView',
  components: {
    NavBar,
    apexchart: VueApexCharts,
  },
  data() {
    return {
      showWaterChart: false,
      showSleepChart: false,
      age: 0,
      weight: 0,
      height: 0,
      series: [{
        data: [21, 22, 10, 28, 16, 21, 13]
      }],
      chartOptions: {
        plotOptions: {
          bar: {
            columnWidth: '45%',
            distributed: true,
            borderRadius: 8,
            colors: {
              backgroundBarOpacity: 1,
              backgroundBarRadius: 5,
            }
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        xaxis: {
          categories: [
            'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'
          ],
          labels: {
            style: {
              fontSize: '12px',
              colors: '#fff'
            }
          }
        },
        grid: {
          show: false
        }
      },
    }
  },
  methods: {
    async getUser() {
      try {
        const response = await instance.get('/users/account', {
          headers: {
            "Authorization": `Bearer ${this.access_token}`
          }
        });
        const res = response.data
        if (res.height) {
            this.height = res.height
        }
        if (res.weight) {
            this.weight = res.weight
        }
        if (res.age) {
            this.age = res.age
        }
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
  created() {
    this.getUser()
  },
  setup() {
    const $route = useRouter()
    const { access_token, logout, username } = useAuth();
    const handleLogut = () => {
        logout()
        $route.push("/home")
    }
    return {
        username,
      access_token,
      logout: handleLogut,
    };
  },
}
</script>
