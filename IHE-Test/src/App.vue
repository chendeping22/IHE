<template>
  <div id="app">
    <router-view />
     <!-- <v-head></v-head> -->
     <!-- <div class="lw-main">
        <transition name="move" mode="out-in">
          <router-view></router-view>
        </transition>
    </div> -->
  </div>
</template>

<script>
// import vHead from "./components/common/Header.vue";
export default {
  name: "App",
  // components: {
  //   vHead
  // }
};
</script>

<style>
 @import '../static/css/main.css'
</style>
