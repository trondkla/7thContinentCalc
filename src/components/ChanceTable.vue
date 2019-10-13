<template>
  <div>

    {{difficulty}}

  <table>
      <thead>
          <tr>
              <th></th>
              <th v-for="index in numberOfColumns" :key="index" class="card__blue">{{index}}</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="(column, index) in convertRawToTable" :key="index">
              <td class="first">
                <div class="stars">{{index+1}}</div>
              </td>
              <td v-for="(item, index) in column" :key="index">
                  <Chance v-bind:number="item"></Chance>
              </td>
          </tr>
      </tbody>
  </table>
  <section class="flex">

    <div class="action action__prieview card cell">
    </div>
    <div class="card__blue previous cell"></div>
    <div class="card__blue current cell"></div>
    <div class="card__blue next cell"></div>

    <div class="action action__next card cell">
    </div>

    <div class="stars cell">{{currentCards}}</div>
    <Chance v-bind:number="convertRawToTable[currentCards][0]"></Chance>
    <Chance v-bind:number="convertRawToTable[currentCards][1]"></Chance>
    <Chance v-bind:number="convertRawToTable[currentCards][2]"></Chance>
    <div class="stars cell">{{currentCards}}</div>


  </section>
  </div>
</template>

<script>
  import Chance from './Chance';
  import Chances from '../chances'

  export default {

    components: {
      Chance
    },

    data: () => ({

      currentCards: 2,
      currentStars: 2
    }),

    props: [
      'numberOfLuckySeven',
      'numberOfPlayers',
      'difficulty'
    ],

    computed: {
      convertRawToTable() {
        var raw = Chances[this.numberOfPlayers + 'p'][this.numberOfLuckySeven + 'ls'];
        var table = [];
        var rows = raw.split('\n');

        var index = 0;
        for(var row of rows) {
          if(index <= this.currentStars && index+2 >= this.currentStars) {
            table[index] = row.split('\t').splice(this.currentCards, 3)
          }
          
          index++;
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

    .flex {
      display: flex;
      flex-wrap: wrap;
    }

    .flex .row {

    }

    .flex .cell {
      width: 20%;
      margin: auto;
      flex: 1;
    }

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
        position: absolute;
        margin-top: -0.7em;
        margin-left: -1.6em;;
        width: 2em;
    }

    .first {
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
