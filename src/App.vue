<script setup>
import { RouterView, useRouter } from 'vue-router'
const router = useRouter()
function onReactAppClick () {
  // router.push({ path: '/micro' })
}
function onVueAppClick () {
  // router.push({ path: '/micro/home' })
}
function onExpressAppClick () {
  router.push({ path: '/views' })
}
</script>

<template>
  <nav>
    <div @click="onReactAppClick">
      react-app
    </div>
    <div @click="onVueAppClick">
      vue3-app
    </div>
    <div @click="onExpressAppClick">
      express-app
    </div>
  </nav>
  <RouterView />
</template>

<style scoped>
  nav {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }
  div {
    padding: 10px;
    border: 1px solid gray;
    border-radius: 2px;
    cursor: pointer;
    margin-right: 5px;
  }
  div:last-child {
    margin-right: 0;
  }
</style>
