<template>
  <div class="head">
    <slot name="header">
      DEMO VUE
    </slot>
  </div>
</template>

<style scoped>
  .head{
    height: 50px;
    line-height: 50px;
    padding-left: 25px;
    background: #0095ea;
    font-size: 24px;
    color: #fff;
    text-align: center;
  }
</style>
