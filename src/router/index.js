import Vue from 'vue'
import Router from 'vue-router'
//路由懒加载
const Home=()=>import('@/page/Home')
const Map=()=>import('@/page/Map')
const ComEcharts=()=>import('@/page/ComEcharts')
const SpeEcharts=()=>import('@/page/SpeEcharts')
const ComTable=()=>import('@/page/ComTable')
const SpeTable=()=>import('@/page/SpeTable')
const MergeTable=()=>import('@/page/MergeTable')
const TextEditor=()=>import('@/page/TextEditor')

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
      ]
    }
  ]
})
