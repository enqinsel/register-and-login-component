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

const obj = {
    "name": name.value,
    "email": email.value,
    "phone": phone.value,
    "password": password.value
}


function registerHandler() {
    const task = localStorage.setItem("task", JSON.stringify(obj))
    return task
}

</script>

<template>
    <div class="container">
        <h1>Register</h1>
        <div>
            {{name}}
            <InputName v-model:name="name" placeholder="Full Name"></InputName> <br><br>
            {{email}}
            <InputMail v-model:email="email"></InputMail> <br><br>
            {{phone}}
            <InputPhone v-model:phone="phone"></InputPhone> <br><br>
            {{password}}
            <InputPassword v-model:password="password" placeholder="Password"></InputPassword>
            {{password}}
            <InputPassword v-model:password="password" placeholder="Confirm Password"></InputPassword>
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
    padding: 10px;
    margin-left: 5px;
}

h1{
    color: #2244F4;
}
</style>