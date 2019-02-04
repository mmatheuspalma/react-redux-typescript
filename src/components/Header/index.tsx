import React, { PureComponent } from 'react';

import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Styles from './styles';

import * as Logo from 'assets/images/logo.png';

interface IProps {
   classes: any;
}

interface IStates {
}

class Header extends PureComponent<IProps, IStates> {
   public render(): React.ReactNode {
      const {
         classes,
      } = this.props;

      return (
         <AppBar position="static">
            <Toolbar>
               <Link to='/' className={classes.link}>
                  <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                     <img className={classes.logo} src={Logo} />
                     <span className={classes.logoTitle}> Plaza </span>
                  </Typography>
               </Link>
            </Toolbar>
         </AppBar>
      );
   }
}

export default withStyles(Styles)(Header);