import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Routes from 'pages/routes';

interface IProps {
   store: any;
}

export default class App extends Component<IProps, {}> {
   render(): React.ReactNode {
      const {
         store,
      } = this.props;

      return (
         <Provider store={store}>
            <Routes/>
         </Provider>
      );
   }
}
