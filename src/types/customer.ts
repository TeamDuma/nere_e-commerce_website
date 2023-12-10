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

export interface ILoginRequest {
  email: string;
  password: string;
}


export interface ILoginResponse {
  status: string;
  data: {
    Customer: Customer[];
  };
}

export interface IRegisterRequest {
  email: string;
  name: string;
  phone: string
 password: string;
}


export interface IRegisterResponse {
  status: string;
  data: {
    Customer: Customer[];
  };
}
