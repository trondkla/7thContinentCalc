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
        let n = Number(number.substring(0, number.length-1))
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
    width: 100%;
  }
  .no-chance {
    background: purple;
  }

  .low-chance {
    background: red;
  }

  .mid-chance {
    background: orange;
    text-shadow: none;
    color: black;
  }

  .propapble {
    background: yellow;
    text-shadow: none;
    color: black;
  }

  .good-chance {
    background: rgb(61, 197, 61);
  }

  .high-chance {
    color: white;
    background: green;
  }

  .garantued {
    background: rgb(16, 67, 207);
    color: white;
  }

</style>
