<template>
  <div id="schoolMap">
    
    <h1></h1>
    <h2>lucm vue适用于贵阳现阶段的前端架构</h2>
    
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://vuefe.cn/v2/guide" target="_blank">vue新手上路API</a></li>
      <li><a href="https://vuxjs.gitbooks.io/vux/content/" target="_blank">vux新手上路API</a></li>
    </ul>
    <h2>vue 新手上路中</h2>
    
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script >
  import SchoolMapJs from 'schoolMapJs'
  export default {
    components: {
      SchoolMapJs
    }
  }
</script>


<style type="text/scss" lang="scss">
  @import '../scss/schoolMapScss'
</style>



