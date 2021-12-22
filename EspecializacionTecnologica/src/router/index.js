import {createRouter, createWebHistory} from 'vue-router'

const routes=[
{
    path:'/',
    name:'Home',
    component:()=>import('../views/inicio.vue')
},
{
    path:'/mis_personajes',
    name:'personajes',
    component:()=>import('../views/personajes.vue')
},
{
    path:'/NPCs',
    name :'npc',
    component:()=> import('../views/NPCs.vue')
},
{
    path:'/crear_personaje',
    name :'crear',
    component:()=> import('../views/crearPersonaje.vue')
},
{
    path:'/otros',
    name :'otros',
    component:()=> import('../views/otros.vue')
}, 
{
    path:'/npc/:id',
    name :'npces',
    component:()=> import('../views/selectorNpc.vue')
}

]
   const router = createRouter({
       history:createWebHistory(process.env.BASE_URL),
       routes
   })

   export default router