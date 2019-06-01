<template>
  <table>
      <thead>
          <tr>
              <th></th>
              <th v-for="index in numberOfColumns" :key="index" class="card__blue">{{index}}</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="(column, index) in convertRawToTable" :key="index">
              <td>
                <div class="stars">{{index+1}}</div>
              </td>
              <td v-for="(item, index) in column" :key="index">
                  <Chance v-bind:number="item"></Chance>
              </td>
          </tr>
      </tbody>
  </table>
</template>

<script>
  import Chance from './Chance';
  import Chances from '../chances'

  export default {

    components: {
      Chance
    },

    props: [
      'numberOfLuckySeven',
      'numberOfPlayers'
    ],

    computed: {
      convertRawToTable() {
        var raw = Chances[this.numberOfPlayers + 'p'][this.numberOfLuckySeven + 'ls'];
        var table = [];
        var rows = raw.split('\n');

        var index = 0;
        for(var row of rows) {
          table[index++] = row.split('\t');
        }

        return table;
      },

      numberOfColumns() {
        if (this.convertRawToTable.length > 0) {
          return this.convertRawToTable[0].length;
        }
        return 0;
      }
    }
  }
</script>

<style>

    table {
        width: 100%;
        font-size: 1.2em;
    }

    .stars {
        background: url('../assets/icons/icon_succes.png') no-repeat;
        background-position: center;
        color: white;
        background-size: 1.6em;
        text-shadow: 0px 1px 2px black;
        font-weight: bold;
    }

    .card__blue {
        background: url('../assets/icons/card_blue.png') no-repeat;
        background-size: contain;
        background-position: center;
        color: white;
        padding: 0.2em;
        text-shadow: 0px 1px 2px black;
        font-weight: bold;

    }
</style>
