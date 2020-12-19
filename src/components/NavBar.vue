<template>
  <el-menu  class="nav" mode="horizontal" router>
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="postVideo">投稿</el-menu-item>
    <el-menu-item index="about">关于</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'NavBar',
  props: {

  }
}
</script>

<style>
.nav{
  margin-bottom: 30px;
}
</style>
