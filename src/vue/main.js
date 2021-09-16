import Vue from 'vue';
import AppComponent from './components/App.vue'

new Vue({
    el:"#vue-injector",
    render: h => h(AppComponent)
})