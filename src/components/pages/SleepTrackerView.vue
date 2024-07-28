<template>
    <div class=" sleeping_traking_wrapper">
        <div class="page-head">
            <div>
                <router-link to="/home">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 17V7C21 4.79086 19.2091 3 17 3L7 3C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21H17C19.2091 21 21 19.2091 21 17Z" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.5 15L10.5 12L13.5 9" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </router-link>
                <h1>Sleep tracking</h1>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 17.5C19.005 17.8581 18.8818 18.2061 18.6525 18.4812C18.4233 18.7563 18.1032 18.9404 17.75 19H17.5H6.50005H6.25005C5.89694 18.9404 5.57682 18.7563 5.34757 18.4812C5.11831 18.2061 4.99504 17.8581 5.00005 17.5C4.99297 17.1414 5.11549 16.7923 5.34511 16.5167C5.57473 16.2412 5.89604 16.0577 6.25005 16V10.25C6.25005 8.72501 6.85585 7.26247 7.93418 6.18414C9.01252 5.1058 10.4751 4.5 12 4.5C13.525 4.5 14.9876 5.1058 16.0659 6.18414C17.1442 7.26247 17.75 8.72501 17.75 10.25V16C18.1041 16.0577 18.4254 16.2412 18.655 16.5167C18.8846 16.7923 19.0071 17.1414 19 17.5Z" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 21H14" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.82 4.57C12.9367 4.4028 12.9995 4.20391 13 4C13 3.73478 12.8946 3.48043 12.7071 3.29289C12.5196 3.10536 12.2652 3 12 3C11.7348 3 11.4804 3.10536 11.2929 3.29289C11.1054 3.48043 11 3.73478 11 4C11.0005 4.20391 11.0633 4.4028 11.18 4.57" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <swiper
            ref="swiper"
            :slides-per-view="'auto'"
            :space-between="10"
            :initial-slide="currentDay - 1"
            :free-mode="true"
            :watch-slides-progress="true"
            class="month-slider"
            >
            <swiper-slide
                v-for="(day, index) in days"
                :key="index"
                :class="{ active: index + 1 === currentDay }"
                :style="{ width: '100px' }"
            >
                <button
                :class="{ selected: index + 1 === selected  }"
                @click="handleSelect(index + 1, day)"
                >
                    {{ day.mon }}
                    <br>
                    {{ day.day }}
                </button>
            </swiper-slide>
        </swiper>
        <div class="from" v-if="!ammout">
          <h1>Bedtime</h1>
          <input type="time" v-model="from">
        </div>
        <div class="to"  v-if="!ammout">
          <h1>Wakeup</h1>
          <input type="time" v-model="to">
        </div>
        <div class="to"  v-if="ammout">
          <h1>Sleeping Time</h1>
          <h3>{{ ammout / 60 }} Hour</h3>
        </div>
        <button @click="postDay()" v-if="!ammout">
            Submit
        </button>
        <NavBar />
    </div>
</template>

<script>
import NavBar from './../layout/NavBar'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import useAuth from '@/composables/useAuth';
import instance from '@/api';

export default {
  name: 'SleepTrakingView',
  components: {
    NavBar,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      goal: 2500,
      drinkPerc: 2000,
      days: [],
      from: null,
      to: null,
      currentDay: new Date().getDate(),
      currentMon: new Date().getMonth() + 1,
      currentYear: new Date().getFullYear(),
      ammout: null,
      selected: new Date().getDate(),
          
    };
  },
    mounted() {
    this.generateDays();
},
computed: {
    timeDifference() {
      if (this.from && this.to) {
        // Convert time strings to Date objects
        const today = '1970-01-01T';
        const fromDate = new Date(today + this.from + ':00');
        let toDate = new Date(today + this.to + ':00');

        // Check if the "to" time is earlier than the "from" time
        if (toDate < fromDate) {
          // Add 24 hours to "to" time to account for the next day
          toDate = new Date(toDate.getTime() + 24 * 60 * 60 * 1000);
        }

        // Calculate the difference in milliseconds
        let difference = toDate - fromDate;

        // Convert difference from milliseconds to hours
        let hoursDifference = difference / (1000 * 60 * 60);

        // Ensure the result is always positive
        return Math.abs(hoursDifference);
      } else {
        return 0;
      }
    }
  },
    methods: {
    handleSelect(i) {
        this.selected = i
        this.drinkPerc = 2000
        this.getDay()
    },
    async getDay() {
      try {
        const response = await instance.get('/sleep_tracker/Date?date=' + this.currentYear + "-" + (this.currentMon < 10 ? "0" : "") + this.currentMon + "-" + this.selected, {
          headers: {
            "Authorization": `Bearer ${this.access_token}`
          }
        });
        const res = response.data
        this.ammout = res.sleepDuration
    } catch (error) {
          this.ammout = null
        if (error.response) {
          console.log('Error response data:', error.response.data);
          console.log('Error response status:', error.response.status);
          console.log('Error response headers:', error.response.headers);
        } else {
          console.log('Error message:', error.message);
        }
      }
    },
    async postDay() {
      try {
        const response = await instance.post('/sleep_tracker', {
            today: this.currentYear + "-" + (this.currentMon < 10 ? "0" : "") + this.currentMon + "-" + this.selected,
            sleepDuration: this.timeDifference * 60,
        }, {
          headers: {
            "Authorization": `Bearer ${this.access_token}`
          }
        });
        const res = response.data
        this.ammout = res.sleepDuration
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
    generateDays() {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const monthName = monthNames[month];

      for (let i = 1; i <= daysInMonth; i++) {
        const day = i.toString().padStart(2, '0'); // Pad single digit days with a leading zero
        this.days.push({day: day, mon: monthName});
      }
    },
},
    created() {
        this.getDay()
    },
  setup() {
    const { access_token } = useAuth();
    return {
      access_token
    };
  },
}
</script>