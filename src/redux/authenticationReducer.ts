import {authenticationType} from './types';

export const INITIAL_STATE = {
    isAuthenticated: false,
    userId: 'asdf',
    token: '',
    account: '',
    permissions: []
};

const AuthenticationReducer = (state = INITIAL_STATE, action:any) => {
    switch (action.type) {
        case authenticationType.IS_AUTHENTIACTED:
            return {
                ...state,
                isAuthenticated: action.payload
            }
        default:
            return state;
    }
}

export default AuthenticationReducer;