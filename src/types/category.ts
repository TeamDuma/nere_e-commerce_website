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

export type GetCategoriesResponse = {
  status: string;
  data: {
    categories: Category[];
  };
};
