<template>
<div>
  <h1>Yandex Word Translator</h1>
  <TranslateForm v-on:dataSent="translateText"></TranslateForm>
  <TranslateOutput></TranslateOutput>
</div>
</template>

<script>
import TranslateForm from './TranslateForm.vue';
import TranslateOutput from './TranslateOutput.vue';
import envvars from '../../env-vars';

export default {
  name: 'TranslatorComponent',
  components: {
    TranslateForm,
    TranslateOutput
  },
  methods: {
    translateText: function(theText){
      var endpoint = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key='
      // this.$http.get
      console.log(envvars.YANDEX_KEY);
    }
  }
}
</script>
