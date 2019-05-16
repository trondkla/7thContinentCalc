<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <ChanceTable></ChanceTable>
    </v-layout>
  </v-container>
</template>

<script>
  import ChanceTable from './ChanceTable'

  export default {

    components: {
      ChanceTable,
    },
    data: () => ({
      
    })
  }
</script>

<style>

</style>
