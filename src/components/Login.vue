<script setup>
import InputName from "./Inputs/InputName.vue"
import InputPassword from "./Inputs/InputPassword.vue"
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const name = ref("")
const password = ref("")




function loginHandler(){
    const user = JSON.parse(localStorage.getItem("user"))

    if((name.value === user.name) && (password.value === user.password)){
        router.push("/profile");
    }else{
        console.log("nooooo");
    }
}

</script>

<template>
    <div class="container">
        <h1>Login</h1>
        <div>
            <InputName v-model:name="name" placeholder="Username"></InputName>
            <InputPassword v-model:password="password" placeholder="Password"></InputPassword>
        </div>
        <div>
            <button @click="loginHandler">Login</button>
        </div>
    </div>
</template>


<style scoped>

h1{
    color: #0029FF;
    /* text-align: center; */
}

button {
    width: 270px;
    background: #0029FF;
    border-radius: 16px;
    padding: 10px;

    color: white;
    margin-left: 5px;
    margin-bottom: 20px;
}

.container{
    width: 475px;
    height: 507px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    text-align: center;
    background: #FFFFFF;
    box-shadow: 0px 0px 50px -8px rgba(0, 0, 0, 0.37);
    border-radius: 12px;
}
</style>