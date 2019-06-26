import Vue from 'vue'
import app from './App.vue'
//header
import { Header ,Swipe, SwipeItem} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
 
//router
import VueRouter from 'vue-router'
Vue.use(VueRouter) 

//导入router
import router from './router.js'

//引入vue-resource
import VUeResource from 'vue-resource'
Vue.use(VUeResource)

//
import axios from 'axios'

var vm=new Vue({
	el:'#app',
	
	render:c=>c(app),
	router
})