<script setup>
import { computed } from 'vue';

const props = defineProps(["name", "placeholder"])

const emits = defineEmits(["update:name"])

const nameHandler = (event) => {
    emits("update:name", event.target.value)
}

const isValid = computed(() => {
    return (props.name.length > 1)
})

</script>

<template>
    <input type="text" class="name" :value="props.name" :placeholder="props.placeholder" @input="nameHandler">
    <p class="warning" v-if="!isValid">Invalid Name</p>

</template>


<style scoped>
.name {
    box-sizing: border-box;
    width: 363px;
    height: 33px;
    margin-bottom: 20px;
    background: #FFFFFF;
    border: 2px solid #A36BFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
}

.warning {
    width: 348px;
    margin-bottom: 20px;
    background-color: rgb(255, 255, 255);
    border: 1px dotted #cb000094;
    box-shadow: 0px 4px 4px rgba(255, 60, 0, 0.25);
    border-radius: 15px 15px 0px 0px;
    margin-left: 50%;
    margin-top: 5%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 12px;
    padding: 5px;
    transition: all 0.3s ease;
}
</style>