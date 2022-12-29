import { addDoc, onSnapshot, query, Timestamp, Unsubscribe, where } from 'firebase/firestore';
import moment from 'moment';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { auth, createCollection, db } from '../../firebase';
import { createAppAsyncThunk } from '../../redux/store';
import TaskActionHelper from '../../redux/task/action';

export interface ITask {
    name : string;
    description : string;
    completed : boolean;
    duration : number;
    uid : string;
    runningOn : string;
    createdOn : Timestamp;
    updatedOn : Timestamp;
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

    private static readonly COLLECTION_NAME_TASK = 'tasks';
    private static unsubscribe : Unsubscribe | null = null;

    public static getListThunk = createAppAsyncThunk(
        'tasks/getList', 
        async (_, thunkApi) => {
         
            try {

                const currentUser = thunkApi.getState().userState.user;

                if (!currentUser) {
                    return false;
                }
                
                const uid = currentUser.uid;

                const q = query(createCollection<ITask>(this.COLLECTION_NAME_TASK), where('uid', '==', uid));

                this.unsubscribe = onSnapshot(q, (querySnapshot) => {
                    const tasks : Array<ITask> = [];

                    querySnapshot.forEach((doc) => {
                        tasks.push(doc.data());
                    });

                    thunkApi.dispatch(TaskActionHelper.setList(tasks));
                })

            } catch (ex) {
                toast.error('Error: Could retrieve the list of tasks.');
                return false;
            }
            
            return true;
    });

    public static async create(values : ITaskFormValues) : Promise<boolean> {

        try {
            if (!auth.currentUser) {
                toast.error('Error: You need to be signed in to create tasks.');
                return false;
            }

            const duration = moment.duration({
                days: values.days,
                hours: values.hours,
                minutes: values.minutes, 
                seconds: values.seconds,
            });

            await addDoc(createCollection<ITask>(this.COLLECTION_NAME_TASK), {
                name: values.name,
                description: values.description,
                completed: values.completed,
                duration: duration.asMilliseconds(),
                uid: auth.currentUser.uid,
                runningOn: Timestamp.fromMillis(Timestamp.now().toMillis() - duration.asMilliseconds()),
                createdOn: Timestamp.now(),
                updatedOn: Timestamp.now(),
            });

            toast.success('Successfully created the task.');
            return true;
        } catch (ex) {
            toast.error('Error: Coult not create the task.');
            return false;
        } 
    }

    public static severConnection() {
        
        if (this.unsubscribe) {
            this.unsubscribe();
        }
        
    }

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
            days: Yup.number()
                .min(0, 'Cannot be less than 0.')
                .required('Required'),
            hours: Yup.number()
                .min(0, 'Cannot be less than 0.')
                .max(23, 'Cannot be more than 23.')
                .required('Required'),
            minutes: Yup.number()
                .min(0, 'Cannot be less than 0.')
                .max(59, 'Cannot be more than 59.')
                .required('Required'),
            seconds: Yup.number()
                .min(0, 'Cannot be less than 0.')
                .max(59, 'Cannot be more than 59.')
                .required('Required'),
        });
    }
}