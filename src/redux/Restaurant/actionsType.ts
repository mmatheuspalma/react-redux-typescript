const loadRestaurantRequest = () => {
   return { type: 'LOAD_RESTAURANT_REQUEST' };
};

const loadRestaurantError = () => {
   return { type: 'LOAD_RESTAURANT_ERROR' };
};

const loadRestaurantSuccess = (response: any) => {
    return { type: 'LOAD_RESTAURANT_SUCCESS', response };
};

const menuRestaurantRequest = () => {
   return { type: 'MENU_RESTAURANT_REQUEST' };
};

const menuRestaurantError = () => {
   return { type: 'MENU_RESTAURANT_ERROR' };
};

const menuRestaurantSuccess = (response: any) => {
    return { type: 'MENU_RESTAURANT_SUCCESS', response };
};

const listRestaurantRequest = () => {
   return { type: 'LIST_RESTAURANT_REQUEST' };
};

const listRestaurantError = () => {
   return { type: 'LIST_RESTAURANT_ERROR' };
};

const listRestaurantSuccess = (response: any) => {
   return { type: 'LIST_RESTAURANT_SUCCESS', response };
};

export default {
   load: {
      request: loadRestaurantRequest,
      success: loadRestaurantSuccess,
      error: loadRestaurantError,
   },
   menu: {
      request: menuRestaurantRequest,
      success: menuRestaurantSuccess,
      error: menuRestaurantError,
   },
   list: {
      request: listRestaurantRequest,
      success: listRestaurantSuccess,
      error: listRestaurantError,
   },
};