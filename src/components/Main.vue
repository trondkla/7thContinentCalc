<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
      class="layout"
    >
      <ChanceTable
        :numberOfLuckySeven="numberOfLuckySeven"
        :numberOfPlayers="numberOfPlayers"
      ></ChanceTable>
    </v-layout>
  </v-container>
</template>

<script>
  import ChanceTable from './ChanceTable'

  export default {

    components: {
      ChanceTable,
    },

    props: [
      'numberOfLuckySeven',
      'numberOfPlayers'
    ],
    data: () => ({

    })
  }
</script>

<style>
  .layout {
    overflow: scroll;
    margin-left: 0.8em;
  }
</style>
