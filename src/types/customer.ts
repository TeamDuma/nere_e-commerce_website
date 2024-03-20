export interface Customer {
  id: number;
  uid: string;
  email: string;
  name: string;
  phone: string;
  avatar: null | string;
  title: CustomerTitle;
  isActive: boolean;
  numberVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export enum CustomerTitle {
  MR = 'Mr',
  MRS = 'Mrs',
  MS = 'Ms',
}

export interface ILoginRequest {
  email: string;
  password: string;
}

// export interface ILoginResponse {
//   message: string;
//   status: string;
//   data: {
//     Customer: Customer[];
//   };
// }

export interface ILoginResponse {
  success: boolean;
  message: string;
  token: string;
  customer: Customer[];
}

export interface IRegisterRequest {
  email: string;
  name: string;
  phone: string;
  password: string;
}

export interface IRegisterResponse {
  success: boolean;
  message: string;
  token: string;
  customer: Customer[];
  statusCode?: number;
  error?: string;
}

export interface IphoneVerifyRequest {
  token: string;
}
export interface IphoneVerifyResponse {
  message: string;
  status: string;
}

export interface IphoneVerifyTokenRequest {
  token?: string | null;
  code: string;
}

export interface IphoneVerifyTokenResponse {
  success: boolean;
  message: string;
  status: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ForgotPasswordResponse {
  status: string;
  message: string;
}

export interface ResetPasswordRequest {
  token: string;
  password: string;
  password_confirmation: string;
}

export interface ResetPasswordResponse {
  status: string;
  message: string;
}

export interface ForgotPasswordTokenResponse {
  status: string;
  message: string;
}

export interface IUpdateCustomerRequest {
  uid: string;
  token: string;
  name: string;
  title: CustomerTitle;
}

export interface IUpdateCustomerResponse {
  success: boolean;
  message: string;
  customer: Customer;
}
