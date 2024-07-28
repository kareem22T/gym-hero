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
import ProfileView from '@/components/pages/ProfileView.vue'
import auth from './../middleware/auth'
import SleepTrackerView from '@/components/pages/SleepTrackerView.vue'

const routes = [
  {
    path: '/',
    name: 'onboarding',
    meta: { auth: false },
    component: OnboardingComponent
  },
 {
    path: '/login',
    name: 'login',
    meta: { auth: false },
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    meta: { auth: false },
    component: RegisterView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/workout/:id',
    name: 'workout',
    component: WorkoutView
  },
  {
    path: '/exercise/:id',
    name: 'exercise',
    component: ExerciseView
  },
  {
    path: '/bmi-calculator',
    name: 'bmi',
    meta: { auth: true },
    component: BmiView
  },
  {
    path: '/bmi-result/:result',
    name: 'bmiresult',
    meta: { auth: true },
    component: BmiresultsView
  },
  {
    path: '/water-traking',
    name: 'WaterTraking',
    meta: { auth: true },
    component: WaterTrakingView
  },
  {
    path: '/sleep-traking',
    name: 'SleepTrakingView',
    meta: { auth: true },
    component: SleepTrackerView
  },
  {
    path: '/profile',
    name: 'profile',
    meta: { auth: true },
    component: ProfileView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach(auth);

export default router
