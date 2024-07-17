<template>
    <div class="excersice_wrapper">
        <div class="page-head">
            <router-link to="/home">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 17V7C21 4.79086 19.2091 3 17 3L7 3C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21H17C19.2091 21 21 19.2091 21 17Z" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.5 15L10.5 12L13.5 9" stroke="#EBFC64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </router-link>
            <h1>Bench press</h1>
        </div>
        <div class="thumbnail">
            <img src="./../../assets/ex.gif" alt="excersice">
        </div>
        <div class="excersice_desc">
            <div>
                <h2>Sets</h2>
                <ul>
                    <li>3 sets x 15 </li>
                    <li>4 sets x 15</li>
                    <li>5 sets x 10</li>
                    <li>6 sets x 10 </li>
                </ul>
            </div>
            <div>
                <h2>Description</h2>
                <ul>
                    <li>
                        Targets: <span>Chest, shoulders, triceps </span>
                    </li>
                    <li>
                        Position: <span>Lie flat on a weight bench. </span>
                    </li>
                    <li>
                        Movement: <span>Press weight down towards your chest. </span>
                    </li>
                    <li>
                        Action: <span>Push the weight back up to the starting position.</span>
                    </li>
                </ul>
            </div>
            <div>
                <h2>Instructions</h2>
                <ul>
                    <li>
                        Set Up: <span>Flat bench, choose weight, secure spotter.</span>
                    </li>
                    <li>
                        Lowering: <span>Controlled descent, elbows at 45 degrees, chest touch.</span>
                    </li>
                    <li>
                        Pressing: <span>Core engaged, exhale and push up, squeeze chest. </span>
                    </li>
                    <li>
                        Safety: <span>Always use a spotter for heavier weights.</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ExerciseView',
}
</script>