<script setup>
import AppSidebar from '@/components/AppSidebar.vue';
import NavActions from '@/components/NavActions.vue';
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
  <!--          <Breadcrumb>-->
  <!--            <BreadcrumbList>-->
  <!--              <BreadcrumbItem>-->
  <!--                <BreadcrumbPage class="line-clamp-1">-->
  <!--                  Project Management & Task Tracking-->
  <!--                </BreadcrumbPage>-->
  <!--              </BreadcrumbItem>-->
  <!--            </BreadcrumbList>-->
  <!--          </Breadcrumb>-->
        </div>
        <div class="ml-auto px-3">
          <NavActions />
        </div>
      </header>
      <div class="flex-1  px-4 py-10">
        <router-view/>
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
