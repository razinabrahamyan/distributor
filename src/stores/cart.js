import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: []
    }),
    actions: {
        increment(product) {
            const existing = this.items.find(item => item.code === product.code)
            if (!existing) {
                this.items.push({...product, count:1})
            }else{
                existing.count ++
            }

        },
        decrement(product) {
            const existing = this.items.find(item => item.code === product.code)
            if(existing.count === 1){
                this.items = this.items.filter(item => item.code !== product.code)
            }else{
                existing.count --
            }
        },
        remove(product){
            this.items = this.items.filter(item => item.code !== product.code)
        },
        has(product){
            return this.items.some(item => item.code === product.code)
        },
        get(product){
            return this.items.find(item => item.code === product.code)
        },
        clear() {
            this.items = []
        }
    },
    persist: true
})
export default useCartStore