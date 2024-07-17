<template>
    <div class="Bmi_wrapper">
        <div class="page-head">
            <router-link to="/home">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 17V7C21 4.79086 19.2091 3 17 3L7 3C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21H17C19.2091 21 21 19.2091 21 17Z" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.5 15L10.5 12L13.5 9" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </router-link>
            <h1>BMI Calculator</h1>
        </div>
        <div class="bmi">
            <div class="top">
                <div>
                    <h2>Weight (kg)</h2>
                    <div class="rate_controller">
                        <button @click="handleDecWeight">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.5 12H15.5" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <h1>{{ weight }}</h1>
                        <button @click="handleIncWeight">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.5 12H15.5" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 8.5V15.5" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div>
                    <h2>Age</h2>
                    <div class="rate_controller">
                        <button @click="handleDecAge">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.5 12H15.5" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <h1>{{ age }}</h1>
                        <button @click="handleIncAge">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.5 12H15.5" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 8.5V15.5" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div>
                    <h2>Height (cm)</h2>
                    <h3>{{ height }}</h3>
                    <div class="rate_controller">
                        <input type="range" name="Height" id="Height" min="50" max="250" value="170" v-model="height">
                        <svg width="228" height="32" viewBox="0 0 228 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_11_773)">
                        <path d="M5 -8L5 27" stroke="#FDFDFD" stroke-width="3" stroke-linecap="round"/>
                        <path d="M15.8999 7L15.8999 27" stroke="#FDFDFD" stroke-width="3" stroke-linecap="round"/>
                        <path d="M26.8 7V27" stroke="#FDFDFD" stroke-width="3" stroke-linecap="round"/>
                        <path d="M37.7 7V27" stroke="#FDFDFD" stroke-width="3" stroke-linecap="round"/>
                        <path d="M48.6001 7V27" stroke="#FDFDFD" stroke-width="3" stroke-linecap="round"/>
                        <path d="M59.5 -8V27" stroke="#FDFDFD" stroke-width="3" stroke-linecap="round"/>
                        <path d="M70.3999 7V27" stroke="#FDFDFD" stroke-width="3" stroke-linecap="round"/>
                        <path d="M81.3 7V27" stroke="#FDFDFD" stroke-width="3" stroke-linecap="round"/>
                        <path d="M92.2 7V27" stroke="#FDFDFD" stroke-width="3" stroke-linecap="round"/>
                        <path d="M103.1 7V27" stroke="#FDFDFD" stroke-width="3" stroke-linecap="round"/>
                        <path d="M114 -8V27" stroke="#FDFDFD" stroke-width="3" stroke-linecap="round"/>
                        <path d="M124.9 7V27" stroke="#FDFDFD" stroke-width="3" stroke-linecap="round"/>
                        <path d="M135.8 7V27" stroke="#FDFDFD" stroke-width="3" stroke-linecap="round"/>
                        <path d="M146.7 7V27" stroke="#FDFDFD" stroke-width="3" stroke-linecap="round"/>
                        <path d="M157.6 7V27" stroke="#FDFDFD" stroke-width="3" stroke-linecap="round"/>
                        <path d="M168.5 -8V27" stroke="#FDFDFD" stroke-width="3" stroke-linecap="round"/>
                        <path d="M179.4 7V27" stroke="#FDFDFD" stroke-width="3" stroke-linecap="round"/>
                        <path d="M190.3 7V27" stroke="#FDFDFD" stroke-width="3" stroke-linecap="round"/>
                        <path d="M201.2 7V27" stroke="#FDFDFD" stroke-width="3" stroke-linecap="round"/>
                        <path d="M212.1 7V27" stroke="#FDFDFD" stroke-width="3" stroke-linecap="round"/>
                        <path d="M223 -8V27" stroke="#FDFDFD" stroke-width="3" stroke-linecap="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_11_773">
                        <rect width="228" height="31.7213" fill="white" transform="translate(0 0.278687)"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </div>
                </div>
            </div>
            <router-link to="/bmi-result">
                Calculate
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'BmiView',
  data () {
    return {
        age: 18,
        weight: 70,
        height: 150
    }
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