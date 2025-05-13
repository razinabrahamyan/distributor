<script setup>
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

defineProps({
  items: { type: Array, required: true },
});
</script>

<template>
  <SidebarMenu>
    <SidebarMenuItem v-for="item in items" :key="item.title">
      <SidebarMenuButton as-child :is-active="item.isActive">
        <router-link :to="item.url">
          <component :is="item.icon" />
          <span>{{ item.title }}</span>
        </router-link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  </SidebarMenu>
</template>
