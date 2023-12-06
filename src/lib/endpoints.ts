const endpoints = {
  // Cart
  updateCart: '/cart/update',
  checkoutCart: '/cart/checkout',

  // Products
  getActiveProducts: '/products/active',
  getProduct: (id: number) => `/products/${id}`,

  // Category
  getCategories: '/categories',

  // Groups
  getGroups: '/groups',
  getGroup: (id: string) => `/groups/${id}`,
  getPublicOngoingGroups: '/groups?type=Public&status=Open',
};

export default endpoints;
