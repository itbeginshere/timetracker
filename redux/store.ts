import { combineReducers, configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import taskReducer from './task/reducer';
import userReducer from './user/reducer';

const store = configureStore({
    reducer: combineReducers({
        taskState: taskReducer,
        userState: userReducer,
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export function withPayloadType<T>() {
    return (t: T) => ({ payload : t});
}
export const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: RootState, 
    dispatch: AppDispatch,
}>();

export default store;