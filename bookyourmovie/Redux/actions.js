import { AuthUser } from './actionTypes';

export const authUser = (data) =>{
    return { 
        type:AuthUser,
        payload:data
    }
}