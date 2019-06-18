import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '../page/Welcome'
import IviewNav from '../page/IviewNav'
import IviewModal from '../page/IviewModal'
import IviewUpload from '../components/uploadImage'
import iViewFile from '../components/uploadImgFile'
import Tree from '../page/tree'


import Yar from '../page/Yar'

import Render from '../view/iview/RenderDom'
import Echarts from '../view/echarts/echart'

Vue.use(Router);

export default new Router({
  //mode: 'history',
  mode:'hash',    //打包需要修改
  routes: [
    {
      path: '/',
      name: 'welcome',
      component:Welcome
    },
    {
      path: '/modal',
      name: 'iviewmodal',
      component:IviewModal
    },
    {
      path: '/upload',
      name: 'iviewupload',
      component:IviewUpload
    },
    {
      path: '/file',
      name: 'iviewfile',
      component:iViewFile
    },
    {
      path: '/modalDialog',
      name: 'ModalDialog',
      component: () => import('../view/UploadImageView')
    },
    {
      path: '/yar',
      name: 'yar',
      component:Yar
    },
    {
      path: '/render',
      name: 'iviewrender',
      component:Render
    },
    {
      path: '/echarts',
      name: 'iviewecharts',
      component:Echarts
    },
    {
      path: '/tree',
      name: 'tree',
      component:Tree
    },
    {
      path: '/pluralityEchart',
      name: 'PluralityEchart',
      component: () => import('../view/pluralityEchart')
    },
    {
      path: '/lineEchart',
      name: 'LineEchart',
      component: () => import('../view/lineEchart')
    },
  ]
})
