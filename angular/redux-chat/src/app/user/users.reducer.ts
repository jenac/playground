import { User } from './user.model';

export interface UsersState {
  currentUser: User
};

const initialState: UsersState = {
  currentUser: null
};