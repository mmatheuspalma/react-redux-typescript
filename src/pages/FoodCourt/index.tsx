import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';

import { listRestaurant } from 'redux/Restaurant/actions';

import Layout from 'components/Layout';
import RestaurantItem from './components/RestaurantItem';

import { withStyles } from '@material-ui/core/styles';

import Styles from './styles';

interface IProps {
   list: any;
   listRestaurant: Function;

   classes: any;
}

class FoodCourt extends PureComponent<IProps, {}> {
   public componentDidMount() {
      this.props.listRestaurant();
   }

   public render(): React.ReactNode {
      const {
         classes,
      } = this.props;

      return (
         <Layout>
            <Grid container spacing={16} className={classes.wrapper}>
               {
                  (!this.props.list.isLoading && this.props.list.response)
                     ? this.props.list.response.map((restaurant: any) => (
                        <RestaurantItem restaurant={restaurant}/>
                     )) : 'Loading'
               }
            </Grid>
         </Layout>
      );
   }
}

const mapStateToProps = (state: any) => {
   return {
      list: state.food.Restaurant.list,
   };
};

const mapDispatchToProps = (dispatch: any) => {
   return bindActionCreators({
      listRestaurant,
   }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(Styles)(FoodCourt));