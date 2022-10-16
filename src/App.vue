<script setup>
import Register from "./components/Register.vue"
import Login from "./components/Login.vue";

</script>

<template>
    <div>
        <Login></Login>
        <Register></Register>
    </div>
</template>

<style scoped>
div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    height: auto;
}
</style>
