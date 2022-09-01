/**
 * 
 * 
 * 
  App is written on React-boilerplate which is a react project structure
 
  Everything is already configed
 
  */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';

import LeftSidebar,{initRoutes} from 'components/LeftSidebar'
import {Wrap,MainContent} from './style'

import 'antd/dist/antd.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css'

export default function App() {
  return (
    <Wrap>
      <LeftSidebar></LeftSidebar>
      dev on local
      <MainContent>
        <Switch>
          {
            initRoutes.map((el)=>{
              return (
                <Route exact path={el.route}>{el.component}</Route>
              )
            })
          }
          <Route component={NotFoundPage} />
        </Switch>
      </MainContent>
    </Wrap>
  );
}
