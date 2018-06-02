<template>
<div>
  <h1>Yandex Word Translator</h1>
  <TranslateForm v-on:dataSent="translateText"></TranslateForm>
  <TranslateOutput v-bind:the_translated_text="translatedText"></TranslateOutput>
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
      var endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${envvars.YANDEX_KEY}&lang=ru&text=${theText}&lang=${toLang}`;
      this.$http.get(endpoint).then( (res) => {
        console.log(res.body.text[0]);
        this.translatedText = res.body.text[0];
      });

    }
  }
}
</script>
