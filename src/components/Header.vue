<template>
  <v-toolbar app class="header v-toolbar--extended theme--dark cyan" height="85">

      <NumberOfPlayersElem
        :numberOfPlayers="numberOfPlayers"
        @changeNumberOfPlayers="changeNumberOfPlayers" 
        >
      </NumberOfPlayersElem>

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
          <span class="calculator font-weight-light">calculator</span>
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
          v-for="number of possibleLucky7ns"
          :key="number"
          @click="changeNumberOfLuckySeven(number)" 
        >
          <v-list-tile-title>{{ number }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
      </v-menu>
    </v-toolbar>
</template>

<script>
  import NumberOfPlayersElem from './NumberOfPlayers'

  export default {
    components: {
      NumberOfPlayersElem
    },
    data: () => ({
      possibleLucky7ns: [ 1, 2, 3, 4, 5, 6 ],
    }),

    props: [
      'numberOfLuckySeven',
      'numberOfPlayers'
    ],

    methods: {
      changeNumberOfPlayers(number) {
        this.$emit('changeNumberOfPlayers', number)
      },
      changeNumberOfLuckySeven(number) {
        this.$emit('changeNumberOfLuckySeven', number)
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

  .header {
    background-image: url(../assets/menu_bar.png);
    background-position: top center;
    position: absolute;

    -webkit-box-shadow: 0px 3px 6px 4px rgba(0,0,0,0.50);
    -moz-box-shadow: 0px 3px 6px 4px rgba(0,0,0,0.50);
    box-shadow: 0px 3px 6px 4px rgba(0,0,0,0.50);
  }

  @media screen and (max-width: 600px) {
    .calculator {
      display: none;
    }
  }
  
</style>
