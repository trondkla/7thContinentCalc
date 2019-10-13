<template>
  <main class="container">
    <h1>Number of succeses needed</h1>

    <section class="difficulty-possibilities">
      <v-btn 
        round
        class="button button__star"
        v-for="number in 12"
        v-bind:key="number"
        @click="chooseDifficulty(number)"
        >
        <span class="difficulty text__shadowed">{{number}}</span>
      </v-btn>
    </section>
  </main>
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

<style scoped>
  .container {
    overflow: scroll-y;
    text-align: center;
  }

  .difficulty-possibilities {
    margin-top: 1em;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: space-evenly;
  }


  .difficulty {
    position: absolute;
    padding-top: 0.25em;
    z-index: 1000;
  }

  .button {
    width: 10%;
    height: 2.5em;
    font-size: 2em;
    cursor: pointer;
  }
  .button__star {
    background: url('../assets/icons/icon_succes.png') no-repeat;
    background-position: center;
    background-size: 2em;
    min-width: 3em;
  }

</style>
