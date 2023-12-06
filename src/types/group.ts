import { Customer } from './customer';
import { Product } from './product';

export interface Group {
  id: number;
  uid: string;
  join_code: string;
  isPaid: boolean;
  type: string;
  created_at: string;
  status: string;
  total_quantity: number;
  initiator: Customer;
  product: Product;
  members: Customer[];
  location: Location;
}

export type GetGroupsResponse = {
  status: string;
  data: {
    groups: Group[];
  };
};

export type GetPublicOngoingGroupsResponse = {
  status: string;
  data: {
    groups: Group[];
  };
};

export type GetGroupResponse = {
  status: string;
  data: {
    group: Group;
  };
};
