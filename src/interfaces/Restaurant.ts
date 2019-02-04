export interface IRestaurant {
   id: number|string;
   name: string;
   address: string;
   image: string;
}

export interface IRestaurantItem {
   restaurantId: number|string;
   name: string;
   image: string;
   price: number;
   group: string;
}