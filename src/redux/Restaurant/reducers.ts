import { combineReducers } from 'redux';

const initialState = Array<any>();

const loadRestaurant = (state = initialState, action: any) => {
   switch (action.type) {
      case 'LOAD_RESTAURANT_REQUEST':
         return { ...state, isFetching: true };
      case 'LOAD_RESTAURANT_SUCCESS':
         return { response: action.response, isFetching: false };
      case 'LOAD_RESTAURANT_ERROR':
         return { ...state, isFetching: false };
      default:
         return state;
   }
};

const menuRestaurant = (state = initialState, action: any) => {
   switch (action.type) {
      case 'MENU_RESTAURANT_REQUEST':
         return { ...state, isFetching: true };
      case 'MENU_RESTAURANT_SUCCESS':
         return { response: action.response, isFetching: false };
      case 'MENU_RESTAURANT_ERROR':
         return { ...state, isFetching: false };
      default:
         return state;
   }
};

const listRestaurant = (state = initialState, action: any) => {
   switch (action.type) {
      case 'LIST_RESTAURANT_REQUEST':
         return { ...state, isFetching: true };
      case 'LIST_RESTAURANT_SUCCESS':
         return { response: action.response, isFetching: false };
      case 'LIST_RESTAURANT_ERROR':
         return { ...state, isFetching: false };
      default:
         return state;
   }
};

export default combineReducers({
   restaurant: loadRestaurant,
   menu: menuRestaurant,
   list: listRestaurant,
});
