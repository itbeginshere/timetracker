import { createReducer } from '@reduxjs/toolkit';
import moment from 'moment';
import { ITask } from '../../models/task/task';
import TaskActionHelper from './action';

interface ITaskState {
    tasks : Array<ITask>;
    isLoading : boolean;
    completed : boolean;
    startDate : moment.Moment | null;
    endDate : moment.Moment | null;
}

const state : ITaskState = {
    tasks: [],
    isLoading: false,
    completed: false, 
    startDate: null,
    endDate: null,
}

const taskReducer = createReducer(state, builder => 
    builder.addCase(TaskActionHelper.setIsLoading, (state, action) => {
        state.isLoading = action.payload;
    }).addCase(TaskActionHelper.setList, (state, action) => {
        state.tasks = action.payload;
    }).addCase(TaskActionHelper.setCompleted, (state, action) => {
        state.completed = action.payload;
    }).addCase(TaskActionHelper.setStartDate, (state, action) => {
        state.startDate = action.payload;
    }).addCase(TaskActionHelper.setEndDate, (state, action) => {
        state.endDate = action.payload;
    })
)

export default taskReducer;