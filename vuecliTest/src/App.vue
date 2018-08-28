<template>
  <div id="app">
    <img src="./assets/logo.png">
     <router-view/>
    <p>
      <router-link to="/">首页</router-link> | 
      <router-link to="/hi">Hi页面</router-link> |
      <router-link to="/hi/hi1">-Hi页面1</router-link> |
       <!-- <router-link :to="{name:'hi1',params:{username:'kaikai'}}">-Hi页面1</router-link> | -->
      
      <router-link to="/hi/hi2">-Hi页面2</router-link>
  <router-link to="/params/198/jspang website is very good">params</router-link>

  </p>
  <p>{{$route.name}}</p>

  <!-- <router-view ></router-view>
 <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
 <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>
  
  <router-link to="/params/198/jspang website is very good">params</router-link>
   -->
  
  </div>
  
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
