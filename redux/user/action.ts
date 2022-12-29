import { createAction } from '@reduxjs/toolkit';
import { IUser } from '../../models/user/user';
import { withPayloadType } from '../store';

export default class UserActionHerlper {
    public static setUser = createAction('USER_SET_AUTH', withPayloadType<IUser | null>());
    public static setIsLoading = createAction('USER_SET_IS_LOADING', withPayloadType<boolean>());
}