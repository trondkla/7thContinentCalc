<template>
  <v-toolbar app>
      <v-btn
        flat
        @clik="test"
        target="_blank"
      >
        <span class="mr-2 change-number-of-players">Change # players</span>
      </v-btn>
      <v-spacer></v-spacer>

      <v-toolbar-title class="headline text-uppercase">

        <v-img
          :src="require('@/assets/logo_t7c_small.png')"
          class="logo inline"
          contain
        ></v-img>
        <span class="font-weight-light">calculator</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        @clik="test"
        class="change-lucky-7"
        title="Change number of lucky sevens"
        right
        >
        <span class="mr-2">
          Change 
          <v-img
            :src="require('@/assets/icons/icon_succes_7.png')"
            class="lucky7 inline"
            contain
          ></v-img>
        </span>
      </v-btn>
    </v-toolbar>
</template>

<script>
  export default {
    data: () => ({
    })
  }
</script>

<style>
    .inline {
        display: inline;
    }
</style>
