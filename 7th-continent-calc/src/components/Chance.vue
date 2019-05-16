<template>
  <span :class="calculateColor()">{{number}}</span>
</template>

<script>
  export default {
    props: [
      'number',
    ],

    methods: {
      calculateColor: () => {
    
      } 
    }
  }
</script>

<style>
  .no-chance {
    background: black;
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

  .high-chance {
    background: yellowgreen;
  }

  .garantued {
    background: green;
  }
  
</style>
