export interface Customer {
  id: number;
  uid: string;
  email: string;
  name: string;
  password: string;
  phone: string;
  avatar: null | string;
  isActive: boolean;
  numberVerified: boolean;
  createdAt: string;
  updatedAt: string;
}
