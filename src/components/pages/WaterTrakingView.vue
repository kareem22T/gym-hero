<template>
    <div class="Water_traking_wrapper">
        <div class="page-head">
            <div>
                <router-link to="/home">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 17V7C21 4.79086 19.2091 3 17 3L7 3C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21H17C19.2091 21 21 19.2091 21 17Z" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.5 15L10.5 12L13.5 9" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </router-link>
                <h1>Water tracking</h1>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 17.5C19.005 17.8581 18.8818 18.2061 18.6525 18.4812C18.4233 18.7563 18.1032 18.9404 17.75 19H17.5H6.50005H6.25005C5.89694 18.9404 5.57682 18.7563 5.34757 18.4812C5.11831 18.2061 4.99504 17.8581 5.00005 17.5C4.99297 17.1414 5.11549 16.7923 5.34511 16.5167C5.57473 16.2412 5.89604 16.0577 6.25005 16V10.25C6.25005 8.72501 6.85585 7.26247 7.93418 6.18414C9.01252 5.1058 10.4751 4.5 12 4.5C13.525 4.5 14.9876 5.1058 16.0659 6.18414C17.1442 7.26247 17.75 8.72501 17.75 10.25V16C18.1041 16.0577 18.4254 16.2412 18.655 16.5167C18.8846 16.7923 19.0071 17.1414 19 17.5Z" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 21H14" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.82 4.57C12.9367 4.4028 12.9995 4.20391 13 4C13 3.73478 12.8946 3.48043 12.7071 3.29289C12.5196 3.10536 12.2652 3 12 3C11.7348 3 11.4804 3.10536 11.2929 3.29289C11.1054 3.48043 11 3.73478 11 4C11.0005 4.20391 11.0633 4.4028 11.18 4.57" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <h2 class="daily-goal">
            Daily Goal: {{ goal }} ml
        </h2>
        <swiper
            ref="swiper"
            :slides-per-view="7"
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
                @click="handleSelect(index + 1)"
                >
                    {{ day.mon }}
                    <br>
                    {{ day.day }}
                </button>
            </swiper-slide>
        </swiper>
        <div class="chart_wrapper">
            <div class="percent">
                <h1>{{ Math.ceil((drinkPerc / goal) * 100)}}%</h1>
                <img src="./../../assets/water.png" alt="">
            </div>
            <apexchart type="radialBar" height="280" :options="chartOptions" :series="series"></apexchart>
        </div>
        <div class="rate_controller">
            <button @click="handleDecLitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 3H7C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3Z" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.5 12H15.5" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <h1>{{ drinkPerc + " ml/" + goal + " ml" }}</h1>
            <button @click="handleIncLitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 3H7C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3Z" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.5 12H15.5" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 8.5V15.5" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
        <button>
            Submit
        </button>
        <NavBar />
    </div>
</template>

<script>
import NavBar from './../layout/NavBar'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import VueApexCharts from "vue3-apexcharts";

export default {
  name: 'WaterTrakingView',
  components: {
    NavBar,
    Swiper,
    SwiperSlide,
    apexchart: VueApexCharts,
  },
  data() {
    return {
      goal: 2500,
      drinkPerc: 2000,
      days: [],
      currentDay: new Date().getDate(),
      selected: new Date().getDate(),
      series: [80],
        chartOptions: {
        chart: {
            height: 300,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
            hollow: {
                size: '65%',
            },
            track: {
                background: '#605E5E', // Background arc color
            },
            dataLabels: {
                name: {
                    show: false
                },
                value: {
                    show: true
                }
            }
            },
        },
        fill: {
            colors: ['#3CC7F5'], // Progress color
        },
        labels: [''],
        },
          
    };
  },
    mounted() {
    this.generateDays();
    this.series[0] = Math.ceil((this.drinkPerc / this.goal) * 100)
},
  methods: {
    handleSelect(i) {
        this.selected = i
    },
    handleIncLitter() {
        this.drinkPerc += 100
        this.series[0] = Math.ceil((this.drinkPerc / this.goal) * 100)
    },
    handleDecLitter() {
        this.drinkPerc = this.drinkPerc > 100 ? this.drinkPerc - 100 : this.drinkPerc
        this.series[0] = Math.ceil((this.drinkPerc / this.goal) * 100)
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
  },}
</script>