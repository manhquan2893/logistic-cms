import React,{useState} from 'react'

import Organizations from 'containers/Organizations'
import Dashboards from 'containers/Dashboards'

import {Wrap,List,ListItem,ListItemIcon,ListItemText} from './style'


export const  initRoutes = [
  {
    name:'organizations',
    label:'Organizations',
    route:'/',
    icon:<i className="fas fa-home"></i>,
    component:<Organizations/>,
    isActive:true
  },
  {
    name:'dashboards',
    label:'Dashboards',
    route:'/dashboards',
    icon:<i className="fas fa-chart-bar"></i>,
    component:<Dashboards/>,
    isActive:false
  },
  {
    name:'tasks',
    label:'Tasks',
    route:'/tasks',
    icon:<i className="fas fa-tasks"></i>,
    component:<Dashboards/>,
    isActive:false
  },
  {
    name:'customers',
    label:'Customers',
    route:'/customers',
    icon:<i className="fas fa-user-friends"></i>,
    component:<Dashboards/>,
    isActive:false
  },
  {
    name:'products',
    label:'Products',
    route:'/products',
    icon:'',
    component:<Dashboards/>,
    isActive:false
  },
  {
    name:'settings',
    label:'Settings',
    route:'/settings',
    icon:<i className="fas fa-cog"></i>,
    component:<Dashboards/>,
    isActive:false
  },
]

function LeftSidebar() {
  const [routes,setRoutes] = useState(initRoutes)
  const onChangeRoute = (routeName) => {
    const updateRoutes = routes.map((el)=>{
      el.isActive = false
      if(el.name === routeName){
        el.isActive =true
      }
      return el
    })
    setRoutes(updateRoutes)
  }
  return (
    <Wrap>
      <List>
        {routes.map((el)=>{
          return (
            <ListItem
              active={el.isActive}
              onClick={()=>onChangeRoute(el.name)}
              to={el.route}>
              <ListItemIcon>{el.icon}</ListItemIcon>
              <ListItemText>{el.label}</ListItemText>
            </ListItem>
          )
        })}
      </List>
    </Wrap>
  )
}

export default LeftSidebar
