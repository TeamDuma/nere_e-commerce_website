const endpoints = {
  // Cart
  updateCart: '/cart/update',
  checkoutCart: '/cart/checkout',
  getOrderConfirmation: (reference: string) =>  `/cart/basket/${reference}`,

  // Products
  getActiveProducts: '/products/active',
  getProduct: (id: number) => `/products/${id}`,
  getCategoryProduct: (slug: string) => `/products/category/${slug}`,
  getSearchProducts: (searchQuery: string) =>
    `/products/all?search=${encodeURIComponent(searchQuery)}`,

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
