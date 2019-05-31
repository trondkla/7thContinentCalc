<template>
  <v-app id="app">
    <Header
      :numberOfLuckySeven="numberOfLuckySeven"
      :numberOfPlayers="numberOfPlayers"
      @changeNumberOfPlayers="changeNumberOfPlayers"
      @changeNumberOfLuckySeven="changeNumberOfLuckySeven"
      />

    <v-content>
      <Main/>
    </v-content>
  </v-app>
</template>

<script>
import Main from './components/Main'
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Main,
    Header
  },
  data () {
    return {
      numberOfLuckySeven: 0,
      numberOfPlayers: 2,
    }
  },
  methods: {
    changeNumberOfPlayers(number) {
      this.numberOfPlayers = number
    },
    changeNumberOfLuckySeven(number) {
      this.numberOfLuckySeven = number
    }
  }
}
</script>

<style>
  #app {
    background-image: url('assets/background.jpg');
    background-position-x: center;
  }
</style>