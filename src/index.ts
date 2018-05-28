
import Row from '../packages/row'
import TitleBar from '../packages/titleBar'
import SearchBar from '../packages/searchBar'
import TabBar from '../packages/tabBar'
import './fonts/iconfont.css'

const components=[
  Row,
  TitleBar,
  SearchBar,
  TabBar
]

const install=function(Vue:any,opts={}){
  components.map(component=>{
    Vue.component(component.name,component)
  })
}

export default{
  install
}