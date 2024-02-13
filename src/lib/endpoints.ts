const endpoints = {
  // Cart
  updateCart: '/cart/update',
  checkoutCart: '/cart/checkout',
  getOrderConfirmation: (reference: string) => `/cart/basket/${reference}`,
  getDiscountAmount: `/vouchers/calculate_discount`,

  // Products
  getActiveProducts: '/products/active',
  getProduct: (slug: string) => `/products/slug/${slug}`,
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
