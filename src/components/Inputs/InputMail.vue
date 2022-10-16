<script setup>
import { computed } from 'vue';
const props = defineProps(["email"])
const emits = defineEmits(["update:email"])

const emailHandler = (event) => {
    emits("update:email", event.target.value)
}

const isValid = computed(() => {
    return /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(props.email);
})
</script>

<template>
    <input type="text" class="email" :value="props.email" placeholder="E-mail" @input="emailHandler">
    <p class="warning" v-if="!isValid">Geçersiz E-mail</p>
</template>


<style scoped>
.email {
    box-sizing: border-box;
    width: 363px;
    height: 43px;

    background: #FFFFFF;
    border: 3px solid #A36BFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
}

.warning{
    width: 348px;
    
    background-color: rgb(255, 255, 255);
    border: 2px dotted #cb000094 ;
    box-shadow: 0px 4px 4px rgba(255, 60, 0, 0.25);
    border-radius: 15px 15px 0px 0px;

    text-align: center;
    font-size: 12px;
    padding: 5px;
    transition: all 0.3s ease;
}
</style>