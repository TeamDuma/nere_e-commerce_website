export interface Category {
  id: number;
  uid: string;
  name: string;
  slug: string;
  details: string;
  type: string;
  image: string;
  isActive: boolean;
}

export interface Location {
  id: number;
  latitude: string;
  longitude: string;
  radius: string;
  isActive: boolean;
  name: string;
}

export interface Product {
  id: number;
  uuid: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  plain_image: string;
  in_stock: boolean;
  sale_price: number;
  nere_price: number;
  lowest_online_price: number;
  supplier_price: number;
  hasMinQuantity: boolean;
  min_quantity: number | null;
  sku: string | null;
  price: number;
  quantity: number;
  unit: string;
  isActive: boolean;
  hasVariants: boolean;
  variants: string | null;
  isFeaturedProduct: boolean;
  desired_margin: number;
  categories: Category;
  locations: Location[];
}

export interface ProductsResponse {
  status: string;
  data: {
    products: Product[];
  };
}
