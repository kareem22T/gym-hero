<template>
    <div class="Bmi_wrapper">
        <div class="page-head">
            <router-link to="/home">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 17V7C21 4.79086 19.2091 3 17 3L7 3C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21H17C19.2091 21 21 19.2091 21 17Z" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.5 15L10.5 12L13.5 9" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </router-link>
            <h1>BMI Results</h1>
        </div>
        <VueSpeedometer 
        currentValueText=""
            :ringWidth="80"
            needleColor="#474747"
            :needleHeightRatio=".65"
            :customSegmentStops="[0, 5, 10, 15, 20, 25]"
            :segmentColors='["#52C9F7", "#97CD17", "#FEDA00", "#F8931F", "#FE0000"]'
            :value="10"
            :minValue="0"
            :maxValue="25"
            :customSegmentLabels='[
                {
                text: "UNDERWEIGHT",
                position: "INSIDE",
                color: "#fff",
                fontSize: "6px"
                },
                {
                text: "Normal",
                position: "INSIDE",
                color: "#fff",
                fontSize: "6px"
                },
                {
                text: "OVERWEIGHT",
                position: "INSIDE",
                color: "#fff",
                fontSize: "19px",
                fontSize: "6px"
                },
                {
                text: "OBESE",
                position: "INSIDE",
                color: "#fff",
                fontSize: "6px"
                },
                {
                text: "EXTRA OBESE",
                position: "INSIDE",
                color: "#fff",
                fontSize: "6px"
                },
            ]'
        />
        <h1 class="result">
            24.9
        </h1>
        <p class="desc">
            Your BMI is in the healthy range (24.9), the focus might shift towards maintaining a healthy lifestyle overall
        </p>
        <div class="tips_wrapper">
            <h2>Tips</h2>
            <ol>
                <li>Eat whole foods: Prioritize fruits, veggies, whole grains, and lean protein.</li>
                <li>Move daily: Aim for 30 minutes of moderate-intensity exercise most days.</li>
                <li>Hydrate: Drink plenty of water throughout the day (6-8 glasses).</li>
                <li>Plan healthy snacks: Have healthy options ready to avoid unhealthy choices.</li>
            </ol>
        </div>
    </div>
</template>

<script>
import VueSpeedometer from "vue-speedometer"
export default {
  name: 'BmiresultsView',
  data () {
    return {
        age: 18,
        weight: 70,
        height: 150
    }
  },
  components: {
    VueSpeedometer
  },
  methods: {
    handleIncAge() {
        this.age += 1
    },
    handleDecAge() {
        this.age = this.age > 1 ? this.age - 1 : this.age
    },
    handleIncWeight() {
        this.weight += 1
    },
    handleDecWeight() {
        this.weight = this.weight > 1 ? this.weight - 1 : this.weight
    },
  }
}
</script>