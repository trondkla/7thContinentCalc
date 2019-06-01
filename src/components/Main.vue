<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
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

</style>
