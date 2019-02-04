import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { IRestaurant } from 'interfaces/Restaurant';

import { loadRestaurant, menuRestaurant } from 'redux/Restaurant/actions';

import { WithRouter, IRouteProps } from 'decorators/withRouter';

import Layout from 'components/Layout';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Styles from './styles';
import RestaurantMenu from 'pages/FoodCourt/components/RestaurantMenu';

interface IProps extends IRouteProps {
   menu: any;
   list: any;
   restaurant: any;

   loadRestaurant: Function;
   menuRestaurant: Function;

   classes: any;
}

@WithRouter()
class Restaurant extends PureComponent<IProps, {}> {
   public searchRestaurantInList(id: any) {
      return (this.props.list.response)
         ? this.props.list.response.filter((restaurant: IRestaurant) => restaurant.id == id)[0]
         : false;
   }

   public componentDidMount() {
      const id = this.props.match.params.id;

      !this.searchRestaurantInList(id) && this.props.loadRestaurant(id);
      this.props.menuRestaurant(id);
   }

   public render(): React.ReactNode {
      const id = this.props.match.params.id;

      const restaurantLoading = !this.searchRestaurantInList(id)
         ? this.props.restaurant.isFetching
         : false;

      const restaurant = !this.searchRestaurantInList(id)
         ? this.props.restaurant.response
         : this.searchRestaurantInList(id);

      const {
         classes,
      } = this.props;

      return (
         <Layout>
            {
               (!restaurantLoading && restaurant)
                  ? (
                     <Card className={classes.card}>
                        <CardMedia
                           component="img"
                           className={classes.media}
                           image={restaurant.image}
                           title={restaurant.name}
                        />
                        <CardContent className={classes.content}>
                           <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                              {restaurant.name}
                           </Typography>
                        </CardContent>
                        {
                           (!this.props.menu.isFetching && this.props.menu.response)
                              ?  <RestaurantMenu menu={this.props.menu.response}/>
                              : 'Loading'
                        }
                     </Card>
                  ) : 'Loading'
            }
         </Layout>
      );
   }
}

const mapStateToProps = (state: any) => {
   return {
      menu: state.food.Restaurant.menu,
      list: state.food.Restaurant.list,
      restaurant: state.food.Restaurant.restaurant,
   };
};

const mapDispatchToProps = (dispatch: any) => {
   return bindActionCreators({
      loadRestaurant,
      menuRestaurant,
   }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(Styles)(Restaurant));