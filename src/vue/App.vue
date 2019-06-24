<template>
<div>
<h1>这是app</h1>
	<mt-button type="default" @click="show"> defaulu</mt-button>
	<router-link to="/app1">app1</router-link>
	<router-link to="/app2">app2</router-link>
	<router-view></router-view>
</div>
</template>

<script>
// 按需导入 Toast 组件
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      toastInstanse: null
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      // 模拟获取列表的 一个 AJax 方法
      // 在获取数据之前，立即 弹出 Toast 提示用户，正在加载数据
      this.show();
      setTimeout(() => {
        //  当 3 秒过后，数据获取回来了，要把 Toast 移除
        this.toastInstanse.close();
      }, 3000);
    },
    show() {
      // Toast("提示信息");
      this.toastInstanse = Toast({
        message: "这是消息",
        duration: -1, // 如果是 -1 则弹出之后不消失
        position: "top",
        iconClass: "glyphicon glyphicon-ok", // 设置 图标的类
        //className: "mytoast" // 自定义Toast的样式，需要自己提供一个类名
      });
    }
  }
};
</script>
<style>
</style>