<template>
    <div class="button-vue">
        <button @click="handleClick">click me</button>
        <p v-if="buttonmsg">
            {{buttonmsg}}
        </p>
        <p v-else>test</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            buttonmsg:"boton renderizado correctamente"
        }
    },
    methods:{
        handleClick(){
            this.buttonmsg = this.buttonmsg.split("").reverse().join("")
        }
    }
}
</script>
<style>
button{
    background-color:#000;
    color: white;
    font-weight: 600;
    font-size: 1rem;
    border-radius: 2rem;
    border: none;
}
</style>