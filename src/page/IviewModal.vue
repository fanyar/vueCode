<template>
  <div>
    <Button type="primary" @click="changeModal1">Display dialog box</Button>
    <Modal
      v-model="modal"
      title="Common Modal dialog box title"
      class-name="vertical-center-modal"
      :mask-closable="false"
      :footer-hide="true"
      >
      <IviewForm></IviewForm>
    </Modal>
  </div>
</template>

<script>
    import IviewForm from './iviewForm'
    export default {
        name: "iview-modal",
        data(){
          return {
            //modal:false
          }
        },
        components:{IviewForm},
      computed:{
          modal:{
            get: function () {
              return this.$store.state.modal1
            },
            set: function () {
            }
          }
      },
      methods:{
        changeModal1(){
          this.$store.commit('updateModal',{'val':true});
        },
        // ok(){
        //   this.$store.commit('updateModal',{'val':false});
        // },
        // cancel(){
        //   this.$store.commit('updateModal',{'val':false});
        // }
      }
    }
</script>

<style scoped>
  .vertical-center-modal{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .vertical-center-modal .ivu-modal{
    top: 0;
  }
</style>
