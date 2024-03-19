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
  phoneVerify: 'customers/phone/verify',
  phoneVerifyToken: 'customers/phone/verify/token',
  forgotPassword: 'customers/forgot-password',
  getPasswordToken: (token: string) => `/customers/reset-password/${token}`,
  resetPassword: '/customers/reset-password',
  getOrders: (uid: string) => `/orders/customer/${uid}`,

  // Location
  activeLocations: 'locations/active',

  // Vouchers
  getUsersVouchers: (id: string) => `vouchers/user_voucher/customer/${id}`
};

export default endpoints;
