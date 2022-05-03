export interface VatsimUser {
  cid: string;
  personal: VatsimUserPersonal;
  vatsim: VatsimUserDetails;
}

export interface VatsimUserPersonal {
  name_first: string;
  name_last: string;
  name_full: string;
  email: string;
}

export interface VatsimUserDetails {
  rating: {
    id: number;
    long: string;
    short: string;
  };
  pilotrating: {
    id: number;
    long: string;
    short: string;
  };
  division: {
    id: string;
    name: string;
  };
  region: {
    id: string;
    name: string;
  };
  subdivision: {
    id: string;
    name: string;
  };
}
