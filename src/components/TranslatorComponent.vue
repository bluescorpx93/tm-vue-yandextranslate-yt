<template>
  <div class='row'>
    <div class='col-md-12'>
      <h1>Rusty Translator</h1>
    </div>
    <div class='col-md-6'>
      <TranslateForm v-on:dataSent="translateText"></TranslateForm>
    </div>
    <div class='col-md-6'>
      <TranslateOutput v-bind:the_translated_text="translatedText"></TranslateOutput>
    </div>
    <div class='col-md-12'>
      <p class='mt36'> Created By <span class='myMark'>BurningRaven06</span></p>
    </div>
  </div>
</template>

<script>
import TranslateForm from './TranslateForm.vue';
import TranslateOutput from './TranslateOutput.vue';
import appKeys from '../keys/appKeys.js';

export default {
  name: 'TranslatorComponent',
  components: {
    TranslateForm,
    TranslateOutput
  },
  data() {
    return {
      translatedText : ""
    }
  },
  methods: {
    translateText: function(translationInfo){
      var theText = translationInfo.textToTranslate;
      var toLang = translationInfo.toLanguage;

      var translatedText = "";
      var endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${appKeys.YANDEX_KEY}&lang=ru&text=${theText}&lang=${toLang}`;
      this.$http.get(endpoint).then( (res) => {
        this.translatedText = res.body.text[0];
      });

    }
  }
}
</script>
