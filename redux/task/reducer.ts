import { createReducer } from '@reduxjs/toolkit';
import { ITask } from '../../models/task/task';
import TaskActionHelper from './action';

interface ITaskState {
    tasks : Array<ITask>;
    isLoading : boolean;
}

const state : ITaskState = {
    tasks: [],
    isLoading: false,
}

const taskReducer = createReducer(state, builder => 
    builder.addCase(TaskActionHelper.setIsLoading, (state, action) => {
        state.isLoading = action.payload;
    }).addCase(TaskActionHelper.setList, (state, action) => {
        state.tasks = action.payload;
    })
)

export default taskReducer;