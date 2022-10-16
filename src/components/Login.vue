<script setup>
import InputName from "./Inputs/InputName.vue"
import InputPassword from "./Inputs/InputPassword.vue"
import { ref, computed } from "vue"

const name = ref("")
const password = ref("")


</script>

<template>
<div class="container">
        <h1>Login</h1>
        <div>
            {{name}}
            <InputName v-model:name="name" placeholder="Username"></InputName> <br><br>
            {{password}}
            <InputPassword v-model:password="password" placeholder="Password"></InputPassword>
        </div>
        <div>
            
        </div>
    </div>
</template>