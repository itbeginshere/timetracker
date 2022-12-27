import moment from 'moment';
import * as Yup from 'yup';

export interface ITask {
    name : string;
    description : string;
    completed : boolean;
    duration : number;
    createdOn : string;
    updatedOn : string;
}

export interface ITaskFormValues {
    name : string; 
    description : string;
    completed : boolean;
    days : number;
    hours : number;
    minutes : number;
    seconds : number;
}

export class TaskHelper {
    public static getFormValues(task ?: ITask) : ITaskFormValues {
        if (task) {

            const momnetDuration = moment.duration(task.duration);

            return {
                name: task.name,
                description: task.description,
                completed: task.completed,
                days: Math.floor(momnetDuration.asDays()),
                hours: Math.floor(momnetDuration.asHours()),
                minutes: Math.floor(momnetDuration.asMinutes()),
                seconds: Math.floor(momnetDuration.asSeconds()),
            };
        }

        return {
            name: '',
            description: '',
            completed: false,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    }  

    public static getFormValidationSchema() : Yup.SchemaOf<ITaskFormValues> {
        return Yup.object().shape({
            name: Yup.string().required('Required'),
            description: Yup.string().required('Required'),
            completed: Yup.bool().required('Required'),
            days: Yup.number().moreThan(0, 'Cannot be less than 0.').required('Required'),
            hours: Yup.number().moreThan(0, 'Cannot be less than 0.').required('Required'),
            minutes: Yup.number().moreThan(0, 'Cannot be less than 0.').required('Required'),
            seconds: Yup.number().moreThan(0, 'Cannot be less than 0.').required('Required'),
        });
    }
}