<template>
  <v-layout 
    wrap
  >
    <h1>Number of succeses needed</h1>

    <section class="difficulty-possibilities">
      <v-btn raised big class="button" @click="chooseDifficulty(1)"><span class="difficulty">1</span> <i class="star"></i></v-btn>
      <v-btn raised big class="button" @click="chooseDifficulty(2)"><span class="difficulty">2</span> <i class="star"></i></v-btn>
      <v-btn raised big class="button" @click="chooseDifficulty(3)"><span class="difficulty">3</span> <i class="star"></i></v-btn>
      <v-btn raised big class="button" @click="chooseDifficulty(4)"><span class="difficulty">4</span> <i class="star"></i></v-btn>
      <v-btn raised big class="button" @click="chooseDifficulty(5)"><span class="difficulty">5</span> <i class="star"></i></v-btn>
      <v-btn raised big class="button" @click="chooseDifficulty(6)"><span class="difficulty">6</span> <i class="star"></i></v-btn>
      <v-btn raised big class="button" @click="chooseDifficulty(7)"><span class="difficulty">7</span> <i class="star"></i></v-btn>
      <v-btn raised big class="button" @click="chooseDifficulty(8)"><span class="difficulty">8</span> <i class="star"></i></v-btn>
      <v-btn raised big class="button" @click="chooseDifficulty(9)"><span class="difficulty">9</span> <i class="star"></i></v-btn>
    </section>

  </v-layout>

</template>

<script>

  export default {
    methods: {
      chooseDifficulty (difficultyLevel) {
        this.$router.push({ name: 'calc', params: { difficulty: difficultyLevel } })
      }
    }
  }
</script>

<style>
  .difficulty-possibilities {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: space-between;
  }

  .button {
    width: 30%;
    height: 4em;
    font-size: 2em;
  }

  .difficulty {
    position: absolute;
    padding-top: 0.25em;
    z-index: 1000;
    color: white;
    text-shadow:
      -1px -1px 0 #000,  
      1px -1px 0 #000,
      -1px 1px 0 #000,
       1px 1px 0 #000;
    font-size: 0.9em;
    -webkit-text-stroke: 1px black;
  }

  .star {
      background: url('../assets/icons/icon_succes.png') no-repeat;
      background-position: center;
      color: white;
      background-size: 2em;
      text-shadow: 0px 1px 2px black;
      font-weight: bold;
      position: absolute;
      margin-left: 0em;
      width: 2em;
      height: 2em;
      z-index: 100;
  }

</style>
