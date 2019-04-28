<template>
  <v-toolbar app class="v-toolbar--extended theme--dark cyan" height="85">
      <v-btn
        flat
        @clik="test"
        title="Change number of players"
        dark
        icon
        round
        fab
        large
        target="_blank"
      >
        <v-avatar
          size="45"
          class="text-lowercase"
          >
          <span class="multiplier">
            <span class="text-large">
             {{numberOfPlayers}} 
            </span>
            <span class="times">
              x
            </span>
          </span>
          <v-icon>people</v-icon>
         </v-avatar>
      </v-btn>
      <v-spacer></v-spacer>


      <v-toolbar-title class="headline text-uppercase">
        <v-layout align-center justify-center row fill-height>
            <v-img
              :src="require('@/assets/logo_t7c_small.png')"
              class="logo"
              height="94"
              width="73"
              contain
            ></v-img>
          <span class="font-weight-light">calculator</span>
        </v-layout>
      </v-toolbar-title>
      
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ onLucky }">
        <v-btn
          class="change-lucky-7"
          title="Change number of lucky sevens"
          right
          large
          fab
          flat
          dark
          v-on="onLucky"
          >
          <v-avatar
            size="45"
            tile
            class="text-lowercase"
            >
            <span class="multiplier">
              <span class="text-large">
                {{numberOfLuckySeven}}
              </span>
              <span class="times">
                x
              </span>
            </span>
            <v-img
              :src="require('@/assets/icons/icon_succes_7.png')"
              class="lucky7"
              contain
            ></v-img>
          </v-avatar>
        </v-btn>
      </template>
        
      <v-list>
        <v-list-tile
          v-for="(item, index) in possibleLucky7ns"
          :key="index"
        >
          <v-list-tile-title>{{ item }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
      </v-menu>
    </v-toolbar>
</template>

<script>
  export default {
    data: () => ({
      possibleLucky7ns: [
        {1: 1},
        {2: 2},
        {3: 3},
        {4: 4},
        {5: 5},
        {6: 6},
      ]
    }),

    props: [
      'numberOfLuckySeven',
      'numberOfPlayers'
    ],

    methods: {
      test: () => {
        console.log('Test')
      } 
    }
  }
</script>

<style>
  .text-large {
    font-size: large;
  }

  .times {
    padding: 0.15em;
  }
</style>
