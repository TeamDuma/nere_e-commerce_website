import { Customer } from './customer';
import { Product } from './product';

export enum GroupType {
  PRIVATE = 'Private',
  PUBLIC = 'Public',
}

export enum GroupStatus {
  OPEN = 'Open',
  CLOSED = 'Closed',
}

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
export type GetlocationsResponse = {
  find(arg0: (location: { id: number }) => boolean): unknown;
  status: string;
  data: {
    location: {
      id: number;
    };
  };
};
