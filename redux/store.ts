import { combineReducers, configureStore } from '@reduxjs/toolkit';
import taskReducer from './task/reducer';

const store = configureStore({
    reducer: combineReducers({
        taskState: taskReducer,
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export function withPayloadType<T>() {
    return (t: T) => ({ payload : t});
}

export default store;