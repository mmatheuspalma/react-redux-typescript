import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { addLocaleData, IntlProvider } from 'react-intl';
import pt from 'react-intl/locale-data/pt';
addLocaleData([...pt]);

import { formats } from 'helpers/constants';

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
            <IntlProvider locale={'pt-BR'} formats={formats}>
               <Routes/>
            </IntlProvider>
         </Provider>
      );
   }
}
