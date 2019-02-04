import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import FoodCourt from './FoodCourt';
import Restaurant from './FoodCourt/scenes/Restaurant';

import 'assets/styles/style.css';

export default class Routes extends Component {
   render() {
      return (
         <BrowserRouter>
            <Switch>
               <Route exact path='/restaurants/:id' component={Restaurant} />
               <Route path='/' component={FoodCourt} />
            </Switch>
         </BrowserRouter>
      );
   }
}
