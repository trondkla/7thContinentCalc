<template>
  <v-toolbar app class="header v-toolbar--extended theme--dark cyan" height="85">

      <NumberOfPlayersElem
        :numberOfPlayers="numberOfPlayers"
        @changeNumberOfPlayers="changeNumberOfPlayers" 
        >
      </NumberOfPlayersElem>

      <v-spacer></v-spacer>


      <v-toolbar-title class="headline text-uppercase link">
        <router-link to="/">
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
        </router-link>
      </v-toolbar-title>
      
      <v-spacer></v-spacer>
     
      <NumberOfLuckySevenElem
        :numberOfLuckySeven="numberOfLuckySeven"
        @changeNumberOfLuckySeven="changeNumberOfLuckySeven"
        >
      </NumberOfLuckySevenElem>
    </v-toolbar>
</template>

<script>
  import NumberOfPlayersElem from './NumberOfPlayers'
  import NumberOfLuckySevenElem from './NumberOfLuckySeven'

  export default {
    components: {
      NumberOfPlayersElem,
      NumberOfLuckySevenElem
    },
    data: () => ({
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
  
  .link {
    cursor: pointer;
  }
</style>
