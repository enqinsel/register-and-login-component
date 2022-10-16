<script setup>
import { computed } from 'vue';
const props = defineProps(["phone"])
const emits = defineEmits(["update:phone"])

const phoneHandler = (event) => {
    emits("update:phone", event.target.value)
}

const isValid = computed(() => {
    return  /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(props.phone);
 })
</script>

<template>
    <input type="text" class="phone" :value="props.phone" placeholder="Phone" @input="phoneHandler">
    <p class="warning" v-if="!isValid">Geçersiz Numara(Başına sıfır koymadan yaziniz.)</p>
</template>

<style scoped>
.phone {
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