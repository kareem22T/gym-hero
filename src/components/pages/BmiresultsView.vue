<template>
    <div class="Bmi_wrapper">
        <div class="page-head">
            <router-link to="/bmi-calculator">
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
            :value="returnAlternativeBmiSpeedValue()"
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
            {{ parseFloat(result).toFixed(1) }}
        </h1>
            <p class="desc">
                Your BMI is 
                <span v-if="isHealthyRange">{{ parseFloat(result).toFixed(1) }}, the focus might shift towards maintaining a healthy lifestyle overall.</span>
                <span v-else-if="isUnderweight">{{ parseFloat(result).toFixed(1) }}, you might need to consider gaining some weight healthily.</span>
                <span v-else-if="isOverweight">{{ parseFloat(result).toFixed(1) }}, you might need to consider losing some weight healthily.</span>
                <span v-else-if="isObese">{{ parseFloat(result).toFixed(1) }}, it's important to seek advice on weight management.</span>
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
import { useRoute } from "vue-router"

export default {
  name: 'BmiresultsView',
  components: {
    VueSpeedometer
  },
  methods: {
    returnAlternativeBmiSpeedValue() {
        if (parseFloat(this.result) <= 18.5) {
            return ((parseFloat(this.result) / 18.5) * 5)
        } else if (parseFloat(this.result) > 18.6 && parseFloat(this.result) <= 24.9) {
            return ((parseFloat(this.result) / 24.9) * 10)
        } else if (parseFloat(this.result) > 25 && parseFloat(this.result) <= 29.9) {
            return ((parseFloat(this.result) / 29.9) * 15)
        }else if (parseFloat(this.result) > 30 && parseFloat(this.result) <= 34.9) {
            return ((parseFloat(this.result) / 34.9) * 20)
        }else if (parseFloat(this.result) > 35 && parseFloat(this.result) <= 40) {
            return ((parseFloat(this.result) / 40) * 25)
        }else if (parseFloat(this.result) > 40) {
            return 25
        } else {
            return 0
        }
    }
  },
  computed: {
    isHealthyRange() {
      return this.result >= 18.5 && this.result <= 24.9;
    },
    isUnderweight() {
      return this.result < 18.5;
    },
    isOverweight() {
      return this.result >= 25 && this.result <= 29.9;
    },
    isObese() {
      return this.result >= 30;
    }
  },
  created() {
    console.log(this.returnAlternativeBmiSpeedValue());
  },
  setup() {
    const route = useRoute()
    return {
        result: route.params.result
    }
  }
}
</script>