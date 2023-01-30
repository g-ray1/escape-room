import { MapCoordinates } from './types/types';

export const enum APPRoutes {
  MainPage = '/',
  QuestPage = '/quest',
  ContactsPage = '/contacts',
  LoginPage = '/login',
  BookingPage = 'booking',
  ReservationsPage = '/reservations',
}

export const enum APIRoutes {
  Login = '/escape-room/login',
  Logout = '/escape-room/logout',
  QuestsList = '/escape-room/quest',
  Quest = '/escape-room/quest/',
  Booking = '/booking'
}

export const enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NOAUTH',
  Unknown = 'UNKNOWN',
}

export const enum NameSpaces {
  Data = 'DATA',
  User = 'USER',
}

export const enum QuestTypes {
  all = 'Все квесты',
  adventures = 'Приключения',
  horror = 'Ужасы',
  mystic = 'Мистика',
  detective = 'Детектив',
  'sci-fi' = 'Sci-fi'
}

export const enum QuestLevels {
  all = 'Любой',
  easy = 'Лёгкий',
  middle = 'Средний',
  hard = 'Сложный',
}

export const DEFAULT_MAP_POSITION: MapCoordinates = [59.9683760758645, 30.317376713491434];
