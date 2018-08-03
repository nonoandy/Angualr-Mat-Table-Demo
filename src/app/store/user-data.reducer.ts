import {
  Action,
  LOAD_USER_DATA_SUCCESS,
  AllActions,
  LOAD_USER_DATA,
  UserSchema
} from './user-data-actions';

export interface State {
  userData: Array<UserSchema>;
}

const initialState: State = {
  userData: []
};

export function userReducer(state: State = initialState, action: AllActions) {
  switch (action.type) {

    case LOAD_USER_DATA: {
      // console.log('Loading User data...');
      break;
    }

    case LOAD_USER_DATA_SUCCESS: {
      // console.log('User data saved to store');
      return { ...state, userData: action.payload };
    }

    default: {
      return state;
    }

  } // switch
}
