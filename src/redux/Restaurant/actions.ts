import Services from './services';
import actionTypes from './actionsType';

export const listRestaurant = (params?: any) => {
   return async (dispatch: any) => {
      dispatch(actionTypes.list.request());

      return Services.listRestaurant(params).then((response: any) => {
         (response && response.status === 200)
            ? dispatch(actionTypes.list.success(response.data))
            : dispatch(actionTypes.list.error());
      }).catch((error: any) => {
         throw error;
      });
   };
};

export const loadRestaurant = (id: number) => {
   return async (dispatch: any) => {
      dispatch(actionTypes.load.request());

      return Services.loadRestaurantById(id).then((response: any) => {
         (response && response.status === 200)
            ? dispatch(actionTypes.load.success(response.data))
            : dispatch(actionTypes.load.error());
      }).catch((error: any) => {
         throw error;
      });
   };
};

export const menuRestaurant = (id: number) => {
   return async (dispatch: any) => {
      dispatch(actionTypes.menu.request());

      return Services.menuByRestaurantId(id).then((response: any) => {
         (response && response.status === 200)
            ? dispatch(actionTypes.menu.success(response.data))
            : dispatch(actionTypes.menu.error());
      }).catch((error: any) => {
         throw error;
      });
   };
};