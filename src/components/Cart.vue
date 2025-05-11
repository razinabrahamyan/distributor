<template>
  <div>
    <h2 class="text-lg font-semibold mb-2">Your Cart</h2>
    <ul v-if="cart.length">
      <li v-for="p in cart" :key="p.id">✔ {{ p.name }} - ${{ p.price }}</li>
    </ul>
    <p v-else>No products added.</p>
    <button v-if="cart.length" @click="$emit('submit')" class="btn mt-4">Submit</button>
  </div>
</template>

<script setup>
defineProps(['cart'])
</script>
