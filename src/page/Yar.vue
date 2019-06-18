<template>
  <div>
    <Card v-for="(item,index) in list"  style="width: 300px;float: left; margin-right: 15px; margin-bottom: 15px; text-align: center">
      <p slot="title">{{item.year}}</p>
      <img :src="item.url" @click="viewBig(index)" style="width: 180px;" />
    </Card>
    <Modal
      v-model="modal"
      :title="modalTitle"
      :styles="{top: '20px'}"
      :mask-closable="false"
      :footer-hide="true"
      width="430"
    >
      <div>
        <div style="overflow: hidden">
          <Card v-for="src in imgList" style="float: left;margin: 0 15px 15px 0;">
            <div style="text-align:center">
              <img :src="src.src" width="150px" height="200px">
              <h3>{{src.time}}</h3>
            </div>
          </Card>
        </div>
      </div>
    </Modal>
  </div>
</template>
<script>
export default {
  data(){
    return {
      modal:false,
      modalTitle:'',
      list:[{
        year:'2018.10',
        url:'./static/yarImage/2018/changcheng/IMG_1716.JPG'
      },{
        year:'2018.10',
        url:'./static/yarImage/2018/changcheng/IMG_1732.JPG'
      },{
        year:'2018.10',
        url:'./static/yarImage/2018/changcheng/IMG_1756.JPG'
      },{
        year:'2018.10',
        url:'./static/yarImage/2018/changcheng/IMG_1787.JPG'
      }],
      allImg:[
        [{src:'./static/yarImage/2018/changcheng/IMG_1717.JPG',time:'2018-10-01'},{src:'./static/yarImage/2018/changcheng/IMG_1718.JPG',time:'2018-10-01'},{src:'./static/yarImage/2018/changcheng/IMG_1721.JPG',time:'2018-10-01'},{src:'./static/yarImage/2018/changcheng/IMG_1722.JPG',time:'2018-10-01'},],
        [{src:'./static/yarImage/2018/changcheng/IMG_1730.JPG',time:'2018-10-02'},{src:'./static/yarImage/2018/changcheng/IMG_1732.JPG',time:'2018-10-02'},{src:'./static/yarImage/2018/changcheng/IMG_1733.JPG',time:'2018-10-02'},{src:'./static/yarImage/2018/changcheng/IMG_1735.JPG',time:'2018-10-02'},],
        [{src:'./static/yarImage/2018/changcheng/IMG_1757.JPG',time:'2018-10-03'},{src:'./static/yarImage/2018/changcheng/IMG_1758.JPG',time:'2018-10-03'},{src:'./static/yarImage/2018/changcheng/IMG_1759.JPG',time:'2018-10-03'},{src:'./static/yarImage/2018/changcheng/IMG_1756.JPG',time:'2018-10-03'},],
        [{src:'./static/yarImage/2018/changcheng/IMG_1788.JPG',time:'2018-10-04'},{src:'./static/yarImage/2018/changcheng/IMG_1789.JPG',time:'2018-10-04'},{src:'./static/yarImage/2018/changcheng/IMG_1791.JPG',time:'2018-10-04'},{src:'./static/yarImage/2018/changcheng/IMG_1792.JPG',time:'2018-10-04'},],
      ],
      imgList:[]
    }
  },
  methods:{
    viewBig(i){
      this.modal = true;
      switch (i) {
        case 0:
          this.modalTitle = '武汉站';
          break;
        case 1:
          this.modalTitle = '长城';
          break;
        case 2:
          this.modalTitle = '全聚德';
          break;
        case 3:
          this.modalTitle = '颐和园';
          break;
      }

      this.imgList = this.allImg[i];
    }
  }
}
</script>
