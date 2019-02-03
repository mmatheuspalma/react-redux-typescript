const restaurantRoutes = (prefix: string = 'restaurants') => {
   return {
      list: `${prefix}`,
      detail: `${prefix}/{id}`,
      menu: `${prefix}/{id}/menu`,
   };
};

export default {
   restaurant: restaurantRoutes(),
};