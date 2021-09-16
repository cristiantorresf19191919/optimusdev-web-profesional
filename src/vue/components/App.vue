<template>
  <div id="app">
    <!-- two way databinding -->
    <input type="text" class="input-msg" v-model="message" />
    <h2 class="message">{{ message }}</h2>
    <Button/>
  </div>
</template>

<script>
import ButtonComponent from "./Button/Button.vue"
export default {
  data() {
    return {
      message: "Vue se ha renderizado correctamente",
    };
  },
  components:{
      Button:ButtonComponent
  }
};
</script>

<style>
.input-msg {
  padding: 2rem;
  border-radius: 20px;
  font-size: 2rem;
  border: none;
  outline: none;
  text-emphasis: none;
}
.message{
    color: white;
    font-family: 'Roboto', 'Helvetica';
    font-size:1.2rem;
}
</style>
