<template>
  <div class='mt48'>
    <h5 class='text-center'>Yandex Translation </h5>
    <h3 class='text-center mt24'> {{ the_translated_text }}</h3>
  </div>
</template>

<script>
  export default {
    name : 'TranslateOutput',
    props: {
      the_translated_text : {
        default: "",
        type: String
      }
    }
  }
</script>
