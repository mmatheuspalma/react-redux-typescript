import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { listRestaurant } from 'redux/Restaurant/actions';

interface IProps {
   list: any;
   listRestaurant: Function;
}

interface IStates {
}

class Restaurant extends PureComponent<IProps, IStates> {
   public componentDidMount() {
      this.props.listRestaurant();
   }

   public render(): React.ReactNode {
      return (
         <div>
            Restaurantes :
            {
               !this.props.list.isLoading && this.props.list.response
                  ? this.props.list.response.map((restaurant: any) => (
                     <div>
                        <Link to={`/restaurante/${restaurant.id}`}>
                           {restaurant.name}
                        </Link>
                     </div>
                  )) : ''
            }
         </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);