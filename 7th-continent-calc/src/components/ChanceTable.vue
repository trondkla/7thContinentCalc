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
              <td class="stars">{{index+1}}</td>
              <td v-for="(item, index) in column" :key="index">
                  <Chance v-bind:number="item"></Chance>
              </td>
          </tr>
      </tbody>
  </table>
</template>

<script>
  import Chance from './Chance';

  export default {

    components: {
        Chance
    },
    
    data: () => ({
        raw: `57.78%	88.28%	97.29%	99.44%	99.90%	99.98%	100.00%	100.00%	100.00%
6.67%	50.81%	80.70%	93.93%	98.40%	99.64%	99.93%	99.99%	100.00%
2.22%	15.56%	47.41%	75.44%	90.82%	97.15%	99.25%	99.83%	99.97%
0.00%	2.63%	17.63%	45.80%	71.86%	88.13%	95.84%	98.77%	99.69%
0.00%	0.20%	4.28%	19.57%	44.74%	69.19%	85.86%	94.58%	98.25%
0.00%	0.00%	0.78%	5.82%	20.78%	44.00%	67.16%	83.94%	93.40%
0.00%	0.00%	0.01%	1.16%	7.10%	21.76%	43.50%	65.57%	82.32%
0.00%	0.00%	0.00%	0.10%	1.72%	8.20%	22.53%	43.13%	64.31%
0.00%	0.00%	0.00%	0.00%	0.24%	2.26%	9.13%	23.17%	42.86%
0.00%	0.00%	0.00%	0.00%	0.01%	0.39%	2.78%	9.94%	23.71%
0.00%	0.00%	0.00%	0.00%	0.00%	0.03%	0.58%	3.28%	10.63%
0.00%	0.00%	0.00%	0.00%	0.00%	0.00%	0.06%	0.77%	3.74%
0.00%	0.00%	0.00%	0.00%	0.00%	0.00%	0.00%	0.11%	0.97%
0.00%	0.00%	0.00%	0.00%	0.00%	0.00%	0.00%	0.01%	0.16%
0.00%	0.00%	0.00%	0.00%	0.00%	0.00%	0.00%	0.00%	0.01%
0.00%	0.00%	0.00%	0.00%	0.00%	0.00%	0.00%	0.00%	0.00%`,
    }),

    computed: {
        convertRawToTable() {
            var table = [];
            var rows = this.raw.split('\n');

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
        width: 100%
    }

    .stars {
        background: url('../assets/icons/icon_succes.png') no-repeat;
        font-size: 1.2em;
        background-size: contain;
        background-position: center;
        color: white;
        padding: 0.4em;
        text-shadow: 0px 1px 2px black;
        font-weight: bold;
    }

    .card__blue {
        background: url('../assets/icons/card_blue.png') no-repeat;
        font-size: 1.2em;
        background-size: contain;
        background-position: center;
        color: white;
        padding: 0.2em;
        text-shadow: 0px 1px 2px black;
        font-weight: bold;

    }
</style>
