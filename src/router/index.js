import Vue from 'vue'
import Router from 'vue-router'
//路由懒加载
const Login=()=>import('@/page/Login')
const Home=()=>import('@/page/Home')
const Map=()=>import('@/page/dataVisual/Map')
const ComEcharts=()=>import('@/page/dataVisual/ComEcharts')
const SpeEcharts=()=>import('@/page/dataVisual/SpeEcharts')
const ComTable=()=>import('@/page/tableClassify/ComTable')
const SpeTable=()=>import('@/page/tableClassify/SpeTable')
const MergeTable=()=>import('@/page/tableClassify/MergeTable')
const Drag=()=>import('@/page/tableClassify/Drag')
const TextEditor=()=>import('@/page/richText/TextEditor')
const TextEditorFull=()=>import('@/page/openPage/TextEditorFull')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
        {path:'/map',name:'map',component:Map},
        {path:'/comEcharts',name:'comEcharts',component:ComEcharts},
        {path:'/speEcharts',name:'speEcharts',component:SpeEcharts},
        {path:'/comTable',name:'comTable',component:ComTable},
        {path:'/speTable',name:'speTable',component:SpeTable},
        {path:'/mergeTable',name:'mergeTable',component:MergeTable},
        {path:'/textEditor',name:'textEditor',component:TextEditor},
        {path:'/drag',name:'drag',component:Drag},
      ]
    },
    {
      path:'/login',name:'login',component:Login
    },
    {
      path:'/textEditorFull',name:'textEditorFull',component:TextEditorFull
    }
  ]
})
