<script setup>
import useCartStore from "@/stores/cart.js";
import {Minus, Plus, ShoppingCart, Trash2} from "lucide-vue-next";
import {ref} from "vue";

const cart = useCartStore()

const increment = (item, e) => {
  e.preventDefault()
  cart.increment(item)
}
const remove = (item, e) => {
  e.preventDefault()
  cart.remove(item)
}
const decrement = (item,e) => {
  e.preventDefault()
  cart.decrement(item)
}
</script>

<template>
  <div class="p-4 pt-0">
    <h2 class="text-xl font-bold mb-4">Ваша корзина</h2>
    <div class="" v-if="cart.items.length > 0">
      <transition-group  name="fade-collapse" tag="div" class="flex flex-col gap-2">
        <div v-for="item in cart.items" :key="item.code" class="border rounded-lg p-2">
          <div class="flex justify-between gap-2">
            <div class="flex flex-col gap-1">
              <div class="flex gap-2 ">
                <img :src="item.image" class="size-20" alt="item">
                <div class="max-w-[500px]">
                  <p class="font-semibold">{{item.code}}</p>
                  <p class="text-gray-600 text-sm leading-4 ">{{item.name}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-between">
            <div class="flex gap-2 items-center">
              <button @click="(e) => decrement(item,e)" class="rounded-full text-white bg-red-500 flex justify-center items-center p-1">
                <Minus size="10" stroke-width="5"/>
              </button>
              <ShoppingCart class="text-blue-500" size="15"/>
              <span class="text-blue-500 font-semibold">{{cart.get(item).count}}</span>
              <button @click="(e) => increment(item,e)" class="rounded-full text-white bg-blue-500 flex justify-center items-center p-1">
                <Plus size="10" stroke-width="5"/>
              </button>
            </div>
            <button @click="(e) => remove(item,e)" class="rounded-full text-red-500  flex justify-center items-center">
              <Trash2 size="18" stroke-width="2"/>
            </button>
          </div>
        </div>
      </transition-group>
    </div>
    <p v-else>Корзина Пуста</p>
    <button v-if="cart.items.length" @click="cart.clear()" class="mt-4 bg-red-500 text-white px-4 py-1 rounded">
      Clear Cart
    </button>
  </div>
</template>


<style>

</style>