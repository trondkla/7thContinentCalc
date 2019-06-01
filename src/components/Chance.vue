<template>
  <div :class="'field ' + calculateColor(number)">{{number}}</div>
</template>

<script>
  export default {
    props: [
      'number',
    ],

    methods: {
      calculateColor: (number) => {
        console.log(number)
        let n = Number(number.substring(0, number.length-1))
        console.log(number.substring(0, number.length-1))
        if (n < 1) {
          return 'no-chance'
        }
        if (n < 20) {
          return 'low-chance'
        }

        if (n < 40) {
          return 'mid-chance'
        }

        if (n > 97) {
          return 'garantued'
        }
        if (n > 85) {
          return 'high-chance'
        }
        if (n > 75) {
          return 'good-chance'
        }
        return 'propapble'
      }
    }
  }
</script>

<style>
  .field {
    padding: 0.2em;
    color: white;
    text-shadow: 0px 1px 2px black;
  }
  .no-chance {
    background: purple;
  }

  .low-chance {
    background: red;
  }

  .mid-chance {
    background: orange
  }

  .propapble {
    background: yellow;
  }

  .good-chance {
    background: yellowgreen;
  }

  .high-chance {
    background: green;
  }

  .garantued {
    background: lightblue;
  }

</style>
