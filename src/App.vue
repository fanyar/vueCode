<template>
  <div id="app" class="wrap">
    <router-link :to="{name: 'welcome'}">
      <IviewHead>
        <div slot="header" style="text-align: left">
          <span>logo</span>
          <p class="login">登录</p>
        </div>
      </IviewHead>
    </router-link>
    <div style="overflow: hidden; height: 100%">
      <IvieNav class="nev"></IvieNav>
      <div class="body-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import IvieNav from '@/page/IviewNav'
  import IviewHead from '@/page/Head'


  export default {
  name: 'App',
    components:{
      IvieNav,
      IviewHead
    }
}
</script>
<style>
  @import "./assets/base.css";
</style>
<style scoped>
  .wrap{
    overflow: hidden;
    height: 100%;
  }
  .nev{
    float: left;
    height: 100%;
    background: #515a6e;
  }
  .body-content{
    float: left;
    padding: 15px;
    height:  -webkit-calc(100% - 50px);
    width: -webkit-calc(100% - 240px);
    overflow: auto;
  }
  .login{
    float: right;
    padding-right: 20px;
    font-size: 14px;
  }
  ::-webkit-scrollbar {/*滚动条整体样式*/
    width: 10px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }
  ::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 10px;
    background-color: #0095ea;
    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent);
  }
  ::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    /*border-radius: 10px;*/
    background: #EDEDED;
  }
</style>
