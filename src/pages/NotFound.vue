<script setup>

import { useRouter } from "vue-router"

const router = useRouter()


function clickHandler(){
    router.push("/");
}
</script>

<template>
    <p>404 NOT FOUND BİLADERRR</p>

    <button @click="clickHandler"> Return Home Page </button>
</template>