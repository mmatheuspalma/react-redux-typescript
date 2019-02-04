import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import { IRestaurant } from 'interfaces/Restaurant';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Styles from './styles';

interface IProps {
   classes: any;
   restaurant: IRestaurant;
}

class RestaurantItem extends PureComponent<IProps, {}> {
   public render(): React.ReactNode {
      const {
         classes,
         restaurant,
      } = this.props;

      return (
         <Grid item>
            <Card className={classes.card}>
               <CardActionArea>
                  <Link to={`/restaurants/${restaurant.id}/`} className={classes.link}>
                     <CardMedia
                        component="img"
                        className={classes.media}
                        image={restaurant.image}
                        title={restaurant.name}
                     />
                     <CardContent className={classes.content}>
                        <Typography variant="h5" component="h2" className={classes.title}>
                           {restaurant.name}
                        </Typography>
                     </CardContent>
                  </Link>
               </CardActionArea>
            </Card>
         </Grid>
      );
   }
}

export default withStyles(Styles)(RestaurantItem);
