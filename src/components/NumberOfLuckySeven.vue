<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on }">
      <v-btn
        flat
        v-on="on"
        class="change-lucky-7"
        title="Change number of lucky sevens"
        large
        fab
        dark
      >
      <v-avatar size="45" class="text-lowercase">
        <span>
          <span>{{numberOfLuckySeven}}</span>
          <span class="times">x</span>
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
        <v-list-tile-title class="text-xs-center">
          {{number}}
        </v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  props: ["numberOfLuckySeven"],

  data() {
      return {
        possibleLucky7ns: [ 1, 2, 3, 4, 5, 6 ],
      }
  },

  methods: {
    changeNumberOfLuckySeven(number) {
      this.$emit('changeNumberOfLuckySeven', number)
    },
  }
};
</script>

<style>
  .times {
    padding: 0.15em;
  }

  .lucky7__small {
    height: 1.2em;
    width: 1.2em;
    display: inline-block;
  }

</style>
