export interface Customer {
  id: number;
  uid: string;
  email: string;
  name: string;
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
  message: string;
  status: string;
  data: {
    Customer: Customer[];
  };
}

export interface IRegisterRequest {
  email: string;
  name: string;
  phone: string;
  password: string;
}

export interface IRegisterResponse {
  status: string;
  data: {
    Customer: Customer[];
  };
  token: string;
}

export interface IphoneVerifyRequest {
  token: string;
}
export interface IphoneVerifyResponse {
  message: string;
  status: string;
  data: [];
}

export interface IphoneVerifyTokenRequest {
  token: string;
  code: string;
}

export interface IphoneVerifyTokenResponse {
  message: string;
  status: string;
  data: [];
}
