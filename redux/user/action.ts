import { createAction } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';
import { withPayloadType } from '../store';

export default class UserActionHerlper {
    public static setUser = createAction('USER_SET_AUTH', withPayloadType<User | null>());
}