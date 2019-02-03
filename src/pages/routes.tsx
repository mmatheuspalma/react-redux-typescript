import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Restaurant from './Restaurant';

export default class Routes extends Component {
   render() {
      return (
         <BrowserRouter>
            <Switch>
               <Route path='/' component={Restaurant} />
               <Route exact path='/restaurant/:id' component={Restaurant} />
            </Switch>
         </BrowserRouter>
      );
   }
}
