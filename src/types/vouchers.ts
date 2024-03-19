export interface Voucher {
  id: number;
  uuid: string;
  code: string;
  discount_type: string;
  discount_value: string;
  discount_limit: number;
  expiration_date: Date;
  max_usage: number;
  current_usage: number;
  is_user_specific: boolean;
  is_used: boolean;
  has_min_order_amount: boolean;
  min_order_amount: number;
  created_at: Date;
  updated_at: Date;
}

export interface UserVoucher {
  id: number;
  uuid: string;
  is_used: boolean;
  voucher: Voucher;
}

export type GetUserVouchersResponse = {
  status: string;
  data: {
    userVouchers: UserVoucher[];
  };
};
