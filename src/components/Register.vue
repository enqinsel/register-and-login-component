<script setup>
import InputName from "./Inputs/InputName.vue";
import InputMail from "./Inputs/InputMail.vue";
import InputPhone from "./Inputs/InputPhone.vue";
import InputPassword from "./Inputs/InputPassword.vue"
import { ref, computed, onMounted } from "vue"


const form = ref({
    name : "",
    email : "",
    phone : "",
    password : ""
})

const isDisabled = computed(() => {
    if ((form.value.name && form.value.email && form.value.phone && form.value.password).length > 1) {
        return true
    } else {
        return false
    }
})



const showRegister = ref(true)
function registerHandler() {
    const task = localStorage.setItem("user", JSON.stringify(form.value))
    showRegister.value = false
    return task
}

const clickHandler = () => {
    showRegister.value = false
}

onMounted(() => {
    const user = localStorage.getItem("user")
    user && (showRegister.value = false)
})

</script>

<template>
    <div v-if="showRegister" class="container">
        <h1>Register</h1>
        <div>
            <InputName v-model:name="form.name" placeholder="Full Name"></InputName>
            <InputMail v-model:email="form.email"></InputMail>
            <InputPhone v-model:phone="form.phone"></InputPhone>
            <InputPassword v-model:password="form.password" placeholder="Password"></InputPassword>
        </div>
        <div>
            <button @click="registerHandler" :disabled="!isDisabled">Register</button>
            <button @click="clickHandler">Have Account? Sign In</button>
        </div>
    </div>
</template>


<style scoped>
button {
    width: 270px;
    color: white;
    background: #AD00FF;
    border-radius: 16px;
    padding: 5px;
    margin-left: 5px;
    border: 0;
    cursor: pointer;
}

button:disabled{
    opacity: 0.5;
    background: #505050;
}

h1 {
    color: #2244F4;
}

.container {
    width: 570px;
    height: 699px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
    background: #FFFFFF;
    box-shadow: 0px 0px 50px -8px rgba(0, 0, 0, 0.37);
    border-radius: 12px;
}
</style>