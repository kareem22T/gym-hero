import { createRouter, createWebHistory } from 'vue-router'
import OnboardingComponent from '../components/layout/Onboarding.vue'
import LoginView from '@/components/pages/LoginView.vue'
import RegisterView from '@/components/pages/RegisterView.vue'
import HomeView from '@/components/pages/HomeView.vue'
import WorkoutView from '@/components/pages/WorkoutView.vue'
import ExerciseView from '@/components/pages/ExerciseView.vue'
import BmiView from '@/components/pages/BmiView.vue'
import BmiresultsView from '@/components/pages/BmiresultsView.vue'
import WaterTrakingView from '@/components/pages/WaterTrakingView.vue'

const routes = [
  {
    path: '/',
    name: 'onboarding',
    component: OnboardingComponent
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/workout',
    name: 'workout',
    component: WorkoutView
  },
  {
    path: '/exercise',
    name: 'exercise',
    component: ExerciseView
  },
  {
    path: '/bmi-calculator',
    name: 'bmi',
    component: BmiView
  },
  {
    path: '/bmi-result',
    name: 'bmiresult',
    component: BmiresultsView
  },
  {
    path: '/water-traking',
    name: 'WaterTraking',
    component: WaterTrakingView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
