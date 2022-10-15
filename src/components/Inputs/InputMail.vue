<script setup>
import { computed } from 'vue';
const props = defineProps(["email"])
const emits = defineEmits(["update:email"])

const emailHandler = (event) => {
    emits("update:email", event.target.value)
}

const isValid = computed(() => {
    return  /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(props.email);
 })
</script>

<template>
    <input type="text" id="email" :value="props.email" placeholder="E-mail" @input="emailHandler">
    <p v-if="!isValid">Geçersiz E-mail</p>
</template>