<script setup>
import { onMounted, ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const user = ref({})

onMounted(() => {
    const local = JSON.parse(localStorage.getItem("user"))
    user.value = local
})


const logoutHandler = () => {
    localStorage.removeItem("user");
    router.push("/");
}

</script>

<template>

    <div>
        <h2>Profile</h2>
        <ul>
            <li><b>Name:</b> {{user.name}}</li>
            <li><b>E-mail:</b> {{user.email}}</li>
            <li><b>Phone:</b> {{user.phone}}</li>
            <li><b>Password:</b> <span class="password">{{user.password}}</span></li>
        </ul>
        <button @click="logoutHandler">Delete Account</button>
    </div>



</template>


<style scoped>
.password {
    filter: blur(4px);
    cursor: zoom-in;
}

.password:hover {
    filter: blur(0px)
}

h2 {
    color: #0029FF;
    /* text-align: center; */
}

button {
    width: 150px;
    height: 50px;
    background: #0029FF;
    border-radius: 16px;
    padding: 10px;
    align-items: center;
    color: white;
    margin-left: 5px;
    position: absolute;
    left: 50%;
    top: 90%;
    transform: translate(-50%, -50%);
    cursor: pointer;
}

div {
    width: 275px;
    height: 407px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
    background: #FFFFFF;
    box-shadow: 0px 0px 50px -8px rgba(0, 0, 0, 0.37);
    border-radius: 12px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

}

ul {
    list-style-type: none;
    position: absolute;
    top: 20%;
    left: 0%;
}

li {
    margin-bottom: 30px;
}
</style>