<script setup>
import { onMounted, ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const user = ref({})

onMounted(() =>{
    const local = JSON.parse(localStorage.getItem("user"))
    user.value = local
})


const logoutHandler = () => {
    localStorage.removeItem("user");
    router.push("/");
}

</script>

<template>

    <ul>
        <li>{{user.name}}</li>
        <li>{{user.email}}</li>
        <li>{{user.password}}</li>
    </ul>

    <button @click="logoutHandler">Log out</button>
</template>