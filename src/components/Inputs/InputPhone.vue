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
    <input type="text" id="phone" :value="props.phone" placeholder="Phone" @input="phoneHandler">
    <p v-if="!isValid">Geçersiz Numara(Başına sıfır koymadan yaziniz.)</p>
</template>