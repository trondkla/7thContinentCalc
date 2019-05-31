<template>
  <div class="text-xs-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          flat
          v-on="on"
          title="Change number of players"
          dark
          icon
          round
          fab
          large
          target="_blank"
        >
          <v-avatar size="45" class="text-lowercase">
            <span class="multiplier">
              <span class="text-large">{{numberOfPlayers}}</span>
              <span class="times">x</span>
            </span>
            <v-icon>people</v-icon>
          </v-avatar>
        </v-btn>
      </template>
      <v-list>
        <v-list-tile
          v-for="number of possiblePlayers"
          :key="number"
          @click="changeNumberOfPlayers(number)"
        >
          <v-list-tile-title>
            {{ number }}
            <v-icon>people</v-icon>
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  props: ["numberOfPlayers"],

  data() {
      return {
        possiblePlayers: [ 1, 2, 3, 4 ]
      }
  },

  methods: {
    changeNumberOfPlayers(number) {
      this.$emit('changeNumberOfPlayers', number)
    },
  }
};
</script>

<style>
</style>
