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
    <input type="password" class="password" :value="props.password" :placeholder="props.placeholder" @input="passwordHandler">
    <p class="warning" v-if="!isValid">At least one upper case English letter, At least one lower case English letter,At least one digit, At least one special character (#?!@$%^&*-), Minimum eight in length </p>
</template>


<style scoped>
.password {
    box-sizing: border-box;
    width: 363px;
    height: 43px;

    background: #FFFFFF;
    border: 3px solid #A36BFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
}

.warning{
    width: 410px;
    
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