<template>
  <div>
    <h4> Data from Yandex Translate </h4>
    <p> {{ the_translated_text }}</p>
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
