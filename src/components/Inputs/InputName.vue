<script setup>
import { computed } from 'vue';
const props = defineProps(["name"])

const emits = defineEmits(["update:name"])

const nameHandler = (event) => {
    emits("update:name" , event.target.value)
}

const isValid = computed(() => {
    return props.name.length > 1
})

</script>

<template>
    <input type="text" id="name" :value="props.name"  placeholder="Full Name" @input="nameHandler">
    <p v-if="!isValid">Geçersiz isim</p>
</template>
