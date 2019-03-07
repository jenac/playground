import { ErrorActionTypes } from '@app/store/actions/errors.action';
import { Action } from '@app/store/actions/errors.action';

export interface ErrorState {
  error: any;
}

const initialState: ErrorState = {
  error: null
}

export const errorReducer: (state: ErrorState, action: Account) => ErrorState = (
  state = initialState, action: Action ) => {
    switch(action.type){
      case ErrorActionTypes.ADD_ERROR:
        return { ...state, error: action.payload };
      case ErrorActionTypes.REMOVE_ERROR:
        return { ...state, error: null };
      default:
        return state;
    }
  }