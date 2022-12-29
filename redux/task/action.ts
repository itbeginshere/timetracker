import { createAction } from '@reduxjs/toolkit';
import { ITask } from '../../models/task/task';
import { withPayloadType } from '../store';

export default class TaskActionHelper {
    public static readonly setList = createAction('TASK_SET_LIST', withPayloadType<Array<ITask>>());
    public static readonly setIsLoading = createAction('TASK_SET_IS_LOADING', withPayloadType<boolean>());;
}