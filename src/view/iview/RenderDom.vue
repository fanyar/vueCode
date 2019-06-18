<template>
  <div>
    <h3>iview 表格 render应用</h3>
    <div style="margin: 20px 0;">
      <Table stripe :columns="columns1" :data="tableList"></Table>
    </div>
    <h4 style="margin-bottom: 20px;"></h4>
    <div style="background:#eee;padding: 20px">
      <Card :bordered="false">
        <p slot="title">表头字段写render函数</p>
        <pre>
          columns1:[
          {
            title: 'Name',
            //ellipsis: true,
            key: 'name',
            render: (h, params) => {
              let texts = '';//表格列显示文字
              if (params.row.name) {
                if (params.row.name.length > 5) {//进行截取列显示字数
                  texts = params.row.name.substring(0, 5) + "...";
                } else {
                  texts = (params.row.name?params.row.name:'')+params.row.name;
                }
              }
              return h('div', [
                h('Tooltip', {
                  props: {
                    placement: 'top',
                    transfer: true
                  }
                }, [//这个中括号表示是Tooltip标签的子标签
                  texts,//表格列显示文字
                  h('div', {
                    style:{whiteSpace: 'normal'},
                    slot: 'content',
                  }, params.row.name)
                ])
              ])
            }
          },
          {
            title: '查看',
            key: 'view',
            align: 'center',
            render: (h, params) => {
                return h("div", {
                    attrs:{
                        class:'iconfont iconchakan'
                    },
                    style: {
                        color: '#41a9d4',
                        fontSize:'16px',
                        cursor: 'pointer'
                    },
                    on: {
                    click: () => {
                        console.log(params.index)
                    }
                }
                })
            }
          ];
        </pre>
      </Card>
    </div>
  </div>
</template>
<script>
  export default {
    name:'RenderDom',
    data(){
      return {
        columns1:[
          {
            title: 'Name',
            //ellipsis: true,
            key: 'name',
            render: (h, params) => {
              console.log(params);
              let texts = '';//表格列显示文字
              if (params.row.name) {
                if (params.row.name.length > 5) {//进行截取列显示字数
                  texts = params.row.name.substring(0, 5) + "...";
                } else {
                  texts = params.row.name;
                }
              }
              return h('div', [
                h('Tooltip', {
                  props: {
                    placement: 'top',
                    transfer: true
                  }
                }, [//这个中括号表示是Tooltip标签的子标签
                  texts,//表格列显示文字
                  h('div', {
                    style:{
                      whiteSpace: 'normal'
                    },
                    slot: 'content',
                  }, params.row.name)
                ])
              ])
            }
          },
          {
            title: 'Age',
            key: 'age'
          },
          {
            title: 'Address',
            key: 'address'
          }
        ],
        tableList:[
          {
            name: 'John BrownJohn BrownJohn BrownJohn Brown22',
            age: 18,
            ellipsis: true,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
          },
          {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          }
        ]
      }
    }
  }
</script>
