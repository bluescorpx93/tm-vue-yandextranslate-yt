<template>
  <div>
    <h4> Powered by Vue.js and Yandex API</h4>
    <form v-on:submit="submitData">
      <input type='text' v-model="textToTranslate" placeholder='Type a word' />
      <input type='submit' value='Translate!' />
    </form>
  </div>
</template>

<script>
  export default {
    name : 'TranslateForm',
    data() {
      return {
        textToTranslate : ""
      }
    },
    methods: {
      submitData: function(e){
        e.preventDefault();
        this.$emit('dataSent', this.textToTranslate);
      }
    }
  }
</script>
