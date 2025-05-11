<script setup>
import AppSidebar from '@/components/AppSidebar.vue';
import NavActions from '@/components/NavActions.vue';
import {
  ShoppingCart,
  Minus,
  Plus
} from 'lucide-vue-next';
import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card/index.js";
import {ref} from "vue";
const length = 50

const truncateText = (item) => {
  return item.expanded ? item.name : (item.name.slice(0, length) + (item.name.length > length ? '...' : ''))
}
const addToCart = (item) => {
  item.added = true
  item.count = 1
}
const increase = (item, e) => {
  e.preventDefault()
  item.added = true
  item.count = (item.count || 0) + 1
}
const decrease = (item,e) => {
  e.preventDefault()
  item.count = item.count - 1
  if(!item.count){
    item.added = false
  }
}
const hasMore = (text) => {
  return text.length > length
}
const expand = (item) => {
  console.log(item)
  item.expanded = !item.expanded
  console.log(item)
}
const items = ref([
  {
    code:'НС-1189874',
    name:'Փայտե տակդիր',
    warehouse:6,
    left:150.000,
    image:'https://rkcdn.ru/products/2a21fd4f-2962-11ef-b8d8-00505601218a/main_big.jpg'
  },
  {
    code:'НС-1166650',
    name:'Электронагреватель для круглого канала EHC 160-6,0/2 / Էլեկտրական ջեռուցիչ կլոր խողովակի համար EHC 160-6.0/2',
    warehouse:6,
    left:2.000,
    image:'https://rkcdn.ru/products/9bb476b4-9de4-11ef-b8dc-00505601218a/src.jpg'
  },
  {
    code:'НС-1166649',
    name:'Электронагреватель для круглого канала EHC 125-2,4/1 / Էլեկտրական ջեռուցիչ կլոր խողովակի համար EHC 125-2.4/1',
    warehouse:6,
    left:2.000,
    image:'https://rkcdn.ru/products/95a638c5-9de4-11ef-b8dc-00505601218a/src.jpg'
  },
  {
    code:'НС-1434420',
    name:'Электрокотел ЭВАН EXPERT PLUS -12 / Ջեռուցման էլեկտրական կաթսա ЭВАН EXPERT PLUS -12',
    warehouse:6,
    left:8.000,
    image:'https://rkcdn.ru/products/c7a77b62-1ecf-11ed-b732-005056013a69/src.jpg'
  },
  {
    code:'НС-1434419',
    name:'Электрокотел ЭВАН EXPERT PLUS - 9 / Ջեռուցման էլեկտրական կաթսա ЭВАН EXPERT PLUS - 9',
    warehouse:6,
    left:9.000,
    image:'https://rkcdn.ru/products/be51a7f1-c408-11ed-b733-005056013a69/main_big.jpg'
  },
  {
    code:'НС-1429043',
    name:'Электродвигатель вентилятора наружного блока EACS/I-18HAT/N3_21Y (11002012035134) / Արտաքին բլոկի օդափոխիչի էլեկտրական շարժիչ EACS/I-18HAT/N3_21Y (11002012035134)',
    warehouse:6,
    left:2.000,
    image:'https://rkcdn.ru/products/383bc516-6782-11ef-b8db-00505601218a/src.jpg'
  },
  {
    code:'НС-1187238',
    name:'Электродвигатель вентилятора внутреннего блока KON-07/09/12HN1_19Y (11002012031474) / Ներքին միավորի օդափոխիչի էլեկտրական շարժիչ KON-07/09/12HN1_19Y (11002012031474)',
    warehouse:6,
    left:1.000,
    image:'https://rkcdn.ru/products/fa178fab-eea2-11ef-b8de-00505601218a/src.jpg'
  },
  {
    code:'НС-1198126',
    name:'Электродвигатель вентилятора внутреннего блока EACS/I-24HFE/N3_In (11002015008646) / Ներքին միավորի օդափոխիչի էլեկտրական շարժիչ EACS/I-24HFE/N3_In (11002015008646)',
    warehouse:6,
    left:1.000,
    image:'https://rkcdn.ru/products/2b4da66f-6ad0-11ef-b8db-00505601218a/src.jpg'
  },
  {
    code:'НС-0007017',
    name:'Эл/нагреватель для круглого канала EHC 250-9,0/3 / Էլեկտրական ջեռուցիչ կլոր խողովակի համար EHC 250-9.0/3',
    warehouse:10,
    left:4.000,
    image:'https://rkcdn.ru/products/536b84b8-9de4-11ef-b8dc-00505601218a/src.jpg'
  },
  {
    code:'НС-1088884',
    name:'Шланг дренажный Ballu 20 x 30000 (мм), бухта / Դրենաժային խողովակ Ballu 20 x 30000 (մմ), փաթեթ',
    warehouse:8,
    left:5.000,
    image:'https://rkcdn.ru/products/d06fc426-816f-11ef-b8db-00505601218a/src.jpg'
  },
  {
    code:'НС-1135559',
    name:'Чехол защитный Ballu BOGH-P для BOGH-15 / Պաշտպանիչ պատյան Ballu BOGH-P BOGH-15-ի համար',
    warehouse:10,
    left:4.000,
    image:'https://rkcdn.ru/products/3c3ad676-bdfa-11ef-b8dc-00505601218a/src.jpg'
  },
  {
    code:'НС-0010382',
    name:'Фильтр-бокс (корпус) SHUFT FBRr 600*350/  Զտիչ տուփ (մաս) SHUFT FBRr 600*350',
    warehouse:10,
    left:4.000,
    image:'https://rkcdn.ru/products/e6904eef-9de6-11ef-b8dc-00505601218a/src.jpg'
  },
  {
    code:'НС-0010478',
    name:'Фильтр карманный (материал) SHUFT FRr (G3-EU3) 600*350/ Գրպանի ֆիլտր (նյութ) SHUFT FRr (G3-EU3) 600*350',
    warehouse:10,
    left:4.000,
    image:'https://rkcdn.ru/products/fb8048e1-bee6-11ef-b8dc-00505601218a/main_big.jpg'
  },
  {
    code:'НС-1517673',
    name:'Фанкойл напольно-потолочный Shuft SFF-800/ Հատակաառաստաղային ֆանկոյլ Shuft SFF-800',
    warehouse:10,
    left:4.000,
    image:'https://rkcdn.ru/products/327267c0-ccc1-11ee-b8d6-00505601218a/src.jpg'
  },
  {
    code:'НС-1521738',
    name:'Установка приточно-вытяжная Shuft Star PVS-650  / Օդափոխման միավոր Shuft Star PVS-650',
    warehouse:10,
    left:4.000,
    image:'https://rkcdn.ru/products/4da23cfe-0647-11f0-b8de-00505601218a/src.jpg'
  }
])


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
      <div class="flex-1 grid grid-cols-12 gap-4 px-4 py-10">
        <div class="col-span-6 sm:col-span-4 md:col-span-6 lg:col-span-4 xl:col-span-3" v-for="item in items">
          <Card class="h-full flex flex-col">
            <CardHeader class="!p-4 lg:!p-6">
              <p class="font-semibold">{{item.code}}</p>
              <img :src="item.image" alt="">
            </CardHeader>
            <CardContent class="!p-4 lg:!p-6 flex flex-col flex-1 justify-between">
              <CardTitle class="text-sm">{{truncateText(item)}} <button v-if="hasMore(item.name)" @click="expand(item)" :class="`underline ${item.expanded ? 'text-blue-400 font-normal' : 'font-semibold text-blue-500'}`">
                {{ item.expanded ? 'пок.меньше' : 'пок.больше' }}</button></CardTitle>
              <div class="flex justify-between mt-2">
                <div></div>
                <div>
                  <button v-if="!item.added" @click="addToCart(item)" class="flex items-center rounded-full px-4 gap-2 bg-blue-500 p-1 text-xs text-white">Доб <ShoppingCart size="15"/></button>
                  <div v-else class="flex gap-2 items-center">
                    <button @click="(e) => decrease(item,e)" class="rounded-full text-white bg-red-500 flex justify-center items-center p-1">
                      <Minus size="10" stroke-width="5"/>
                    </button>
                    <ShoppingCart class="text-blue-500" size="15"/>
                    <span class="text-blue-500 font-semibold">{{item.count}}</span>
                    <button @click="(e) => increase(item,e)" class="rounded-full text-white bg-blue-500 flex justify-center items-center p-1">
                      <Plus size="10" stroke-width="5"/>
                    </button>
                  </div>
                </div>

              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
