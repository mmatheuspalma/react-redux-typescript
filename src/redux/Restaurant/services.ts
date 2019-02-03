import API from 'helpers/api';
import { get } from 'helpers/agent';

const listRestaurant = (params: any) => get(API.restaurant.list, params);
const loadRestaurantById = (id: any) => get(API.restaurant.detail.replace('{id}', id));
const menuByRestaurantId = (id: any) => get(API.restaurant.menu.replace('{id}', id));

export default {
   listRestaurant,
   loadRestaurantById,
   menuByRestaurantId,
};