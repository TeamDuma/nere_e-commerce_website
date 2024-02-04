import { Customer } from './customer';
import { Product } from './product';
import { ILocation } from './location';

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
  initiator?: Customer;
  product?: Product;
  members?: Customer[];
  location?: ILocation;
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
