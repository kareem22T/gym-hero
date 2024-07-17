<template>
  <div>
    <router-view v-if="!showLoader"/>
    <LoaderComponent v-if="showLoader"/>
  </div>
</template>
<style scoped>@import './assets/css/main.css';</style>

<script>
import LoaderComponent from "./components/layout/Loading"

export default {
  name: 'App',
  data() {
    return {
      showLoader: true
    }
  },
  components: {
    LoaderComponent
  }, mounted() {
    setTimeout(() => {
      this.showLoader = false
    }, 1500)
  }
}
</script>
