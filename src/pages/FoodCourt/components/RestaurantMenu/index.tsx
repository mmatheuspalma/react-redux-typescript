import React, { PureComponent, Fragment } from 'react';

import { FormattedNumber } from 'react-intl';

import { IRestaurantItem } from 'interfaces/Restaurant';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

import Styles from './styles';

interface IProps {
   classes: any;

   menu: Array<IRestaurantItem>;
}

class RestaurantItem extends PureComponent<IProps, {}> {
   public getMenuCategories() {
      return Array.from(new Set(this.props.menu.map((item: IRestaurantItem) => item.group.toLowerCase())));
   }

   public render(): React.ReactNode {
      const {
         classes,

         menu,
      } = this.props;

      return (
         <Fragment>
            {
               this.getMenuCategories().map((category: string) => (
                  <div>
                     <CardContent className={classes.content}>
                        <Typography gutterBottom variant="h5" component="h3" className={classes.title}>
                           {category}
                        </Typography>
                     </CardContent>
                     <Divider variant="middle" />
                     <Grid container spacing={16} className={classes.wrapper}>
                        {
                           menu.filter((item: IRestaurantItem) => item.group.toLocaleLowerCase() === category).map((item: IRestaurantItem, index: number) => (
                              <Grid item key={index} className={classes.item}>
                                 <Card className={classes.card}>
                                    <CardActionArea>
                                       <CardMedia
                                          component="img"
                                          className={classes.media}
                                          image={item.image ? item.image : 'https://placehold.it/300x190/ccc?text=Foto indisponivel'}
                                          title={item.name}
                                       />
                                       <CardContent className={classes.content}>
                                          <Typography gutterBottom variant="h5" component="h4" className={classes.title}>
                                             {item.name}
                                          </Typography>
                                          {
                                             item.price
                                             && (
                                                <Typography component="p">
                                                   <FormattedNumber style='currency' currency='BRL' value={item.price}/>
                                                </Typography>
                                             )
                                          }
                                       </CardContent>
                                    </CardActionArea>
                                 </Card>
                              </Grid>
                           ))
                        }
                     </Grid>
                  </div>
               ))
            }
         </Fragment>
      );
   }
}

export default withStyles(Styles)(RestaurantItem);
