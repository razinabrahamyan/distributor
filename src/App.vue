<script>
export const description = 'A sidebar in a popover.';
export const iframeHeight = '800px';
</script>

<script setup>
import AppSidebar from '@/components/AppSidebar.vue';
import NavActions from '@/components/NavActions.vue';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <header class="flex h-14 shrink-0 items-center gap-2">
        <div class="flex flex-1 items-center gap-2 px-3">
          <SidebarTrigger />
          <Separator orientation="vertical" class="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage class="line-clamp-1">
                  Project Management & Task Tracking
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div class="ml-auto px-3">
          <NavActions />
        </div>
      </header>
      <div class="flex-1 grid grid-cols-12 gap-4 px-4 py-10">
        <div class="col-span-4">aaaa</div>
        <div class="col-span-4">aaaa</div>
        <div class="col-span-4">aaaa</div>
        <div class="col-span-4">aaaa</div>
        <div class="col-span-4">aaaa</div>
        <div class="col-span-4">aaaa</div>
        <div class="col-span-4">aaaa</div>
        <div class="col-span-4">aaaa</div>
        <div class="col-span-4">aaaa</div>
        <div class="col-span-4">aaaa</div>
        <div class="col-span-4">aaaa</div>
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
