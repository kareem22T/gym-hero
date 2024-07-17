<template>
    <div class="workout_wrapper">
        <div class="page-head">
            <router-link to="/home">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 17V7C21 4.79086 19.2091 3 17 3L7 3C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21H17C19.2091 21 21 19.2091 21 17Z" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.5 15L10.5 12L13.5 9" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </router-link>
            <h1>Chest workout</h1>
        </div>
        <form action="" class="search">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5 18.5C15.366 18.5 18.5 15.366 18.5 11.5C18.5 7.63401 15.366 4.5 11.5 4.5C7.63401 4.5 4.5 7.63401 4.5 11.5C4.5 15.366 7.63401 18.5 11.5 18.5Z" stroke="#C4C4C4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.5 16.5L19.5 19.5" stroke="#C4C4C4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <input type="text" name="Search" id="Search" placeholder="Search">
        </form>
        <div class="exercises">
          <router-link to="exercise" class="exercise_card">
            <img src="./../../assets/ex-1.jpeg" alt="">
            <div class="text">
              <h1>Bench press</h1>
              <p>3-6 sets</p>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.58 10.41L9.25002 6.18003C8.97132 6.01794 8.65474 5.93236 8.33233 5.93195C8.00992 5.93154 7.69313 6.01631 7.41401 6.17769C7.1349 6.33907 6.90337 6.57132 6.74287 6.85094C6.58237 7.13056 6.49859 7.44762 6.50002 7.77003V16.23C6.49859 16.5524 6.58237 16.8695 6.74287 17.1491C6.90337 17.4287 7.1349 17.661 7.41401 17.8224C7.69313 17.9837 8.00992 18.0685 8.33233 18.0681C8.65474 18.0677 8.97132 17.9821 9.25002 17.82L16.58 13.59C16.8607 13.4301 17.094 13.1988 17.2563 12.9195C17.4186 12.6403 17.504 12.323 17.504 12C17.504 11.677 17.4186 11.3598 17.2563 11.0805C17.094 10.8013 16.8607 10.5699 16.58 10.41Z" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </router-link>
          <router-link to="exercise" class="exercise_card">
            <img src="./../../assets/ex-2.jpeg" alt="">
            <div class="text">
              <h1>Low cable crossover</h1>
              <p>3-6 sets</p>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.58 10.41L9.25002 6.18003C8.97132 6.01794 8.65474 5.93236 8.33233 5.93195C8.00992 5.93154 7.69313 6.01631 7.41401 6.17769C7.1349 6.33907 6.90337 6.57132 6.74287 6.85094C6.58237 7.13056 6.49859 7.44762 6.50002 7.77003V16.23C6.49859 16.5524 6.58237 16.8695 6.74287 17.1491C6.90337 17.4287 7.1349 17.661 7.41401 17.8224C7.69313 17.9837 8.00992 18.0685 8.33233 18.0681C8.65474 18.0677 8.97132 17.9821 9.25002 17.82L16.58 13.59C16.8607 13.4301 17.094 13.1988 17.2563 12.9195C17.4186 12.6403 17.504 12.323 17.504 12C17.504 11.677 17.4186 11.3598 17.2563 11.0805C17.094 10.8013 16.8607 10.5699 16.58 10.41Z" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </router-link>
          <router-link to="exercise" class="exercise_card">
            <img src="./../../assets/ex-3.jpeg" alt="">
            <div class="text">
              <h1>Dumbbell fly </h1>
              <p>3-6 sets</p>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.58 10.41L9.25002 6.18003C8.97132 6.01794 8.65474 5.93236 8.33233 5.93195C8.00992 5.93154 7.69313 6.01631 7.41401 6.17769C7.1349 6.33907 6.90337 6.57132 6.74287 6.85094C6.58237 7.13056 6.49859 7.44762 6.50002 7.77003V16.23C6.49859 16.5524 6.58237 16.8695 6.74287 17.1491C6.90337 17.4287 7.1349 17.661 7.41401 17.8224C7.69313 17.9837 8.00992 18.0685 8.33233 18.0681C8.65474 18.0677 8.97132 17.9821 9.25002 17.82L16.58 13.59C16.8607 13.4301 17.094 13.1988 17.2563 12.9195C17.4186 12.6403 17.504 12.323 17.504 12C17.504 11.677 17.4186 11.3598 17.2563 11.0805C17.094 10.8013 16.8607 10.5699 16.58 10.41Z" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </router-link>
          <router-link to="exercise" class="exercise_card">
            <img src="./../../assets/ex-4.jpeg" alt="">
            <div class="text">
              <h1>Incline pushup</h1>
              <p>3-6 sets</p>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.58 10.41L9.25002 6.18003C8.97132 6.01794 8.65474 5.93236 8.33233 5.93195C8.00992 5.93154 7.69313 6.01631 7.41401 6.17769C7.1349 6.33907 6.90337 6.57132 6.74287 6.85094C6.58237 7.13056 6.49859 7.44762 6.50002 7.77003V16.23C6.49859 16.5524 6.58237 16.8695 6.74287 17.1491C6.90337 17.4287 7.1349 17.661 7.41401 17.8224C7.69313 17.9837 8.00992 18.0685 8.33233 18.0681C8.65474 18.0677 8.97132 17.9821 9.25002 17.82L16.58 13.59C16.8607 13.4301 17.094 13.1988 17.2563 12.9195C17.4186 12.6403 17.504 12.323 17.504 12C17.504 11.677 17.4186 11.3598 17.2563 11.0805C17.094 10.8013 16.8607 10.5699 16.58 10.41Z" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </router-link>
          <router-link to="exercise" class="exercise_card">
            <img src="./../../assets/ex-1.jpeg" alt="">
            <div class="text">
              <h1>Bench press</h1>
              <p>3-6 sets</p>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.58 10.41L9.25002 6.18003C8.97132 6.01794 8.65474 5.93236 8.33233 5.93195C8.00992 5.93154 7.69313 6.01631 7.41401 6.17769C7.1349 6.33907 6.90337 6.57132 6.74287 6.85094C6.58237 7.13056 6.49859 7.44762 6.50002 7.77003V16.23C6.49859 16.5524 6.58237 16.8695 6.74287 17.1491C6.90337 17.4287 7.1349 17.661 7.41401 17.8224C7.69313 17.9837 8.00992 18.0685 8.33233 18.0681C8.65474 18.0677 8.97132 17.9821 9.25002 17.82L16.58 13.59C16.8607 13.4301 17.094 13.1988 17.2563 12.9195C17.4186 12.6403 17.504 12.323 17.504 12C17.504 11.677 17.4186 11.3598 17.2563 11.0805C17.094 10.8013 16.8607 10.5699 16.58 10.41Z" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </router-link>
          <router-link to="exercise" class="exercise_card">
            <img src="./../../assets/ex-2.jpeg" alt="">
            <div class="text">
              <h1>Low cable crossover</h1>
              <p>3-6 sets</p>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.58 10.41L9.25002 6.18003C8.97132 6.01794 8.65474 5.93236 8.33233 5.93195C8.00992 5.93154 7.69313 6.01631 7.41401 6.17769C7.1349 6.33907 6.90337 6.57132 6.74287 6.85094C6.58237 7.13056 6.49859 7.44762 6.50002 7.77003V16.23C6.49859 16.5524 6.58237 16.8695 6.74287 17.1491C6.90337 17.4287 7.1349 17.661 7.41401 17.8224C7.69313 17.9837 8.00992 18.0685 8.33233 18.0681C8.65474 18.0677 8.97132 17.9821 9.25002 17.82L16.58 13.59C16.8607 13.4301 17.094 13.1988 17.2563 12.9195C17.4186 12.6403 17.504 12.323 17.504 12C17.504 11.677 17.4186 11.3598 17.2563 11.0805C17.094 10.8013 16.8607 10.5699 16.58 10.41Z" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </router-link>
          <router-link to="exercise" class="exercise_card">
            <img src="./../../assets/ex-3.jpeg" alt="">
            <div class="text">
              <h1>Dumbbell fly </h1>
              <p>3-6 sets</p>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.58 10.41L9.25002 6.18003C8.97132 6.01794 8.65474 5.93236 8.33233 5.93195C8.00992 5.93154 7.69313 6.01631 7.41401 6.17769C7.1349 6.33907 6.90337 6.57132 6.74287 6.85094C6.58237 7.13056 6.49859 7.44762 6.50002 7.77003V16.23C6.49859 16.5524 6.58237 16.8695 6.74287 17.1491C6.90337 17.4287 7.1349 17.661 7.41401 17.8224C7.69313 17.9837 8.00992 18.0685 8.33233 18.0681C8.65474 18.0677 8.97132 17.9821 9.25002 17.82L16.58 13.59C16.8607 13.4301 17.094 13.1988 17.2563 12.9195C17.4186 12.6403 17.504 12.323 17.504 12C17.504 11.677 17.4186 11.3598 17.2563 11.0805C17.094 10.8013 16.8607 10.5699 16.58 10.41Z" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </router-link>
          <router-link to="exercise" class="exercise_card">
            <img src="./../../assets/ex-4.jpeg" alt="">
            <div class="text">
              <h1>Incline pushup</h1>
              <p>3-6 sets</p>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.58 10.41L9.25002 6.18003C8.97132 6.01794 8.65474 5.93236 8.33233 5.93195C8.00992 5.93154 7.69313 6.01631 7.41401 6.17769C7.1349 6.33907 6.90337 6.57132 6.74287 6.85094C6.58237 7.13056 6.49859 7.44762 6.50002 7.77003V16.23C6.49859 16.5524 6.58237 16.8695 6.74287 17.1491C6.90337 17.4287 7.1349 17.661 7.41401 17.8224C7.69313 17.9837 8.00992 18.0685 8.33233 18.0681C8.65474 18.0677 8.97132 17.9821 9.25002 17.82L16.58 13.59C16.8607 13.4301 17.094 13.1988 17.2563 12.9195C17.4186 12.6403 17.504 12.323 17.504 12C17.504 11.677 17.4186 11.3598 17.2563 11.0805C17.094 10.8013 16.8607 10.5699 16.58 10.41Z" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'WorkoutView',
}
</script>