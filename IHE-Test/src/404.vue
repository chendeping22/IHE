<template>
  <div class="error-content">
    <div class="error-img">
      <img src="static/img/error/404.png">
    </div>
    <div class="error-tips">404 页面没有找到</div>
  </div>
</template>

<script>
  export default {
  
  }
</script>

<style scoped>
  .error-content {
    width: 480px;
    height: 100%;
    margin: 100px auto 0;
  }
  
  .error-img {
    width: 100%;
    height: 320px;
  }
  
  .error-img img {
    width: 100%;
    height: 100%;
  }
  
  .error-tips {
    width: 100%;
    text-align: center;
    font-size: 20px;
    color: #5a5e66;
  }
</style>