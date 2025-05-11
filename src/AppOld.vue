<template>
  <div class="p-6 max-w-2xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">Mini Shop</h1>
    <div class="space-x-4 mb-4">
      <button @click="page = 'login'" class="btn">Login</button>
      <button @click="page = 'products'" class="btn">Products</button>
      <button @click="page = 'cart'" class="btn">Cart</button>
    </div>

    <component :is="pages[page]" :cart="cart" @add="addToCart" @submit="submitCart" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Login from './components/Login.vue'
import Products from './components/Products.vue'
import Cart from './components/Cart.vue'

const page = ref('login')
const pages = { login: Login, products: Products, cart: Cart }
const cart = ref([])

function addToCart(product) {
  if (!cart.value.find(p => p.id === product.id)) {
    cart.value.push(product)
  }
}

function submitCart() {
  alert("Pretending to send email with:\n" + cart.value.map(p => p.name).join(", "))
  cart.value = []
}
</script>

<style>
.btn {
  @apply bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700;
}
</style>
