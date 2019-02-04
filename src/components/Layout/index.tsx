import React, { PureComponent } from 'react';

import { MuiThemeProvider, createMuiTheme, createStyles, withStyles } from '@material-ui/core/styles';

import Header from '../Header';

const theme = createMuiTheme({
   palette: {
     primary: {
      main: '#3f9da3',
     },
     secondary: {
      main: '#4d366c',
     },
   },
 });

const Styles = createStyles({
   layout: {
   },
   layoutWrapper: {
   },
});

interface IProps {
   classes: any;
}

class Layout extends PureComponent<IProps, {}> {
   public render(): React.ReactNode {
      const {
         classes,
         children,
      } = this.props;

      return (
         <div className={classes.layout}>
            <MuiThemeProvider theme={theme}>
               <Header/>
               <div className={classes.layoutWrapper}>
                  {children}
               </div>
            </MuiThemeProvider>
         </div>
      );
   }
}

export default withStyles(Styles)(Layout);