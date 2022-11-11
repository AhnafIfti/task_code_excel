import {authenticationType} from './types';

export const setIsAuthenticated = (authentication:any) => ({
    type: authenticationType.IS_AUTHENTIACTED,
    payload: authentication
})