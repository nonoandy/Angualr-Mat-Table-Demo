import * as users from './user-data.reducer';

export interface AppReducers {
  users: any;
}

export const appReducers: AppReducers = {
  users: users.userReducer
};
