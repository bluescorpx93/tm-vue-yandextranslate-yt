<template>
  <div>
    <h6> Powered by Vue.js and Yandex API</h6>
    <form  class='mt48' v-on:submit="submitData">
      <div class='form-group'>
        <input type='text' class='form-control' v-model="textToTranslate" placeholder='Type a word' />
      </div>
      <div class='form-group'>
        <select v-model="toLanguage" class='form-control' >
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
        <input class='btn btn-success' type='submit' value='Translate!' />
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
