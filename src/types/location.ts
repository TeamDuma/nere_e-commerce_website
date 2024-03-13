export interface ILocation {
  id: number;
  latitude: string;
  longitude: string;
  radius: string;
  isActive: Boolean;
  name: string;
  agent_name: string;
  agent_phone: string;
  map_url: string;
}

export type GetlocationsResponse = {
  status: string;
  data: ILocation[];
};
