<script setup>
import InputName from "./Inputs/InputName.vue";
import InputMail from "./Inputs/InputMail.vue";
import InputPhone from "./Inputs/InputPhone.vue";
import InputPassword from "./Inputs/InputPassword.vue"
import { ref, computed } from "vue"


const name = ref("")
const email = ref("")
const phone = ref("")
const password = ref("")


const isDisabled = computed(() => {
    if ((name.value && email.value && phone.value && password.value).length > 1) {
        return true
    } else {
        return false
    }
})

// const obj = {
//     "name": name.value,
//     "email": email.value,
//     "phone": phone.value,
//     "password": password.value
// }

const showRegister = ref(true)
// function registerHandler() {
//     const task = localStorage.setItem("task", JSON.stringify(obj))
//     return task
// }

function registerHandler() {
    localStorage.setItem("name", name.value)
    localStorage.setItem("email", email.value)
    localStorage.setItem("phone", phone.value)
    localStorage.setItem("password", password.value)
    showRegister.value = false
    const localName = localStorage.getItem("name")
    const localPassword = localStorage.getItem("password")

    console.log(localName);
    console.log(localPassword);
}
</script>

<template>
    <div v-if="showRegister" class="container">
        <h1>Register</h1>
        <div>
            <InputName v-model:name="name" placeholder="Full Name"></InputName>
            <InputMail v-model:email="email"></InputMail>
            <InputPhone v-model:phone="phone"></InputPhone>
            <InputPassword v-model:password="password" placeholder="Password"></InputPassword>
        </div>
        <div>
            <button @click="registerHandler" :disabled="!isDisabled">Register</button>
            <button>Have Account? Sign In</button>
        </div>
    </div>
</template>


<style scoped>
button {
    width: 270px;

    background: #AD00FF;
    border-radius: 16px;
    padding: 5px;
    margin-left: 5px;
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