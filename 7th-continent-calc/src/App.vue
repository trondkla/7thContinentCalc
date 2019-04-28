<template>
  <v-app>
    <Header
      v-bind:numberOfLuckySeven="numberOfLuckySeven"
      v-bind:numberOfPlayers="numberOfPlayers"
      />

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header
  },
  data () {
    return {
      numberOfLuckySeven: 0,
      numberOfPlayers: 2,
    }
  },
  methods: {
    test() {
      console.log("test")
    }
  }
}
</script>
