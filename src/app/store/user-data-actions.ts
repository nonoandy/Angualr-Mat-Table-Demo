export const LOAD_USER_DATA = 'User.Data.Load';
export const LOAD_USER_DATA_SUCCESS = 'User.Data.Success';

export interface Action {
  type: any;
  payload?: any;
}

export interface UserSchema {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  ip_address: string;
}

export class UserDataLoad implements Action {
  readonly type = LOAD_USER_DATA;
}

export class UserDataLoadSuccess implements Action {
  readonly type = LOAD_USER_DATA_SUCCESS;
  constructor(public payload: UserSchema) {}
}

export type AllActions = UserDataLoad | UserDataLoadSuccess;
