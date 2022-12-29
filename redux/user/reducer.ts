import { createReducer } from '@reduxjs/toolkit';
import { IUser } from '../../models/user/user';
import UserActionHerlper from './action';

interface IUserState {
    user : IUser | null;
    isLoading : boolean;
};

const state : IUserState = {
    user: null,
    isLoading: false,
};

const userReducer = createReducer(state, builder => 
    builder.addCase(UserActionHerlper.setUser, (state, action) => {
        state.user = {
            displayName: action.payload?.displayName ?? '',
            email: action.payload?.email ?? '',
            uid: action.payload?.uid ?? '',
        };
    }).addCase(UserActionHerlper.setIsLoading, (state, action) => {
        state.isLoading = action.payload;
    })
);

export default userReducer;