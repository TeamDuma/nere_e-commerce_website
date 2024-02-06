import { Category } from './category';
import { ILocation } from './location';
import { GroupType } from './group';

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
  categories?: Category;
  locations?: ILocation[];
}

export interface GetProductsResponse {
  status: string;
  data: {
    products: Product[];
  };
}

// GET /products/active
export type GetActiveProductsResponse = {
  status: string;
  data: {
    products: Product[];
  };
};

// GET /products/{id}
export type GetProductResponse = {
  status: string;
  data: {
    product: Product;
  };
};

export type getCategoryProductResponse = {
  status: string;
  data: {
    products: Product[];
  };
};

export type getSearchProductsResponse = {
  total: number;
  current_page: number;
  count: number;
  last_page: number;
  firstItem: number;
  lastItem: number;
  per_page: number;
  first_page_url: string;
  last_page_url: string;
  next_page_url: number | null;
  prev_page_url: number | null;
  data: Product[];
};
