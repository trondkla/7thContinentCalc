<template>
  <v-app id="app">
    <Header
      :numberOfLuckySeven="numberOfLuckySeven"
      :numberOfPlayers="numberOfPlayers"
      @changeNumberOfPlayers="changeNumberOfPlayers"
      @changeNumberOfLuckySeven="changeNumberOfLuckySeven"
      />

    <v-content>
      <v-container>
        <router-view
          :numberOfLuckySeven="numberOfLuckySeven"
          :numberOfPlayers="numberOfPlayers"
          ></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import ChanceTable from './components/ChanceTable'
import ChooseDifficulty from './components/ChooseDifficulty'
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header,
    ChooseDifficulty,
    ChanceTable
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
