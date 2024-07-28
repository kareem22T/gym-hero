<template>
    <div class="excersice_wrapper" v-if="exercise">
        <div class="page-head">
            <router-link to="/home">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 17V7C21 4.79086 19.2091 3 17 3L7 3C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21H17C19.2091 21 21 19.2091 21 17Z" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.5 15L10.5 12L13.5 9" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </router-link>
            <h1>{{exercise.name}}</h1>
        </div>
        <div class="thumbnail">
            <img :src="'data:image/gif;base64,' + exercise.photo" :alt="exercise.name">
        </div>
        <div class="excersice_desc">
            <div>
                <h2>Sets</h2>
                <ul>
                    <li v-for="(set, index) in exercise.sets" :key="index">{{ set }}</li>
                </ul>
            </div>
            <div>
                <h2>Description</h2>
                <ul>
                    <li v-for="(description, index) in exercise.description" :key="index">{{ description }}</li>
                </ul>
            </div>
            <div>
                <h2>Instructions</h2>
                <ul>
                    <li v-for="(instruction, index) in exercise.instructions" :key="index">{{ instruction }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import {useRoute} from "vue-router"
import instance from "@/api";

export default {
  name: 'ExerciseView',
  data() {
    return {
        exercise: null,
    }
},
  methods: {
    async getExercise() {
    try {
        const response = await instance.get('/exercise/get/' + this.id);

        this.exercise = response.data;
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
  },
  created() {
    this.getExercise();
  },
  setup() {
    const route = useRoute();
    const id = route.params.id;
    return {
      id
    }
  }
}
</script>