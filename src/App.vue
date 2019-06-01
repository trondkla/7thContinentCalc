<template>
  <v-app id="app">
    <Header
      :numberOfLuckySeven="numberOfLuckySeven"
      :numberOfPlayers="numberOfPlayers"
      @changeNumberOfPlayers="changeNumberOfPlayers"
      @changeNumberOfLuckySeven="changeNumberOfLuckySeven"
      />

    <v-content>
      <Main
        :numberOfLuckySeven="numberOfLuckySeven"
        :numberOfPlayers="numberOfPlayers"
        />
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
    height: 100%;
    width: 100%;
    background-image: url('assets/background.jpg');
    background-position-x: center;
  }

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    touch-action: manipulation;
  }
</style>
