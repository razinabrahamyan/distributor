<template>
  <form class="space-y-4">
    <div>
      <label>Email:</label>
      <input type="email" class="input" />
    </div>
    <div>
      <label>Password:</label>
      <input type="password" class="input" />
    </div>
    <button type="submit" class="btn">Login</button>
  </form>
</template>

<style scoped>
.input {
  @apply border px-3 py-2 rounded w-full;
}
</style>
