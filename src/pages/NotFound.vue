<script setup>

import { useRouter } from "vue-router"

const router = useRouter()


function clickHandler() {
    router.push("/");
}
</script>

<template>
    <div>
        <h1>404 NOT FOUND BRO! 😢</h1>
        <button @click="clickHandler"> Return Home Page </button>
    </div>
</template>

<style scoped>

button{
    width: 250px;
    height: 70px;
    background: #0029FF;
    border-radius: 16px;
    padding: 5px;
    align-items: center;
    color: white;
    margin-left: 5px;
    position: absolute;
    left: 50%;
    top: 70%;
    transform: translate(-50%, -50%);
    cursor: pointer;

    animation: blinker 1.5s linear infinite;
      font-size: 20px;
      font-weight: bold;
      font-family: sans-serif;
      }
      @keyframes blinker {  
      50% { opacity: 0; }
}


    
button:before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(-45deg, #ff3d00 0%, #0400ff 100% );
    transform: translate3d(0px, 20px, 0) scale(0.95);
    filter: blur(10px);
    opacity: var(0.7);
    transition: opacity 0.3s;
    border-radius: inherit;
}

button::after {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: inherit;
    border-radius: inherit;
}

h1{
    color: red;
}

div{
    width: 570px;
    height: 250px;
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
</style>