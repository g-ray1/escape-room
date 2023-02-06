export type AuthData = {
  email: string;
  password: string;
};

export type UserData = {
  email: string;
  token: string;
};

export type Quest = {
  id: number;
  title: string;
  description: string;
  previewImg: string;
  previewImgWebp: string;
  coverImg: string;
  coverImgWebp: string;
  level: string;
  type: string;
  peopleMinMax: number[];
}

export type QuestsList = Quest[];

export type Locations = [{
  id: number;
  address: string;
  coords: [number, number];
}];

export type BookingData = {
  id: number;
  locations: Locations;
  slots: {
    today: [{
      time: string;
      isAvailable: boolean;
    }];
    tomorrow: [{
      time: string;
      isAvailable: boolean;
    }];
  };
};

export type MapCoordinates = [number, number];

export type Coords = MapCoordinates[];

export type BookingRequest = {
  'date': 'today' | 'tomorrow';
  'time': string;
  'contactPerson': string;
  'phone': string;
  'withChildren': boolean;
  'peopleCount': number;
  'locationId': number;
  'questId': number;
};
