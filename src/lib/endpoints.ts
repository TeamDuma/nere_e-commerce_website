const endpoints = {
  // Cart
  updateCart: '/cart/update',
  checkoutCart: '/cart/checkout',

  // Products
  getActiveProducts: '/products/active',
  getProduct: (id: number) => `/products/${id}`,
  getCategoryProduct: (slug: string) => `/products/category/${slug}`,

  // Category
  getCategories: '/categories',

  // Groups
  getGroups: '/groups',
  getGroup: (id: string) => `/groups/${id}`,
  getPublicOngoingGroups: '/groups?type=Public&status=Open',

  // Customers
  signup: 'customers/signUp',
  signIn: 'customers/signIn',

  // Location
  activeLocations: 'locations/active',
};

export default endpoints;
