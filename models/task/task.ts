import { addDoc, deleteDoc, doc, onSnapshot, query, serverTimestamp, setDoc, Timestamp, Unsubscribe, where } from 'firebase/firestore';
import moment from 'moment';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { auth, createCollection, db } from '../../firebase';
import { createAppAsyncThunk } from '../../redux/store';
import TaskActionHelper from '../../redux/task/action';

export interface ITask {
    refId ?: string;
    name : string;
    description : string;
    completed : boolean;
    duration : number;
    uid : string;
    runningOn : Timestamp;
    createdOn : Timestamp;
    updatedOn : Timestamp;
}

export interface ITaskFormValues {
    refId ?: string;
    name : string; 
    description : string;
    completed : boolean;
    days : number;
    hours : number;
    minutes : number;
    seconds : number;
}

export class TaskHelper {

    public static readonly COLLECTION_NAME_TASK = 'tasks';
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
                    
                    thunkApi.dispatch(TaskActionHelper.setIsLoading(true));
                    
                    const tasks : Array<ITask> = [];

                    querySnapshot.forEach((doc) => {
                        tasks.push({ ...doc.data(), refId: doc.id});
                    });

                    thunkApi.dispatch(TaskActionHelper.setList(tasks));

                    thunkApi.dispatch(TaskActionHelper.setIsLoading(false));
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
            toast.error('Error: Could not create the task.');
            return false;
        } 
    }

    public static async delete(refId ?: string) : Promise<boolean> {
        try {
            if (!auth.currentUser) {
                toast.error('Error: You need to be signed in to delete tasks.');
                return false;
            }

            if (!refId) {
                toast.error('Error: Could not find that task.');
                return false;
            }

            const docRef = doc(createCollection<ITask>(this.COLLECTION_NAME_TASK), refId);

            await deleteDoc(docRef);

            toast.success('Successfully deleted the task.');

            return true;
        } catch (ex) {
            toast.error('Error: Could not delete the task.');
            return false;
        } 
    }

    public static async completed(completed : boolean, refId ?: string) : Promise<boolean> {
         try {
            if (!auth.currentUser) {
                toast.error('Error: You need to be signed in to change a task\'s status.');
                return false;
            }

            if (!refId) {
                toast.error('Error: Could not find that task.');
                return false;
            }

            const docRef = doc(createCollection<Partial<ITask>>(this.COLLECTION_NAME_TASK), refId);

            await setDoc(docRef, {
                completed: !completed,
                updatedOn: Timestamp.now(),
            }, { merge: true });

            toast.success('Successfully updated the task status.');

            return true;
        } catch (ex) {
            toast.error('Error: Could not update the task status.');
            return false;
        } 
    }

    public static async update(values : ITaskFormValues) : Promise<boolean> {
         try {
            if (!auth.currentUser) {
                toast.error('Error: You need to be signed in to update a task.');
                return false;
            }

            if (!values.refId) {
                toast.error('Error: Could not find that task.');
                return false;
            }

            const duration = moment.duration({
                days: values.days,
                hours: values.hours,
                minutes: values.minutes, 
                seconds: values.seconds,
            });

            const docRef = doc(createCollection<Partial<ITask>>(this.COLLECTION_NAME_TASK), values.refId);

            await setDoc(docRef, {
                name: values.name,
                description: values.description,
                completed: values.completed,
                duration: duration.asMilliseconds(),
                runningOn: Timestamp.fromMillis(Timestamp.now().toMillis() - duration.asMilliseconds()),
                updatedOn: Timestamp.now(),
            }, { merge: true });

            toast.success('Successfully updated the task.');

            return true;
        } catch (ex) {
            toast.error('Error: Could not update the task.');
            return false;
        } 
    }

      public static async pause(task : ITask) : Promise<boolean> {
         try {
            if (!auth.currentUser) {
                toast.error('Error: You need to be signed in to save a task\'s duration.');
                return false;
            }

            if (!task.refId) {
                toast.error('Error: Could not find that task.');
                return false;
            }

            const docRef = doc(createCollection<Partial<ITask>>(this.COLLECTION_NAME_TASK), task.refId);

            const pausedOn = Timestamp.now();
            const runningOn = task.runningOn;
            const extraDuration = moment.duration({milliseconds: pausedOn.toMillis() - runningOn.toMillis()});
            const newDuration = task.duration + extraDuration.milliseconds();

            await setDoc(docRef, {
                duration: newDuration,
                runningOn: pausedOn,
                updatedOn: Timestamp.now(),
            }, { merge: true });

            toast.success('Successfully saved the task duration.');

            return true;
        } catch (ex) {
            toast.error('Error: Could not save the task durationk.');
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
                refId: task.refId,
                name: task.name,
                description: task.description,
                completed: task.completed,
                days: Math.floor(momnetDuration.days()),
                hours: Math.floor(momnetDuration.hours()),
                minutes: Math.floor(momnetDuration.minutes()),
                seconds: Math.floor(momnetDuration.seconds()),
            };
        }

        return {
            refId: '',
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
            refId: Yup.string().required().optional(),
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