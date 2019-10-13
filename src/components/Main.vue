<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
      class="chance-table-layout"
    >
      <ChanceTable
        :numberOfLuckySeven="numberOfLuckySeven"
        :numberOfPlayers="numberOfPlayers" />
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
  .chance-table-layout {
    overflow: scroll;
    margin-left: 0.8em;
  }
</style>
