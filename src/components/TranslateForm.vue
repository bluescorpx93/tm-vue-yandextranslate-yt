<template>
  <div class='mt48'>
    <h6> Powered by Vue.js and Yandex API</h6>
    <form class='mt24' v-on:submit="submitData">
      <div class='form-group'>
        <input type='text' class='form-control' v-model="textToTranslate" placeholder='Type a word / sentence' v-on:keyup="submitData"/>
      </div>
      <div class='form-group'>
        <select v-model="toLanguage" class='form-control' >
          <option value='es'>Spanish</option>
          <option value='ru'>Russian</option>
          <option value='tr'>Turkish</option>
          <option value='bn'>Bengali</option>
          <option value="hy">Armenian</option>
          <option value="ar">Arabic</option>
          <option value='zh'>Chinese</option>
          <option value="pt">Portuguese</option>
          <option value='fr'>French</option>
          <option value='th'>Thai</option>
          <option value='sk'>Slovakian</option>
        </select>
      </div>
      <div class='text-uppercase col-sm-6 offset-sm-3 mt24'>
        <input class='btn btn-success btn-block' type='submit' value='Translate!' />
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
