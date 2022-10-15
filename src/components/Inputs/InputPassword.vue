<script setup>
import { computed } from 'vue';
const props = defineProps(["password", "placeholder"])
const emits = defineEmits(["update:password"])

const passwordHandler = (event) => {
    emits("update:password", event.target.value)
}

const isValid = computed(() => {
    return  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(props.password);
 })
</script>

<template>
    <input type="password" id="password" :value="props.password" :placeholder="props.placeholder" @input="passwordHandler">
    <p v-if="!isValid">At least one upper case English letter, At least one lower case English letter,At least one digit, At least one special character (#?!@$%^&*-), Minimum eight in length </p>
</template>
