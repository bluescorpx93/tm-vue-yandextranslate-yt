<template>
  <div>
    <h4> Powered by Vue.js and Yandex API</h4>
    <form v-on:submit="submitData">
      <div class='form-group'>
        <input type='text' v-model="textToTranslate" placeholder='Type a word' />
      </div>
      <div class='form-group'>
        <select v-model="toLanguage">
          <option value='es'>
            Spanish
          </option>
          <option value='ru'>
            Russian
          </option>
          <option value='bn'>
            Bengali
          </option>
          <option value='zh'>
            Chinese
          </option>
          <option value='th'>
            Thai
          </option>
        </select>
      </div>
      <div class='form-group'>
        <input type='submit' value='Translate!' />
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name : 'TranslateForm',
    data() {
      return {
        textToTranslate : "",
        toLanguage : ""
      }
    },
    mounted(){
      this.toLanguage = 'bn';
    },
    methods: {
      submitData: function(e){
        e.preventDefault();
        var translationDetails = {
          textToTranslate : this.textToTranslate,
          toLanguage: this.toLanguage
        }
        this.$emit('dataSent', translationDetails);
      }
    }
  }
</script>
