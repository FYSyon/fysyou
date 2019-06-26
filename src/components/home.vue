<template>
	<div>
	<mt-swipe :auto="4000">
          <mt-swipe-item>1</mt-swipe-item>
          <mt-swipe-item>2</mt-swipe-item>
          <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    

     <ul class="mui-table-view mui-grid-view mui-grid-9">
		 <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		      <img src="../img/menu1.png">
	 <div class="mui-media-body">Home</div></a></li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="../img/menu2.png">
		      
		                    <div class="mui-media-body">Email</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../img/menu3.png">
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../img/menu4.png">
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                  <img src="../img/menu5.png">
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                  <img src="../img/menu6.png">
		                    <div class="mui-media-body">Phone</div></a></li>
	</ul>
    </div>
		
	
</template>

<script>
import axios from 'axios'
	export default {
  data () {
    return {
       lunbotuList: []
    }
  },
 /* created() {
    this.getLunbotu();
  },*/
  mounted () {
    axios
      .get('http://www.liulongbin.top:3005/api/getprodlist')
      .then(response => (console.log(response.request) ))
      .catch(function (error) { // 请求失败处理
        console.log(error);
      });
  }
 };
</script>

<style lang="less" scoped>
.mint-swipe{height:150px}
.mint-swipe-item{
	&:nth-child(1){background-color:red}
	&:nth-child(2){background-color:pink}
	&:nth-child(3){background-color:yellow}
}
.mui-grid-9,.mui-grid-view.mui-grid-9 .mui-table-view-cell{background-color:#fff;border:none}
.mui-grid-9 img{width:60px;height:60px}
</style>