import VueRouter from 'vue-router'

import home from './components/home.vue'
import member from './components/member.vue'
import shopong from './components/shopong.vue'
import sous from './components/sous.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    // account  goodslist
    {path:'/',redirect:'/home'},
    {path:'/home',component:home},
    {path:'/member',component:member},
    {path:'/shopcar',component:shopong},
    {path:'/search',component:sous}
    ],
      linkActiveClass:'mui-active'
})

// 把路由对象暴露出去
export default router