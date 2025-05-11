<template>
  <div class="grid grid-cols-1 gap-4">
    <div v-for="p in products" :key="p.id" class="border p-4 rounded shadow">
      <h3 class="font-bold">{{ p.name }}</h3>
      <p>\${{ p.price }}</p>
      <button @click="$emit('add', p)" class="btn mt-2">Add to Cart</button>
    </div>
  </div>
</template>

<script setup>
const products = [
  { id: 1, name: 'Product A', price: 25 },
  { id: 2, name: 'Product B', price: 40 },
  { id: 3, name: 'Product C', price: 15 }
]
</script>
