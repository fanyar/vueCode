<template>
  <Row>
    <Col span="8">
      <Menu :theme="theme2" accordion>
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-paper" />
            page组件
          </template>
          <MenuItem name="1-1" to="modal">弹出框</MenuItem>
          <MenuItem name="1-2" to="upload">上传照片</MenuItem>
          <MenuItem name="1-3" to="file">上传照片file</MenuItem>
          <MenuItem name="1-3" to="modalDialog">上传照片file2</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-people" />
            iview
          </template>
          <MenuItem name="2-1" to="render">render</MenuItem>
          <MenuItem name="2-2" to="echarts">echarts</MenuItem>
          <MenuItem name="2-3" to="tree">tree</MenuItem>
          <MenuItem name="2-4" to="pluralityEchart">环图</MenuItem>
          <!--<MenuItem name="2-5" to="lineEchart">折线图</MenuItem>-->


        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-stats" />
            统计分析
          </template>
          <MenuGroup title="使用">
            <MenuItem name="3-1">新增和启动</MenuItem>
            <MenuItem name="3-2">活跃分析</MenuItem>
            <MenuItem name="3-3">时段分析</MenuItem>
          </MenuGroup>
          <MenuGroup title="留存">
            <MenuItem name="3-4">用户留存</MenuItem>
            <MenuItem name="3-5">流失用户</MenuItem>
          </MenuGroup>
        </Submenu>
      </Menu>
    </Col>
  </Row>
</template>
<script>
  export default {
    name: 'IvieNav',
    data(){
      return {
        theme2:'dark'
      }
    }
  }
</script>
