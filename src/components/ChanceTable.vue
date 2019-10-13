<template>
  <main>
    <header>
      <div class="star text__shadowed">{{difficulty}}</div>
      <h2 class="header__inline">Chances {{difficulty}} success check</h2>
    </header>
    <section class="card-possibilities">
      <div
        class="card-possiblity"
        v-for="card in numberOfColumns"
        v-bind:key="card"
        >
          <div class="number-of-cards card__blue">{{card}}</div>
          <Chance 
            class="chance-box"
            v-bind:number="convertRawToTable[difficulty-1][card-1]"
          ></Chance>
      </div>
    </section>
  </main>
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
    }),

    props: [
      'numberOfLuckySeven',
      'numberOfPlayers',
      'difficulty'
    ],

    created() {
      this.currentCards = 2
    },

    computed: {
      convertRawToTable() {
        var raw = Chances[this.numberOfPlayers + 'p'][this.numberOfLuckySeven + 'ls'];
        var table = [];
        var rows = raw.split('\n');

        var index = 0;
        for(var row of rows) {
          table[index] = row.split('\t')
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

<style scoped>

    .star {
      display: inline-block;
      background: url('../assets/icons/icon_succes.png') no-repeat;
      background-position: center;
      background-size: 2em;
      width: 3em;
      padding-left: 1.2em;
      padding-top: 0.8em;
      height: 3em;
      font-size: 2em;
    }

    .card__blue {
      display: inline-block;
      background: url('../assets/icons/card_blue.png') no-repeat;
      background-position: center;
      background-size: contain;

      color: white;
      padding: 0.2em;
      text-shadow: 0px 1px 2px black;
      font-weight: bold;
    }

    .header__inline {
      display: inline-block;
    }

    .card-possiblities {
      display: flex;
      flex-wrap: no-wrap;
      flex-direction: column;
    }

    .card-possiblity {
      display: flex;
      flex-wrap: no-wrap;
      flex-direction: row;
      padding: 0.2em;
    }

    .card-possiblity .number-of-cards {
      display: inline-block;
      width: 50%;

      width: 1em;
      height: 1em;
    }

    .card-possiblity .chance-box {
      display: inline-block;
    }
</style>
