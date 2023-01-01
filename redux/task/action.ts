import { createAction } from '@reduxjs/toolkit';
import moment from 'moment';
import { ITask } from '../../models/task/task';
import { withPayloadType } from '../store';

export default class TaskActionHelper {
    public static readonly setList = createAction('TASK_SET_LIST', withPayloadType<Array<ITask>>());
    public static readonly setIsLoading = createAction('TASK_SET_IS_LOADING', withPayloadType<boolean>());
    public static readonly setCompleted = createAction('TASK_SET_COMPLETED', withPayloadType<boolean>());
    public static readonly setStartDate = createAction('TASK_SET_START_DATE', withPayloadType<moment.Moment | null>());
    public static readonly setEndDate = createAction('TASK_SET_END_DATE', withPayloadType<moment.Moment | null>());
}