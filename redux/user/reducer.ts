import { createReducer } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';
import UserActionHerlper from './action';

interface IUserState {
    user : User | null;
};

const state : IUserState = {
    user: null,
};

const userReducer = createReducer(state, builder => 
    builder.addCase(UserActionHerlper.setUser, (state, action) => {
        state.user = action.payload;
    })
);

export default userReducer;